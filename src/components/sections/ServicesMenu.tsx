'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Scissors, Star, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  title: string
  price: string
  description: string
  icon: typeof Scissors
  popular?: boolean
  waMessage: string
}

const services: Service[] = [
  {
    title: 'Clippers Only',
    price: '30,000 UGX',
    description: 'Full head clipper cut for a clean, sharp look. Quick, precise, and fresh.',
    icon: Scissors,
    waMessage: "Hi%20Ben!%20I'd%20like%20to%20book%20a%20Clippers%20Only%20cut%20(30%2C000%20UGX).",
  },
  {
    title: 'Clippers on Sides',
    price: '20,000 UGX',
    description: 'Precision fade on the sides for a fresh, defined style. Perfect for maintaining your look.',
    icon: Sparkles,
    waMessage: "Hi%20Ben!%20I'd%20like%20to%20book%20a%20Clippers%20on%20Sides%20cut%20(20%2C000%20UGX).",
  },
  {
    title: 'Clippers & Scissors',
    price: '40,000 UGX',
    description: 'The full experience — clippers and scissors for the perfect cut. Our most popular service.',
    icon: Star,
    popular: true,
    waMessage: "Hi%20Ben!%20I'd%20like%20to%20book%20the%20full%20Clippers%20%26%20Scissors%20experience%20(40%2C000%20UGX).",
  },
  {
    title: 'Piercing',
    price: '30,000 UGX',
    description: 'Quick and safe piercing with a professional piercing gun. Fresh and clean.',
    icon: Star,
    waMessage: "Hi%20Ben!%20I'd%20like%20to%20book%20a%20piercing%20(30%2C000%20UGX).",
  },
]

export function ServicesMenu() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power4.out', scrollTrigger: { trigger: '.services-grid', start: 'top 80%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            Premium Cuts,{' '}
            <span className="text-[#C9A84C]">Fair Prices</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`service-card opacity-0 group relative rounded-xl border ${
                  service.popular
                    ? 'border-[#C9A84C] bg-[#1A1A1A] shadow-lg shadow-[#C9A84C]/10'
                    : 'border-[#2A2A2A] bg-[#141414] hover:border-[#C9A84C]/30'
                } p-6 transition-all duration-500 hover:translate-y-[-4px]`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                  service.popular ? 'bg-[#C9A84C]/20' : 'bg-[#1A1A1A]'
                } group-hover:bg-[#C9A84C]/20 transition-colors duration-300`}>
                  <Icon className={`w-5 h-5 ${service.popular ? 'text-[#C9A84C]' : 'text-[#888888] group-hover:text-[#C9A84C]'} transition-colors duration-300`} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#F5F0E8] mb-1">{service.title}</h3>
                <p className="text-[#C9A84C] font-bold text-xl mb-3">{service.price}</p>
                <p className="text-sm text-[#888888] leading-relaxed mb-6">{service.description}</p>
                <a
                  href={`https://wa.me/256703891047?text=${service.waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                    service.popular
                      ? 'text-[#C9A84C] hover:text-[#D4A843]'
                      : 'text-[#888888] hover:text-[#C9A84C]'
                  }`}
                >
                  Book Now →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
