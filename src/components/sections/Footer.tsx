import { Scissors, MapPin, Phone, Clock, MessageSquare } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa6'

const footerLinks = {
  services: [
    { name: 'Premium Haircut', href: '#services' },
    { name: 'Skin Fade', href: '#services' },
    { name: 'Hot Towel Shave', href: '#services' },
    { name: 'Beard Grooming', href: '#services' },
  ],
  quickLinks: [
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 group mb-4">
              <Scissors className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-heading text-xl font-semibold text-foreground tracking-wide">
                Golden <span className="text-primary">Scissors</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Jinja&apos;s premier barber shop. Precision cuts, flawless fades, and
              premium grooming since 2020.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/256703891047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Main St, Jinja (Opposite Centenary Park)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+256703891047"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +256 703 891 047
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mon-Sat: 8AM-7PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Golden Scissors Salon. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
