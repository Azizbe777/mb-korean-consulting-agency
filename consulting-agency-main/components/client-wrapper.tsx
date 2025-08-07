'use client'

import { useEffect, useState } from 'react'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Ensure hydration is complete
    const timer = setTimeout(() => {
      setIsHydrated(true)
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div style={{ 
        visibility: 'hidden',
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        {children}
      </div>
    )
  }

  // Show content with smooth transition after hydration
  return (
    <div style={{ 
      opacity: isHydrated ? 1 : 0,
      transition: 'opacity 0.1s ease-in-out'
    }}>
      {children}
    </div>
  )
} 