/// <reference types="vitest/config" />
import path from 'path';
import { defineConfig } from 'vite';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = process.cwd();

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      //
    ],
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '#.storybook': path.join(dirname, '.storybook')
        }
    },
    test: {
        projects: [{
            extends: true,
            plugins: [
                // The plugin will run tests for the stories defined in your Storybook config
                // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                storybookTest({
                    configDir: path.join(dirname, '.storybook')
                }),
            ],
            test: {
                name: 'storybook',
                browser: {
                    enabled: true,
                    headless: true,
                    provider: playwright(),
                    instances: [{
                        browser: 'chromium'
                    }]
                },
            }
        }]
  }
});
