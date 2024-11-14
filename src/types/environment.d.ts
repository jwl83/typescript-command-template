declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXAMPLE_VAR: string;
    }
  }
}

export {};
