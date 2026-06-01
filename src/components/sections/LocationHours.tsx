'use client'

import { useRef } from 'react'
import { MapPin, Clock, Phone, Calendar } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'

export function LocationHours() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Visit Us
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Find Golden Scissors
          </SplitReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map / Location Card */}
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            {/* Map area */}
            <div className="aspect-[16/9] bg-surface relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d33.2025!3d0.4392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjYnMjEuMiJOIDMzwrAxMiw5MC4wIkU!5e0!3m2!1sen!2sug!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Scissors Salon location on Main Street, Jinja"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Golden Scissors Salon
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Main Street, Opposite Centenary Park
                    <br />
                    Jinja, Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-5">
            {/* Hours */}
            <div className="bg-background border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  Opening Hours
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday — Saturday</span>
                    <span className="text-foreground">8:00 AM — 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-foreground">10:00 AM — 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span className="text-foreground">10:00 AM — 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-background border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                  Call or WhatsApp
                </h3>
                <a
                  href="tel:+256703891047"
                  className="text-primary hover:underline text-sm"
                >
                  +256 703 891 047
                </a>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="bg-background border border-primary/30 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                  Ready for a Fresh Look?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Book your appointment in under 30 seconds.
                </p>
                <MagneticButton>
                  <a
                    href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
                  >
                    Book Now
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
