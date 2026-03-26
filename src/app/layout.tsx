import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import TutorialFlow from '@/components/onboarding/TutorialFlow'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CurrentDao - Decentralized Energy Marketplace',
  description: 'Trade energy, participate in DAO governance, and build a sustainable future with blockchain technology',
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
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <Toaster position="top-right" />
            <TutorialFlow />
          </div>
        </Providers>
      </body>
    </html>
  )
}
