'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function PartnersSection() {
  const partners = [
    { name: 'Hanyang University', logo: 'HU', description: 'Engineering & Technology' },
    { name: 'Hallym University', logo: 'HL', description: 'Medicine & Liberal Arts' },
    { name: 'Tongmyong University', logo: 'TM', description: 'Maritime & Engineering' },
    { name: 'Sejong University', logo: 'SJ', description: 'Business & Hospitality' },
    { name: 'KAIST', logo: 'KT', description: 'Science & Technology' }
  ]

  // Duplicate logos to create infinite loop effect
  const infinitePartners = [...partners, ...partners]

  return (
    <section id="partners" className="py-20 bg-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Bizning Hamkor Universitetlar
        </h2>
        <p className="text-gray-300 text-lg">
          Koreya davlatidagi eng nufuzli universitetlar bilan hamkorlik
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear'
          }}
        >
          {infinitePartners.map((partner, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="h-20 flex items-center justify-center mb-3">
                <img
                  src={`/${partner.logo}.png`}
                  alt={partner.name}
                  className="w-16 h-16 object-contain rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-800">{partner.name}</h3>
              <p className="text-xs text-gray-500">{partner.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
