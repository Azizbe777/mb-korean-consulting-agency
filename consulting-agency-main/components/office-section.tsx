export default function OfficeSection() {
  return (
    <section id="office" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map Image */}
          <div className="bg-gray-100 rounded-3xl aspect-[4/3] overflow-hidden shadow-xl">
            <img
              src="/map.jpg"
              alt="Office Map"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Office Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">BIZNING OFISIMIZ</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="font-bold text-blue-900 text-lg mb-3">ISHLASH VAQTI</h3>
                <p className="text-blue-700 text-lg">Dushanba-Shanba: 9:00-21:00</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="font-bold text-green-900 text-lg mb-3">MANZIL</h3>
                <p className="text-green-700 leading-relaxed">
                  Manzil: Jizzax shahar, Sh.Rashidov ko'chasi 7
                  <br />
                  (Mo'ljal: "Imkon" savdo majmuasi, 5-qavat)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
