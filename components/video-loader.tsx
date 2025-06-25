"use client"

import { useState, useEffect, useRef } from "react"

interface VideoLoaderProps {
  onLoadingComplete: () => void
}

export function VideoLoader({ onLoadingComplete }: VideoLoaderProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setIsVideoEnded(true)
      setIsFadingOut(true)
      
      // Start fade out transition
      setTimeout(() => {
        onLoadingComplete()
      }, 1000) // Give time for fade out animation
    }

    const handleVideoCanPlay = async () => {
      try {
        await video.play()
        console.log("Video started playing")
      } catch (error) {
        console.error("Video autoplay failed:", error)
        // If autoplay fails, still proceed after a short delay
        setTimeout(() => {
          setIsVideoEnded(true)
          setIsFadingOut(true)
          setTimeout(() => onLoadingComplete(), 1000)
        }, 2000)
      }
    }

    const handleLoadedData = () => {
      console.log("Video loaded, attempting to play")
      handleVideoCanPlay()
    }

    // Add multiple event listeners to ensure video plays
    video.addEventListener("ended", handleVideoEnd)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("canplay", handleVideoCanPlay)

    // Fallback: if video doesn't start within 3 seconds, proceed anyway
    const fallbackTimer = setTimeout(() => {
      if (!isVideoEnded) {
        console.log("Video fallback triggered")
        setIsVideoEnded(true)
        setIsFadingOut(true)
        setTimeout(() => onLoadingComplete(), 1000)
      }
    }, 3000)

    return () => {
      video.removeEventListener("ended", handleVideoEnd)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("canplay", handleVideoCanPlay)
      clearTimeout(fallbackTimer)
    }
  }, [onLoadingComplete, isVideoEnded])

  const handleClick = async () => {
    const video = videoRef.current
    if (video && video.paused) {
      try {
        await video.play()
      } catch (error) {
        console.error("Manual play failed:", error)
      }
    }
  }

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: isFadingOut ? 'none' : 'auto' }}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading fallback with click hint */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 mb-2">Loading...</p>
          <p className="text-gray-500 text-sm">Click anywhere if video doesn't start</p>
        </div>
      </div>
    </div>
  )
} 