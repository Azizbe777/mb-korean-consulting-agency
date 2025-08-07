'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { submitContactForm } from '@/app/actions'
import { useToast } from '@/hooks/use-toast'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "Muvaffaqiyatli yuborildi!",
          description: "Tez orada siz bilan bog'lanamiz.",
        })
        // Reset form
        if (typeof document !== 'undefined') {
          const form = document.getElementById('contact-form') as HTMLFormElement
          form?.reset()
        }
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: "Xatolik yuz berdi",
        description: "Iltimos, qaytadan urinib ko'ring.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isClient) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bog'lanish</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bog'lanish</h2>
          <p className="text-gray-600 text-lg">Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Xabar yuborish</h3>
            <p className="text-gray-600 mb-8">Bizga xabar yuboring va biz tez orada siz bilan bog'lanamiz</p>
            
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  name="name"
                  placeholder="Ism" 
                  className="rounded-xl border-gray-200 focus:border-blue-500 h-12" 
                  required
                />
                <Input 
                  name="phone"
                  placeholder="Telefon raqami" 
                  className="rounded-xl border-gray-200 focus:border-blue-500 h-12" 
                  required
                />
              </div>
              <Textarea 
                name="message"
                placeholder="Xabar" 
                rows={5} 
                className="rounded-xl border-gray-200 focus:border-blue-500 resize-none" 
                required
              />
              <div className="w-full flex justify-center items-center mt-6">
  <Button 
    type="submit"
    disabled={isSubmitting}
    className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50"
  >
    {isSubmitting ? (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span>Yuborilmoqda...</span>
      </div>
    ) : (
      <div className="flex items-center space-x-2">
        <Send className="h-5 w-5" />
        <span>Yuborish</span>
      </div>
    )}
  </Button>
</div>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Bog'lanish ma'lumotlari</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Telefon</h4>
                  <a href="tel:+998787775777" className="text-blue-600 text-lg font-semibold hover:text-blue-700 transition-colors">
                    +998  99 355 16 69
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                  <a href="mailto:info.markaz2025@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors p-0">
                  mb.markaz2025@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Manzil</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Manzil: Jizzax shahar, Sh.Rashidov ko'chasi 7
                    <br />
                    Mo'ljal: KOREAN SCHOOL"Imkon" savdo majmuasi, 5-qavat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
