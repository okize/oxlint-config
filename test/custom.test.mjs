import { execFileSync } from 'node:child_process';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const oxlint = resolve(root, 'node_modules/.bin/oxlint');

// Run oxlint over a fixtures dir with the given config and return the set of
// file paths (relative to the fixtures dir) that raised match-exported.
const offenders = (configPath, fixturesDir) => {
  let stdout;
  try {
    stdout = execFileSync(oxlint, ['-c', configPath, '--format', 'json', fixturesDir], {
      cwd: root,
      encoding: 'utf8',
    });
  } catch (error) {
    // oxlint exits non-zero when it finds lint errors; the JSON is on stdout.
    stdout = error.stdout;
  }
  const { diagnostics } = JSON.parse(stdout);
  return new Set(
    diagnostics
      .filter((d) => d.code === 'custom(match-exported)')
      .map((d) => relative(fixturesDir, resolve(root, d.filename))),
  );
};

describe('custom/match-exported (default: exact match)', () => {
  const fixturesDir = resolve(__dirname, 'fixtures/filenames');
  const configPath = resolve(__dirname, 'fixtures/custom.config.mjs');
  const result = offenders(configPath, fixturesDir);

  it('flags a default-exported function whose name differs from the filename', () => {
    expect(result.has('gadget.mjs')).toBe(true);
  });

  it('flags a default-exported class whose name differs from the filename', () => {
    expect(result.has('Other.mjs')).toBe(true);
  });

  it('flags module.exports whose name differs from the filename', () => {
    expect(result.has('legacy-mismatch.cjs')).toBe(true);
  });

  it('flags an index file whose export differs from the parent directory', () => {
    expect(result.has('broken/index.mjs')).toBe(true);
  });

  it('allows a default-exported function matching the filename', () => {
    expect(result.has('widget.mjs')).toBe(false);
  });

  it('allows a default-exported class matching the filename', () => {
    expect(result.has('Thing.mjs')).toBe(false);
  });

  it('allows module.exports matching the filename', () => {
    expect(result.has('oldstyle.cjs')).toBe(false);
  });

  it('allows an index file matching the parent directory', () => {
    expect(result.has('nested/index.mjs')).toBe(false);
  });

  it('ignores an anonymous object default export', () => {
    expect(result.has('config-object.mjs')).toBe(false);
  });

  it('flags a lone named export whose name differs from the filename', () => {
    expect(result.has('named-only.mjs')).toBe(true);
  });

  it('allows an "index" file that default-exports the name "index" (everythingIsIndex)', () => {
    expect(result.has('index.mjs')).toBe(false);
  });

  it('flags an UPPER_CASE default export whose name differs from the filename', () => {
    expect(result.has('upper-default.mjs')).toBe(true);
  });

  it('flags a default export in a multi-dot filename whose name differs from it', () => {
    expect(result.has('widget.config.mjs')).toBe(true);
  });

  it('flags exactly the expected files and nothing else', () => {
    expect([...result].sort()).toEqual(
      [
        'Other.mjs',
        'broken/index.mjs',
        'gadget.mjs',
        'legacy-mismatch.cjs',
        'named-only.mjs',
        'upper-default.mjs',
        'widget.config.mjs',
      ].sort(),
    );
  });
});

describe('custom/match-exported (kebab transform)', () => {
  const fixturesDir = resolve(__dirname, 'fixtures/filenames-kebab');
  const configPath = resolve(__dirname, 'fixtures/custom-kebab.config.mjs');
  const result = offenders(configPath, fixturesDir);

  it('allows a camelCase export whose kebab-case matches the filename', () => {
    expect(result.has('my-widget.mjs')).toBe(false);
  });

  it('flags an export whose kebab-case does not match the filename', () => {
    expect(result.has('other-name.mjs')).toBe(true);
  });

  it('handles digit boundaries like lodash (H2Heading → h-2-heading)', () => {
    expect(result.has('h-2-heading.mjs')).toBe(false);
  });

  it('allows a lone named export whose kebab-case matches the filename', () => {
    expect(result.has('format-date.mjs')).toBe(false);
  });

  it('flags a lone named export whose kebab-case does not match the filename', () => {
    expect(result.has('stray-named.mjs')).toBe(true);
  });
});

describe('custom/match-exported (options object: matchCallExpression + replacePattern)', () => {
  const fixturesDir = resolve(__dirname, 'fixtures/options');
  const configPath = resolve(__dirname, 'fixtures/custom-options.config.mjs');
  const result = offenders(configPath, fixturesDir);

  it('matches a call-expression default export against its callee name', () => {
    expect(result.has('connect.mjs')).toBe(false);
  });

  it('flags a call-expression default export whose callee differs from the filename', () => {
    expect(result.has('wrong-name.mjs')).toBe(true);
  });

  it('strips the replacePattern from the filename before matching', () => {
    expect(result.has('button.styles.mjs')).toBe(false);
  });

  it('checks a lone named export once the replacePattern removes the dot', () => {
    expect(result.has('card.styles.mjs')).toBe(true);
  });
});

describe('custom/match-exported (single named export, default on)', () => {
  const fixturesDir = resolve(__dirname, 'fixtures/single-export');
  const configPath = resolve(__dirname, 'fixtures/custom.config.mjs');
  const result = offenders(configPath, fixturesDir);

  it('flags a single named const export whose name differs from the filename', () => {
    expect(result.has('stray-const.mjs')).toBe(true);
  });

  it('flags a single named function export whose name differs from the filename', () => {
    expect(result.has('stray-fn.mjs')).toBe(true);
  });

  it('flags a single named class export whose name differs from the filename', () => {
    expect(result.has('stray-class.mjs')).toBe(true);
  });

  it('flags a single local export-list binding whose name differs from the filename', () => {
    expect(result.has('local-list.mjs')).toBe(true);
  });

  it('flags a single named export in an index file against its parent directory', () => {
    expect(result.has('svc/index.mjs')).toBe(true);
  });

  it('allows a single named export matching the filename', () => {
    expect(result.has('solo.mjs')).toBe(false);
  });

  it('allows a renamed (as) export matching the filename', () => {
    expect(result.has('aliased.mjs')).toBe(false);
  });

  it('allows a single named export in an index file matching its parent directory', () => {
    expect(result.has('helper2/index.mjs')).toBe(false);
  });

  it('ignores a file with multiple named exports', () => {
    expect(result.has('multi.mjs')).toBe(false);
  });

  it('ignores a single declaration that exports multiple bindings', () => {
    expect(result.has('multi-decl.mjs')).toBe(false);
  });

  it('ignores a file whose only export is a named re-export', () => {
    expect(result.has('reexport.mjs')).toBe(false);
  });

  it('ignores a file whose only export is a star re-export', () => {
    expect(result.has('star.mjs')).toBe(false);
  });

  it('ignores a single named export when an anonymous default export is also present', () => {
    expect(result.has('has-default.mjs')).toBe(false);
  });

  it('treats `export { x as default }` as a default export, not a named export', () => {
    expect(result.has('as-default.mjs')).toBe(false);
  });

  it('ignores a destructured export alongside an identifier export (two value exports)', () => {
    expect(result.has('destructured.mjs')).toBe(false);
  });

  it('ignores a string-literal specifier alongside an identifier export (two value exports)', () => {
    expect(result.has('strlit.mjs')).toBe(false);
  });

  it('ignores a declaration exporting multiple bindings via `let`', () => {
    expect(result.has('multi-let.mjs')).toBe(false);
  });

  it('flags a single renamed (as) export whose name differs from the filename', () => {
    expect(result.has('renamed-mismatch.mjs')).toBe(true);
  });

  it('flags a single generator-function export whose name differs from the filename', () => {
    expect(result.has('stray-gen.mjs')).toBe(true);
  });

  it('ignores a single UPPER_CASE export (a constants file)', () => {
    expect(result.has('constants.mjs')).toBe(false);
  });

  it('flags a single one-letter capital export whose name differs from the filename', () => {
    expect(result.has('single-letter.mjs')).toBe(true);
  });

  it('ignores a single named export in a multi-dot filename', () => {
    expect(result.has('leaf.factory.mjs')).toBe(false);
  });

  it('ignores a single named export in an index file whose directory name has a dot', () => {
    expect(result.has('dotted.dir/index.mjs')).toBe(false);
  });

  it('ignores a two-letter UPPER_CASE export', () => {
    expect(result.has('two-upper.mjs')).toBe(false);
  });

  it('ignores an UPPER_CASE export with leading underscores', () => {
    expect(result.has('dunder.mjs')).toBe(false);
  });

  it('treats an imported name exported again (`import { x }; export { x }`) as a re-export', () => {
    expect(result.has('imported-reexport.mjs')).toBe(false);
  });

  it('flags exactly the expected files and nothing else', () => {
    expect([...result].sort()).toEqual(
      [
        'local-list.mjs',
        'renamed-mismatch.mjs',
        'single-letter.mjs',
        'stray-class.mjs',
        'stray-const.mjs',
        'stray-fn.mjs',
        'stray-gen.mjs',
        'svc/index.mjs',
      ].sort(),
    );
  });
});

describe('custom/match-exported (single named export, TypeScript type exclusion)', () => {
  const fixturesDir = resolve(__dirname, 'fixtures/single-export-ts');
  const configPath = resolve(__dirname, 'fixtures/custom.config.mjs');
  const result = offenders(configPath, fixturesDir);

  it('flags a single value export, ignoring co-located type exports', () => {
    expect(result.has('value-with-type.ts')).toBe(true);
  });

  it('flags a single value export, ignoring inline `type` specifiers', () => {
    expect(result.has('inline-type-spec.ts')).toBe(true);
  });

  it('flags a single enum export (enums are values) whose name differs from the filename', () => {
    expect(result.has('stray-enum.ts')).toBe(true);
  });

  it('ignores a file that exports only types and interfaces', () => {
    expect(result.has('types-only.ts')).toBe(false);
  });

  it('ignores co-located type exports when a single value export matches the filename', () => {
    expect(result.has('thing.ts')).toBe(false);
  });

  it('ignores a type-only export declaration (`export type { ... }`)', () => {
    expect(result.has('type-reexport.ts')).toBe(false);
  });

  it('ignores a local type exported with a plain specifier (`type X; export { X }`)', () => {
    expect(result.has('local-type-spec.ts')).toBe(false);
  });

  it('flags a single value export alongside a local type exported with a plain specifier', () => {
    expect(result.has('local-type-with-value.ts')).toBe(true);
  });

  it('flags a single value export alongside a type imported with `import type`', () => {
    expect(result.has('import-type-with-value.ts')).toBe(true);
  });

  it('flags a single value export alongside a type imported with an inline `type`', () => {
    expect(result.has('inline-import-type.ts')).toBe(true);
  });

  it('counts a name declared as both a value and a type as a value export', () => {
    expect(result.has('type-and-value.ts')).toBe(true);
  });

  it('counts a destructured value that shares its name with a type as a value export', () => {
    expect(result.has('destructured-type-and-value.ts')).toBe(true);
  });

  it('ignores two value exports when one is destructured and shares its name with a type', () => {
    expect(result.has('destructured-with-value.ts')).toBe(false);
  });

  it('counts a value from a nested array rest with a hole (`{ a: [, ...X] }`) as a value export', () => {
    expect(result.has('destructured-nested-rest.ts')).toBe(true);
  });

  it('counts a renamed destructured value with a default (`{ b: X = 1 }`) as a value export', () => {
    expect(result.has('destructured-default.ts')).toBe(true);
  });

  it('counts a value from an object rest (`{ ...X }`) as a value export', () => {
    expect(result.has('destructured-object-rest.ts')).toBe(true);
  });

  it('does not treat `export type { X as default }` as a default export', () => {
    expect(result.has('type-default-spec.ts')).toBe(true);
  });

  it('does not treat `export { type X as default }` as a default export', () => {
    expect(result.has('inline-type-default.ts')).toBe(true);
  });

  it('does not treat a local type exported `as default` as a default export', () => {
    expect(result.has('local-type-default.ts')).toBe(true);
  });

  it('flags exactly the expected files and nothing else', () => {
    expect([...result].sort()).toEqual(
      [
        'destructured-default.ts',
        'destructured-nested-rest.ts',
        'destructured-object-rest.ts',
        'destructured-type-and-value.ts',
        'import-type-with-value.ts',
        'inline-import-type.ts',
        'inline-type-default.ts',
        'inline-type-spec.ts',
        'local-type-default.ts',
        'local-type-with-value.ts',
        'stray-enum.ts',
        'type-and-value.ts',
        'type-default-spec.ts',
        'value-with-type.ts',
      ].sort(),
    );
  });
});

describe('custom/match-exported (single named export disabled via option)', () => {
  const configPath = resolve(__dirname, 'fixtures/custom-no-single.config.mjs');
  const singleResult = offenders(configPath, resolve(__dirname, 'fixtures/single-export'));
  const filenamesResult = offenders(configPath, resolve(__dirname, 'fixtures/filenames'));

  it('flags none of the single-named-export files when disabled', () => {
    expect([...singleResult]).toEqual([]);
  });

  it('still flags default-export mismatches when single-export is disabled', () => {
    expect(filenamesResult.has('gadget.mjs')).toBe(true);
  });

  it('does not flag a lone named export when single-export is disabled', () => {
    expect(filenamesResult.has('named-only.mjs')).toBe(false);
  });
});
