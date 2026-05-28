import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Eduvora Consulting</h3>
            <p className="text-white/80 mb-6">
              Transforming educational institutions through strategic guidance and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:hello@eduvora.com" className="hover:text-accent transition-colors">
                  hello@eduvora.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Strategic Planning',
                'Curriculum Development',
                'Staff Training',
                'Technology Integration',
                'Quality Assurance',
                'Accreditation Support',
              ].map(service => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; {currentYear} Eduvora Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
