declare module "@env" {
  export const BASE_URL: string;
  export const OPENAPI_URL: string;
  export const GOOGLE_CLIENT_ID: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      OPENAPI_URL: string;
      GOOGLE_CLIENT_ID: string;
    }
  }
}
