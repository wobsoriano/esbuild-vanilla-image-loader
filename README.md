# esbuild-vanilla-image-loader

Meant to be used with [vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract) and its Vite plugin. See [this](https://github.com/vanilla-extract-css/vanilla-extract/issues/665).

## Install

```bash
pnpm add esbuild-vanilla-image-loader -D
```

```ts
import react from '@vitejs/plugin-react'
import { ImageLoader } from 'esbuild-vanilla-image-loader'

export default defineConfig({
  plugins: [
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [ImageLoader()],
      }
    }),
    react()
  ],
})
```

## Usage

```ts
// src/style/App.css.ts

import { style } from '@vanilla-extract/css'
import Pic from './pic.png'

export const root = style({
  backgroundImage: `url(${Pic})`,
  height: 200,
  width: 200
})
```

## License

MIT
