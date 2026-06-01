'use client'

import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const testimonials = [
  {
    name: 'James K.',
    role: 'Regular Client',
    quote:
      'Ben gives the best fades in Jinja, hands down. The precision and attention to detail are unmatched. I walk in looking average and walk out feeling like a celebrity.',
    rating: 5,
  },
  {
    name: 'Michael S.',
    role: 'Business Owner',
    quote:
      'I drive from Kampala just to get my haircut at Golden Scissors. The hot towel shave is an experience — not just a service. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Peter W.',
    role: 'University Student',
    quote:
      'Affordable, professional, and the vibe is spot on. Been coming here for over a year and never once been disappointed. Golden Scissors is the real deal.',
    rating: 5,
  },
  {
    name: 'David O.',
    role: 'Fashion Enthusiast',
    quote:
      'The skin fade I got from Ben was clean — and I mean clean. He knows what works for your face shape and hair type. True craftsmanship.',
    rating: 5,
  },
]

export function Testimonials() {
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
            Testimonials
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            What Our Clients Say
          </SplitReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-surface border border-border rounded-xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-sm font-heading font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-[10px] text-muted-foreground font-accent tracking-wider uppercase">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
