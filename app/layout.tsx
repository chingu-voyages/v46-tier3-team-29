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
        <div className="grid grid-cols-1 grid-rows-12 h-full">
          <div className="row-span-1">
            <Nav />
          </div>
          <div className="row-span-10">{children}</div>
          <div className="row-span-2">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
