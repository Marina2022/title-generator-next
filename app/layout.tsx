import type { Metadata } from 'next'
import './globals.scss'
import React from 'react';

export const metadata: Metadata = {
  title: 'Title Generator',
  description: 'A set of tools for creating catchy titles for blogs, books and videos.',
  openGraph: {
    images: 'https://titlegenerator.com/og/title%20generator.png?v=1',
  },
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
