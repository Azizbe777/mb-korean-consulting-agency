'use client'

import { useState, memo, useMemo, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { GraduationCap, MapPin, Users, Award, Calendar, DollarSign } from 'lucide-react'
import { UNIVERSITIES_DATA } from '@/lib/constants'

// Memoized University Card Component
const UniversityCard = memo(function UniversityCard({ 
  university, 
  onSelect 
}: { 
  university: typeof UNIVERSITIES_DATA[0], 
  onSelect: (university: typeof UNIVERSITIES_DATA[0]) => void 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{university.nameUz}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              {university.ranking}
            </span>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{university.location}</span>
            </div>
          </div>
        </div>
        <GraduationCap className="h-8 w-8 text-blue-600" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{university.students} talaba</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">Tashkil etilgan: {university.established}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{university.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Mashhur Dasturlar:</h4>
        <div className="flex flex-wrap gap-2">
          {university.programs.slice(0, 3).map((program, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {program}
            </span>
          ))}
          {university.programs.length > 3 && (
            <span className="text-blue-600 text-sm">+{university.programs.length - 3} ko'proq</span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-green-600" />
          <span className="text-sm font-semibold text-green-600">{university.tuition}</span>
        </div>
        <Button 
          onClick={() => onSelect(university)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
        >
          Batafsil
        </Button>
      </div>
    </div>
  )
})

// Memoized University Details Modal
const UniversityModal = memo(function UniversityModal({ 
  university, 
  isOpen, 
  onClose 
}: { 
  university: typeof UNIVERSITIES_DATA[0] | null, 
  isOpen: boolean, 
  onClose: () => void 
}) {
  if (!university) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            {university.nameUz}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">Reyting</h4>
              <p className="text-blue-700">{university.ranking}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-green-900 mb-2">Talabalar</h4>
              <p className="text-green-700">{university.students}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="font-bold text-purple-900 mb-2">O'quv haqi</h4>
              <p className="text-purple-700">{university.tuition}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Dasturlar</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {university.programs.map((program, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{program}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Qabul Talablari</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-2">Bakalavr</h5>
                <p className="text-gray-700 text-sm">{university.requirements.undergraduate}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-2">Magistratura</h5>
                <p className="text-gray-700 text-sm">{university.requirements.graduate}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Mavjud Stipendiyalar</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {university.grants.map((grant, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <span className="text-yellow-800 font-medium">{grant}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Qabul Davrlari</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-semibold text-blue-900 mb-2">Bahor Semestri</h5>
                <p className="text-blue-700">{university.admissions.spring}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h5 className="font-semibold text-green-900 mb-2">Kuz Semestri</h5>
                <p className="text-green-700">{university.admissions.fall}</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button 
              onClick={() => {
                onClose()
                window.location.href = '/#contact'
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full"
            >
              Ariza berish
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="px-8 py-3 rounded-full"
            >
              Yopish
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
})

const TopUniversities = memo(function TopUniversities() {
  const [selectedUniversity, setSelectedUniversity] = useState<typeof UNIVERSITIES_DATA[0] | null>(null)

  // Memoize universities data to prevent unnecessary re-renders
  const universities = useMemo(() => UNIVERSITIES_DATA, [])

  const handleUniversitySelect = (university: typeof UNIVERSITIES_DATA[0]) => {
    setSelectedUniversity(university)
  }

  const handleModalClose = () => {
    setSelectedUniversity(null)
  }

  return (
    <ErrorBoundary>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eng Yaxshi Universitetlar</h2>
            <p className="text-gray-600 text-lg">Koreya davlatidagi eng nufuzli universitetlar ro'yxati</p>
          </div>

          <Suspense fallback={<LoadingSpinner size="lg" className="mx-auto" />}>
            <div className="grid lg:grid-cols-2 gap-8">
              {universities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                  onSelect={handleUniversitySelect}
                />
              ))}
            </div>
          </Suspense>

          <UniversityModal
            university={selectedUniversity}
            isOpen={!!selectedUniversity}
            onClose={handleModalClose}
          />
        </div>
      </section>
    </ErrorBoundary>
  )
})

export default TopUniversities
