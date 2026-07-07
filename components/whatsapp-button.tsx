'use client'

import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919653775779?text=Hello%20EduVora%20Consulting,%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl transition-all hover:scale-105"
    >
      <FaWhatsapp size={28} />
      <span className="font-medium hidden sm:block">
        Chat With Us
      </span>
    </a>
  )
}