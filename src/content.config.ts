// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { csvLoader } from '@ascorbic/csv-loader'
import { file } from 'astro/loaders'

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

// 3. Define your collection(s)
const highlights = defineCollection({
  loader: file('src/data/highlights.json'),
  schema: z.array(
    z.object({
      id: z.string(),
      image: imgSchema.optional(),
      link: z.string(),
    }),
  ),
})

const events = defineCollection({
  loader: csvLoader({
    fileName: 'src/data/events.csv',
    idField: 'id',
  }),
  schema: z.object({
    date: z.string().date(),
    name: z.string(),
    tickets: z.string(),
    info: z.string().nullable().optional(),
  }),
})

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    slug: z.string().optional(),
    image: imgSchema.optional(),
    links: linkSchema,
    other: z.record(z.string()).optional(),
  }),
})

const legal = defineCollection({
  schema: z.object({
    title: z.string(),
    links: linkSchema,
  }),
})

const tallers = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    image: imgSchema,
    links: linkSchema.optional(),
  }),
})

const errors = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    image: imgSchema.optional(),
    links: linkSchema.optional(),
  }),
})

const components = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string().optional(),
    image: imgSchema.optional(),
    links: linkSchema.optional(),
    other: z.any().optional(),
  }),
})

export const collections = {
  events,
  highlights,
  pages,
  legal,
  tallers,
  errors,
  cursos: tallers,
  components,
}
