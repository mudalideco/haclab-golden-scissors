'use client'

import { useRef } from 'react'
import { MessageSquare, Scissors, Star } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Book',
    desc: 'Message Ben on WhatsApp to pick your service and time slot. Quick, easy, and personal.',
  },
  {
    icon: Scissors,
    step: '02',
    title: 'Arrive & Relax',
    desc: 'Walk into our Main Street salon, grab a seat, and let the transformation begin.',
  },
  {
    icon: Star,
    step: '03',
    title: 'Walk Out Fresh',
    desc: 'Leave with a precision cut, a smile, and the confidence to take on anything.',
  },
]

export function HowItWorks() {
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
            How It Works
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Three Steps to Fresh
          </SplitReveal>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="text-center group">
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-primary/5 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Divider line (between steps) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[calc(80%)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <p className="text-[10px] text-primary font-accent tracking-widest uppercase mb-2">
                  Step {step.step}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
