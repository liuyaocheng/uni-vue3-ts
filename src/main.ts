import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'uno.css'

const pinia = createPinia()
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
