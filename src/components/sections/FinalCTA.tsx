'use client'

import { useRef } from 'react'
import { MessageSquare } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <SplitReveal
          as="h2"
          type="words"
          stagger={0.05}
          duration={0.9}
          ease="power3.out"
          className="font-heading text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight text-foreground"
        >
          Ready to Look Your Best?
        </SplitReveal>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Your perfect cut is one message away. Book your appointment at
          Golden Scissors Salon and walk out looking and feeling your absolute best.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>
            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
            >
              <MessageSquare className="w-5 h-5" />
              Book on WhatsApp
            </a>
          </MagneticButton>
          <a
            href="tel:+256703891047"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-medium text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Call +256 703 891 047
          </a>
        </div>
      </div>
    </section>
  )
}
