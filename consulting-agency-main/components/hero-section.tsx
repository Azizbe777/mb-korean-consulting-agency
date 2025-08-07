'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="bg-gray-50 pt-24 pb-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-5xl font-bold leading-none tracking-tight">
                <span className="text-blue-600 block mb-1">MIDDLE BRIDGE</span>
                <span className="text-gray-900 block mb-1">ORZULARINGIZ VA</span>
                <span className="text-gray-900 block mb-1">KOREYA O'RTASIDAGI</span>
                <span className="text-blue-600 block">OLTIN KO'PRIK.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Middle Bridge Consulting — bu talabalarni Koreya davlatidagi 
                nufuzli universitetlarda o'qishga tayyorlaydigan ixtisoslashgan 
                yordamchi. Biz Bakalavr, Magistratura, Til kurslari va Kasbiy 
                ta'lim yo'nalishlarida huquqiy taqdimotdan tortib, viza 
                olgunga bo'lgan barcha bosqichlarda birga yordam beramiz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                Bog'lanish
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('about')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Batafsil ma'lumot
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="bg-gray-300 rounded-2xl aspect-[4/3] overflow-hidden shadow-2xl">
              <img 
                src="/korean.avif"
                alt="Happy Male Student in Korea"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm">Muvaffaqiyatli talabalar</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
