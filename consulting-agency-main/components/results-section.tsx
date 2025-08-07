'use client'

export default function ResultsSection() {
  const results = [
    { id: 1, name: 'ODINA', image: '/ODINA.png' },
    { id: 2, name: 'RAKHIM', image: '/RAKHIM.png' },
    { id: 3, name: 'VISOLA', image: '/VISOLA.png' }
  ]

  return (
    <section id="results" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">NATIJALARIMIZ!</h2>
          <p className="text-gray-300 text-lg">
            Bu yerda bizning yutuqlarimiz va talabalarimizning muvaffaqiyatlari
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="p-4 text-center bg-white">
                <p className="text-gray-800 font-semibold text-lg">{result.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
