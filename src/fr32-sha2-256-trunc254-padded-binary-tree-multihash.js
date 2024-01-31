import fs from 'fs'

export const plugin = () => {
  return {
    name: 'fr32-sha2-256-trunc254-padded-binary-tree-multihash-alias-plugin',
    setup (build) {
      build.onResolve({ filter: /fr32-sha2-256-trunc254-padded-binary-tree-multihash\/async/ }, (args) => {
        // Replace the import with the aliased path and mark it as external
        return { path: args.path.replace(/async$/, 'async-wasm-import'), external: true }
      })

      build.onLoad({ filter: /esm-alias/ }, async (args) => {
        // Manually resolve the aliased module path
        const resolvedPath = await build.resolve(args.path, args.importer)
        // Load the content of the aliased module
        const contents = await fs.promises.readFile(resolvedPath, 'utf-8')
        // Return the content as a string
        return { contents, loader: 'js' }
      })
    }
  }
}
