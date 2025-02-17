import { contacts } from './data/contact'
import { ui } from './data/translations'

export const dateToString = (date: Date | undefined, lang = 'ca') =>
  date?.toLocaleString(lang, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export const getWrittenMonth = (month: number, lang = 'ca') => {
  return new Date(2024, month).toLocaleString(lang, { month: 'long' })
}

export const dateToWeekday = (date: Date, lang = 'ca') => {
  return date.toLocaleString(lang, { weekday: 'long', day: 'numeric' })
}

export const createMailToString = ({
  title,
  date,
  time,
  location,
  lang,
}: {
  title: string
  date: string
  time?: string
  location?: string
  lang: string
}) =>
  lang === 'ca'
    ? `mailto:${contacts.email}?subject=Reserva%20per%20talleret%20${title}&body=Hola!%0D%0AM'agradaria%20fer%20una%20reserva%20a%20nom%20de%20[NOM]%20I%20[COGNOMS]%20per%20[NUM]%20places%20al%20talleret%20${title}%20del%20dia%20${date}%20a%20les%20${time}%20a%20${location}.%0D%0A%0D%0AGr%C3%A0cies!%0D%0A`
    : `mailto:${contacts.email}?subject=Reserva%20para%20talleret%20${title}&body=Hola!%0D%0AMe%20gustar%C3%ADa%20hacer%20una%20reserva%20a%20nombre%20de%20[NOMBRE]%20Y%20[APELLIDOS]%20para%20[NUM]%20plazas%20en%20el%20talleret%20${title}%20del%20d%C3%ADa%20${date}%20a%20las%20${time}%20en%20${location}.%0D%0A%0D%0AGracias!%0D%0A`

export const showDefaultLang = false
export const languages = {
  es: 'Castellano',
  ca: 'Català',
} as const

export const defaultLang = 'ca'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export const removeLangFromSlug = (slug: string) => {
  return '/' + slug.replace('es/', '').replace('ca/', '')
}
