'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ShieldCheck, Droplets, SprayCan as Spray, Scissors } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const safetyPoints = [
  { icon: Scissors, text: 'Sanitized tools before every cut' },
  { icon: Droplets, text: 'Fresh towels for every client' },
  { icon: Spray, text: 'Clean workspace after each service' },
  { icon: ShieldCheck, text: 'Sterilized equipment for piercings' },
]

export function HygieneSafety() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.safety-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power4.out', scrollTrigger: { trigger: '.safety-list', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-[#141414] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, #C9A84C 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-[#C9A84C]" />
          </div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight mb-4">
            Your Safety <span className="text-[#C9A84C]">Matters</span>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl mx-auto">
            Cleanliness isn&apos;t optional — it&apos;s our standard. Every tool, every towel, every surface.
          </p>

          <div className="safety-list grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {safetyPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <div
                  key={i}
                  className="safety-item opacity-0 flex items-center gap-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-5 py-4"
                >
                  <Icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                  <span className="text-sm text-[#B0A898] text-left">{point.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
