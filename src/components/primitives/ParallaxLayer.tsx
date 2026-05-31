'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxLayerProps {
  children: React.ReactNode
  depth?: number
  className?: string
}

export function ParallaxLayer({ children, depth = 0.3, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !el.parentElement) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -100 * depth,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [depth])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
