import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { unocssToUniProcess } from 'vite-plugin-unocss-to-uni'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  postprocess: (t) => {
    t.selector = unocssToUniProcess(t.selector)
    return t
  },
  rules: [
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}rpx` })],
    [/^w-(\d+)$/, ([, d]) => ({ width: `${d}rpx` })],
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}rpx` })],
    [/^px-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}rpx`, 'padding-right': `${d}rpx` })],
    [/^py-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}rpx`, 'padding-bottom': `${d}rpx` })],
  ],
})
