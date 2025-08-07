export default function Teachers() {
  const teachers = [
    {
      name: 'KHAMIDOV DILSHOD',
      description: 'Khamidov Dilshod — korean School sosialshisi, TOPIK 6 ball egasi va 7 yillik tajriba. Koreyada o\'qishni istaganlariga bepul konsultatsiya berib, talaba bo\'lguncha to\'liq ma\'lumotlashadi. Taribali, samimiy va ishonchli ustoz.',
      avatar: 'KD'
    },
    {
      name: 'TO\'LQINOV HAMIDJON',
      description: 'To\'lqinov Hamidjon — koreys tili ustozi, TOPIK 6 darajasiga ega. Darslarni samarali va tushunarlii bo\'lib, ko\'plab shogirdlari yuqori TOPIK natijalariga erishgan. Taribali va talabalarni natijaga yetaklayidigan foydali ustoz.',
      avatar: 'TH'
    },
    {
      name: 'BOSIMQULOV DONYOR',
      description: 'Bosimqulov Donyor — TOPIK 4 ball egasi, koreys tili darslarini qiziqarli va sodda tarzda olib boradi. O\'quvchilarni yuqori natijalarga yetaklayidigan tajribali va samarali ustoz.',
      avatar: 'BD'
    },
    {
      name: 'MAXKAMOV BOBURSHOX',
      description: 'Maxkamov Boburshox — koreys tilini o\'qitish bilasidan, talabalar bilan ishlash tajribasi bor. Har bir darsida o\'quvchilarni faollikka undaydi, murakkab mavzularni oddiy va tushunarlii qilib tushuntiradi.',
      avatar: 'MB'
    },
    {
      name: 'TIRKASHEVA SEVENCH',
      description: 'Tirkasheva Sevench — mehribon, sabrii va o\'z ishiga masuliyat bilan yondashuvchi individual va\'bor beradi, darslarni tushunarlii va ila muhtida olib boradi. Til o\'rganishini oson va yoqimli qiladigan ustozlardan biri.',
      avatar: 'TS'
    },
    {
      name: 'LAPASOVA FARANGIZ',
      description: 'Lapasova Farangiz — koreys tilini mukammal o\'rgatadigan, foydali va qayratli ustoz. Darslarni qiziqarli, tushunarlii va natijaga yo\'naltirilgan. Har bir o\'quvchining moyalashiga alohida yordamshadi. Til o\'rganishda motivatsiya beradigan ilhomlantiruvchl o\'qituvchi.',
      avatar: 'LF'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">BIZNING KOREYS TILI USTOZLARIMIZ</h2>
          <p className="text-gray-600 text-lg">TANISHIB CHIQING!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {teacher.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{teacher.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
