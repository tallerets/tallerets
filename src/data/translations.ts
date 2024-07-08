const es: Translations = {
  'seo.title': 'tallerets – talleres creativos en Barcelona para desconectar',
  'seo.desc':
    'Para crear no hace falta experiencia ni ninguna habilidad especial, solo ganas de pasar un rato contigo misma.',
  'seo.reserva.title': 'tallerets - Reserva tu taller creativo en Barcelona',
  'seo.reserva.desc':
    'Descubre los talleres creativos en Barcelona de tallerets y reserva tu plaza.',
  'seo.tallers.title': 'tallerets - Talleres creativos en Barcelona',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.twitter': 'Twitter',
  'hero.h1-1': 'Una pausa',
  'hero.h1-2': 'para crear',
} as const

const ca: Translations = {
  'seo.title': 'tallerets – tallers creatius a Barcelona per desconectar',
  'seo.desc':
    'Per crear no cal experiència ni cap habilitat especial, només ganes de passar una estona amb tu mateixa.',
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
} as const

/* Types */

export type Translations = {
  readonly [key: string]: string
}

export const ui = { es, ca } as const
