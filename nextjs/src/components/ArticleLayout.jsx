import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  showDate = false,
  showDescription = false,
}) {

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Container className="">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {meta.title}
                  </h1>
                  {showDescription &&
                  <h2 className="py-2 italic text-zinc-800 dark:text-zinc-100 text-lg">
                    {meta.description}
                  </h2>
                  }
                  {showDate &&
                  <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(meta.date)}</span>
                  </time>
                  }
                </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
