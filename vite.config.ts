import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, 'env'),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    uni(),
    Unocss(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: resolve(__dirname, 'src/locales/**'),
    }),
    AutoImport({
      imports: ['vue', 'pinia', '@vueuse/core', 'vue-i18n'],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      dts: 'src/types/components-import.d.ts',
      resolvers: [

      ],
    }),
  ],
})
