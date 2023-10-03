// import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getSortedPublishedFiles } from './getFiles'

// import ArticleLayout from '../components/ArticleLayout'

export async function generateRssFeed(directory = 'snippets', domain = 'https://iancleary.me', authorName = 'Ian Cleary', authorEmail = 'blog@iancleary.me') {
  let files = await getSortedPublishedFiles(directory)
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || domain
  let author = {
    name: authorName,
    email: authorEmail,
  }

  let feed = new Feed({
    title: author.name,
    description: 'RF Systems Design Engineer',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let file of files) {
    let url = `${siteUrl}/${file.slug}`
    // let html = ReactDOMServer.renderToStaticMarkup(
    //   <ArticleLayout isRssFeed>
    //     {file}
    //   </ArticleLayout>
    // )

    feed.addItem({
      title: file.title,
      id: url,
      link: url,
      description: file.description,
      // content: html,
      author: [author],
      contributor: [author],
      date: new Date(file.date),
    })
  }

  await mkdir(`./public/${directory}`, { recursive: true })
  await Promise.all([
    writeFile(`./public/${directory}/rss.xml`, feed.rss2(), 'utf8'),
    writeFile(`./public/${directory}/rss.json`, feed.json1(), 'utf8'),
  ])
}
