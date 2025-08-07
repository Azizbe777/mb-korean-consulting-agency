// Performance optimization utilities
import { memo } from 'react'

// Debounce function for search and form inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Lazy loading wrapper
export function withLazyLoading<T extends React.ComponentType<any>>(
  Component: T,
  fallback: React.ComponentType = () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
) {
  return memo(Component)
}

// Image optimization helper
export function getOptimizedImageUrl(
  src: string,
  width: number,
  height: number,
  quality: number = 75
): string {
  if (src.startsWith('/placeholder')) {
    return `${src}?height=${height}&width=${width}&quality=${quality}`
  }
  return src
}

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementRef, options])

  return isIntersecting
}
