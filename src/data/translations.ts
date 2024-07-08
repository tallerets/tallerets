const es: Translations = {
  'seo.title': 'tallerets – talleres creativos en Barcelona para desconectar',
  'seo.desc':
    'Para crear no hace falta experiencia ni ninguna habilidad especial, solo ganas de pasar un rato contigo misma.',
  'seo.reserva.title': 'tallerets - Reserva tu taller creativo en Barcelona',
  'seo.reserva.desc':
    'Descubre los talleres creativos en Barcelona de tallerets y reserva tu plaza.',
  'seo.tallers.title': 'tallerets - Talleres creativos en Barcelona',
  'nav.a.reserva': 'reserva',
  'nav.a.tallers': 'talleres',
  'nav.a.bio': 'sobre mí',
  'nav.a.contact': 'contacto',
  'nav.twitter': 'Twitter',
  'hero.h1-1': 'Una pausa',
  'hero.h1-2': 'para crear',
  'hero.cta': 'próximos talleres',
  'bio.title': 'Soy Noor y organizo talleres creativos',
  'bio.text':
    'Con tallerets quiero transmitir y enseñar que cuando hacemos cosas con nuestras manos nos sentimos más presentes y vivos. Que para crear no hace falta experiencia ni ninguna habilidad especial, solo ganas de pasar un rato contigo misma.',
  'next.title': 'próximos talleres',
  'next.properament': 'próximamente',
  'next.empty':
    'No hay talleres programados! Consulta la lista completa y contáctame si quisieras organizar uno.',
  'next.a.tallers': 'ver todos los talleres',
  'next.a.reserva': 'calendario y reservas',
  'amida.title': 'talleres a medida',
  'amida.text':
    'Tienes una idea de taller que quieres hacer con tus amigas para un evento o porque sí, o bien no te cuadran las fechas? Propónmela y podemos hacer un taller a medida a partir de 4 personas.',
  'contact.title': 'para más info, sígueme en instagram, escríbeme o llámame!',
  'footer.a.reserva': 'calendario y reservas',
  'footer.a.tallers': 'ver todos los talleres',
  'footer.a.bio': 'sobre tallerets',
  'footer.a.contact': 'contacto',
  'footer.a.terms': 'términos y condiciones de los talleres',
  'footer.a.privacy': 'política de privacidad y cookies',
  'footer.author': 'diseño y desarrollo por',
  'footer.year.place': ' ~ Barcelona, 2024',
  'tallers.title': 'todos los talleres',
  'tallers.a.reserva': 'calendario y reservas',
  'tallers.emptyDate': 'Contáctame para buscar una fecha!',
  'reserva.title': 'calendario',
  'reserva.text':
    'Aquí veras los siguientes talleres planeados. Si ninguno te encaja, puedes organizar un taller a medida en el espacio y fecha que quieras!',
  'reserva.how': 'como reservar?',
  'reserva.step1':
    'Enviame un email con los detalles del taller que te interesa, el numero de plazas a reservar y tu nombre y apellido',
  'reserva.btn': 'Enviar email para reservar una plaza',
  'reserva.step2': 'Recibirás un email con los detalles de pago',
  'reserva.step3': 'Una vez hecho el pago, las plazas estarán reservadas ☆',
  'reserva.conditions1': 'Consulta las condiciones de',
  'reserva.conditions2': 'reserva y cancelación',
  'reserva.conditions3': 'y la',
  'reserva.conditions4': 'política de privacidad',
  'reserva.dataAdequada': 'encontremos la fecha adecuada para ti!',
  'reserva.dataCustom': 'Cuando quieras!',
  'reserva.locCustom':
    'Precio y localización a convenir. Entre 6 y 16 personas. Contacta conmigo!',
  'popup.title': 'Reservar del taller',
  'popup.details': 'Detalles del taller',
  'popup.copy': '(haz clic para copiar la info)',
  'popup.copied': '✓ copiado!',
  'mantainance.title': 'Estamos de obras en la web!',
  'mantainance.text':
    'Si tienes alguna duda o quieres información sobre los talleres, puedes seguirme en Instagram ',
  'mantainance.text2': 'o enviame un email a',
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
