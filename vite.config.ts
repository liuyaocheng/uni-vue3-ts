import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Unocss from 'unocss/vite'
import { UnocssToUni } from 'vite-plugin-unocss-to-uni'
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
    UnocssToUni(),
    vueI18n({
      include: resolve(__dirname, 'src/locales/**'),
      defaultSFCLang: 'json',
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
