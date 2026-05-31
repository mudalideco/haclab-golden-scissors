'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Scissors } from 'lucide-react'
import { MagneticButton } from '@/components/primitives/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-final-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.cta-final-content', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-[#0A0A0A]">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-final-content opacity-0">
          {/* Decorative scissor divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/50" />
            <Scissors className="w-5 h-5 text-[#C9A84C] rotate-[-45deg]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/50" />
          </div>

          <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#F5F0E8] leading-[1.05] mb-6">
            Ready for a{' '}
            <span className="text-[#C9A84C]">Fresh Look?</span>
          </h2>

          <p className="text-lg text-[#888888] max-w-lg mx-auto mb-10">
            Book your appointment in seconds on WhatsApp. Ben is ready when you are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 rounded-md text-lg font-semibold hover:bg-[#D4A843] transition-all duration-300 gold-glow"
              >
                Book Now on WhatsApp
              </a>
            </MagneticButton>
          </div>

          <p className="text-sm text-[#555555] mt-6">
            Or visit us at Plot 3B Main Street, Jinja
          </p>
        </div>
      </div>
    </section>
  )
}
