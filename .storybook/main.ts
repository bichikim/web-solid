import { defineMain } from 'storybook-solidjs-vite';
import {monorepoAlias} from '@winter-love/vite-plugin-monorepo-alias'
import {fileURLToPath} from 'url';
import {mergeConfig} from 'vite';

export default defineMain({
    framework: {
        name: 'storybook-solidjs-vite',
        options: {
            // docgen: {
                // Enabled by default, but you can configure or disable it:
                //  see https://github.com/styleguidist/react-docgen-typescript#options
            // },
        },
    },
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-vitest',
    ],
    stories: [
        '../stories/**/*.mdx',
        '../apps/*/src/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../apps/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: [
                monorepoAlias({
                    root: fileURLToPath(new URL('../', import.meta.url)),
                    workspacePaths: [/\/apps\//u, /\/packages\//u],

                }),
            ],
        });
    },
});
