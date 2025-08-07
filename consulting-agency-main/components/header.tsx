'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 10)
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
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
        setIsMenuOpen(false)
      }
    }
  }

  const handleContactClick = () => {
    if (pathname !== '/') {
      if (typeof window !== 'undefined') {
        window.location.href = '/#contact'
      }
      return
    }
    scrollToSection('contact')
  }

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center cursor-pointer">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                MIDDLE BRIDGE
              </div>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
              MIDDLE BRIDGE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Bosh sahifa
            </Link>
            <Link href="/universities" className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Koreyada Universitetlar
            </Link>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Kurslar
            </button>
            <Link href="/korean-language" className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Koreys tili
            </Link>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Xizmatlar
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 text-sm transition-colors">
              Yangiliklar
            </button>
          </nav>

          {/* Contact Info & Social */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/middlebridgeconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/middlebridge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <TelegramIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <a href="tel:+998915671669" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 border border-blue-200 px-2 py-1.5 rounded-lg hover:bg-blue-100 hover:border-blue-300">
                +998 91 567 16 69
              </a>
            </div>
            <Button 
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg"
            >
              Bog'lanish
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Bosh sahifa
              </Link>
              <Link href="/universities" className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Koreyada Universitetlar
              </Link>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Kurslar
              </button>
              <Link href="/korean-language" className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Koreys tili
              </Link>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Xizmatlar
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Yangiliklar
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <a href="tel:+998915671669" className="text-blue-600 font-semibold bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-colors">
                    +998 91 567 16 69
                  </a>
                </div>
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
                >
                  Bog'lanish
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
