import type {Plugin, UserConfig} from 'vite'

declare const createConfig: (payload?: {
  root?: string
  packageJson?: Record<string, unknown>
  external?: string[]
  entry?: Record<string, string>
  alias?: Record<string, string>
  target?: 'modules' | string
  plugins?: Plugin[]
  rollupOutputPlugins?: import('rollup').OutputPluginOption[]
}) => UserConfig

export const targets: string
