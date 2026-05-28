import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Services | Eduvora Consulting',
  description: 'Explore our comprehensive educational consulting services designed to transform institutions.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Strategic Planning & Institutional Development',
      description: 'We work with your leadership team to develop a comprehensive strategic plan that aligns with your mission, addresses market opportunities, and sets clear priorities for institutional growth.',
      benefits: [
        'Comprehensive institutional assessment',
        'Strategic roadmap development',
        'Market analysis and positioning',
        'Leadership alignment workshops',
        'Implementation planning and timeline',
      ],
    },
    {
      title: 'Curriculum Design & Academic Excellence',
      description: 'Our curriculum specialists design modern, engaging programs that meet industry standards, prepare students for future careers, and differentiate your institution.',
      benefits: [
        'Curriculum audit and redesign',
        'Learning outcomes alignment',
        'Program development from concept to launch',
        'Assessment framework design',
        'Industry partnership development',
      ],
    },
    {
      title: 'Quality Assurance & Continuous Improvement',
      description: 'Implement robust quality assurance systems that drive continuous improvement in teaching, learning, and institutional operations.',
      benefits: [
        'QA framework development',
        'Internal audit systems',
        'Student outcome tracking',
        'Faculty evaluation programs',
        'Institutional effectiveness reporting',
      ],
    },
    {
      title: 'Staff Development & Training',
      description: 'Empower your faculty and staff with modern pedagogical approaches, leadership skills, and best practices in educational delivery.',
      benefits: [
        'Faculty development programs',
        'Leadership training',
        'Teaching methodology workshops',
        'Digital literacy training',
        'Change management support',
      ],
    },
    {
      title: 'Technology Integration & Digital Transformation',
      description: 'Seamlessly integrate technology into your teaching, learning, and administrative processes to enhance efficiency and student experience.',
      benefits: [
        'Technology audit and planning',
        'LMS implementation and training',
        'Digital learning strategy',
        'Infrastructure assessment',
        'Change management for tech adoption',
      ],
    },
    {
      title: 'Accreditation Support & Compliance',
      description: 'Navigate accreditation processes with confidence. Our experts provide comprehensive support through preparation, documentation, and continuous compliance.',
      benefits: [
        'Accreditation readiness assessment',
        'Documentation support',
        'Self-study coordination',
        'Standards alignment',
        'Post-accreditation improvement planning',
      ],
    },
  ]

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
                    alt="Contact Eduvora"
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
                        Our Services
                      </h1>
        
                  <p className="text-lg text-white/80 max-w-2xl">
                                 Comprehensive consulting solutions tailored to elevate your institution to new heights of excellence.
                  </p>
                </div>
              </div>
        
          </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
                >
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                          Expected Outcomes
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>✓ Measurable institutional improvement</li>
                          <li>✓ Increased stakeholder satisfaction</li>
                          <li>✓ Enhanced competitive positioning</li>
                          <li>✓ Sustainable growth and stability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-card py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Our Methodology
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven, collaborative approach that ensures lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Assessment', description: 'Deep dive into your institution' },
                { step: '02', title: 'Strategy', description: 'Develop comprehensive solutions' },
                { step: '03', title: 'Implementation', description: 'Execute with expert support' },
                { step: '04', title: 'Sustainability', description: 'Ensure lasting change' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 text-center h-full">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Which Service Is Right For You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific challenges and find the perfect solution for your institution.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
