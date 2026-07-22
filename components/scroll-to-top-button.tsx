"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useMobileDetection } from "../hooks/use-mobile-detection"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { isTouchDevice } = useMobileDetection()

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: isTouchDevice ? "auto" : "smooth", // Use "auto" on touch devices for better performance
    })
    ;(async () => {
      const { trackEvent } = await import("@/lib/analytics")
      trackEvent({ action: "scroll_to_top", category: "Navigation" })
    })()
  }

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollThreshold = window.innerWidth < 768 ? 200 : 300
      const footer = document.getElementById("site-footer")
      const footerVisible =
        footer && footer.getBoundingClientRect().top < window.innerHeight

      if (window.pageYOffset > scrollThreshold && !footerVisible) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    toggleVisibility()

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility)

    // Clean up
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 sm:bottom-8 left-4 sm:left-8 z-50 p-2.5 sm:p-3 rounded-full bg-[#002776] text-white shadow-lg hover:bg-[#001d5c] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
    </>
  )
}
