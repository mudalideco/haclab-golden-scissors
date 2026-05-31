'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MessageSquare, MapPin, MessageCircle, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: MessageSquare,
    title: 'Book',
    description: 'Tap "Book Now" on WhatsApp and tell Ben your preferred time.',
  },
  {
    icon: MapPin,
    title: 'Arrive',
    description: 'Visit Golden Scissors on Plot 3B Main Street, Jinja.',
  },
  {
    icon: MessageCircle,
    title: 'Consult',
    description: 'Tell Ben your style — he\'ll recommend what suits you best.',
  },
  {
    icon: Sparkles,
    title: 'Cut',
    description: 'Sit back and enjoy a precision cut + wash. Fresh results.',
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.step-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power4.out', scrollTrigger: { trigger: '.steps-container', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#141414]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            How It Works
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            From Booking to{' '}
            <span className="text-[#C9A84C]">Fresh Cut</span>
          </h2>
        </div>

        <div className="steps-container relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/50 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="step-item opacity-0 relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#C9A84C]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C9A84C] text-[#0A0A0A] flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[#F5F0E8] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#888888] leading-relaxed max-w-[220px]">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
