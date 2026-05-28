'use client'

import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
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