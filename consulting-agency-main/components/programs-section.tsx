'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { GraduationCap, BookOpen, Award, Users, X } from 'lucide-react'

const programs = [
  {
    id: '01',
    title: 'Kasbiy Ta\'lim',
    icon: <GraduationCap className="h-8 w-8" />,
    features: [
      'Bu dastur Koreya uchun kasbiy texnik-hunar agentligi tomonidan qo\'llab-quvvatlanadi',
      '2 yildan 4-gacha quvvatlanadi yoki kollej darajasi diplomi',
      'Minimal til darajasi (TOPIK 1 yoki yuqori)',
      'Koreyada ishlashingiz ruxsat olib uchun eng to\'g\'ri huquqiy muhofaza'
    ],
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    details: {
      duration: '2-4 yil',
      requirements: 'TOPIK 1+, O\'rta ma\'lumot',
      cost: '$3,000 - $8,000',
      description: 'Koreya davlatidagi eng yaxshi kasbiy ta\'lim dasturlari. Texnik va hunar yo\'nalishlarida chuqur bilim olish imkoniyati.'
    }
  },
  {
    id: '02',
    title: 'Til Kursi',
    icon: <BookOpen className="h-8 w-8" />,
    features: [
      'Kimlar uchun: Koreya tilini o\'rganish, keyingi o\'qishni davom ettirish istagida bo\'lganlar Shartlar',
      ' 11-sinf guvohnomasi / shahodatnoma',
      'Minimal bank hisoboti (~5,000$ atrofida, o\'zgaradi)',
      'Koreys tilini o\'qish sohasi qo\'llanmaydi',
      'O\'qish muddati: 1 yil'
    ],
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    details: {
      duration: '6 oy - 2 yil',
      requirements: 'Hech qanday til talabi yo\'q',
      cost: '$4,000 - $6,000',
      description: 'Koreya tilini professional darajada o\'rganish. TOPIK imtihoniga tayyorgarlik va universitet qabul uchun til darajasini oshirish.'
    }
  },
  {
    id: '03',
    title: 'Bakalavr',
    icon: <Award className="h-8 w-8" />,
    features: [
      'Kimlar uchun: Maktabni tamomlaganlar, Koreyada oliy ta\'lim olish istagan bo\'lganlar',
      '11-sinf guvohnomasi yoki kollej darajasi diplomi',
      'IELTS (5.5+) yoki TOPIK 3 (darajasi o\'zgarmoqda)',
      'Motivatsion xat va tavsiyaoma',
      'Bank hisoboti va ota-ona ma\'lumotlari kabl-lar'
    ],
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    details: {
      duration: '4 yil',
      requirements: 'TOPIK 3+ yoki IELTS 6.0+',
      cost: '$2,000 - $12,000',
      description: 'Koreya universitetlarida bakalavr darajasida ta\'lim olish. Keng ko\'lamli mutaxassisliklar va yuqori sifatli ta\'lim.'
    }
  },
  {
    id: '04',
    title: 'Magistratura',
    icon: <Users className="h-8 w-8" />,
    features: [
      'Kimlar uchun: Bakalavr tugallagan va magistraturada o\'qishni istaganlar Shartlar',
      'Bakalavr diplomi va ilovasi (ingliz/koreya tilida)',
      'IELTS (6.0+) yoki TOPIK 3+',
      'Study plan (o\'quv plani) va 1-3 tavsiyaoma',
      'Passport, olla o\'zolari, sog\'liq haqida ma\'lumot'
    ],
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    details: {
      duration: '2 yil',
      requirements: 'Bakalavr diplomi, TOPIK 4+ yoki IELTS 6.5+',
      cost: '$3,000 - $5,000',
      description: 'Magistratura darajasida ilmiy tadqiqot va chuqur mutaxassislik. Koreya universitetlarining eng yuqori darajadagi dasturlari.'
    }
  }
]

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null)

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">BIZNING DASTURLAR</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Koreya davlatidagi eng yaxshi universitetlarda o'qish uchun to'liq dasturlar majmuasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.id} className={`${program.bgColor} ${program.textColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-2xl`}>
              <div className="absolute top-4 right-4 text-8xl font-bold opacity-10">
                {program.id}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-lg mt-1 opacity-70">•</span>
                      <span className="text-sm leading-relaxed opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => setSelectedProgram(program)}
                  variant="secondary" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Batafsil
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
              {selectedProgram?.icon}
              <span>{selectedProgram?.title}</span>
            </DialogTitle>
          </DialogHeader>
          
          {selectedProgram && (
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {selectedProgram.details.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Davomiyligi</h4>
                  <p className="text-blue-700">{selectedProgram.details.duration}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">Talablar</h4>
                  <p className="text-green-700">{selectedProgram.details.requirements}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-2">Narxi</h4>
                  <p className="text-purple-700">{selectedProgram.details.cost}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Dastur xususiyatlari:</h4>
                <ul className="space-y-2">
                  {selectedProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={() => {
                    setSelectedProgram(null)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full"
                >
                  Ariza berish
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedProgram(null)}
                  className="px-8 py-3 rounded-full"
                >
                  Yopish
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
