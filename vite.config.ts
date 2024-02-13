import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import rollupTla from 'rollup-plugin-tla';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTla from 'vite-plugin-top-level-await';
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json');
  const pkg = readJsonFile('package.json');

  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
    icons:
      process.env.NODE_ENV === 'development'
        ? Object.keys(manifest.icons).reduce((acc, key) => {
            acc[key] = manifest.icons[key].replace('icon/', 'icon/gray/');
            return acc;
          }, {})
        : manifest.icons,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [rollupTla()],
    },
  },
  envPrefix: 'ZPASS_',
  optimizeDeps: {
    exclude: ['@aleohq/wasm'],
  },
  plugins: [
    process.env.NODE_ENV === 'production' ? viteTla() : null,
    react(),
    svgr(),
    webExtension({
      // additionalInputs: ['src/pages/options/options.html'],
      disableAutoLaunch: true,
      manifest: generateManifest,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      // In dev mode, make sure fast refresh works
      '/@react-refresh': path.resolve(
        'node_modules/@vitejs/plugin-react-swc/refresh-runtime.js'
      ),
    },
  },
});
