import React, { ReactNode } from 'react'
import Head from 'next/head'

const Layout = ({ children, title }: { children: ReactNode, title?: string }) => (
  <>
    <Head>
      <title>{`Ian Forsyth${title ? ` - ${title}` : ''}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Google Fonts loaded via globals.scss */}

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div className="flex flex-col h-full overflow-auto">
      {children}
    </div>
  </>
)

export default Layout
