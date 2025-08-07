'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://wa.me/998787775777', '_blank')
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      aria-label="WhatsApp bilan bog'lanish"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
