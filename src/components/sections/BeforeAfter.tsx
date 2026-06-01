'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const transformations = [
  {
    before: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=500&q=80',
    label: 'Classic Fade',
  },
  {
    before: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80',
    label: 'Beard & Hair Makeover',
  },
  {
    before: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80',
    label: 'Skin Fade',
  },
]

export function BeforeAfter() {
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
            Transformations
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            See the Difference
          </SplitReveal>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
                {/* Before image (default) */}
                <Image
                  src={item.before}
                  alt={`Before — ${item.label}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* After image (shown on hover) */}
                <Image
                  src={item.after}
                  alt={`After — ${item.label}`}
                  fill
                  className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-accent tracking-wider uppercase">
                  <span className="text-muted-foreground group-hover:hidden">Before</span>
                  <span className="text-primary hidden group-hover:inline">After</span>
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                    <p className="text-xs text-primary font-medium">{item.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
