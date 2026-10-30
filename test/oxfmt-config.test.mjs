import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// v1.7.1 shipped an oxfmtConfig.mjs that imported a never-committed file,
// crashing every consumer with ERR_MODULE_NOT_FOUND. This repo's own oxfmt
// doesn't exercise the module's import graph, so importing it here is the
// only pre-release check that its exports actually load.
describe('oxfmtConfig module', () => {
  it('provides the named config object and a default export', async () => {
    const mod = await import(resolve(root, 'oxfmtConfig.mjs'));
    expect(mod.oxfmtConfig).toBeTypeOf('object');
    expect(mod.oxfmtConfig.printWidth).toBeTypeOf('number');
    expect(mod.default).toBeDefined();
  });
});
