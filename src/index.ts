import type { Plugin } from 'esbuild'

interface Options {
  filter?: RegExp
}

export function ImageLoader(options?: Options): Plugin {
  return {
    name: 'esbuild-vanilla-image-loader',
    setup(build) {
      build.onLoad({
        filter: options?.filter ?? /\.(gif|jpe?g|tiff?|png|webp|bmp)$/,
      }, (args) => {
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
