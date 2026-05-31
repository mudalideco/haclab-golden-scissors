'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How can I book an appointment?',
    answer: 'Just tap the "Book Now" button on our site — it opens WhatsApp directly. Tell Ben your preferred time and service, and he\'ll confirm. Easy as that.',
  },
  {
    question: 'What types of fades can you do?',
    answer: 'Ben specializes in all types of fades — low, mid, high, taper, skin, and burst fades. Bring a reference photo or describe your style, and he\'ll make it happen.',
  },
  {
    question: 'Is hair washing included?',
    answer: 'Yes! Every cut at Golden Scissors starts with a fresh wash. It\'s part of our commitment to cleanliness and giving you the best cut possible.',
  },
  {
    question: 'Do you offer home services?',
    answer: 'Currently, all services are provided at our salon on Plot 3B Main Street, Jinja. Walk-ins are welcome, but booking ahead is recommended.',
  },
  {
    question: 'What are your opening hours?',
    answer: 'We\'re open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM.',
  },
  {
    question: 'Where is your salon located?',
    answer: 'We\'re at Plot 3B Main Street, Jinja, Uganda — right in the heart of downtown. Easy to find, with plenty of street parking nearby.',
  },
  {
    question: 'Are your tools sanitized?',
    answer: 'Absolutely. Every tool is sterilized before each client. We use hospital-grade disinfectants and fresh towels for every service.',
  },
  {
    question: 'Do you offer piercings?',
    answer: 'Yes, we offer professional piercing services at 30,000 UGX. All equipment is sterilized and single-use needles are used for safety.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            FAQ
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            Got{' '}
            <span className="text-[#C9A84C]">Questions?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#C9A84C]/20"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-[#F5F0E8] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-4 text-sm text-[#888888] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
