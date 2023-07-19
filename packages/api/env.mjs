import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WEB_GOOGLE_CLIENT_ID: z.string().min(1),
    WEB_GOOGLE_CLIENT_SECRET: z.string().min(1),
    WEB_OAUTH_DEFAULT_REDIRECT_URL: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    WEB_OAUTH_DEFAULT_REDIRECT_URL: process.env.WEB_OAUTH_DEFAULT_REDIRECT_URL,
    WEB_GOOGLE_CLIENT_ID: process.env.WEB_GOOGLE_CLIENT_ID,
    WEB_GOOGLE_CLIENT_SECRET: process.env.WEB_GOOGLE_CLIENT_SECRET,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
