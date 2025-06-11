declare const __VERSION__: string

interface ImportMetaEnv {
  readonly VITE_ENV: 'prod' | 'stg' | 'dev'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
