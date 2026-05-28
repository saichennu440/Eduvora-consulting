import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Eduvora Consulting | Educational Excellence & Expertise',
  description: 'Premium educational consulting services transforming institutions through strategic guidance and innovative solutions.',
  keywords: ['educational consulting', 'institution development', 'academic excellence', 'educational strategy'],
  openGraph: {
    title: 'Eduvora Consulting',
    description: 'Premium educational consulting services',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a5f',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <WhatsAppButton />
      </body>
    </html>
  )
}
