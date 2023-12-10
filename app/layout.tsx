import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Flask Template',
  description: 'Ethan Yee\'s Next.js and Flask template with more scalability',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className='dark text-foreground bg-background min-h-screen'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
