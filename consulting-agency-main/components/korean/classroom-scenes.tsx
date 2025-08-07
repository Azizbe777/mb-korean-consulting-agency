'use client'

export default function ClassroomScenes() {
  const stats = [
    { number: '1,000+', label: 'Sertifikatlar', icon: '🏆' },
    { number: '1,000+', label: 'Talabalar', icon: '👨‍🎓' },
    { number: '50+', label: 'Ustozlar', icon: '👩‍🏫' }
  ]

  const classrooms = [
    {
      title: 'Zamonaviy sinfxonalar',
      description: "Talabalar uchun barcha qulayliklarga ega, yaxshi va shinam o'quv xonalar.",
      image: 'Modern Classroom'
    },
    {
      title: "Innovatsion o'quv muhiti",
      description: "O'quv jarayonini samarali qilish uchun zamonaviy texnologiyalar bilan boyitilgan muhit.",
      image: 'Innovation Center'
    },
    {
      title: 'Qulay va Shinam muhit',
      description: "Talaba o'zini erkin va ilhomlangan his qiladigan o'quv maydoni.",
      image: 'Comfortable Environment'
    },
    {
      title: "Eng so'nggi standartlarga mos xonalar",
      description: "Ergonomik mebellar va zamonaviy vositalar bilan jihozlangan xonalar.",
      image: 'Modern Standards'
    },
    {
      title: 'Qulay va zamonaviylik uyi',
      description: "Zamonaviy va qulay o‘quv muhiti barcha zarur sharoitlar bilan.",
      image: 'Study Environment'
    },
    {
      title: "Yorug' va keng sinfxonalar",
      description: "Tabiiy yorug'lik tushadigan, keng va chiroyli o‘quv xonalar.",
      image: 'Bright Classrooms'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">
                {stat.icon}
              </div>
              <h4 className="text-blue-600 text-3xl font-extrabold">{stat.number}</h4>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-3">DARSLARDAN LAVHALAR</h2>
          <p className="text-gray-500">Bizning zamonaviy sinfxonalar va o'quv muhitimiz bilan tanishing</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {classrooms.map((classroom, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border"
            >
              <img
                src={`/${classroom.image}.jpg`}
                alt={classroom.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{classroom.title}</h3>
                <p className="text-gray-600 text-sm">{classroom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
