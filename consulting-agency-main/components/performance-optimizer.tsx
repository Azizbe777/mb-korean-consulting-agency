'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize performance and prevent any development indicators
    if (typeof window !== 'undefined') {
      // Remove any existing performance marks that might cause issues
      if (window.performance && window.performance.clearMarks) {
        window.performance.clearMarks()
      }
      
      // Optimize memory usage
      if (window.gc) {
        // Force garbage collection if available
        window.gc()
      }
      
      // Prevent any development tools from loading
      const preventDevTools = () => {
        // Remove any React DevTools
        const devToolsElements = document.querySelectorAll('[data-reactroot], [data-reactid]')
        devToolsElements.forEach(el => {
          if (el.classList.contains('react-devtools')) {
            el.remove()
          }
        })
        
        // Remove any Next.js development overlays
        const nextjsOverlays = document.querySelectorAll('[data-nextjs-dev-overlay], [data-nextjs-error-overlay]')
        nextjsOverlays.forEach(el => el.remove())
      }
      
      // Run immediately and set up observer
      preventDevTools()
      
      const observer = new MutationObserver(preventDevTools)
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
      
      // Cleanup observer on unmount
      return () => observer.disconnect()
    }
  }, [])

  return null
} 