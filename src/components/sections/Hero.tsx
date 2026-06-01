'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Scissors, ChevronDown, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.hero-title-line',
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          '.hero-featured',
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.6 },
          '-=0.6'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 0.6, duration: 0.6 },
          '-=0.2'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=85"
          alt="Golden Scissors Salon — premium barber studio on Main Street Jinja"
          fill
          className="object-cover scale-105"
          sizes="100vw"
          priority
        />
        {/* Dramatic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30" />
        {/* Gold accent glow */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-background/80 backdrop-blur-md border border-primary/20 rounded-full px-4 py-1.5 mb-6 opacity-0">
              <Scissors className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary tracking-widest uppercase font-accent">
                Golden Scissors Salon
              </span>
            </div>

            {/* Featured Style of the Month */}
            <div className="hero-featured inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-md px-3 py-1.5 mb-5 opacity-0">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] text-primary font-accent tracking-wider uppercase">
                Featured: The Executive Fade
              </span>
            </div>

            {/* Headline with line-by-line reveal */}
            <h1 className="font-heading text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
              <span className="block overflow-hidden">
                <span className="hero-title-line inline-block">Jinja&apos;s</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-title-line inline-block text-primary">Master Barber</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed opacity-0">
              Precision cuts, flawless fades, and the perfect shave — by{' '}
              <span className="text-primary font-medium">Ben Ozzly</span> at
              Golden Scissors Salon, Main Street, Jinja.
            </p>

            {/* CTAs */}
            <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4 opacity-0">
              <MagneticButton>
                <a
                  href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
                >
                  Book via WhatsApp
                </a>
              </MagneticButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-medium text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Side - Hero Portrait */}
          <div className="relative hidden lg:block">
            <ParallaxLayer depth={0.25} className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                {/* Gold accent frame */}
                <div className="absolute -inset-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Master Barber Ben Ozzly — Golden Scissors Salon Jinja"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-accent">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-primary animate-fade-up" />
        </div>
      </div>
    </section>
  )
}
