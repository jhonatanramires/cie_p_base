import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { sheetLoader } from "astro-sheet-loader";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const crm = defineCollection({
  loader: sheetLoader({
    document: "1NBs9RXAmMRJvqCXK5E8Yksg_c7rNGUM9",
  })
});


export const collections = { blog, crm };
