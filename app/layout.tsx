import type { Metadata } from 'next'
import './globals.scss'
import React from 'react';

export const metadata: Metadata = {
  title: 'Title Generator',
  description: 'A set of tools for creating catchy titles for blogs, books and videos.',
  // openGraph: {
  //   images: 'https://ibb.co/NKvkQmz',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
