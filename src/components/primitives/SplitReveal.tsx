'use client'

import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitRevealProps {
  children: string
  as?: keyof JSX.IntrinsicElements
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  ease?: string
  className?: string
  delay?: number
}

export function SplitReveal({
  children,
  as: Tag = 'span',
  type = 'chars',
  stagger = 0.06,
  duration = 1.1,
  ease = 'power4.out',
  className,
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const split = new SplitType(ref.current, { types: type })
    const items =
      type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines
    if (!items) return

    // Hide initially
    gsap.set(items, { yPercent: 110, opacity: 0 })

    const ctx = gsap.context(() => {
      gsap.to(items, {
        yPercent: 0,
        opacity: 1,
        stagger,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          once: true,
        },
      })
    })

    return () => {
      ctx.revert()
      split.revert()
    }
  }, [type, stagger, duration, ease, delay])

  const TagElement = Tag as keyof JSX.IntrinsicElements
  return (
    <TagElement ref={ref as unknown as React.Ref<HTMLElement>} className={className} style={{ overflow: 'hidden' }}>
      {children}
    </TagElement>
  )
}
