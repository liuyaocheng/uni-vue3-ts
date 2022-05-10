/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY: string
  readonly VITE_ROOT_DIR: string
  readonly VITE_USER_NODE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
