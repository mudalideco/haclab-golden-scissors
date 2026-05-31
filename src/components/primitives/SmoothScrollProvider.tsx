'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.06, smoothWheel: true })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((t) => {
      lenis.raf(t * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((t) => lenis.raf(t * 1000))
    }
  }, [])

  return <>{children}</>
}
