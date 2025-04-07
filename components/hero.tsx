"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercentage(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>

      {/* Scroll percentage indicator */}
      <div className="scroll-indicator">{scrollPercentage.toFixed(2)}%</div>

      <div className="container-custom text-center">
        <h1 className="text-2xl md:text-3xl font-medium mb-4">Hi, I am Ramu R 👋</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Crafting AI Solutions</h2>

        <div className="scroll-down">
          <span className="scroll-down-text">Scroll Down</span>
          <div className="scroll-down-line"></div>
          <ArrowDown className="h-4 w-4 mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

