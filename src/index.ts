import fs from 'fs'
import type { Plugin } from 'esbuild'

interface Options {
  filter?: RegExp
  dataUrl?: false
}

export function ImageLoader(options?: Options): Plugin {
  return {
    name: 'esbuild-vanilla-image-loader',
    setup(build) {
      build.onLoad({
        filter: options?.filter ?? /\.(gif|jpe?g|tiff?|png|webp|bmp)$/,
      }, (args) => {
        if (options?.dataUrl) {
          return {
            content: fs.readFileSync(args.path),
            loader: 'dataurl',
          }
        }

        return {
          contents: `
          const file = '${args.path.replace(build.initialOptions.absWorkingDir!, '')}';
          export default file;`,
          loader: 'js',
        }
      })
    },
  }
}
