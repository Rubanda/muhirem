import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moise Muhire',
  description: 'moisemuhire.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`max-w-2xl m-auto ${inter.className}`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <main className="p-6 pt-3 md:pt-6 min-h-screen">

            <NavBar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
