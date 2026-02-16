interface EventCardProps {
  title: string
  link: string
  day: string
  month: string
  btnText: string
}

const EventCard = ({ title, link, day, month, btnText }: EventCardProps) => {
  return (
    <a
      href={link}
      class="flex flex-col justify-between gap-2 sm:border-2 border-red rounded w-full sm:max-w-48 text-red sm:hover:rotate-2 transition-transform duration-200 "
    >
      <div class="hidden sm:flex items-center gap-1 border-b-2 px-2 pb-2 bg-red text-soft pt-2">
        <b class="uppercase font-bold">
          {day} {month}
        </b>
        <p class="ms-auto ">{btnText}</p>
      </div>
      <p class="sm:text-lg sm:px-2 sm:pb-2 underline sm:no-underline">
        <b class="uppercase font-bold sm:hidden">
          {day} {month} -
        </b>
        {title}
      </p>
    </a>
  )
}

export { EventCard }
