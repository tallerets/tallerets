import { events, formattedEventArray, tallers } from './content'

export const getNextTallerets = () =>
  formattedEventArray
    .filter((e) => e.availability !== 'none')
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .splice(0, 2)
    .map((e) => ({
      id: e.tallerId,
      ...tallers[e.tallerId],
    }))

export const dateToString = (date: Date | string) =>
  date.toLocaleString('ca-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export const getMonthsWithEvents = () => {
  const allMonths = events.map((event) => event.date.month - 1)
  return Array.from(new Set(allMonths))
}
