import withSolid from 'rollup-preset-solid'
import {fileURLToPath} from 'node:url'
import alias from '@rollup/plugin-alias'

const defaultRoot = process.cwd()

export default withSolid([
  {
    input: 'src/index.tsx',
    plugins: [
      alias({
        entries: [
          {
            find: /^src\/(.*)$/u,
            replacement: `${defaultRoot}/src/$1`,
          },
        ],
      }),
    ],
    targets: ['esm', 'cjs'],
  },
])
