import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9527,
  },
  envDir: resolve(__dirname, 'env'),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    uni(),
    Unocss({
      configFile: 'unocss.config.ts',
    }),
    AutoImport({
      imports: ['vue', 'pinia', '@vueuse/core', 'vue-i18n', 'uni-app'],
      dts: './src/types/auto-import.d.ts',
      dirs: [resolve(__dirname, 'src/stores'), resolve(__dirname, 'src/composables')],
    }),
    Components({
      dts: './src/types/components-import.d.ts',
      resolvers: [],
    }),
    Inspect(),
  ],
  build: {
    rollupOptions: {
      // external: ['@vueuse/core'],
    },
  },
})
