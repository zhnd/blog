import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Base definition used by both keys
const baseCollection = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.union([z.string(), z.date()]),
    updatedDate: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()),
  }),
});

// Provide both keys for compatibility
const posts = baseCollection;

export const collections = { posts };
