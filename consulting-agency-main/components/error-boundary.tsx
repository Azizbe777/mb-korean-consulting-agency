'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Suppress the error in production
    if (process.env.NODE_ENV === 'production') {
      return { hasError: true, error }
    }
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log in development, suppress in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // Prevent error from bubbling up
    if (process.env.NODE_ENV === 'production') {
      // Suppress the error completely in production
      return
    }
  }

  render() {
    if (this.state.hasError) {
      // In production, return null to hide the error completely
      if (process.env.NODE_ENV === 'production') {
        return null
      }
      
      // In development, show fallback or null
      return this.props.fallback || null
    }

    return this.props.children
  }
} 