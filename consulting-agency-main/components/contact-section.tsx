'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target
    const name = form.name.value
    const phone = form.phone.value
    const message = form.message.value
    const username = form.username.value

    const text = `\u2728 <b>Yangi xabar!</b>\n\n` +
      `\uD83D\uDC64 <b>Ism:</b> ${name}\n` +
      `\u260E\uFE0F <b>Tel:</b> ${phone}\n` +
      `\uD83D\uDCAC <b>Xabar:</b> ${message}\n` +
      `\uD83D\uDC64 <b>Telegram:</b> ${username}`

    const TOKEN = '8393217858:AAEJb5H0BiVntgxTrCKQGTUA_ficWOd1HEM'
    const CHAT_ID = '-1002670168375'

    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    })

    if (res.ok) {
      form.reset()
      setSubmitted(true)
    }
    setIsSubmitting(false)
  }

  if (!isClient) return null

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bog'lanish</h2>
          <p className="text-gray-600 text-lg">Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Xabar yuborish</h3>
            <p className="text-gray-600 mb-8">Bizga xabar yuboring va biz tez orada siz bilan bog'lanamiz</p>

            {submitted ? (
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle2 className="text-green-500 w-16 h-16 animate-bounce" />
                <p className="text-xl font-semibold text-green-600">Xabar yuborildi!</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Ism" className="rounded-xl h-12" required />
                  <Input name="phone" placeholder="Telefon raqami" className="rounded-xl h-12" required />
                </div>
                <Input name="username" placeholder="@username (ixtiyoriy)" className="rounded-xl h-12" />
                <Textarea name="message" placeholder="Xabar" rows={5} className="rounded-xl resize-none" required />
                <div className="w-full flex justify-center items-center mt-6">
                  <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50">
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
            )}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Bog'lanish ma'lumotlari</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Telefon</h4>
                  <a href="tel:+998993551669" className="text-blue-600 text-lg font-semibold hover:text-blue-700">+998 99 355 16 69</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                  <a href="mailto:mb.markaz2025@gmail.com" className="text-gray-600 hover:text-blue-600">mb.markaz2025@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Manzil</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Manzil: Jizzax shahar, Sh.Rashidov ko'chasi 7<br />
                    Mo'ljal: KOREAN SCHOOL "Imkon" savdo majmuasi, 5-qavat
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
