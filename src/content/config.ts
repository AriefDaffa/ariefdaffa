import { z, defineCollection } from 'astro:content';

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    desc: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogsCollection,
};
