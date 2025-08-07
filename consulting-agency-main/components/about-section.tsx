'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Globe } from 'lucide-react'

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "200+ Talaba",
      description: "Muvaffaqiyatli yuborilgan"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "8+ Yillik",
      description: "Tajriba va bilim"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "5+ Universitet",
      description: "Hamkor universitetlar"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            BIZ HAQIMIZDA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Bizning talabalarimiz nima deydi
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Biz Koreyada o'qishni orzu qilgan yoshlar uchun talabalarni Koreya davlatidagi nufuzli 
                universitetlarda o'qishga qabul qilish, Bakalavr, Magistratura, Til kurslari va Kasbiy 
                ta'lim yo'nalishlarida huquqiy taqdimotdan tortib, viza va yashash bo'yicha to'liq yordam beramiz. 
                Middle Bridge — orzular sari yo‘l ochadigan, maqsad va muvaffaqiyatni bog‘laydigan ishonchli ko‘prik!
              </p>
              
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">100% Kafolatlangan xizmat</span>
              </div>

              <Button 
                onClick={() => scrollToSection('programs')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Batafsil
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
