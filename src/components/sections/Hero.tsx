'use client'

import { useEffect, useRef } from 'react'
import { Scissors, ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger entrance for hero elements
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
          '.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background texture/gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,105,20,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-6 opacity-0">
              <Scissors className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span className="text-xs text-[#C9A84C] tracking-widest uppercase font-accent">
                Golden Scissors Salon
              </span>
            </div>

            {/* Headline with line-by-line reveal */}
            <h1 className="font-heading text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#F5F0E8]">
              <span className="block overflow-hidden">
                <span className="hero-title-line inline-block">Jinja&apos;s</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-title-line inline-block text-[#C9A84C]">Master Barber</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-6 text-lg sm:text-xl text-[#888888] max-w-lg leading-relaxed opacity-0">
              Precision cuts, flawless fades, and the perfect shave — by{' '}
              <span className="text-[#C9A84C] font-medium">Ben Ozzly</span> at
              Golden Scissors Salon, Main Street, Jinja.
            </p>

            {/* CTAs */}
            <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4 opacity-0">
              <MagneticButton>
                <a
                  href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-8 py-3.5 rounded-md text-base font-semibold hover:bg-[#D4A843] transition-all duration-300 gold-glow"
                >
                  Book via WhatsApp
                </a>
              </MagneticButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-medium text-[#F5F0E8] border border-[#2A2A2A] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300"
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
                <div className="absolute -inset-4 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-transparent" />
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80"
                    alt="Master Barber Ben Ozzly at Golden Scissors Salon"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="text-[10px] text-[#888888] tracking-[0.2em] uppercase font-accent">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-[#C9A84C] animate-fade-up" />
        </div>
      </div>
    </section>
  )
}
