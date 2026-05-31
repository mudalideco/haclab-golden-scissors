'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SiInstagram } from '@icons-pack/react-simple-icons'

gsap.registerPlugin(ScrollTrigger)

const instaImages = [
  'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=300&q=80',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665666?w=300&q=80',
  'https://images.unsplash.com/photo-1593702288056-2c160f0c5faa?w=300&q=80',
  'https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=300&q=80',
  'https://images.unsplash.com/photo-1585747861115-d7dbb32bae7c?w=300&q=80',
  'https://images.unsplash.com/photo-1503951914875-452cb67b3c8e?w=300&q=80',
]

export function InstagramTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.insta-item',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power4.out', scrollTrigger: { trigger: '.insta-grid', start: 'top 85%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Social
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight mb-4">
            Follow the{' '}
            <span className="text-[#C9A84C]">Journey</span>
          </h2>
          <a
            href="https://instagram.com/benozzly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#888888] hover:text-[#C9A84C] transition-colors duration-300"
          >
            <SiInstagram className="w-4 h-4" />
            <span className="text-sm">@benozzly</span>
          </a>
        </div>

        <div className="insta-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instaImages.map((src, i) => (
            <div
              key={i}
              className="insta-item opacity-0 aspect-square rounded-lg overflow-hidden group relative"
            >
              <img
                src={src}
                alt={`Golden Scissors haircut portfolio ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <SiInstagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/benozzly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] text-[#F5F0E8] px-6 py-3 rounded-md text-sm font-medium hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-all duration-300"
          >
            <SiInstagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
