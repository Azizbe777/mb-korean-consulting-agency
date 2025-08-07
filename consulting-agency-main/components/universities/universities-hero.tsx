import { memo } from 'react'

const UniversitiesHero = memo(function UniversitiesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Koreya <span className="text-blue-600">Universitetlari</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Koreya davlatidagi eng nufuzli universitetlar haqida to'liq ma'lumot. 
            Qabul talablari, grantlar va o'qish imkoniyatlari.
          </p>
        </div>
      </div>
    </section>
  )
})

export default UniversitiesHero
