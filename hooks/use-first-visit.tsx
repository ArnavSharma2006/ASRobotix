"use client"

import { useState, useEffect } from "react"

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisited")
    
    if (hasVisited) {
      setIsFirstVisit(false)
    } else {
      // Mark as visited for this session
      sessionStorage.setItem("hasVisited", "true")
    }
    
    setIsLoading(false)
  }, [])

  const markAsVisited = () => {
    setIsFirstVisit(false)
  }

  return { isFirstVisit, isLoading, markAsVisited }
} 