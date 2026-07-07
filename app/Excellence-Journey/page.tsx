import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'The EduVora Excellence Journey | EduVora Consulting',
  description:
    'A structured pathway to school improvement and sustainable excellence through consultation, audit, analysis, reporting, improvement planning, and monitoring support.',
}

export default function ExcellenceJourney() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description:
      "Every school is unique. We begin by understanding your institution's context, aspirations, challenges, and areas of concern to establish a clear direction for the engagement.",
      details: [
     'Leadership consultation and discovery discussions ',
     'Understanding institutional priorities and goals ',
     'Identification of key concerns and focus areas ',
     'Defining scope and expectations of engagement '
      ],
    },
    {
      number: '02',
      title: 'Audit',
      description:
      'We conduct a comprehensive review of the selected areas to understand current practices, strengths, gaps, and opportunities for improvement.',
      details: [
       'Review of systems, processes, and practices',
       'Stakeholder interactions and observations',
       'Evidence gathering and data review',
       'Assessment across selected excellence pillars'
      ],
    },
    {
      number: '03',
      title: 'Analysis',
      description:
      'Our team interprets findings to uncover patterns, strengths, risks, and improvement opportunities that may not be immediately visible.',
      details: [
       'Identification of strengths and improvement areas',
       'Gap and root-cause analysis',
       'Institutional performance insights',
       'Prioritization of key focus areas'
      ],
    },
    {
      number: '04',
      title: 'Reporting',
      description:
       'We present a clear picture of where the institution stands today and what actions will create the greatest impact moving forward.',     
        details: [
        'Comprehensive findings report', 
        'Institutional strengths and opportunities summary', 
        'Practical recommendations', 
        'Leadership presentation and discussion' 
      ],
    },
    {
      number: '05',
      title: 'Improvement Plan',
      description:
      'Together, we translate insights into action through a realistic and institution-specific roadmap for improvement.',      
      details: [
        'Strategic improvement roadmap',
        'Priority-wise action recommendations',
        'Implementation guidance framework',
        'Success indicators and review checkpoints'
      ],
    },
    {
      number: '06',
      title: 'Monitoring & Support',
      description:
      'Improvement is not a one-time event. We remain available to support implementation, review progress, and encourage continuous improvement.',
      details: [
        'Progress review and follow-up support',
        'Guidance during implementation',
        'Ongoing consultation and advisory support',
        'Continuous improvement recommendations'
      ],
    },
  ]

  const packages = [
    {
      title: 'School Excellence Health Check',
      duration: '7–14 Days',
      description:
        'A focused review designed to provide school management with independent snapshot of institutional performance, key strengths, potential risks, and immediate areas requiring attention.',
      accent: 'Rapid Diagnostic Review',
    },
    {
      title: 'School Excellence Review & Improvement Advisory',
      duration: '4–6 Weeks',
      description:
        'A detailed review of academic quality, leadership effectiveness, stakeholder experience, human resources, operational systems, compliance readiness, and financial sustainability  .',
      accent: 'Comprehensive Review',
    },
    {
      title: 'School Transformation Partnership',
      duration: '12 Months',
      description:
        'Long-term implementation support focused on continuous improvement, leadership development, performance monitoring, financial sustainability, and institutional transformation.',
      accent: 'Long-Term Support',
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
              alt="The EduVora Excellence Journey"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1F44]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-white/80 mb-4">
                The EduVora Excellence Journey
              </p>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]"
                data-testid="contact-heading"
              >
                A Structured Pathway to School Improvement and Sustainable Excellence
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
                How We Help Schools Discover, Improve &amp; Excel
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-[#0A1F44] mb-4">
                Process Flow
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
                From Insight to Sustainable Excellence
              </h2>
              <p className="text-base text-[#111111]/75 leading-relaxed">
                A thoughtful and collaborative journey that helps schools gain clarity, identify priorities, strengthen institutional systems, and drive meaningful improvement
              </p>
            </div>

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
                            <li
                              key={dIndex}
                              className="text-base text-[#111111]/80 flex items-start gap-3"
                            >
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

        {/* Packages Section */}
        <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-[#0A1F44] mb-4">
                Select the Level of Support Your School Needs
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
                Three engagement packages designed for different needs
              </h2>
              <p className="text-base text-[#111111]/75 leading-relaxed">
                Choose the level of support that best matches your school&apos;s current
                priorities, timeline, and transformation goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white border-[#E5E5E5] rounded-none shadow-none hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="inline-flex items-center rounded-full bg-[#0A1F44]/5 px-4 py-2 text-[#0A1F44] text-sm font-semibold mb-5">
                      {item.accent}
                    </div>

                    <h3 className="text-2xl font-bold text-[#111111] mb-4">
                      {item.title}
                    </h3>

                    <div className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-4 py-2 rounded-none font-bold text-sm mb-5">
                      Duration: {item.duration}
                    </div>

                    <p className="text-base text-[#111111]/80 leading-relaxed">
                      {item.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 mt-6 text-[#0A1F44] font-semibold hover:underline"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#0A1F44]">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Choose Your School Excellence Journey
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Whether you need a rapid diagnostic review, a comprehensive institutional
              assessment, or a long-term transformation partner, EduVora provides a
              structured pathway to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0A1F44] hover:bg-white/90 rounded-none px-10 py-6 text-base font-semibold transition-all"
              >
                <Link href="/services">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 rounded-none px-10 py-6 text-base font-semibold transition-all"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mt-10">
              Ready to Discover What Your School May Be Missing?
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}