import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextUIProvider } from '@/providers/nextui-provider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Torre de Davi',
  description: 'Cardápio online da lanchonete torre de davi!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
