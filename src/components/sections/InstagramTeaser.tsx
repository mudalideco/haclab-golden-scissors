'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const instagramPosts = [
  {
    src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=300&q=80',
    alt: 'Fresh fade from Golden Scissors Salon — follow @goldenscissorsjinja',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&q=80',
    alt: 'Beard grooming transformation at Golden Scissors',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80',
    alt: 'New haircut styles from Ben Ozzly',
  },
  {
    src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=300&q=80',
    alt: 'Salon life at Golden Scissors Main Street Jinja',
  },
]

export function InstagramTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-1.5 mb-6">
            <FaInstagram className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-primary font-accent tracking-widest uppercase">
              @goldenscissorsjinja
            </span>
          </div>

          {/* Heading with SplitReveal */}
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.05}
            duration={0.75}
            ease="power3.out"
            className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight text-foreground"
          >
            Follow Us on Instagram
          </SplitReveal>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            See our latest cuts, styles, and salon moments. Tag us for a chance to be featured.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {instagramPosts.map((post, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden bg-background border border-border group"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <MagneticButton>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition-all duration-300 gold-glow"
            >
              <FaInstagram className="w-5 h-5" />
              Follow @goldenscissorsjinja
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
