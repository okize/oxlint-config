// `custom` — this package's custom oxlint jsPlugin, holding rules with no native
// oxlint or loadable-ESLint-plugin equivalent.
//
// `custom/match-exported` began as a port of `match-exported` from the
// abandoned eslint-plugin-filenames (https://github.com/selaux/eslint-plugin-filenames),
// rewritten in oxlint's modern `{ meta, create }` plugin format. The original
// ships its rules as plain functions, which oxlint's jsPlugin runner cannot
// load — see the ESLint-parity section of the README. It extends the upstream
// rule with single-named-export matching (below), which upstream lacks.
//
// The rule ensures a file's name matches the name of its default export
// (`export default ...`) or `module.exports = ...`. When there is no default
// export, a file with exactly one named *value* export must match that export's
// name instead (on by default; disable with `{ matchSingleNamedExport: false }`).
// That check skips an UPPER_CASE export (a constant) and a compared name that
// contains a dot (`leafNode.factory.ts`). Files with no matchable export, or an
// anonymous/object default export, are ignored. `index.*` files are matched
// against their parent directory name.
import path from 'node:path';

// --- case transforms (lodash-equivalent for identifier-shaped input) ----------
const splitWords = (name) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase boundary
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // ACRONYMCase boundary
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2') // letter→digit boundary (lodash treats digit runs as words)
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2') // digit→letter boundary
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);

const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const transforms = {
  kebab: (name) =>
    splitWords(name)
      .map((w) => w.toLowerCase())
      .join('-'),
  snake: (name) =>
    splitWords(name)
      .map((w) => w.toLowerCase())
      .join('_'),
  camel: (name) =>
    splitWords(name)
      .map((w, i) => (i === 0 ? w.toLowerCase() : upperFirst(w.toLowerCase())))
      .join(''),
  pascal: (name) =>
    splitWords(name)
      .map((w) => upperFirst(w.toLowerCase()))
      .join(''),
};

// --- helpers ported from the original plugin ----------------------------------
const ignoredFilenames = ['<text>', '<input>'];
const isIgnoredFilename = (filename) => ignoredFilenames.includes(filename);

const parseFilename = (filename) => {
  const ext = path.extname(filename);
  return {
    dir: path.dirname(filename),
    base: path.basename(filename),
    ext,
    name: path.basename(filename, ext),
  };
};

const isIndexFile = (parsed) => parsed.name === 'index';

// An UPPER_CASE name (`DEFAULT_MODAL_WIDTH`, `GET`, `__DEV__`) marks a
// constant, not the file's subject, and files are not named in UPPER_CASE. Two
// or more characters after any leading underscores: a single capital (`X`) is
// still matched.
const isUpperCaseName = (name) => /^_*[A-Z][A-Z0-9_]+$/.test(name);

const getStringToCheckAgainstExport = (parsed, replacePattern) => {
  const dirArray = parsed.dir.split(path.sep);
  const lastDirectory = dirArray[dirArray.length - 1];

  if (isIndexFile(parsed)) {
    return lastDirectory;
  }
  return replacePattern ? parsed.name.replace(replacePattern, '') : parsed.name;
};

const getNodeName = (node, matchCallExpression) => {
  if (node.type === 'Identifier') {
    return node.name;
  }
  if (node.id && node.id.type === 'Identifier') {
    return node.id.name;
  }
  if (matchCallExpression && node.type === 'CallExpression' && node.callee.type === 'Identifier') {
    return node.callee.name;
  }
  return undefined;
};

// module.exports = ... detection, shared between name extraction and the
// default-export guard for the single-named-export path.
const isModuleExports = (node) =>
  node.type === 'ExpressionStatement' &&
  node.expression.type === 'AssignmentExpression' &&
  node.expression.left.type === 'MemberExpression' &&
  node.expression.left.object.type === 'Identifier' &&
  node.expression.left.object.name === 'module' &&
  node.expression.left.property.type === 'Identifier' &&
  node.expression.left.property.name === 'exports';

const getExportedName = (programNode, matchCallExpression) => {
  for (const node of programNode.body) {
    // export default ...
    if (node.type === 'ExportDefaultDeclaration') {
      return getNodeName(node.declaration, matchCallExpression);
    }

    // module.exports = ...
    if (isModuleExports(node)) {
      return getNodeName(node.expression.right, matchCallExpression);
    }
  }
  return undefined;
};

// Add every name a binding pattern declares: `x`, `{ a, b: c, ...d }`,
// `[e, f = 1]`, nested to any depth. Array holes are null.
const addPatternNames = (pattern, names) => {
  if (!pattern) return;
  if (pattern.type === 'Identifier') {
    names.add(pattern.name);
  } else if (pattern.type === 'ObjectPattern') {
    for (const property of pattern.properties) {
      addPatternNames(property.type === 'RestElement' ? property.argument : property.value, names);
    }
  } else if (pattern.type === 'ArrayPattern') {
    for (const element of pattern.elements) addPatternNames(element, names);
  } else if (pattern.type === 'RestElement') {
    addPatternNames(pattern.argument, names);
  } else if (pattern.type === 'AssignmentPattern') {
    addPatternNames(pattern.left, names);
  }
};

// Classify the module's top-level bindings that a local `export { x }` can
// name. `typeOnly`: declared only as a type (`type X`, `interface X`,
// `import type { X }`, `import { type X }`); a name also declared as a value
// (`const X`, `class X`, `enum X`, a value import) is left out. `imported`:
// value imports, so `import { x } from './x'; export { x }` counts as the
// re-export it is.
const collectLocalBindings = (programNode) => {
  const typeNames = new Set();
  const valueNames = new Set();
  const imported = new Set();

  for (const statement of programNode.body) {
    const decl =
      (statement.type === 'ExportNamedDeclaration' ||
        statement.type === 'ExportDefaultDeclaration') &&
      statement.declaration
        ? statement.declaration
        : statement;

    if (decl.type === 'ImportDeclaration') {
      for (const spec of decl.specifiers) {
        if (decl.importKind === 'type' || spec.importKind === 'type') {
          typeNames.add(spec.local.name);
        } else {
          valueNames.add(spec.local.name);
          imported.add(spec.local.name);
        }
      }
    } else if (decl.type === 'TSTypeAliasDeclaration' || decl.type === 'TSInterfaceDeclaration') {
      typeNames.add(decl.id.name);
    } else if (decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) addPatternNames(declarator.id, valueNames);
    } else if (decl.id && decl.id.type === 'Identifier') {
      // FunctionDeclaration, TSDeclareFunction, ClassDeclaration,
      // TSEnumDeclaration, TSModuleDeclaration, TSImportEqualsDeclaration
      // (`import X = ...`), TSNamespaceExportDeclaration (`export as
      // namespace X`): treated as values.
      valueNames.add(decl.id.name);
    }
  }

  for (const name of valueNames) typeNames.delete(name);
  return { typeOnly: typeNames, imported };
};

// A specifier of a local `export { ... }` that exports only a type:
// `export type { X }`, `export { type X }`, or `export { X }` where X is a
// type-only binding.
const isTypeSpecifier = (node, spec, bindings) =>
  node.exportKind === 'type' ||
  spec.exportKind === 'type' ||
  (spec.local.type === 'Identifier' && bindings.typeOnly.has(spec.local.name));

// `export { x as default }` (no source) is semantically a default export,
// unless x is only a type.
const isDefaultSpecifierExport = (node, bindings) =>
  node.type === 'ExportNamedDeclaration' &&
  !node.source &&
  Array.isArray(node.specifiers) &&
  node.specifiers.some(
    (spec) =>
      spec.exported &&
      spec.exported.type === 'Identifier' &&
      spec.exported.name === 'default' &&
      !isTypeSpecifier(node, spec, bindings),
  );

// True when the module has any default export (even an anonymous one whose name
// can't be extracted, or an `x as default` specifier) or a `module.exports`
// assignment. Such a module has a primary export already, so the
// single-named-export check must not apply.
const hasDefaultExport = (programNode, bindings) =>
  programNode.body.some(
    (node) =>
      node.type === 'ExportDefaultDeclaration' ||
      isModuleExports(node) ||
      isDefaultSpecifierExport(node, bindings),
  );

// Collect the exported *value* names of a module, ignoring TypeScript type-only
// exports (`export type`, `export interface`, `export type { ... }`, inline
// `export { type X }`, `export { X }` of a type-only binding). `hasReexport`
// flags `export ... from`, `export *`, and `export { x }` of an imported value;
// `hasUncountable` flags value exports with no single matchable identifier name
// (destructuring patterns, string-literal specifiers) — in both cases there is
// no lone binding to match against a filename.
const collectNamedValueExports = (programNode, bindings) => {
  const names = [];
  let hasReexport = false;
  let hasUncountable = false;

  for (const node of programNode.body) {
    if (node.type === 'ExportAllDeclaration') {
      hasReexport = true;
      continue;
    }
    if (node.type !== 'ExportNamedDeclaration') continue;
    if (node.source) {
      hasReexport = true;
      continue;
    }
    if (node.exportKind === 'type') continue;

    if (node.declaration) {
      const decl = node.declaration;
      if (decl.type === 'VariableDeclaration') {
        for (const declarator of decl.declarations) {
          if (declarator.id && declarator.id.type === 'Identifier') {
            names.push(declarator.id.name);
          } else {
            // Destructuring pattern binds names we can't reduce to one.
            hasUncountable = true;
          }
        }
      } else if (
        decl.type === 'FunctionDeclaration' ||
        decl.type === 'ClassDeclaration' ||
        decl.type === 'TSEnumDeclaration'
      ) {
        if (decl.id && decl.id.type === 'Identifier') names.push(decl.id.name);
      }
      // TSInterfaceDeclaration / TSTypeAliasDeclaration / TSModuleDeclaration
      // are type-only and intentionally ignored.
    } else if (node.specifiers) {
      for (const specifier of node.specifiers) {
        if (isTypeSpecifier(node, specifier, bindings)) continue;
        if (specifier.local.type === 'Identifier' && bindings.imported.has(specifier.local.name)) {
          hasReexport = true;
          continue;
        }
        if (specifier.exported && specifier.exported.type === 'Identifier') {
          // `export { x as default }` is a default export, handled above.
          if (specifier.exported.name !== 'default') names.push(specifier.exported.name);
        } else {
          // String-literal specifier (`export { x as 'y' }`) — no matchable name.
          hasUncountable = true;
        }
      }
    }
  }

  return { names, hasReexport, hasUncountable };
};

const getTransformsFromOptions = (option) => {
  const usedTransforms = Array.isArray(option) ? option : [option];
  return usedTransforms.map((name) => transforms[name]);
};

const applyTransforms = (exportedName, usedTransforms) =>
  usedTransforms.map((t) => (t ? t(exportedName) : exportedName));

const anyMatch = (expectedExport, transformedNames) =>
  transformedNames.some((name) => name === expectedExport);

const getWhatToMatchMessage = (usedTransforms) => {
  if (usedTransforms.length === 1 && !usedTransforms[0]) {
    return 'the exported name';
  }
  if (usedTransforms.length > 1) {
    return 'any of the exported and transformed names';
  }
  return 'the exported and transformed name';
};

const matchExported = {
  meta: {
    // Single options object. All keys optional; bare `'error'` uses defaults.
    schema: [
      {
        type: 'object',
        properties: {
          transform: {
            oneOf: [
              { enum: ['kebab', 'snake', 'camel', 'pascal', null] },
              {
                type: 'array',
                items: { enum: ['kebab', 'snake', 'camel', 'pascal', null] },
                minItems: 1,
              },
            ],
          },
          replacePattern: { type: ['string', 'null'] },
          matchCallExpression: { type: ['boolean', 'null'] },
          matchSingleNamedExport: { type: ['boolean', 'null'] },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const settings = context.options?.[0] ?? {};
    const usedTransforms = getTransformsFromOptions(settings.transform);
    const replacePattern = settings.replacePattern ? new RegExp(settings.replacePattern) : null;
    // Match a default export declared as a bare function call (`export default
    // connect(App)`), using the callee name. Off by default.
    const matchCallExpression = settings.matchCallExpression === true;
    // Enforce filename matching for a lone named value export unless explicitly
    // disabled via `matchSingleNamedExport: false`. On by default.
    const matchSingleNamedExport = settings.matchSingleNamedExport !== false;
    const filename =
      context.physicalFilename ??
      context.filename ??
      (typeof context.getFilename === 'function' ? context.getFilename() : '');

    return {
      Program(node) {
        if (isIgnoredFilename(filename)) return;

        const parsed = parseFilename(path.resolve(filename));
        const expectedExport = getStringToCheckAgainstExport(parsed, replacePattern);
        let exportedName = getExportedName(node, matchCallExpression);

        // With no default / module.exports, a file that has exactly one named
        // value export must match that export's name (unless disabled).
        // Skipped when the name to match contains a dot (`leafNode.factory.ts`,
        // `types.d.mts`): the part after the first dot names the file's role,
        // and no identifier can contain a dot.
        if (!exportedName && matchSingleNamedExport && !expectedExport.includes('.')) {
          const bindings = collectLocalBindings(node);
          if (!hasDefaultExport(node, bindings)) {
            const { names, hasReexport, hasUncountable } = collectNamedValueExports(node, bindings);
            if (
              !hasReexport &&
              !hasUncountable &&
              names.length === 1 &&
              !isUpperCaseName(names[0])
            ) {
              exportedName = names[0];
            }
          }
        }

        const isExporting = Boolean(exportedName);
        if (!isExporting) return;

        const transformedNames = applyTransforms(exportedName, usedTransforms);
        const everythingIsIndex = exportedName === 'index' && parsed.name === 'index';
        const matchesExported = anyMatch(expectedExport, transformedNames) || everythingIsIndex;

        if (matchesExported) return;

        const exportName = transformedNames.join("', '");
        const message = isIndexFile(parsed)
          ? `The directory '${expectedExport}' must be named '${exportName}', after the exported value of its index file.`
          : `Filename '${expectedExport}' must match ${getWhatToMatchMessage(usedTransforms)} '${exportName}'.`;

        context.report({ node, message });
      },
    };
  },
};

export default {
  meta: { name: 'custom' },
  rules: { 'match-exported': matchExported },
};
