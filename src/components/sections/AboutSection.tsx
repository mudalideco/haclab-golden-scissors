'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Scissors, Sparkles, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const expertiseChips = [
  { icon: Scissors, label: 'Precision Cuts' },
  { icon: Sparkles, label: 'Expert Fades' },
  { icon: Award, label: 'Beard Grooming' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.about-image', start: 'top 80%', once: true } }
      )
      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.about-content', start: 'top 80%', once: true } }
      )
      gsap.fromTo(
        '.about-chip',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: '.about-chips', start: 'top 85%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="about-image opacity-0">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
              <div className="absolute inset-2 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80"
                  alt="Master barber Ben Ozzly at work in Golden Scissors Salon, Jinja"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C] rounded-tl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C] rounded-br" />
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content opacity-0">
            <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
              The Barber
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight mb-6">
              The Craft Behind{' '}
              <span className="text-[#C9A84C]">the Cut</span>
            </h2>

            <div className="space-y-4 text-[#888888] leading-relaxed">
              <p>
                Hey, I&apos;m <span className="text-[#F5F0E8] font-medium">Ben</span>. I&apos;ve been cutting hair for over 5 years and it&apos;s more than just a job to me — it&apos;s my craft.
              </p>
              <p>
                At Golden Scissors Salon in Jinja, I specialize in precision haircuts, flawless fades, and expert beard grooming. I combine traditional techniques with modern styles to make sure you leave my chair looking and feeling your best.
              </p>
              <p>
                Every cut starts with a fresh wash. Every tool is sanitized before each client. This isn&apos;t just a haircut — it&apos;s the <span className="text-[#C9A84C]">Golden Scissors experience</span>.
              </p>
            </div>

            {/* Expertise Chips */}
            <div className="about-chips flex flex-wrap gap-3 mt-8">
              {expertiseChips.map((chip, i) => {
                const Icon = chip.icon
                return (
                  <div
                    key={i}
                    className="about-chip opacity-0 inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span className="text-sm text-[#F5F0E8]">{chip.label}</span>
                  </div>
                )
              })}
            </div>

            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A84C] hover:text-[#D4A843] font-medium transition-colors duration-300 group"
            >
              Book with Ben
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
