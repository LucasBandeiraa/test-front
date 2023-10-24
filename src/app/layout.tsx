import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const inter = Lato({ subsets: ['latin'] , weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Mackenzie',
  description: 'teste front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
