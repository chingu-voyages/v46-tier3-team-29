import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Racers Run Club',
  description: 'Racers Run Club',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="page-layout h-full">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
