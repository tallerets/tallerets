// src/data/caixes.ts
// Les caixes de "Tallerets per emportar". Aquestes dades les fan servir
// la botiga (desplegable) i la pàgina /per-emportar. Edita-les només aquí.
//
// ESBORRANY: revisa els textos (descripció, què porta, detalls) i
// corregeix el que no sigui exacte.

// ── Preu, enllaços de pagament i preventa (comuns a totes les caixes) ──
export const caixaComu = {
  preu: '19€',
  enviament: '10€',
  hrefRecollida: 'https://buy.stripe.com/dRmcN77937M3cHY5Kl7N60Z', // recollida
  hrefEnviament: 'https://buy.stripe.com/14AcN7fFz6HZdM2c8J7N610', // +10€ enviament
  preventa: true, // posa-ho a false quan ja hi hagi estoc
  imatgesGenerals: ['/img/caixa-producte.webp?v=2', '/img/caixa-0.webp'],
}

type Text = { ca: string; es: string }
type Llista = { ca: string[]; es: string[] }

export interface Caixa {
  id: string // sense espais ni accents: és el que veuràs a Stripe
  nom: Text
  imatges: string[]
  descripcio: Text
  inclou: Llista
  detalls: Text
}

export const caixes: Caixa[] = [
  {
    id: 'fotobrodat',
    nom: { ca: 'Fotobrodat', es: 'Fotobordado' },
    imatges: ['/img/caixa-5.webp'],
    descripcio: {
      ca: "Brodaràs a mà damunt d'una fotografia: una postal o una foto teva es converteix en una peça única amb fils de colors.",
      es: 'Bordarás a mano sobre una fotografía: una postal o una foto tuya se convierte en una pieza única con hilos de colores.',
    },
    inclou: {
      ca: ['Materials per fer la manualitat', 'Instruccions pas a pas'], // TODO: detalla què porta
      es: ['Materiales para hacer la manualidad', 'Instrucciones paso a paso'],
    },
    detalls: { ca: 'Per a totes les edats', es: 'Para todas las edades' }, // TODO: edat, temps, dificultat
  },
  {
    id: 'casa-de-llum',
    nom: { ca: 'Casa de llum', es: 'Casa de luz' },
    imatges: ['/img/caixa-1.webp', '/img/caixa-2.webp', '/img/caixa-3.webp', '/img/caixa-4.webp'],
    descripcio: {
      ca: "Construeix i decora una caseta de cartró que s'il·lumina per dins. Fes-ne una o un poble sencer per omplir de llum les nits d'hivern.",
      es: 'Construye y decora una casita de cartón que se ilumina por dentro. Haz una o un pueblo entero para llenar de luz las noches de invierno.',
    },
    inclou: {
      ca: ['Materials per fer la manualitat', 'Instruccions pas a pas'], // TODO: detalla què porta
      es: ['Materiales para hacer la manualidad', 'Instrucciones paso a paso'],
    },
    detalls: { ca: 'Per a totes les edats', es: 'Para todas las edades' }, // TODO
  },
  {
    id: 'serigrafia',
    nom: { ca: 'Estampa en serigrafia', es: 'Estampa en serigrafía' },
    imatges: ['/img/caixa-7.webp'],
    descripcio: {
      ca: 'Descobreix la serigrafia i estampa els teus propis dissenys sobre roba o paper.',
      es: 'Descubre la serigrafía y estampa tus propios diseños sobre tela o papel.',
    },
    inclou: {
      ca: ['Materials per fer la manualitat', 'Instruccions pas a pas'], // TODO: detalla què porta
      es: ['Materiales para hacer la manualidad', 'Instrucciones paso a paso'],
    },
    detalls: { ca: 'Per a totes les edats', es: 'Para todas las edades' }, // TODO
  },
  {
    id: 'tapis-creatiu',
    nom: { ca: 'Tapís creatiu', es: 'Tapiz creativo' },
    imatges: ['/img/caixa-6.webp'],
    descripcio: {
      ca: 'Teixeix el teu propi tapís en un teler petit, combinant colors i textures de llana.',
      es: 'Teje tu propio tapiz en un telar pequeño, combinando colores y texturas de lana.',
    },
    inclou: {
      ca: ['Materials per fer la manualitat', 'Instruccions pas a pas'], // TODO: detalla què porta
      es: ['Materiales para hacer la manualidad', 'Instrucciones paso a paso'],
    },
    detalls: { ca: 'Per a totes les edats', es: 'Para todas las edades' }, // TODO
  },
]

// Afegeix la caixa triada a l'enllaç de Stripe (es veu com a
// "Client reference ID" a cada pagament).
export const ambCaixa = (href: string, id: string) => {
  if (!href.startsWith('http')) return href
  const url = new URL(href)
  url.searchParams.set('client_reference_id', id)
  return url.toString()
}
