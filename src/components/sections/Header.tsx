'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Scissors } from 'lucide-react'
import { MagneticButton } from '@/components/primitives/MagneticButton'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Location', href: '#location' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#2A2A2A] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Scissors className="w-5 h-5 text-[#C9A84C] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-heading text-xl font-semibold text-[#F5F0E8] tracking-wide">
              Golden <span className="text-[#C9A84C]">Scissors</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#888888] hover:text-[#C9A84C] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <MagneticButton>
              <a
                href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#D4A843] transition-all duration-300 gold-glow"
              >
                Book Now
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#0A0A0A]/98 backdrop-blur-xl lg:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center gap-8 h-full px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-[#F5F0E8] hover:text-[#C9A84C] transition-colors duration-300 font-heading"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/256703891047?text=Hi%20Ben!%20I'd%20like%20to%20book%20a%20haircut."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#C9A84C] text-[#0A0A0A] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#D4A843] transition-all duration-300 gold-glow"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
