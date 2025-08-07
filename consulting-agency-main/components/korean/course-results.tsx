export default function CertificateSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            MIDDLE BRIDGE'DA — HAR BIR O'QUVCHI UCHUN NATIJA MUHIM!
          </h2>
          <h3 className="text-3xl font-bold text-blue-400">TOPIK va QABUL HUJJATLARI</h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* TOPIK Certificate */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <img
              src="/TOPIK Certificate.jpg"
              alt="TOPIK Certificate"
              className="w-full h-[500px] object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-gray-800">TOPIK Certificate</h4>
              <p className="text-gray-500 text-sm mt-2">
                Rasmiy koreys tili bo‘yicha sertifikat.
              </p>
            </div>
          </div>

          {/* University Admission */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <img
              src="/University Admission.jpg"
              alt="University Admission"
              className="w-full h-[500px] object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-gray-800">University Admission</h4>
              <p className="text-gray-500 text-sm mt-2">
                Koreya universitetidan qabul xati.
              </p>
            </div>
          </div>
        </div>

        {/* Motivatsion matn */}
        <div className="text-center mt-16">
          <div className="bg-blue-100 border border-blue-300 rounded-3xl shadow-md px-6 py-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Sizning Muvaffaqiyatingiz - Bizning G'ururimiz!
            </h3>
            <p className="text-blue-700 text-base">
              Har bir o'quvchimizning yutuqlari bizni yanada oldinga intilishga undaydi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
