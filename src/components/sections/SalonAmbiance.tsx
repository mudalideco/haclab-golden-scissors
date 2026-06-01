'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'

const ambianceImages = [
  {
    src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80',
    alt: 'Premium barber chair at Golden Scissors Salon',
    label: 'The Chairman\'s Chair',
  },
  {
    src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=600&q=80',
    alt: 'Barber workspace at Golden Scissors Jinja',
    label: 'Master Workstation',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',
    alt: 'Golden Scissors Salon interior design',
    label: 'Salon Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    alt: 'Grooming products display at Golden Scissors',
    label: 'Premium Products',
  },
]

export function SalonAmbiance() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            The Experience
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Step Into Our World
          </SplitReveal>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From the moment you walk in, Golden Scissors offers a premium barber
            experience — modern, clean, and crafted for your comfort.
          </p>
        </div>

        {/* Large Feature Image (wider, hero-like) */}
        <div className="relative w-full h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden border border-border/50 mb-6 group">
          <ParallaxLayer depth={0.2} className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=1400&q=85"
              alt="Golden Scissors Salon — premium barber experience"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="100vw"
            />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-2xl font-heading font-bold text-foreground">Main Street Studio, Jinja</p>
            <p className="text-sm text-muted-foreground">Where precision meets style</p>
          </div>
        </div>

        {/* Ambiance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ambianceImages.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-surface"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label on hover */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs text-foreground font-medium bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
