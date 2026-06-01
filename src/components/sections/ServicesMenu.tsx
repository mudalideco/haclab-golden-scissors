'use client'

import { useRef } from 'react'
import { Scissors, Sparkles, User, Award, Sun, Star } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'

const services = [
  {
    icon: Scissors,
    name: 'Premium Haircut',
    desc: 'Precision scissor & clipper cut tailored to your face shape and style preference.',
    price: 'UGX 25,000',
    popular: false,
  },
  {
    icon: User,
    name: 'Skin Fade',
    desc: 'The signature Golden Scissors fade — seamless, sharp, and built to impress.',
    price: 'UGX 35,000',
    popular: true,
  },
  {
    icon: Award,
    name: 'Hot Towel Shave',
    desc: 'A classic straight-razor shave with hot towels, pre-shave oil, and aftershave balm.',
    price: 'UGX 30,000',
    popular: false,
  },
  {
    icon: Sun,
    name: 'Beard Grooming',
    desc: 'Shape-up, line-up, and conditioning — your beard deserves the best treatment.',
    price: 'UGX 20,000',
    popular: false,
  },
  {
    icon: Sparkles,
    name: 'Hair Styling',
    desc: 'Professional styling for events, photoshoots, or everyday fresh looks.',
    price: 'UGX 20,000',
    popular: false,
  },
  {
    icon: Star,
    name: 'Kid\'s Haircut',
    desc: 'Patient, friendly cuts for children — making haircuts fun for the little ones.',
    price: 'UGX 15,000',
    popular: false,
  },
]

export function ServicesMenu() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Our Services
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Premium Grooming, Every Time
          </SplitReveal>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every service is performed with precision, care, and the highest quality
            products — because you deserve nothing less.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`group relative bg-background border ${
                  service.popular
                    ? 'border-primary/40'
                    : 'border-border hover:border-primary/30'
                } rounded-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-accent tracking-wider uppercase">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Service Name */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Price */}
                <p className="text-primary font-heading text-xl font-bold">{service.price}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <MagneticButton>
            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
            >
              Book Your Appointment
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
