import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
	// server: {
	// 	DATABASE_URL: z.url(),
	// 	OPEN_AI_API_KEY: z.string().min(1),
	// },
	client: {
		NEXT_PUBLIC_SITE_URL: z.url(),
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(1),
	},
	runtimeEnv: {
		// DATABASE_URL: process.env.DATABASE_URL,
		// OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
			process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
	},
});
