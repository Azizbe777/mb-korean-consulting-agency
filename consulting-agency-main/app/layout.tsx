import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './error-handler'
import { Toaster } from '@/components/toaster'
import ClientWrapper from '@/components/client-wrapper'
import ErrorBoundary from '@/components/error-boundary'
import PerformanceOptimizer from '@/components/performance-optimizer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'MB Consulting',
  description: 'Middle Bridge - Orzularingiz va Koreya o\'rtasidagi oltin ko\'prik. Koreya universitetlarida o\'qish uchun professional yordam.',
  keywords: 'Koreya, ta\'lim, universitet, bakalavr, magistratura, til kursi, kasbiy ta\'lim',
  generator: 'v0.dev',
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Favicon (Tabdagi logo) */}
        <link rel="icon" href="/2.png" type="image/png" />

        {/* Prevent any development indicators */}
        <meta name="next-head-count" content="0" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <PerformanceOptimizer />
        <ErrorBoundary>
          <ClientWrapper>
            {children}
            <Toaster />
          </ClientWrapper>
        </ErrorBoundary>
      </body>
    </html>
  )
}
