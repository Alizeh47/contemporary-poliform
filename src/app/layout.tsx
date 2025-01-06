import { Inter } from 'next/font/google';
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Modern Furniture Store',
  description: 'Contemporary furniture and interior design solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#E3D8B7] font-sans">
        <header className="h-[80px] fixed w-full bg-white z-50 border-b border-[#D4C4B5]">
          <Navbar />
        </header>
        <main className="pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
