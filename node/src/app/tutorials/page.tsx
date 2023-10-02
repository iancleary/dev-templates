import { generateRssFeed } from '@/lib/generateRssFeed'

import { formatDateMonthYear } from '@/lib/formatDate'
import { getSortedPublishedFiles } from '@/lib/getFiles'


export default async function Home() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed('tutorials')
  }

  // Wait for the promises to resolve
  const [articles] = await Promise.all([getSortedPublishedFiles('tutorials')])
  // console.log(articles)

  // const articles = articlesData.slice(0, 4).map(({ component, ...meta }) => meta)
  return (
    <div className="px-0 sm:px-12 pt-0 sm:pt-6">
      {articles.length ===  0 &&
        <>
          <div className="font-mono font-semibold text-large">Nothing published yet.</div>
          <p className="mt-2 text-sm">
            Longer form articles coming soon.
          </p>
        </>
      }
      {articles.length >  0 &&
        <div className="font-mono font-semibold text-large">Recently Published</div>
      }
      <div className="flex flex-col pt-6 space-y-6">
        {articles.map((article) => (
          <a key={article.slug} href={article.slug} className='group dark:text-white text-gray-800 text-sm'>
              <div>
                  <div className="group-hover:text-teal-500 font-bold pb-4">{article.title}</div>
                  <div className="">{article.description}</div>
                  <div className="flex font-bold py-4 pr-2">Read more
                    <div className="ml-2 invisible group-hover:dark:text-teal-500 group-hover:visible">
                      →
                    </div>
                  </div>
              </div>
          </a>
        ))}
      </div>
  </div>
  )
}