import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  publishedDate: z.union([z.string(), z.date()]),
  updatedDate: z.union([z.string(), z.date()]).optional(),
  tags: z.array(z.string()),
});

// Base definition used by both keys
const baseCollection = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema,
});

// Provide both keys for compatibility
const posts = baseCollection;

export const collections = { posts };

export type PostMetaInfoType = z.infer<typeof schema>;