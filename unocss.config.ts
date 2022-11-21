import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

// UniApp
const isH5 = process.env.UNI_PLATFORM === 'h5'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetRemToRpx({ enable: false }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
    transformerApplet(),
  ],
  rules: [
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}rpx` })],
    [/^w-(\d+)$/, ([, d]) => ({ width: `${d}rpx` })],
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}rpx` })],
    [/^px-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}rpx`, 'padding-right': `${d}rpx` })],
    [/^py-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}rpx`, 'padding-bottom': `${d}rpx` })],
    [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}rpx` })],
  ],
})
