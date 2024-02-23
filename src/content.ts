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
    desc: 'Segur que tens moltes bosses de tela per anar a la compra, però cap amb el teu propi disseny per anar txulejant pel mercat. En aquest taller pintaràs una bossa de cotó de 40x37 a on després podràs portar totes les teves fruites i verdures.',
    imgAlt:
      'Fotografia de dues participants del taller pintant bosses de tela amb pintura acrílica',
    imgSrc: '/img/t-bosses.png',
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
}

export const tallersArray = Object.entries(tallers).map(([id, taller]) => ({
  id,
  ...taller,
}))

export const events: Event[] = [
  {
    tallerId: 'bossa',
    price: 15,
    date: {
      day: 2,
      month: 3,
      year: 2024,
    },
    time: '10:30 - 12:30',
    location: 'Espai Coopelia',
    availability: 'some',
  },
  {
    tallerId: 'bossa',
    price: 15,
    date: {
      day: 13,
      month: 3,
      year: 2024,
    },
    time: '18:30 - 20:30',
    location: 'Espai Coopelia',
    availability: 'some',
  },
]

export const formattedEventArray = events.map((event) => ({
  ...event,
  date: new Date(event.date.year, event.date.month - 1, event.date.day),
}))
