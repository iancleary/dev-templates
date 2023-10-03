/** @type {import('next').NextConfig} */
import remarkGfm from 'remark-gfm'
import nextMDX from '@next/mdx'

// import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'tsx', 'mdx'],
  reactStrictMode: true,
  // experimental: {
  //   mdxRs: true,
  // },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});


export default withMDX(nextConfig)
