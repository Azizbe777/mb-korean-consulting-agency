import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProgramsSection from '@/components/programs-section'
import PartnersSection from '@/components/partners-section'
import ResultsSection from '@/components/results-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import OfficeSection from '@/components/office-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import ScrollToTop from '@/components/scroll-to-top'
import LoadingSpinner from '@/components/loading-spinner'

const inter = Inter({ subsets: ['latin'] })

// Lazy load heavy components for better performance
const LazyHeroSection = () => (
  <Suspense fallback={<LoadingSpinner size="lg" className="h-96" />}>
    <HeroSection />
  </Suspense>
)

const LazyAboutSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <AboutSection />
  </Suspense>
)

const LazyProgramsSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <ProgramsSection />
  </Suspense>
)

const LazyPartnersSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <PartnersSection />
  </Suspense>
)

const LazyResultsSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <ResultsSection />
  </Suspense>
)

const LazyTestimonialsSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <TestimonialsSection />
  </Suspense>
)

const LazyContactSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <ContactSection />
  </Suspense>
)

const LazyOfficeSection = () => (
  <Suspense fallback={<LoadingSpinner size="md" className="h-64" />}>
    <OfficeSection />
  </Suspense>
)

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-white antialiased`}>
      <Header />
      <LazyHeroSection />
      <LazyAboutSection />
      <LazyProgramsSection />
      <LazyPartnersSection />
      <LazyResultsSection />
      <LazyTestimonialsSection />
      <LazyContactSection />
      <LazyOfficeSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
