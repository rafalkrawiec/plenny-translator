import { defineConfig } from 'vite';
import { externalizer } from '@plenny/vite-externalizer';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    externalizer(),
    dts({ rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: {
        translator: 'src/translator.ts',
      },
      formats: ['es', 'cjs'],
    },
    minify: 'terser',
  },
});
