'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '5+', label: 'Years of Craft' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '5000+', label: 'Haircuts Done' },
]

export function TrustStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const counters = countersRef.current
    if (!counters.length) return

    const ctx = gsap.context(() => {
      counters.forEach((el) => {
        if (!el) return
        const text = el.textContent || ''
        const numMatch = text.match(/[\d,]+/)
        if (!numMatch) return
        const target = parseInt(numMatch[0].replace(/,/g, ''), 10)

        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString() + (text.includes('+') ? '+' : '')
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-surface border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-heading text-[clamp(3rem,6vw,4.5rem)] font-bold text-primary leading-none mb-2">
                <span
                  ref={(el) => { countersRef.current[i] = el }}
                >
                  {stat.number}
                </span>
              </div>
              <div className="h-[2px] w-12 bg-primary/40 mx-auto mb-3 group-hover:w-20 transition-all duration-500" />
              <p className="text-sm sm:text-base text-muted-foreground font-accent tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
