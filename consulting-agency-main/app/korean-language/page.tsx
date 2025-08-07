import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import ScrollToTop from '@/components/scroll-to-top'
import KoreanHero from '@/components/korean/korean-hero'
import CourseInfo from '@/components/korean/course-info'
import Teachers from '@/components/korean/teachers'
import ClassroomScenes from '@/components/korean/classroom-scenes'
import CourseResults from '@/components/korean/course-results'
import EnrollmentForm from '@/components/korean/enrollment-form'
import FAQ from '@/components/korean/faq'

const inter = Inter({ subsets: ['latin'] })

export default function KoreanLanguagePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <Header />
      <KoreanHero />
      <CourseInfo />
      <Teachers />
      <ClassroomScenes />
      <CourseResults />
      <EnrollmentForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
