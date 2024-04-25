import { getNextAvailableEvents } from './utils'

// ---- Types ----

type TallerId = string

interface Taller {
  title: string
  desc: string
  imgAlt: string
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
  bossa: {
    title: 'Pinta una bossa de tela',
    desc: 'Segur que tens moltes bosses de tela per anar a la compra, però cap amb el teu propi disseny per anar txulejant pel mercat. En aquest taller pintaràs una bossa de cotó de 40x37 a on després podràs portar totes les teves fruites i verdures.',
    imgAlt:
      'Fotografia de dues participants del taller pintant bosses de tela amb pintura acrílica',
    imgSrc: '/img/t-bosses.png',
  },
  testos: {
    title: 'Pinta un test de fang per les teves plantes',
    desc: 'En aquest talleret pintarem un test de fang per que puguis posar les teves plantes o llavors!',
    imgAlt: 'Fotografia d`una mà pintant un test de fang',
    imgSrc: '/img/t-testos.webp',
  },
   collage: {
    title: 'Fes uns punts de llibre en collage',
    desc: 'En aquest talleret farem dos punts de llibre amb tècniques mixtes de collage i pintura - perfecte per sant Jordi!!',
    imgAlt: 'Fotografia d´una participant del taller fent collage',
    imgSrc: '/img/t-collage.webp',
  },
  mirallet: {
    title: 'Pinta un mirallet',
    desc: 'Mirall, mirallet.... qui és la més guapa del regne?” Imagina no tenir un mirall a qui poder-li fer aquestes preguntes! En aquest talleret pintarem juntes un mirall de 30x30 a on després podràs mirar-te cada dia!',
    imgAlt: "Fotografia d'una participant del taller pintant un mirallet",
    imgSrc: '/img/t-mirallets.png',
  },
  potet: {
    title: 'Pinta un potet de vidre',
    desc: 'Saps aquests potets de cigrons, melmelada i olives que vas acumulant a la cuina perquè “segur que ho faré servir en algun moment”? doncs en aquest talleret podràs donar-li una segona vida a un d’aquests potets i després utilitzar-los per posar una espelma, llapis, una planteta… dues hores de desconnexió i de pas, reutilització!',
    imgAlt: 'Cartell de taller de pintar pots de vidre',
    imgSrc: '/img/t-potets2.png',
  },
  posagots: {
    title: 'Fes un posagots de ceràmica',
    desc: 'En aquest talleret farem dos posagots de ceràmica que podràs personalitzar com més t’agradi!',
    imgAlt: 'Fotografia d´una participant del taller fent un posagots',
    imgSrc: '/img/t-posagots.png',
  },
  aMida: {
    title: 'Taller a mida. Tens alguna idea?',
    desc: 'Tens una idea de talleret que vols fer amb els teus amics per un event, o bé no et cuadren les dates? Proposa’m la teva idea i podem fer un talleret a mida a partir de 4 persones.',
    imgAlt: 'Ilustració de dos potets amb pinzells',
    imgSrc: '/icons/mida-gran.svg',
  },
} as const

export const events: Event[] = [
{
    tallerId: 'bossa',
    price: 18,
    date: {
      day: 9,
      month: 4,
      year: 2024,
    },
    time: '18:00 - 20:00',
    location: 'Espai Coopelia',
    availability: 'none',
  },
  {
    tallerId: 'bossa',
    price: 18,
    date: {
      day: 20,
      month: 4,
      year: 2024,
    },
    time: '17:00 - 19:00',
    location: 'Espai Coopelia',
    availability: 'none',
  },
  {
    tallerId: 'testos',
    price: 20,
    date: {
      day: 17,
      month: 5,
      year: 2024,
    },
    time: '18:30 - 20:30',
    location: 'Espai Coopelia',
    availability: 'last',
  },
   {
    tallerId: 'testos',
    price: 20,
    date: {
      day: 31,
      month: 5,
      year: 2024,
    },
    time: '18:30 - 20:30',
    location: 'Espai Coopelia',
    availability: 'last',
  },
     {
    tallerId: 'collage',
    price: 15,
    date: {
      day: 16,
      month: 4,
      year: 2024,
    },
    time: '18:30 - 20:30',
    location: 'Espai Coopelia',
    availability: 'none',
  }, 
   {
    tallerId: 'mirallet',
    price: 23,
    date: {
      day: 11,
      month: 5,
      year: 2024,
    },
    time: '11:00 - 13:00',
    location: 'Espai Coopelia',
    availability: 'some',
  },
  {
    tallerId: 'potet',
    price: 18,
    date: {
      day: 11,
      month: 5,
      year: 2024,
    },
    time: '16:00 - 18:00',
    location: 'Espai Coopelia',
    availability: 'some',
  },
] as const

// ---- Extended Content ----

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

export const nextEvents = getNextAvailableEvents()
