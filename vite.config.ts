/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig, loadEnv } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { peerDependencies } from './package.json'

export default ({ mode }) => {
  if (mode === 'library') {
    const env = loadEnv(mode, process.cwd(), '')
    return defineConfig({
      define: {
        'process.env': env,
      },
      build: {
        lib: {
          entry: './src/index.ts', // Specifies the entry point for building the library.
          name: 'heros-dictionary', // Sets the name of the generated library.
          fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
          formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
        },
        rollupOptions: {
          external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
        },
        sourcemap: true, // Generates source maps for debugging.
        emptyOutDir: true, // Clears the output directory before building.
      },
      plugins: [dts(), svgr(), react()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
      },
    })
  }
  if (mode === 'documentation') {
    const env = loadEnv(mode, process.cwd(), '')
    return defineConfig({
      define: {
        'process.env': env,
      },
      plugins: [dts(), svgr(), react()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
      },
    })
  }

  const env = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    define: {
      'process.env': env,
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [dts(), svgr(), react()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
    },
  })
}
