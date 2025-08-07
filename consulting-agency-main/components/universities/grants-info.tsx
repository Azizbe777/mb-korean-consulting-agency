'use client'

import { memo } from 'react'
import { Award, DollarSign, Users, Globe } from 'lucide-react'
import { SCHOLARSHIP_DATA, GRANT_REQUIREMENTS } from '@/lib/constants'
import { ErrorBoundary } from '@/components/ui/error-boundary'

const ScholarshipCard = memo(function ScholarshipCard({ 
  scholarship 
}: { 
  scholarship: typeof SCHOLARSHIP_DATA[0] 
}) {
  const iconMap = {
    blue: <Award className="h-8 w-8" />,
    green: <DollarSign className="h-8 w-8" />,
    purple: <Users className="h-8 w-8" />,
    orange: <Globe className="h-8 w-8" />
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className={`bg-${scholarship.color}-100 p-4 rounded-xl text-${scholarship.color}-600`}>
          {iconMap[scholarship.color as keyof typeof iconMap]}
        </div>
        <span className={`bg-${scholarship.color}-100 text-${scholarship.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
          {scholarship.type}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{scholarship.name}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Qamrab olish</h4>
          <p className="text-gray-600 text-sm">{scholarship.coverage}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Miqdor</h4>
          <p className={`text-${scholarship.color}-600 font-bold`}>{scholarship.amount}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Muvofiqlik</h4>
        <p className="text-gray-600 text-sm">{scholarship.eligibility}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Imtiyozlar:</h4>
        <ul className="space-y-2">
          {scholarship.details.map((detail, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <div className={`w-2 h-2 bg-${scholarship.color}-500 rounded-full`}></div>
              <span className="text-gray-700 text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

const RequirementCard = memo(function RequirementCard({ 
  requirement 
}: { 
  requirement: typeof GRANT_REQUIREMENTS[0] 
}) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">{requirement.icon}</div>
      <h4 className="font-bold text-gray-900 mb-3">{requirement.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
    </div>
  )
})

const GrantsInfo = memo(function GrantsInfo() {
  return (
    <ErrorBoundary>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grantlar va Stipendiyalar</h2>
            <p className="text-gray-600 text-lg">Koreya universitetlarida o'qish uchun mavjud moliyaviy yordam dasturlari</p>
          </div>

          {/* Scholarships Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {SCHOLARSHIP_DATA.map((scholarship, index) => (
              <ScholarshipCard key={index} scholarship={scholarship} />
            ))}
          </div>

          {/* Requirements */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Grant Olish Talablari</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GRANT_REQUIREMENTS.map((req, index) => (
                <RequirementCard key={index} requirement={req} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-600 text-white rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Grant Uchun Ariza Bering!</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Bizning mutaxassislarimiz sizga eng mos grant dasturini tanlashda yordam beradi
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Bepul Maslahat Olish
              </button>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
})

export default GrantsInfo
