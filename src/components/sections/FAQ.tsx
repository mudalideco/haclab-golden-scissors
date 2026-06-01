'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { SplitReveal } from '@/components/primitives/SplitReveal'

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Simply message us on WhatsApp at +256 703 891 047. Tell us your preferred service, date, and time, and Ben will confirm right away.',
  },
  {
    q: 'Do you accept walk-ins?',
    a: 'While we do accept walk-ins, we highly recommend booking ahead — especially on weekends — to avoid waiting.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, Mobile Money (MTN & Airtel), and bank transfers. All prices are in UGX.',
  },
  {
    q: 'How long does a haircut take?',
    a: 'A standard haircut takes 30-45 minutes. A skin fade or hot towel shave may take up to an hour for the full experience.',
  },
  {
    q: 'What if I don\'t like my haircut?',
    a: 'We offer free adjustments within 3 days. Just send us a message and we\'ll get you sorted.',
  },
  {
    q: 'Do you cut children\'s hair?',
    a: 'Yes! We love our younger clients. Kids\' haircuts start at UGX 15,000. We make it a fun and comfortable experience.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] text-primary font-accent tracking-[0.25em] uppercase mb-4">
            FAQ
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.04}
            duration={0.8}
            ease="power3.out"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            Common Questions
          </SplitReveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-surface border ${
                openIndex === i ? 'border-primary/40' : 'border-border'
              } rounded-xl overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-base font-medium text-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
