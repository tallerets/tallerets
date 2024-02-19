type TallerId = string
interface Taller {
  title: string
  desc: string
  imgAlt: string
  imgSrc: string
}
interface Event {
  tallerId: string
  customTitle?: string
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

export const tallers: Record<TallerId, Taller> = {
  bossa: {
    title: 'Pinta una bossa de tela',
    desc: 'Dues hores per connectar mentre expresses la teva creativitat pintant una bossa de tela amb pintura acrílica, ja sigui una nova, o donant-li una nova vida a aquella promocional que utilitzes per la compra.',
    imgAlt:
      'Fotografia de dues participants del taller pintant bosses de tela amb pintura acrílica',
    imgSrc: '/img/t-bosses.png',
  },
  mirallet: {
    title: 'Pinta un mirallet',
    desc: 'Podràs pintar un mirallet de 30x30 per penjar-lo i mirar-te cada matí i amb un toc de màgia!',
    imgAlt: "Fotografia d'una participant del taller pintant un mirallet",
    imgSrc: '/img/t-mirallets.png',
  },
  potet: {
    title: 'Pinta un potet de vidre',
    desc: 'Sembla que mai tenim prou pots de vidre acumulat a la vidra. Pinta’l per posar-hi espelmes, flors o llàpisos... Però sobretot, regala’t dues hores de tranquilitat i creativitat.',
    imgAlt: 'Cartell de taller de pintar pots de vidre',
    imgSrc: '/img/t-potets2.png',
  },
}

export const tallersArray = Object.entries(tallers).map(([id, taller]) => ({
  id,
  ...taller,
}))

export const events: Event[] = [
  {
    tallerId: 'bossa',
    price: 14,
    date: {
      day: 25,
      month: 2,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'some',
  },
  {
    tallerId: 'mirallet',
    price: 14,
    date: {
      day: 4,
      month: 3,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'some',
  },
  {
    tallerId: 'potet',
    price: 14,
    date: {
      day: 11,
      month: 3,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'none',
  },
  {
    tallerId: 'un event a mida que resulta que hi ha',
    customTitle: `Event especial llançament web!`,
    price: 14,
    date: {
      day: 18,
      month: 3,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'last',
  },
  {
    tallerId: 'bossa',
    price: 14,
    date: {
      day: 25,
      month: 3,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'some',
  },
  {
    tallerId: 'mirallet',
    price: 14,
    date: {
      day: 1,
      month: 4,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'some',
  },
  {
    tallerId: 'potet',
    price: 14,
    date: {
      day: 8,
      month: 4,
      year: 2024,
    },
    time: '19:00',
    location: 'Centre Civic Cotxeres Borrell, Barcelona',
    availability: 'some',
  },
]

export const formattedEventArray = events.map((event) => ({
  ...event,
  date: new Date(event.date.year, event.date.month - 1, event.date.day),
}))
