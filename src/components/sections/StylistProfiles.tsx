'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const stylists = [
  {
    name: 'Ben Ozzly',
    role: 'Founder & Master Barber',
    bio: 'With over 5 years of experience, Ben has built a reputation for precision fades, hot towel shaves, and unmatched attention to detail. He founded Golden Scissors to bring premium grooming to Jinja.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80',
    specialties: ['Skin Fades', 'Hot Towel Shaves', 'Beard Sculpting'],
    instagram: '#',
  },
  {
    name: 'Samuel K.',
    role: 'Senior Barber',
    bio: 'Samuel brings 3 years of barbering experience with a focus on classic cuts and modern styling. He is known for his calm demeanor and kid-friendly approach.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    specialties: ['Classic Cuts', 'Kids Haircuts', 'Styling'],
    instagram: '#',
  },
]

export function StylistProfiles() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Our Team
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Meet the Barbers
          </SplitReveal>
        </div>

        {/* Stylist Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stylists.map((stylist, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={stylist.image}
                  alt={`${stylist.name} — ${stylist.role} at Golden Scissors Salon`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {stylist.name}
                    </h3>
                    <p className="text-xs text-primary font-accent tracking-wider uppercase">
                      {stylist.role}
                    </p>
                  </div>
                  <a
                    href={stylist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-surface border border-border hover:border-primary/40 hover:text-primary transition-all duration-300"
                    aria-label={`${stylist.name} Instagram`}
                  >
                    <FaInstagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {stylist.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {stylist.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1 text-[10px] bg-primary/10 border border-primary/20 text-primary font-accent tracking-wider uppercase px-2.5 py-1 rounded-full"
                    >
                      <Star className="w-2.5 h-2.5" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
