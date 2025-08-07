'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

// Custom Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.14-.04-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z"/>
  </svg>
)

export default function Footer() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      if (typeof window !== 'undefined') {
        window.location.href = `/#${sectionId}`
      }
      return
    }
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleFreeAdviceClick = () => {
    if (pathname !== '/') {
      if (typeof window !== 'undefined') {
        window.location.href = '/#contact'
      }
      return
    }
    scrollToSection('contact')
  }

  if (!isClient) {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold inline-block">
                MIDDLE BRIDGE
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold inline-block">
              MIDDLE BRIDGE
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Orzuni katta, maqsadli aniq yoshlar uchun Middle Bridge — bu oddiy agentlik emas, bu Koreyada bilim sari ochilgan eshik.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/middlebridgeconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://t.me/middlebridge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TelegramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6">Xizmatlar</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">Biz Haqimizda</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="text-gray-300 hover:text-white transition-colors">Bizning dasturlar</button></li>
              <li><Link href="/universities" className="text-gray-300 hover:text-white transition-colors">Universitetlar</Link></li>
              <li><button onClick={() => scrollToSection('partners')} className="text-gray-300 hover:text-white transition-colors">Hamkorlar</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">O'quvchilar fikrlari</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6">Bog'lanish</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Manzil: Jizzax shahar, Sh.Rashidov ko'chasi 7
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+998787775777" className="text-gray-300 hover:text-white transition-colors">
                  +998 99 355 16 69
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info.markaz2025@gmail.com" className="text-gray-300 hover:text-white transition-colors p-0">
                  mb.markaz2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Free Advice */}
          <div>
            <h3 className="font-bold mb-6">Qo'shimcha</h3>
            <button 
              onClick={handleFreeAdviceClick}
              className="bg-blue-600 hover:bg-blue-700 p-6 rounded-2xl text-center w-full transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Plus className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <p className="text-sm font-semibold">Bepul maslahat</p>
              <p className="text-xs text-blue-200 mt-1">Bog'lanish uchun bosing</p>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Middle Bridge. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
