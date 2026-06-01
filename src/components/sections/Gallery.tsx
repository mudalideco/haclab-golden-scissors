'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Grid3x3 } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=600&q=80',
    alt: 'Precision haircut and fade by Golden Scissors Salon',
    category: 'Fades',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',
    alt: 'Professional beard grooming at Golden Scissors',
    category: 'Beard Grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    alt: 'Modern haircut styles by Ben Ozzly',
    category: 'Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
    alt: 'Ben Ozzly at work in Golden Scissors Salon Jinja',
    category: 'Behind the Scenes',
  },
  {
    src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80',
    alt: 'Golden Scissors Salon interior on Main Street Jinja',
    category: 'Salon',
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
    alt: 'Hot towel shave service at Golden Scissors',
    category: 'Shaves',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
    alt: 'Professional barber tools and products at Golden Scissors',
    category: 'Behind the Scenes',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    alt: 'Styling team at Golden Scissors Salon',
    category: 'Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80',
    alt: 'Creative hair designs by Ben Ozzly',
    category: 'Fades',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    alt: 'Salon ambiance at Golden Scissors Main Street',
    category: 'Salon',
  },
  {
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
    alt: 'Premium hair wash and conditioning service',
    category: 'Shaves',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    alt: 'Gentleman\'s grooming experience at Golden Scissors',
    category: 'Beard Grooming',
  },
]

const categories = ['All', 'Fades', 'Styling', 'Shaves', 'Beard Grooming', 'Behind the Scenes', 'Salon']

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            Our Work
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            See the Craft
          </SplitReveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-accent tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground border border-border hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square rounded-lg overflow-hidden bg-background border border-border hover:border-primary/40 transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Grid3x3 className="w-6 h-6 text-primary" />
              </div>
              {/* Category tag */}
              <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-primary font-accent tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 p-2 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full h-full mx-4">
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <p className="text-sm text-muted-foreground">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
