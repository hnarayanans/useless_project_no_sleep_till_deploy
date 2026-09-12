import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function ponjikkaraImagePlugin() {
  let isBuild = false;
  const files = fs.readdirSync(__dirname);
  const ponjiFile = files.find(f => f.toLowerCase().includes('ponj') && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png') || f.endsWith('.webp')));
  const ponjiPath = ponjiFile ? path.resolve(__dirname, ponjiFile) : null;

  return {
    name: 'ponjikkara-image-plugin',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    resolveId(id) {
      if (id === 'virtual:ponjikkara-image') {
        return '\0virtual:ponjikkara-image';
      }
    },
    load(id) {
      if (id === '\0virtual:ponjikkara-image' && ponjiPath) {
        if (isBuild) {
          const refId = this.emitFile({
            type: 'asset',
            name: 'ponjikkara.jpg',
            source: fs.readFileSync(ponjiPath)
          });
          return `export default import.meta.ROLLUP_FILE_URL_${refId};`;
        } else {
          const data = fs.readFileSync(ponjiPath);
          const base64 = data.toString('base64');
          return `export default "data:image/jpeg;base64,${base64}";`;
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [ponjikkaraImagePlugin()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
