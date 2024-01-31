# esbuild-plugin-w3up-client-wasm-import

> Alias w3up wasm dependencies to be imported

Some environments (for instance Cloudflare Workers) require wasm bytecode to be imported. All other paths to load wasmm are disallowed by embedder. This plugin makes `w3up-client` dependencies using wasm to rely on imports by default.

## Install

```sh
npm install esbuild-plugin-w3up-client-wasm-import
```

## Usage

```js
import { build } from 'esbuild'
import esbuildPluginW3up from 'esbuild-plugin-w3up-client-wasm-import'

await build({
  entryPoints: [path.join(__dirname, 'index.js')],
  bundle: true,
  format: 'esm',
  outfile: path.join(__dirname, 'dist', 'worker.js'),
  plugins: [
    esbuildPluginW3up()
  ]
}
```