import { fileURLToPath } from 'node:url';

// Resolves a jsPlugin package to an absolute path from within this package.
// oxlint resolves bare specifiers (e.g. 'eslint-plugin-storybook') from the
// consumer's config location, not from this package — so when a consumer's
// dependency tree nests this package's dependencies (e.g. its typescript
// version differs from the consumer's root), bare specifiers fail to resolve.
// An absolute path loads the copy this package depends on, both in this repo
// and from a consumer's node_modules.
export const resolvePlugin = (specifier) => fileURLToPath(import.meta.resolve(specifier));
