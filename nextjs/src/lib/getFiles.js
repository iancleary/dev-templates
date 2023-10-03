import glob from 'fast-glob'
import * as path from 'path'

async function importFile(filename) {
  let { meta, default: component } = await import(
    `../app/${filename}`
  )
  return {
    slug: filename.replace(/(\/page)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

// this is called within src/app/page.tsx
// so the cwd is src/app
// directory is the folder to search under the appDirectory
async function getFiles(directory = 'posts', appDirectory = 'src/app') {
  let filepaths = await glob([`${directory}/**/*.mdx`], {
    cwd: path.join(process.cwd(), appDirectory),
  })

  let parsedFiles = await Promise.all(filepaths.map(importFile))

  return parsedFiles
}

export async function getSortedPublishedFiles(directory = 'posts') {

  let files = await getFiles(directory=directory);

  // Filter out unpublished files
  var publishedFiles = files.filter(function (el) {
    return el.isPublished == true;
  });

  // Sort files by date
  return publishedFiles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
