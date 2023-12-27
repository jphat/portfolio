// 1. Import utilities from `astro:content`
import { reference, z } from "astro:content";

// 2. Define the schema
export const projectSchema = z.object({
  title: z.string(),

  description: z
    .string()
    .max(
      160,
      { message: "keep the description to a max of 160 characters" }
    ),

  author: reference("person").optional(),

  client: reference("person").optional(),

  hero: z.object({
    alt: z.string(),
    caption: z.string().optional(),
    credit: z.string().optional(),
    height: z.number().optional(),
    src: z.string(),
    thumbnail: z.string(),
    type: z.enum(["image", "embed", "3d"]),
    width: z.number().optional(),
  }),

  date: z.date(),

  tags: z.array(z.string()).optional(),

  draft: z.boolean().default(false),

  type: z.enum(["web", "photography", "woodworking", "design"]).optional(),

  gallery: z
    .array(
      z.object({
        alt: z.string(),
        caption: z.string().optional(),
        credit: z.string().optional(),
        src: z.string(),
        thumbnail: z.string(),
        type: z.enum(["image", "embed", "3d"]),
      })
    )
    .optional(),

  related: z.array(reference("project")).optional(),
})