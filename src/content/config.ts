import { z, defineCollection } from 'astro:content'

const linkSchema = z.array(
  z.object({
    url: z.string(),
    text: z.string(),
  }),
)

const imgSchema = z.object({
  url: z.string(),
  alt: z.string(),
})

const taller = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    image: imgSchema,
    links: linkSchema.optional(),
  }),
})

const section = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    customSlug: z.string().optional(),
    desc: z.string().optional(),
    image: imgSchema,
    links: linkSchema.optional(),
    other: z.any().optional(),
  }),
})

const legalDoc = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    links: linkSchema,
  }),
})

const errors = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    image: imgSchema.optional(),
    links: linkSchema.optional(),
  }),
})

export const collections = {
  tallers: taller,
  curs: taller,
  sections: section,
  legal: legalDoc,
  blog: taller,
  errors: errors,
}
