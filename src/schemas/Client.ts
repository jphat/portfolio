// 1. Import utilities from `astro:content`
import { z } from "astro:content";

// 2. Define the schema
export const clientSchema = ({ image }) => z.object({
  name: z.string(),

  logo: image(),

  info: z.string().optional(),

  content: z.string().optional(),

  weight: z.number().optional(),

  draft: z.boolean(),
});