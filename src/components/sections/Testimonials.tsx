'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  name: string
  text: string
  rating: number
  source?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Mirko M.',
    text: 'I was visiting Jinja for 3 Days and got a Haircut from Ben. This Guy is so kind, I told him how I would like to have my cut done and he was nailing it! Would come here again! Highly recommended!',
    rating: 5,
  },
  {
    name: 'Saeed Bashir',
    text: 'Ben is skilled, friendly, and really takes his time to make sure the haircut looks perfect. His service is excellent and the atmosphere is great.',
    rating: 5,
  },
  {
    name: 'Karl Dahrn',
    text: 'Great haircut! Highly recommend!',
    rating: 5,
  },
  {
    name: 'Gopi Nathan',
    text: 'Good place and friendly staff. The service was prompt and professional.',
    rating: 4,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'text-[#C9A84C] fill-[#C9A84C]' : 'text-[#2A2A2A]'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power4.out', scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#141414]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            What Our{' '}
            <span className="text-[#C9A84C]">Clients Say</span>
          </h2>
        </div>

        <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card opacity-0 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#C9A84C]/20 transition-all duration-500"
            >
              <Quote className="w-6 h-6 text-[#C9A84C]/30 mb-4" />
              <p className="text-sm text-[#B0A898] leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto">
                <StarRating rating={t.rating} />
                <p className="text-sm font-medium text-[#F5F0E8] mt-2">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
