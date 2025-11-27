import {monorepoAlias} from '@winter-love/vite-plugin-monorepo-alias'
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vitest/config'
import solid from 'vite-plugin-solid'
import path from 'node:path'

const defaultRoot = process.cwd()
const libRoot = fileURLToPath(new URL('./', import.meta.url))

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    solid(),
    monorepoAlias({
      alias: {
        'packages/vite-plugin-monorepo-alias': {
          '#test': 'src/test',
        },
      },

      // osPathDelimiter: process.platform === 'win32' ? '\\' : '/',
      root: defaultRoot,
      // sourceRoot: 'src',
      workspacePaths: [/\/coong\//u, /\/packages\//u],
    }),
  ],
  resolve: {
    // for solidjs testing
    conditions: ['development', 'browser'],
  },
  test: {
    environment: 'jsdom',
    include: ['packages/*/src/**/*.spec.?(c|m)[jt]s?(x)', 'apps/*/src/**/*.spec.?(c|m)[jt]s?(x)'],
    setupFiles: [path.join(libRoot, 'vitest.setup.mjs')],
  },
})
