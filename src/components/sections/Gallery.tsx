'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=500&q=80',
    alt: 'Precision haircut fade style by Ben Ozzly',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1593702288056-2c160f0c5faa?w=500&q=80',
    alt: 'Modern taper haircut at Golden Scissors Salon',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665666?w=500&q=80',
    alt: 'Beard trim and grooming service Jinja',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=500&q=80',
    alt: 'Barbershop interior Golden Scissors Salon Main Street Jinja',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747861115-d7dbb32bae7c?w=500&q=80',
    alt: 'Professional barber at work in Golden Scissors',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452cb67b3c8e?w=500&q=80',
    alt: 'Hot towel shave experience barber service',
    span: '',
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power4.out', scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            See the{' '}
            <span className="text-[#C9A84C]">Craft</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item opacity-0 relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: img.span ? '400px' : '200px' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C9A84C]/50 rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                ← Previous
              </button>
              <span className="text-white/40 text-sm">{lightboxIndex + 1} / {galleryImages.length}</span>
              <button
                onClick={() => setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
