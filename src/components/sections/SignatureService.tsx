'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Droplets, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function SignatureService() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.signature-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.signature-content', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=80"
          alt="Barbershop workspace interior with premium tools"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="signature-content opacity-0">
            <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
              The Golden Touch
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight mb-6">
              Every Cut Starts{' '}
              <span className="text-[#C9A84C]">with a Wash</span>
            </h2>

            <p className="text-lg text-[#B0A898] leading-relaxed mb-8">
              At Golden Scissors, every service begins with a fresh hair wash. It&apos;s not just about cleanliness — it&apos;s about giving you the best canvas for the perfect cut.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Droplets className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-medium mb-1">Hair Wash Included</h4>
                  <p className="text-sm text-[#888888]">Every cut starts fresh with a premium wash and conditioning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-medium mb-1">Sanitized Tools. Every Time.</h4>
                  <p className="text-sm text-[#888888]">All equipment is sterilized before every cut. Your safety is non-negotiable.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20experience%20the%20Golden%20Scissors%20cut."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-8 py-3.5 rounded-md text-base font-semibold hover:bg-[#D4A843] transition-all duration-300 gold-glow"
            >
              Experience the Difference
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
