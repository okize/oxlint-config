import { configDefaults, defineConfig } from 'vitest/config';

// Two projects so the `test` and `validate` scripts (and their CI workflows)
// each run their own slice. `vitest run` with no `--project` runs both.
// oxlint-disable-next-line import-x/no-default-export
export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'test',
          include: ['test/**/*.test.mjs'],
          exclude: [...configDefaults.exclude, 'test/validate-configs.test.mjs'],
        },
      },
      {
        test: {
          name: 'validate',
          include: ['test/validate-configs.test.mjs'],
        },
      },
    ],
  },
});
