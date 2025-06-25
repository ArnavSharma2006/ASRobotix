"use client"

import { ReactNode, useState } from "react"
import { VideoLoader } from "./video-loader"
import { useFirstVisit } from "../hooks/use-first-visit"

interface AppWrapperProps {
  children: ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const { isFirstVisit, isLoading, markAsVisited } = useFirstVisit()
  const [showContent, setShowContent] = useState(false)

  // Don't render anything while checking session storage
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const handleVideoComplete = () => {
    markAsVisited()
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <>
      {isFirstVisit && (
        <VideoLoader onLoadingComplete={handleVideoComplete} />
      )}
      <div className={
        isFirstVisit 
          ? showContent 
            ? "opacity-100 transition-opacity duration-1000 ease-in-out" 
            : "opacity-0 pointer-events-none"
          : "opacity-100"
      }>
        {children}
      </div>
    </>
  )
} 