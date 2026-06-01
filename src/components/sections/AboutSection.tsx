'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { SplitReveal } from '@/components/primitives/SplitReveal'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80"
                alt="Ben Ozzly, master barber at Golden Scissors Salon Jinja"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-xl">
              <p className="text-xs font-accent tracking-wider uppercase">Master Barber</p>
              <p className="text-lg font-bold">5+ Years</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SplitReveal
              as="h2"
              type="words"
              stagger={0.04}
              duration={0.8}
              ease="power3.out"
              className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
            >
              Crafted by Precision, Driven by Passion
            </SplitReveal>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At <span className="text-primary font-medium">Golden Scissors Salon</span>,
                we believe a haircut is more than a service — it&apos;s a statement. Founded by{' '}
                <span className="text-primary font-medium">Ben Ozzly</span>, our salon
                brings together the timeless art of barbering with a modern, premium experience.
              </p>
              <p>
                From precision fades to classic hot towel shaves, every service at Golden
                Scissors is tailored to your style. We don&apos;t just cut hair — we sculpt
                confidence.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Philosophy', value: 'Precision in every snip' },
                { label: 'Specialty', value: 'Fades & Hot Towel Shaves' },
                { label: 'Location', value: 'Main Street, Jinja' },
                { label: 'Vibe', value: 'Premium & Relaxed' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-[10px] text-muted-foreground font-accent tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
