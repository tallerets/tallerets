import { constants } from './config'
import {
  AVAILABILITY_LABELS,
  events,
  formattedEventArray,
  tallers,
  type FormattedEvent,
} from './content'

export const getNextAvailableEvents = () =>
  formattedEventArray
    .filter((e) => e.availability !== AVAILABILITY_LABELS.none)
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const getMonthsWithEvents = () => {
  const allMonths = events.map((event) => event.date.month - 1)
  return Array.from(new Set(allMonths))
}

export const dateToString = (date: Date | undefined) =>
  date?.toLocaleString('ca-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export const getWrittenMonth = (month: number) => {
  return new Date(2024, month).toLocaleString('ca-ES', { month: 'long' })
}

export const dateToWeekday = (date: Date) => {
  return date.toLocaleString('ca-ES', { weekday: 'long', day: 'numeric' })
}

export const createEventUniqueId = (formattedEvent: FormattedEvent) =>
  `${formattedEvent.tallerId}-${dateToString(formattedEvent.date)}`

export const createMailToString = ({
  title,
  date,
  time,
  location,
}: {
  title: string
  date: string
  time?: string
  location?: string
}) =>
  `mailto:${constants.email}?subject=Reserva%20per%20talleret%20%22${title}%22&body=Hola!%0D%0AM'agradaria%20fer%20una%20reserva%20a%20nom%20de%20NOM%20I%20COGNOMS%20per%20NUM%20places%20al%20talleret%20%22${title}%22%20del%20dia%20${date}%20a%20les%20${time}%20a%20${location}.%0D%0A%0D%0AGr%C3%A0cies!%0D%0A`
