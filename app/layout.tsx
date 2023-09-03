import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Moise Muhire's blog",
  description:
    "Moise Muhire is  a software engineer.",
  openGraph: {
    title: "Moise Muhire's blog",
    description:
      "Moise Muhire is  a software engineer.",
    url: "https://muhirem.com",
    siteName: "Moise Muhire's blog",
  },
  twitter: {
    site: "@MoiseMuhire3",
    creator: "@MoiseMuhire3",
  },
  metadataBase: new URL("https://muhirem.com"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={inter.className}
      suppressHydrationWarning={true}

      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
