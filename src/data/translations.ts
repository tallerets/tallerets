const es: Translations = {} as const

const ca: Translations = {} as const

/* Types */
export type Translations = { readonly [key: string]: string }

export const ui = { es, ca } as const
