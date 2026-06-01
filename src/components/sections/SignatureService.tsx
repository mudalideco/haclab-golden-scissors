'use client'

import Image from 'next/image'
import { Scissors, Star } from 'lucide-react'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'

export function SignatureService() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with deeper parallax */}
      <ParallaxLayer depth={0.3} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=1920&q=85"
          alt="Golden Scissors Salon interior — premium barber experience in Jinja"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 z-[1] bg-background/80 backdrop-blur-[2px]" />
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/30 mb-6">
          <Scissors className="w-7 h-7 text-primary" />
        </div>

        {/* Badge */}
        <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
          Signature Service
        </p>

        {/* Headline with SplitReveal */}
        <SplitReveal
          as="h2"
          type="words"
          stagger={0.04}
          duration={0.8}
          ease="power3.out"
          className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground max-w-3xl mx-auto"
        >
          The Golden Scissors Skin Fade
        </SplitReveal>

        {/* Sub-headline accent */}
        <p className="mt-2 text-primary font-accent text-sm tracking-widest uppercase">
          A Cut Above the Rest
        </p>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our signature skin fade is more than a haircut — it&apos;s a masterpiece. Using
          precision clipper work, seamless blending, and a meticulous finish, Ben delivers
          a fade that turns heads. Hot towel included.
        </p>

        {/* Key highlights */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {['Precision Blending', 'Hot Towel Finish', 'Lasting Shape'].map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Star className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground font-accent uppercase tracking-wider">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <MagneticButton>
            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20skin%20fade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
            >
              Book a Fade
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
