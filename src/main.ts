import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

const i18n = createI18n({
  locale: uni.getLocale(),
  messages,
})
console.log(messages)

const pinia = createPinia()
export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n).use(pinia)
  return {
    app,
  }
}
