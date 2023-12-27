// 1. Import utilities from `astro:content`
import { z } from "astro:content";

// 2. Define the schema
export const personSchema = ({ image }) => z.object({
  name: z.string(),

  photo: image().optional(),

  bio: z.string().optional(),

  role: z.string().optional(),

  email: z.string().optional(),

  type: z.enum(["staff", "client"]),

  social: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ).optional(),

  weight: z.number().optional(),

  draft: z.boolean(),
});