import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="bg-white py-4">
        <div className="max-w-8xl mx-auto px-2 sm:px-38 lg:px-40  ">
          <img src="/logo-footer.png" alt="EduVora Logo" className=" h-20 mb-0" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">EduVora Consulting</h3>
            <p className="text-white/80 mb-6">
              Transforming educational institutions through strategic guidance and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Kompally, Hyderabad - 500014</span>
              </div>
              <div className="flex items-center gap-3">

                <Mail size={18} />
                <a href="mailto:eduvoraconsulting@gmail.com" className="hover:text-accent transition-colors">
                   eduvoraconsulting@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+919653775779" className="hover:text-accent transition-colors">
                   +91-9653775779
                </a>
              </div>
                {/* social Media Links */}
                <div className="flex items-center gap-4 mt-4">
                  <a href=" https://www.instagram.com/EduVora_consulting?utm_source=qr&igsh=MTJvd3p6Z2l2cjYwMg==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                   <img src="/instagram.png" alt="Facebook" width={24} height={24} />
                  </a>
                  <a href=" https://www.linkedin.com/in/EduVora-consulting-749765411/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <img src="/linkedin.svg" alt="LinkedIn" width={27} height={27} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61591596517040" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <img src="/facebook.png" alt="Facebook" width={27} height={27} />
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
                {label: 'Our Approach', href: '/Excellence-Journey'},
                {label: 'Insights', href: '/insights'},
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/Privacy-Policy' },
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
            <Link
              href="/services"
              className="text-white/80 hover:text-accent transition-colors mb-4 inline-block"
            >
             
            <ul className="space-y-3">
              {[
                'Academic Excellence',
                'Leadership & Governance',
                'Human Capital',
                'Operational Effectiveness',
                'Financial Sustainability',
                'Future Readiness'
              ].map(service => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; {currentYear} EduVora Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
