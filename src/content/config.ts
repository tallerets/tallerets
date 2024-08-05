import { z, defineCollection } from 'astro:content'

const monoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
})

export const collections = {
  mono: monoCollection,
  sections: monoCollection,
  blog: monoCollection,
}
