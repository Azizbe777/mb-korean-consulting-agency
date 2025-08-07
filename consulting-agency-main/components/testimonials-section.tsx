const testimonials = [
  {
    name: 'Anvarov Sardor',
    initials: 'SA',
    university: 'Sejong Universiteti talabasi',
    text: 'Middle Bridge orqali Koreyaga kelganmdan so\'ng, juda xursandman. Hujjatlar jarayoni juda oson kechdi va har bir qadamda yordam berishdi. Ulaming maslahatlari bebaho edi. Hamma ga tavsiya qilaman!'
  },
  {
    name: 'Madaminbonu Karimova',
    initials: 'MK',
    university: 'Hanyang Universiteti talabasi',
    text: 'Til kursini tanlaydigan talabalarimizdan, Middle Bridge menga eng yaxshi kursni topishda va viza olishda ko\'maklashdi. Bir yil ichida koreya tilini mukammal o\'rgandim. Rahmat!'
  },
  {
    name: 'Jasur Tursunov',
    initials: 'JT',
    university: 'Tongmyong Magistranti',
    text: 'Magistraturaga hujjat topshirish juda murakkab jarayon edi. Middle Bridge jamoasi bilan ishlash professional, balki juda samimiy insonlar ekan. Muvaffaqiyatli qabul qilindim va hozir Tongmyongda o\'qiyapman.'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            STUDENTLAR FIKRLARI
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Bizning talabalarimiz nima deydi</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.university}</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-blue-600 text-4xl mb-2">"</div>
                <p className="text-gray-700 leading-relaxed italic">{testimonial.text}</p>
                <div className="text-blue-600 text-4xl text-right">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
