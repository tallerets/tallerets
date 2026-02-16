import type { CollectionEntry } from 'astro:content'
import { EventCard } from './EventCard'

export interface NextEventsProps {
  events: CollectionEntry<'events'>[]
  limit?: number
  showMoreText: string
  noShowsText: string
  lang: string
}

const NextEvents = ({
  events,
  limit = Infinity,
  showMoreText,
  noShowsText,
  lang,
}: NextEventsProps) => {
  const limitedUpcomingShows = events
    ?.filter((event) => {
      const date = new Date(event.data.date)
      return date.getTime() > Date.now()
    })
    .slice(0, limit)

  return (
    <div class="px-2 flex gap-2 sm:gap-4 md:gap-4 flex-wrap items-center justify-center max-w-[90ch] mx-auto">
      {limitedUpcomingShows.length === 0 ? (
        <p class="md:text-center text-red max-w-[35ch]">{noShowsText}</p>
      ) : (
        limitedUpcomingShows.map((show: CollectionEntry<'events'>) => {
          const month = new Date(show.data.date)
            .toLocaleString(lang, { month: 'long' })
            .slice(0, 3)
          const day = new Date(show.data.date).getDate()

          return (
            <EventCard
              title={show.data.name}
              link={show.data.tickets}
              day={day.toString()}
              month={month}
              btnText={showMoreText}
            />
          )
        })
      )}
    </div>
  )
}

export { NextEvents }
