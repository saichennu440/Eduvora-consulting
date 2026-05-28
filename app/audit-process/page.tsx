import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Audit Process | Eduvora Consulting',
  description: 'A proven, structured methodology that delivers measurable transformation results for educational institutions.',
}

export default function AuditProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: "We begin with an initial consultation to understand your institution's unique needs, challenges, and goals. This discovery phase helps us tailor our approach to your specific context.",
      details: [
        'Stakeholder interviews with leadership team',
        'Review of current systems and documentation',
        'Identification of key focus areas',
        'Alignment on objectives and scope'
      ]
    },
    {
      number: '02',
      title: 'Audit',
      description: 'Our expert consultants conduct a comprehensive on-site assessment of your academic systems, HR processes, and operational procedures.',
      details: [
        'Classroom observations and teaching assessments',
        'Document and policy review',
        'Staff and student interviews',
        'Data collection and analysis'
      ]
    },
    {
      number: '03',
      title: 'Analysis',
      description: 'We analyze all gathered data against best practices and industry benchmarks, identifying strengths, gaps, and opportunities for improvement.',
      details: [
        'Comparative benchmarking analysis',
        'Gap identification and prioritization',
        'Root cause analysis of key issues',
        'Opportunity assessment and recommendations'
      ]
    },
    {
      number: '04',
      title: 'Reporting',
      description: 'You receive a detailed report with clear findings, actionable insights, and prioritized recommendations tailored to your institution.',
      details: [
        'Comprehensive audit findings document',
        'Visual dashboards and data presentations',
        'Prioritized improvement recommendations',
        'Presentation to leadership team'
      ]
    },
    {
      number: '05',
      title: 'Improvement Plan',
      description: 'Together, we develop a strategic roadmap for transformation—complete with timelines, milestones, and success metrics.',
      details: [
        'Phased implementation roadmap',
        'Resource allocation planning',
        'Timeline and milestone definition',
        'Success metrics and KPIs'
      ]
    },
    {
      number: '06',
      title: 'Monitoring & Support',
      description: 'We provide ongoing monitoring, guidance, and support to ensure successful implementation and sustainable results.',
      details: [
        'Regular progress reviews and check-ins',
        'Implementation support and troubleshooting',
        'Staff training and capacity building',
        'Continuous improvement recommendations'
      ]
    }
  ];

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
                                   Our Audit Process
                              </h1>
                
                          <p className="text-lg text-white/80 max-w-2xl">
                                          A proven, structured methodology that delivers measurable transformation results.
                          </p>
                        </div>
                      </div>
                
          </section>

        {/* Process Steps */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Vertical Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[23px] top-[60px] w-0.5 h-[calc(100%+80px)] bg-[#E5E5E5] hidden sm:block" />
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Step Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#0A1F44] flex items-center justify-center text-white font-bold text-xl relative z-10">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">
                        {step.title}
                      </h2>
                      <p className="text-base text-[#111111]/80 leading-relaxed mb-8">
                        {step.description}
                      </p>
                      
                      <Card className="bg-[#F5F5F5] p-8 border border-[#E5E5E5] rounded-none shadow-none">
                        <h3 className="text-lg font-bold text-[#111111] mb-4 uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-[#0A1F44]" />
                          Key Activities
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                          {step.details.map((detail, dIndex) => (
                            <li key={dIndex} className="text-base text-[#111111]/80 flex items-start gap-3">
                              <span className="text-[#0A1F44] font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-6">
              Typical Engagement Timeline
            </h2>
            <p className="text-base text-[#111111]/80 leading-relaxed mb-16 max-w-2xl mx-auto">
              While each engagement is customized, a typical comprehensive audit and transformation project spans 3-6 months from initial consultation to ongoing support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { time: 'Week 1-2', phase: 'Discovery', sub: 'Consultation and Audit' },
                { time: 'Week 3-4', phase: 'Analysis & Reporting', sub: 'Insights and Recommendations' },
                { time: 'Ongoing', phase: 'Implementation', sub: 'Support and Monitoring' }
              ].map((item, index) => (
                <Card key={index} className="bg-white p-10 border-[#E5E5E5] rounded-none shadow-none">
                  <div className="text-4xl font-extrabold text-[#0A1F44] mb-4">{item.time}</div>
                  <p className="text-xl font-bold text-[#111111] mb-2">{item.phase}</p>
                  <p className="text-base text-[#111111]/80">{item.sub}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#0A1F44]">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Schedule a consultation to discuss how our audit process can help your institution achieve lasting excellence.
            </p>
            <Button asChild size="lg" className="bg-white text-[#0A1F44] hover:bg-white/90 rounded-none px-10 py-6 text-base font-semibold transition-all">
              <Link href="/contact">
                Get Started Today
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