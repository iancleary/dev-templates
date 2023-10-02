import React from 'react';

export const metadata = {
  title: 'tutorials - iancleary.me',
  description: 'Ian Cleary',
  alternates: {
    types: {
      'application/rss+xml': 'https://iancleary.me/tutorials/rss.xml',
    },
  },
}

export default function TutorialLayout({
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
