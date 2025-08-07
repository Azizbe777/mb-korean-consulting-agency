export default function CourseInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Kurs haqida umumiy ma'lumot!</h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Middle Bridge Koreys tili kurslari sizni mutlaqo yangi bosqichga olib chiqadi! 
              Bizda boshlang'ich darajadan tortib professional darajagacha barcha qurulud. Har bir 
              o'quvchining bilim darajasidan qat'i nazar, siz uchun to'g'ri yo'nalishni topamiz.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Darslarimiz malakali, boy tajribaga ega bo'lgan professional ustozlar tomonidan olib boriladi. O'qituvchilarimiz 
              nafaqat tilni mukammal biladi, balki uni sizga tushunarli, qiziqarli va natijaga yo'naltirilgan usulda o'rgatadi. 
              Bizning maqsadimiz — sizni qisqa vaqt ichida koreys tilida erkin so'zlashadigan, tushunudigan va yuksak 
              natijalarga erishadigan darajaga olib chiqish.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Bizning Afzalliklarimiz</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Ustozlar</h4>
                  <p className="text-gray-600 text-sm">Tajribali va malakali o'qituvchilar</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Yondashuv</h4>
                  <p className="text-gray-600 text-sm">Har bir talaba uchun maxsus dastur</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kafolatlangan Natija</h4>
                  <p className="text-gray-600 text-sm">TOPIK imtihonida yuqori natijalar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
