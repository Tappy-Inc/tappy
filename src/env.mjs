import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0",
  isServer: typeof window === "undefined",
  server: {
    VERCEL_ENV: z.enum(["development", "preview", "production"]),
    POSTGRES_DATABASE: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_PRISMA_URL: z.string().min(1),
    POSTGRES_URL: z.string().min(1),
    POSTGRES_URL_NON_POOLING: z.string().min(1),
    POSTGRES_USER: z.string().min(1),
    PGDATABASE: z.string().min(1),
    PGHOST: z.string().min(1),
    PGUSER: z.string().min(1),
    PGPASSWORD: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    KAFKA_BROKER: z.string().min(1),
    KAFKA_PASSWORD: z.string().min(1),
    KAFKA_USERNAME: z.string().min(1),
    UPSTASH_KAFKA_REST_PASSWORD: z.string().min(1),
    UPSTASH_KAFKA_REST_URL: z.string().url(),
    UPSTASH_KAFKA_REST_USERNAME: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "production"]),
  },
  runtimeEnv: {
    TEST: process.env.TEST,
    VERCEL_ENV: process.env.VERCEL_ENV,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    PGDATABASE: process.env.PGDATABASE,
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    KAFKA_BROKER: process.env.KAFKA_BROKER,
    KAFKA_PASSWORD: process.env.KAFKA_PASSWORD,
    KAFKA_USERNAME: process.env.KAFKA_USERNAME,
    UPSTASH_KAFKA_REST_PASSWORD: process.env.UPSTASH_KAFKA_REST_PASSWORD,
    UPSTASH_KAFKA_REST_URL: process.env.UPSTASH_KAFKA_REST_URL,
    UPSTASH_KAFKA_REST_USERNAME: process.env.UPSTASH_KAFKA_REST_USERNAME,
  },
});
