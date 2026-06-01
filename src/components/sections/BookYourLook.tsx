'use client'

import { useState } from 'react'
import { Scissors, Zap, Sparkles, ChevronRight, Check } from 'lucide-react'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const styleOptions = [
  { id: 'fade', label: 'Skin Fade', icon: Zap, desc: 'Seamless blending, sharp edges' },
  { id: 'beard', label: 'Beard Grooming', icon: Scissors, desc: 'Shape, trim, hot towel' },
  { id: 'classic', label: 'Classic Cut', icon: Scissors, desc: 'Scissor & clipper precision' },
  { id: 'premium', label: 'Full Package', icon: Sparkles, desc: 'Cut + shave + facial' },
]

export function BookYourLook() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Booking Flow */}
          <div>
            <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
              Book Your Look
            </p>

            <SplitReveal
              as="h2"
              type="words"
              stagger={0.04}
              duration={0.8}
              ease="power3.out"
              className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
            >
              Choose Your Style
            </SplitReveal>

            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Select what you need, and we&apos;ll take care of the rest. Every service
              includes a consultation with Ben.
            </p>

            {/* Style Cards */}
            <div className="mt-8 space-y-3">
              {styleOptions.map((style) => {
                const Icon = style.icon
                const isSelected = selectedStyle === style.id
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(201,168,76,0.15)]'
                        : 'border-border bg-background hover:border-primary/30 hover:bg-primary/5'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm transition-colors ${
                        isSelected ? 'text-primary' : 'text-foreground'
                      }`}>
                        {style.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{style.desc}</p>
                    </div>
                    {isSelected && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                    )}
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors ${
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </button>
                )
              })}
            </div>

            {/* Book CTA */}
            <div className="mt-8">
              <MagneticButton>
                <a
                  href={`https://wa.me/256703891047?text=${encodeURIComponent(
                    selectedStyle
                      ? `Hi Ben! I'd like to book a ${styleOptions.find(s => s.id === selectedStyle)?.label}.`
                      : "Hi Ben! I'd like to book a haircut."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow ${
                    !selectedStyle ? 'opacity-70' : ''
                  }`}
                >
                  Book Now{' '}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </MagneticButton>
              {!selectedStyle && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Select a style above to pre-fill your booking message
                </p>
              )}
            </div>
          </div>

          {/* Right: Visual / Trust Signals */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Gold-framed trust card */}
              <div className="relative border border-primary/20 rounded-2xl p-8 bg-background/60 backdrop-blur-sm">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-accent tracking-widest uppercase rounded-full">
                  Why Book Online
                </div>

                <div className="space-y-5 mt-4">
                  {[
                    { title: 'Skip the Queue', desc: 'Your appointment is reserved the moment you message' },
                    { title: 'Pick Your Time', desc: 'Morning, afternoon, or evening — you decide' },
                    { title: 'No Surprises', desc: 'Transparent pricing, confirmed before you arrive' },
                    { title: 'VIP Treatment', desc: 'Every booking gets the full Golden Scissors experience' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-heading font-bold text-primary">500+</p>
                    <p className="text-[10px] text-muted-foreground font-accent tracking-wider uppercase">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-heading font-bold text-primary">4.9</p>
                    <p className="text-[10px] text-muted-foreground font-accent tracking-wider uppercase">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
