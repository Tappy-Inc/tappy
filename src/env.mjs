import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0",
  isServer: typeof window === "undefined",
  server: {
    TEST: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]),
  },
  client: {
    NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "production"]),
  },
  runtimeEnv: {
    TEST: process.env.TEST,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  },
});
