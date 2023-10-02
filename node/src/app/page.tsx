import { generateRssFeed } from '@/lib/generateRssFeed'

import { formatDateMonthYear } from '@/lib/formatDate'
import { getSortedPublishedFiles } from '@/lib/getFiles'


export default async function Home() {
  // Wait for the promises to resolve
  const [articles] = await Promise.all([getSortedPublishedFiles('tutorials')])

  const [snippets] = await Promise.all([getSortedPublishedFiles('snippets')])

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

      {snippets.length ===  0 &&
        <div className="font-mono text-large">No snippets yet.</div>
      }
      {snippets.length >  0 &&
         <div className="pt-12 dark:text-white text-gray-800">
         <div className="sm:flex sm:items-center">
           <div className="sm:flex-auto">
             <h1 className="font-mono font-semibold leading-6">Snippets</h1>
             <p className="mt-2 text-sm">
               Short solutions to problems I have encountered that are copy and paste ready.
             </p>
           </div>
         </div>
         <div className="mt-4 flow-root">
           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
               <table className="min-w-full">
                 <thead className="border-b-2 border-gray-400 text-gray-400 uppercase">
                   <tr>
                     <th scope="col" className="py-1.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
                       Title
                     </th>
                     <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold ">
                       Description
                     </th>
                     <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold ">
                       Category
                     </th>
                     <th scope="col" className="px-3 py-1.5 text-left text-sm font-semibold ">
                       Last Updated
                     </th>
                   </tr>
                 </thead>
                 <tbody className="">
                   {snippets.map((snippet: { slug: string; title: string; category: string, description: string, date:string}) => (
                     <tr key={snippet.slug} className="group">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                          <a href={snippet.slug} className="group-hover:text-teal-500">
                            {snippet.title}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{snippet.description}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{snippet.category}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{formatDateMonthYear(snippet.date)}</td>
                    </tr>
                   ))}
                 </tbody>
               </table>
           </div>
         </div>
       </div>
     </div>
      }
        

     
  </div>
  )
}