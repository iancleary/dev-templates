import { generateRssFeed } from '@/lib/generateRssFeed'

import { formatDateMonthYear } from '@/lib/formatDate'
import { getSortedPublishedFiles } from '@/lib/getFiles'


export default async function Home() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed('snippets')
  }

  // Wait for the promises to resolve
  const [snippets] = await Promise.all([getSortedPublishedFiles('snippets')])

  // console.log(articles)

  // const articles = articlesData.slice(0, 4).map(({ component, ...meta }) => meta)
  return (
    <div className="px-0 sm:px-12 pt-0 sm:pt-6">
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