'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xanogwrj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden" data-testid="contact-hero">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/All-hero-bg.jpg" 
            alt="Contact EduVora"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0A1F44]/45" />
        </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h1
                className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                data-testid="contact-heading"
              >
                Get In Touch
              </h1>

          <p className="text-lg text-white/80 max-w-2xl">
            Let's discuss how EduVora can help strengthen your institution through
            academic excellence, efficient systems, and sustainable transformation.
          </p>
        </div>
      </div>

        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column: Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#111111] mb-6">
                  Contact Information
                </h2>
                <p className="text-base text-[#111111]/80 leading-relaxed mb-10">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your consulting needs.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-[#F5F5F5] p-4 border border-[#E5E5E5] flex-shrink-0">
                      <Phone size={24} className="text-[#0A1F44]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] mb-1">Phone</h3>
                      <p className="text-base text-[#111111]/80">+91-9653775779</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-[#F5F5F5] p-4 border border-[#E5E5E5] flex-shrink-0">
                      <Mail size={24} className="text-[#0A1F44]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] mb-1">Email</h3>
                      <p className="text-base text-[#111111]/80">eduvoraconsulting@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-[#F5F5F5] p-4 border border-[#E5E5E5] flex-shrink-0">
                      <MapPin size={24} className="text-[#0A1F44]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] mb-1">Location</h3>
                      <p className="text-base text-[#111111]/80">Kompally, Hyderabad - 500014</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <Card className="mt-12 bg-[#F5F5F5] p-8 border border-[#E5E5E5] rounded-none shadow-none">
                  <h3 className="text-lg font-bold text-[#111111] mb-4 uppercase tracking-wider">Office Hours</h3>
                  <div className="space-y-2 text-base text-[#111111]/80">
                    <div className="flex justify-between border-b border-[#E5E5E5] py-2">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] py-2">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column: Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#111111] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight"> Full Name * </label>
                      <input 
                        type="text" id="name" name="name" 
                        value={formData.name} onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0A1F44] text-base rounded-none transition-colors" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight"> Email Address * </label>
                      <input 
                        type="email" id="email" name="email" 
                        value={formData.email} onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0A1F44] text-base rounded-none transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight"> Phone Number </label>
                      <input 
                        type="tel" id="phone" name="phone" 
                        value={formData.phone} onChange={handleChange} 
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0A1F44] text-base rounded-none transition-colors" 
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight"> School / Organization </label>
                      <input 
                        type="text" id="organization" name="organization" 
                        value={formData.organization} onChange={handleChange} 
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0A1F44] text-base rounded-none transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#111111] mb-2 uppercase tracking-tight"> Message * </label>
                    <textarea 
                      id="message" name="message" 
                      value={formData.message} onChange={handleChange} 
                      required rows={5}
                      className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0A1F44] text-base resize-none rounded-none transition-colors" 
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white rounded-none py-7 text-base font-bold uppercase tracking-widest disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-4 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-4 text-sm font-medium">
                      Sorry, something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact CTA Section */}
        <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-6">
              Prefer an Immediate Discussion?
            </h2>
            <p className="text-lg text-[#111111]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              We're here to answer your questions and discuss how our consulting services can benefit your institution right away.
            </p>
            <Button 
              size="lg"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-none px-10 py-7 text-base font-bold shadow-lg"
              onClick={() => window.open('https://wa.me/919653775779?text=Hello! I would like to schedule a consultation.', '_blank')}
            >
              <MessageSquare size={20} className="mr-2" /> 
              Contact via WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}