// ---- Types ----

type TallerId = string

interface Taller {
  title: {
    es: string
    ca: string
  }
  desc: {
    es: string
    ca: string
  }
  imgSrc: string
}

export interface Event {
  tallerId: string
  price: number
  date: {
    day: number
    month: number
    year: number
  }
  time: string
  location: string
  availability: 'none' | 'some' | 'last'
}

export const AVAILABILITY_LABELS = {
  some: 'Places lliures',
  none: 'Complet',
  last: 'Ultimes places!',
} as const

// ---- Content ----

export const tallers: Record<TallerId, Taller> = {
  estiu: {
    title: {
      es: 'Taller especial verano',
      ca: 'Taller especial estiu',
    },
    desc: {
      es: 'Este taller especial de verano consiste en dos tardes a donde haremos 3 talleres!\nTaller de iniciación al ganchillo: donde te harás una bolsita para el móvil\nTaller de autorretrato: donde aprenderás a mirarte con amor\nTaller de journaling y pintura: donde pintarás y te llevarás tu diario de verano',
      ca: "Aquest taller especial d'estiu consisteix en dues tardes a on farem 3 tallerets!\nTalleret d'iniciació al ganxet: on et faràs una bosseta pel mòbil\nTalleret d'autoretrat: on aprendràs a mirar-te amb amor\nTalleret de journaling i pintura: a on pintaràs i t'enduràs el teu diari d'estiu",
    },
    imgSrc: '/img/t-collage.webp',
  },
  bossa: {
    title: {
      es: 'Pinta una bolsa de tela',
      ca: 'Pinta una bossa de tela',
    },
    desc: {
      es: 'Seguro que tienes muchas bolsas de tela para ir a la compra, pero ninguna con tu propio diseño para lucir en el mercado. En este taller pintarás una bolsa de algodón de 40x37 donde después podrás llevar todas tus frutas y verduras.',
      ca: 'Segur que tens moltes bosses de tela per anar a la compra, però cap amb el teu propi disseny per anar txulejant pel mercat. En aquest taller pintaràs una bossa de cotó de 40x37 on després podràs portar totes les teves fruites i verdures.',
    },
    imgSrc: '/img/t-bosses.png',
  },
  testos: {
    title: {
      es: 'Pinta un tiesto de barro para tus plantas',
      ca: 'Pinta un test de fang per les teves plantes',
    },
    desc: {
      es: 'En este taller pintaremos un tiesto de barro para que puedas poner tus plantas o semillas.',
      ca: 'En aquest talleret pintarem un test de fang per que puguis posar les teves plantes o llavors!',
    },
    imgSrc: '/img/t-testos.webp',
  },
  collage: {
    title: {
      es: 'Haz unos puntos de libro en collage',
      ca: 'Fes uns punts de llibre en collage',
    },
    desc: {
      es: 'En este taller haremos dos puntos de libro con técnicas mixtas de collage y pintura, ¡perfecto para Sant Jordi!',
      ca: 'En aquest talleret farem dos punts de llibre amb tècniques mixtes de collage i pintura - perfecte per sant Jordi!!',
    },
    imgSrc: '/img/t-collage.webp',
  },
  mirallet: {
    title: {
      es: 'Pinta un espejo',
      ca: 'Pinta un mirallet',
    },
    desc: {
      es: '¿Espejo, espejito... quién es la más guapa del reino?" ¡Imagina no tener un espejo al que poder hacerle estas preguntas! En este taller pintaremos juntas un espejo de 30x30 donde después podrás mirarte cada día.',
      ca: 'Mirall, mirallet.... qui és la més guapa del regne?” Imagina no tenir un mirall a qui poder-li fer aquestes preguntes! En aquest talleret pintarem juntes un mirall de 30x30 on després podràs mirar-te cada dia!',
    },
    imgSrc: '/img/t-mirallets.png',
  },
  potet: {
    title: {
      es: 'Pinta un tarro de vidrio',
      ca: 'Pinta un potet de vidre',
    },
    desc: {
      es: '¿Sabes esos tarros de garbanzos, mermelada y aceitunas que acumulas en la cocina porque "seguro que lo utilizaré en algún momento"? Pues en este taller podrás darles una segunda vida a uno de esos tarros y luego utilizarlos para poner una vela, lápices, una plantita... ¡dos horas de desconexión y reutilización!',
      ca: 'Saps aquests potets de cigrons, melmelada i olives que vas acumulant a la cuina perquè “segur que ho faré servir en algun moment”? doncs en aquest talleret podràs donar-li una segona vida a un d’aquests potets i després utilitzar-los per posar una espelma, llapis, una planteta… dues hores de desconnexió i de pas, reutilització!',
    },
    imgSrc: '/img/t-potets2.png',
  },
  posagots: {
    title: {
      es: 'Haz un posavasos de cerámica',
      ca: 'Fes un posagots de ceràmica',
    },
    desc: {
      es: 'En este taller haremos dos posavasos de cerámica que podrás personalizar como más te guste.',
      ca: 'En aquest talleret farem dos posagots de ceràmica que podràs personalitzar com més t’agradi!',
    },
    imgSrc: '/img/t-posagots.png',
  },
  aMida: {
    title: {
      es: 'Taller a medida. ¿Tienes alguna idea?',
      ca: 'Taller a mida. Tens alguna idea?',
    },
    desc: {
      es: '¿Tienes una idea de taller que quieres hacer con tus amigos para un evento, o no te cuadran las fechas? ¡Propónme tu idea y podemos hacer un taller a medida a partir de 4 personas!',
      ca: 'Tens una idea de talleret que vols fer amb els teus amics per un event, o bé no et cuadren les dates? Proposa’m la teva idea i podem fer un talleret a mida a partir de 4 persones.',
    },
    imgSrc: '/icons/mida-gran.svg',
  },
} as const

export const events: Event[] = [
  {
    tallerId: 'bossa',
    price: 25,
    date: {
      day: 15,
      month: 6,
      year: 2024,
    },
    time: '11:00 - 13:00',
    location: 'Espai Tallerets',
    availability: 'none',
  },
  {
    tallerId: 'collage',
    price: 18,
    date: {
      day: 14,
      month: 6,
      year: 2024,
    },
    time: '19:00 - 21:00',
    location: 'Espai tallerets',
    availability: 'none',
  },
  {
    tallerId: 'testos',
    price: 20,
    date: {
      day: 29,
      month: 6,
      year: 2024,
    },
    time: '19:00 - 21:00',
    location: 'Espai tallerets',
    availability: 'none',
  },
  {
    tallerId: 'estiu',
    price: 89,
    date: {
      day: 3,
      month: 7,
      year: 2024,
    },
    time: '18:00 - 21:00',
    location: 'Espai tallerets',
    availability: 'some',
  },
  {
    tallerId: 'estiu',
    price: 89,
    date: {
      day: 10,
      month: 7,
      year: 2024,
    },
    time: '18:00 - 21:00',
    location: 'Espai tallerets',
    availability: 'some',
  },
] as const

// ---- Extended Content [no tocar!] ----

export interface FormattedEvent extends Omit<Event, 'date' | 'availability'> {
  date: Date
  availability: string
}

export const tallersArray = Object.entries(tallers).map(([id, taller]) => ({
  id,
  ...taller,
}))

export const formattedEventArray: FormattedEvent[] = events.map((event) => ({
  ...event,
  date: new Date(event.date.year, event.date.month - 1, event.date.day),
  availability: AVAILABILITY_LABELS[event.availability],
}))
