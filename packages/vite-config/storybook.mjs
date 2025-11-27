/// <reference types="vitest/config" />
import path from 'path'
import {defineConfig} from 'vite'
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin'
import {playwright} from '@vitest/browser-playwright'

const defaultRoot = process.cwd()

export const createConfig = (rootDir = defaultRoot) => {
  return defineConfig({
    define: {
      'process.env': {},
    },
    plugins: [
      //
    ],
    resolve: {
      alias: {
        '#.storybook': path.join(rootDir, '.storybook'),
      },
    },
    test: {
      projects: [
        {
          extends: true,
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({
              configDir: path.join(rootDir, '.storybook'),
            }),
          ],
          test: {
            browser: {
              enabled: true,
              headless: true,
              instances: [
                {
                  browser: 'chromium',
                },
              ],
              provider: playwright(),
            },
            name: 'storybook',
          },
        },
      ],
    },
  })
}
