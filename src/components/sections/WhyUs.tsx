'use client'

import { useRef } from 'react'
import { Award, Clock, Sparkles, Shield, ThumbsUp, Zap } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const reasons = [
  {
    icon: Award,
    title: '5+ Years Experience',
    desc: 'Ben Ozzly brings years of mastery to every cut — not just hair, but craft.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    desc: 'We use only professional-grade products for healthier hair and a polished finish.',
  },
  {
    icon: Clock,
    title: 'No Waiting',
    desc: 'Book via WhatsApp and get seen at your exact appointment time. Your time matters.',
  },
  {
    icon: Shield,
    title: 'Hygiene First',
    desc: 'Every station is sterilized after each client. Your safety is non-negotiable.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    desc: 'Not happy with your cut? We\'ll fix it on the spot, no questions asked.',
  },
  {
    icon: Zap,
    title: 'Quick & Efficient',
    desc: 'In and out in 30-45 minutes without compromising quality. We respect your schedule.',
  },
]

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Why Golden Scissors
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Why Choose Us
          </SplitReveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={i}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
