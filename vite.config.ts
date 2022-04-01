import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    uni(),
    WindiCSS(),
    AutoImport({
      imports: ['vue', 'pinia'],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      dts: 'src/types/components-import.d.ts',
      resolvers: [

      ],
    }),
  ],
})
