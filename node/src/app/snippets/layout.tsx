export const metadata = {
  title: 'snippets - iancleary.me',
  description: 'Ian Cleary',
  alternates: {
    types: {
      'application/rss+xml': 'https://iancleary.me/snippets/rss.xml',
    },
  },
}

export default function SnippetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        {children}
      </>
  )
}
