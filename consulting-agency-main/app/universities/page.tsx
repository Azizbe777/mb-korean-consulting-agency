import { Suspense } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import ScrollToTop from '@/components/scroll-to-top'
import UniversitiesHero from '@/components/universities/universities-hero'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { ErrorBoundary } from '@/components/ui/error-boundary'

// Lazy load heavy components for better performance
const TopUniversities = dynamic(() => import('@/components/universities/top-universities'), {
  loading: () => <LoadingSpinner size="lg" className="mx-auto my-20" />
})

const AdmissionInfo = dynamic(() => import('@/components/universities/admission-info'), {
  loading: () => <LoadingSpinner size="lg" className="mx-auto my-20" />
})

const GrantsInfo = dynamic(() => import('@/components/universities/grants-info'), {
  loading: () => <LoadingSpinner size="lg" className="mx-auto my-20" />
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koreya Universitetlari - Middle Bridge',
  description: 'Koreya davlatidagi eng nufuzli universitetlar haqida to\'liq ma\'lumot. Qabul talablari, grantlar va o\'qish imkoniyatlari.',
  keywords: 'Koreya universitetlari, Seoul National University, KAIST, Yonsei, Korea University, Hanyang, POSTECH, grant, stipendiya',
  openGraph: {
    title: 'Koreya Universitetlari - Middle Bridge',
    description: 'Koreya davlatidagi eng nufuzli universitetlar haqida to\'liq ma\'lumot',
    type: 'website',
  }
}

export default function UniversitiesPage() {
  return (
    <ErrorBoundary>
      <div className={`${inter.className} min-h-screen bg-white`}>
        <Header />
        <main>
          <UniversitiesHero />
          <Suspense fallback={<LoadingSpinner size="lg" className="mx-auto my-20" />}>
            <TopUniversities />
          </Suspense>
          <Suspense fallback={<LoadingSpinner size="lg" className="mx-auto my-20" />}>
            <AdmissionInfo />
          </Suspense>
          <Suspense fallback={<LoadingSpinner size="lg" className="mx-auto my-20" />}>
            <GrantsInfo />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  )
}
