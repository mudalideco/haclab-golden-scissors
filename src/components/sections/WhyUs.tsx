'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Scissors, Sparkles, Star, ShieldCheck, MapPin, MessageSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const differentiators = [
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'Quality products for every hair type — we use only the best.',
  },
  {
    icon: Scissors,
    title: 'Precision Craft',
    description: 'Every cut is custom, not template. Your style, your rules.',
  },
  {
    icon: Star,
    title: 'Classic Meets Modern',
    description: 'Traditional barbering techniques blended with modern styles.',
  },
  {
    icon: ShieldCheck,
    title: 'Sanitized Tools',
    description: 'Every tool is cleaned and sterilized before each client.',
  },
  {
    icon: MapPin,
    title: 'Main Street Location',
    description: 'Easy to find in the heart of Jinja. Walk-ins welcome.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Booking',
    description: 'Book in seconds — no phone calls needed. Just tap and chat.',
  },
]

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power4.out', scrollTrigger: { trigger: '.why-grid', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Why Golden Scissors
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            Why Choose{' '}
            <span className="text-[#C9A84C]">Us</span>
          </h2>
        </div>

        <div className="why-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="why-card opacity-0 bg-[#141414] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#C9A84C]/20 hover:bg-[#1A1A1A] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#F5F0E8] mb-2">{item.title}</h3>
                <p className="text-sm text-[#888888] leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
