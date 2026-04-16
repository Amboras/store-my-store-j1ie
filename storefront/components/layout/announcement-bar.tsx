'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[#2a1a0e] text-[#f5f0ea]">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs tracking-[0.15em] uppercase">
        <p>Complimentary shipping on orders over $150 &nbsp;&mdash;&nbsp; New season arrivals now in stock</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
