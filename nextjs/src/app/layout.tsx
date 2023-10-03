import './globals.css'
import { Providers } from './providers'

// import { Inter } from 'next/font/google'
import Image from 'next/image'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iancleary.me',
  description: 'Ian Cleary',
  alternates: {
    types: {
      'application/rss+xml': 'https://iancleary.me/tutorials/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}> */}
      <body>
        <Providers>
          <main className="bg-slate-50 dark:bg-black 
                            flex flex-col min-h-screen j
                            ustify-between w-full px-4 sm:px-8 md:px-16 lg:px-20 
                            pb-2 sm:pb-4 md:pb-8 lg:pb-8">
            <div className="items-center">
              <div className="w-full items-center justify-between 
                              font-mono text-sm
                              lg:flex">
                <p className="text-stone-900 dark:text-stone-100 
                                flex w-full justify-center 
                                border-b border-gray-300 
                                pb-6 pt-8 
                                lg:items-center 
                                dark:border-neutral-800 
                                lg:static lg:w-auto  lg:rounded-xl 
                                lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  Ian Cleary&nbsp;
                  <code className="font-mono font-bold">RF Systems Design Engineer</code>
                </p>
                <div className="pt-8 lg:pt-0 pb-8 lg:pb-8 
                                flex h-36 sm:h-32 md:h-40 lg:h-48
                                w-full items-center justify-center 
                                lg:w-auto lg:bg-none">
                  <a
                    className="pointer-events-none flex items-start gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="/"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Always in orbit{' '} */}
                    <Image
                      src="/satellite.svg"
                      alt="Satellite Logo"
                      className="dark:invert h-20 sm:h-24 md:h-32 lg:h-40 lg:pt-8"
                      height={24} // overriden by className height above
                      width={100} // overriden by width auto below
                      style={{ width: 'auto' }} // width: 'auto' is to satisfy next/image
                      priority
                    />
                  </a>
                </div>
              </div>
              <div className="pb-2 pt-2">
                {children}
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
