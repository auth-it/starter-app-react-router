/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHIT_ISSUER_URI: string;
  readonly VITE_AUTHIT_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
