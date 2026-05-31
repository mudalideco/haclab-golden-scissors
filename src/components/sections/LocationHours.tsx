'use client'

import { MapPin, Clock, Phone } from 'lucide-react'
import dynamic from 'next/dynamic'

const MapEmbed = dynamic(
  () => import('@/components/sections/MapEmbed'),
  {
    loading: () => (
      <div className="h-full min-h-[300px] bg-[#1A1A1A] rounded-xl flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false,
  }
)

export function LocationHours() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#141414]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-accent mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#F5F0E8] leading-tight">
            Location &{' '}
            <span className="text-[#C9A84C]">Hours</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Info Side */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="text-[#F5F0E8] font-medium mb-1">Address</h3>
                  <p className="text-sm text-[#888888]">Plot 3B Main Street</p>
                  <p className="text-sm text-[#888888]">Jinja, Uganda</p>
                  <p className="text-xs text-[#C9A84C] mt-2">Downtown Jinja, Main Street</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F5F0E8] font-medium mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Monday – Saturday</span>
                      <span className="text-[#F5F0E8]">8:00 AM – 8:00 PM</span>
                    </div>
                    <div className="border-t border-[#2A2A2A] my-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Sunday</span>
                      <span className="text-[#F5F0E8]">10:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="text-[#F5F0E8] font-medium mb-1">Call Us</h3>
                  <a href="tel:+256703891047" className="text-sm text-[#C9A84C] hover:text-[#D4A843] transition-colors">
                    +256 703 891047
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href="https://maps.google.com/?q=Plot+3B+Main+Street+Jinja+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#D4A843] transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Map Side */}
          <div className="min-h-[400px] rounded-xl overflow-hidden border border-[#2A2A2A]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
