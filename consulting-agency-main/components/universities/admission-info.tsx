'use client'

import { memo } from 'react'
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react'
import { ADMISSION_PERIODS, APPLICATION_STEPS } from '@/lib/constants'
import { ErrorBoundary } from '@/components/ui/error-boundary'

const AdmissionPeriodCard = memo(function AdmissionPeriodCard({ 
  period 
}: { 
  period: typeof ADMISSION_PERIODS[0] 
}) {
  const iconMap = {
    blue: <Calendar className="h-6 w-6" />,
    green: <Clock className="h-6 w-6" />
  }

  return (
    <div className={`bg-white rounded-3xl p-8 shadow-xl border-l-4 border-${period.color}-500`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className={`bg-${period.color}-100 p-3 rounded-xl text-${period.color}-600`}>
          {iconMap[period.color]}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{period.semester}</h3>
          <p className="text-gray-600">{period.startDate}da boshlanadi</p>
        </div>
      </div>
      <div className={`bg-${period.color}-50 p-6 rounded-xl`}>
        <h4 className={`font-semibold text-${period.color}-900 mb-2`}>Ariza Berish Davri</h4>
        <p className={`text-${period.color}-700 text-lg font-medium`}>{period.period}</p>
      </div>
    </div>
  )
})

const ApplicationStep = memo(function ApplicationStep({ 
  step, 
  index 
}: { 
  step: typeof APPLICATION_STEPS[0], 
  index: number 
}) {
  const iconMap = [
    <FileText className="h-6 w-6" />,
    <CheckCircle className="h-6 w-6" />,
    <Calendar className="h-6 w-6" />,
    <CheckCircle className="h-6 w-6" />
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
      <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {step.step}
      </div>
      <div className="pt-4">
        <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mb-4 w-fit">
          {iconMap[index]}
        </div>
        <h4 className="font-bold text-gray-900 mb-3">{step.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
})

const AdmissionInfo = memo(function AdmissionInfo() {
  return (
    <ErrorBoundary>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Qabul Jarayoni</h2>
            <p className="text-gray-600 text-lg">Universitetlarga qabul bo'lish uchun muhim sanalar va jarayonlar</p>
          </div>

          {/* Admission Periods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ADMISSION_PERIODS.map((period, index) => (
              <AdmissionPeriodCard key={index} period={period} />
            ))}
          </div>

          {/* Application Steps */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Ariza Berish Bosqichlari</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {APPLICATION_STEPS.map((step, index) => (
                <ApplicationStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
})

export default AdmissionInfo
