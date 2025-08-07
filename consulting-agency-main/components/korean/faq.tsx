'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "1. Darslar jadvali qanday?",
      answer: "Darslar haftada 3 marta, har bir dars 2 soatdan bo'lib o'tkaziladi. Ertalabki va kechki guruhlar mavjud. Sizga qulay vaqtni tanlashingiz mumkin."
    },
    {
      question: "2. Kursga qanday ro'yxatdan o'tiladi?",
      answer: "Ro'yxatdan o'tish uchun bizga qo'ng'iroq qiling yoki ofisimizga tashrif buyuring. Dastlabki test orqali sizning darajangizni aniqlaymiz va mos guruhga joylashtirамiz."
    },
    {
      question: "3. Imtihonlar va imtixon oldi sinovlar qanday o'tkaziladi?",
      answer: "Har oyda progress testlari o'tkaziladi. TOPIK imtihoniga tayyorgarlik maxsus dastur bo'yicha olib boriladi. Mock testlar va amaliy mashqlar muntazam ravishda tashkil etiladi."
    },
    {
      question: "4. Kurs narxi va to'lov imkoniyatlari qanday?",
      answer: "Kurs narxi darajaga va davomiylikka bog'liq. Oylik to'lov imkoniyati mavjud. Batafsil ma'lumot uchun biz bilan bog'laning."
    },
    {
      question: "5. TOPIK imtihoniga tayyorlaydimi?",
      answer: "Ha, bizning kurslarimiz TOPIK imtihoniga maxsus tayyorlaydi. Barcha darajalar uchun (TOPIK I va TOPIK II) alohida dasturlar mavjud."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tez-tez So'raladigan Savollar</h2>
          <p className="text-gray-600 text-lg">Kurslarimiz haqida eng ko'p so'raladigan savollar va javoblar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Boshqa savollaringiz bormi?</h3>
            <p className="text-blue-100 mb-6">
              Bizning mutaxassislarimiz barcha savollaringizga javob berishga tayyor
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Bog'lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
