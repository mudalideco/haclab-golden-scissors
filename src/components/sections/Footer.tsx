import { Scissors, MapPin, Phone, Clock } from 'lucide-react'
import { SiInstagram, SiFacebook, SiWhatsapp } from '@icons-pack/react-simple-icons'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-[#C9A84C]" />
              <span className="font-heading text-xl font-semibold text-[#F5F0E8] tracking-wide">
                Golden <span className="text-[#C9A84C]">Scissors</span>
              </span>
            </a>
            <p className="text-sm text-[#888888] leading-relaxed mb-4">
              Precision cuts, perfect fades.
            </p>
            <p className="text-xs text-[#555555]">
              Jinja&apos;s premier barbershop — master barber Ben Ozzly.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/benozzly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/10 transition-all duration-300 group"
                aria-label="Instagram @benozzly"
              >
                <SiInstagram className="w-4 h-4 text-[#888888] group-hover:text-[#C9A84C] transition-colors" />
              </a>
              <a
                href="https://facebook.com/GoldenScissorsSalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/10 transition-all duration-300 group"
                aria-label="Facebook Golden Scissors Salon"
              >
                <SiFacebook className="w-4 h-4 text-[#888888] group-hover:text-[#C9A84C] transition-colors" />
              </a>
              <a
                href="https://wa.me/256703891047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/10 transition-all duration-300 group"
                aria-label="WhatsApp Golden Scissors Salon"
              >
                <SiWhatsapp className="w-4 h-4 text-[#888888] group-hover:text-[#C9A84C] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0E8] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Services', 'Gallery', 'About', 'Location', 'FAQ'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-[#888888] hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0E8] mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+256703891047"
                  className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#C9A84C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
                  +256 703 891047
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#888888]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span>Plot 3B Main Street, Jinja</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0E8] mb-4 uppercase tracking-wider">
              Hours
            </h4>
            <div className="flex items-start gap-2 text-sm text-[#888888]">
              <Clock className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
              <div>
                <p>Mon–Sat: 8am–8pm</p>
                <p>Sun: 10am–6pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555555]">
            &copy; {new Date().getFullYear()} Golden Scissors Salon. All rights reserved.
          </p>
          <p className="text-xs text-[#555555]">
            Powered by{' '}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#C9A84C] transition-colors font-medium"
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
