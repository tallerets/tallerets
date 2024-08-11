import { z, defineCollection } from 'astro:content'

const monoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    links: z
      .array(
        z.object({
          url: z.string(),
          text: z.string(),
        }),
      )
      .optional(),
  }),
})

export const collections = {
  mono: monoCollection,
  sections: monoCollection,
  blog: monoCollection,
}
