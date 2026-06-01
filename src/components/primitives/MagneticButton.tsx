'use client'

import { useRef } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
}

export function MagneticButton({
  children,
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35
    gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' })
  }

  const handleLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  )
}
