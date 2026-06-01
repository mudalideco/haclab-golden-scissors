'use client'

import { useRef } from 'react'
import { ShieldCheck, SprayCanIcon as Spray, Thermometer, HandHeart } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const standards = [
  {
    icon: ShieldCheck,
    title: 'Sterilized Tools',
    desc: 'Every clipper, comb, and razor is sterilized in a UV cabinet after each client.',
  },
  {
    icon: Spray,
    title: 'Sanitized Stations',
    desc: 'Barber chairs, counters, and mirrors are disinfected between every appointment.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Checks',
    desc: 'Health checks conducted daily for all staff. Your safety is our priority.',
  },
  {
    icon: HandHeart,
    title: 'Client Wellness',
    desc: 'Hand sanitizer provided at entry. Masks available on request for all clients.',
  },
]

export function HygieneSafety() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Your Safety
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Hygiene & Safety First
          </SplitReveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="bg-surface border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
