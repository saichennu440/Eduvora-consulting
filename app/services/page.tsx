import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LineChart,
  Users,
  Building2,
  BadgeCheck,
  Target,
  BookOpen,
  HeartHandshake,
  Landmark,
  Wallet,
} from 'lucide-react'

export const metadata = {
  title: 'Services | Eduvora Consulting',
  description:
    'Explore Eduvora Consulting services designed to strengthen academic excellence, leadership, operations, compliance, and financial sustainability for schools.',
}

const consultingServices = [
  {
    title: 'School Excellence Health Check',
    subtitle: 'Rapid Diagnostic Review',
    duration: 'Typical Engagement: 7–14 Days',
    description:
      'A focused review designed to provide school management with an independent snapshot of institutional performance, key strengths, potential risks, and immediate areas requiring attention.',
    deliverables: [
      'Executive Summary',
      'School Excellence Scorecard',
      'SWOT Analysis',
      'NEP 2020 Readiness Snapshot',
      'Key Findings',
    ],
  },
  {
    title: 'School Excellence Review & Improvement Advisory',
    subtitle: 'Comprehensive Institutional Review',
    duration: 'Typical Engagement: 4–6 Weeks',
    description:
      'A detailed review of academic quality, leadership effectiveness, stakeholder experience, human resources, operational systems, compliance readiness, financial sustainability and institutional performance.',
    deliverables: [
      'Comprehensive School Excellence Review Report',
      'School Excellence Scorecard',
      'Academic Quality Review',
      'NEP 2020 Readiness Index',
      'Leadership & Governance Review Summary',
      'Human Capital Review',
      'Compliance & Operations Review',
      'Stakeholder Experience Assessment',
      'Financial Sustainability Review',
      'Gap Analysis Report',
      'Benchmarking Report',
      'Priority Strategic Recommendations',
      'Improvement Roadmap',
    ],
  },
  {
    title: 'School Transformation Partnership Program',
    subtitle: 'Long-Term Strategic Improvement Support',
    duration: 'Strategic Partnership: 12 Months',
    description:
      'A strategic and structured partnership designed to support school leadership in driving sustainable improvement through leadership coaching, system strengthening, performance monitoring, academic quality enhancement, financial sustainability, NEP 2020 implementation, and institutional transformation for sustained excellence and transformation.',
    deliverables: [
      'Everything Included in the Comprehensive Review',
      'Leadership Coaching & Mentoring',
      'Teacher Capacity Building Support',
      'NEP 2020 Implementation Guidance',
      'School Improvement Monitoring Dashboard',
      'Financial Sustainability Dashboard',
      'Progress Performance Review Meetings',
      'Strategic Growth & Enrollment Advisory',
      'Progress Review Meetings',
      'School Transformation Roadmap',
    ],
  },
]

const excellencePillars = [
  {
    icon: BookOpen,
    title: 'Academic Excellence & NEP 2020 Alignment',
    description:
      'Curriculum effectiveness, teaching quality, learning outcomes, assessment systems, competency-based learning, and NEP 2020 implementation.',
  },
  {
    icon: HeartHandshake,
    title: 'Student Learning & Stakeholder Experience',
    description:
      'Student engagement, well-being, parent satisfaction, school culture, and stakeholder feedback.',
  },
  {
    icon: Landmark,
    title: 'Leadership, Governance & School Management',
    description:
      'Leadership effectiveness, strategic planning, governance systems, accountability, and decision-making processes.',
  },
  {
    icon: Users,
    title: 'Human Capital & Organizational Development',
    description:
      'Recruitment, performance management, professional development, staff engagement, and retention.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance, Operations & Institutional Sustainability',
    description:
      'Regulatory compliance, safeguarding, infrastructure readiness, operational systems, and risk management.',
  },
  {
    icon: Wallet,
    title: 'Financial Sustainability & Growth',
    description:
      'Revenue optimization, enrollment growth, fee systems, cost management, resource utilization, and long-term sustainability.',
  },
]

const whyEduvora = [
  {
    title: 'Evidence-Based Reviews',
    description:
      'Recommendations supported by observations, stakeholder feedback, data analysis, and documented evidence.',
  },
  {
    title: 'Independent & Objective Assessment',
    description:
      'Providing school leaders with an unbiased view of institutional performance and improvement opportunities.',
  },
  {
    title: 'NEP 2020 Aligned Framework',
    description:
      'Designed to help schools strengthen implementation and future readiness.',
  },
  {
    title: 'Financial Sustainability Focus',
    description:
      'Helping schools improve resource utilization, financial health, and long-term sustainability.',
  },
  {
    title: 'Action-Oriented Recommendations',
    description:
      'Practical and achievable strategies that create measurable improvements.',
  },
  {
    title: 'Sustainable Institutional Transformation',
    description:
      'Supporting schools beyond compliance to build a culture of excellence and continuous improvement.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/All-hero-bg.jpg"
              alt="Eduvora Consulting"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1F44]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 min-h-[78vh] flex items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">EDUVORA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                School Excellence Review &amp; Consulting
              </h1>

              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl mb-6">
                <span className="font-semibold text-white">Assess • Improve • Transform</span>
                <br />
                Helping schools achieve Academic Excellence, Leadership Effectiveness,
                Operational Efficiency, Financial Sustainability, and NEP 2020 Readiness
                through expert reviews, strategic advisory, and transformation support.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'Academic Excellence',
                  'Leadership Effectiveness',
                  'Operational Efficiency',
                  'Financial Sustainability',
                  'NEP 2020 Readiness',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#0A1F44] hover:bg-white/90 font-semibold rounded-none px-8"
                >
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 font-semibold rounded-none px-8"
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                OUR CONSULTING SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                Tailored support for schools at every stage of improvement
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From a fast diagnostic health check to a long-term transformation
                partnership, Eduvora provides practical school improvement solutions
                designed for measurable progress.
              </p>
            </div>

            <div className="space-y-8">
              {consultingServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="p-8 md:p-10">
                      <div className="flex items-start justify-between gap-6 flex-wrap mb-5">
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                            {service.subtitle}
                          </p>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                            {service.title}
                          </h3>
                        </div>
                        <div className="rounded-full bg-[#0A1F44]/5 px-4 py-2 text-sm font-semibold text-[#0A1F44] border border-[#0A1F44]/10">
                          {service.duration}
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                        {service.description}
                      </p>

                      <div>
                        <h4 className="text-lg font-bold text-[#111111] mb-4">
                          Key Deliverables
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.deliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                            >
                              <CheckCircle className="h-5 w-5 text-[#0A1F44] flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-[#0A1F44] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm mb-6">
                          <BadgeCheck className="h-4 w-4" />
                          <span>Focused school improvement support</span>
                        </div>

                        <h4 className="text-2xl font-bold mb-4">What schools gain</h4>
                        <ul className="space-y-3 text-white/90">
                          <li>• Clear understanding of current performance</li>
                          <li>• Actionable priorities for leadership teams</li>
                          <li>• Practical roadmap for measurable improvement</li>
                          <li>• Better alignment with NEP 2020 readiness</li>
                          <li>• Stronger operational and financial systems</li>
                        </ul>
                      </div>
                      
                      <img src="/bg1.jpg" alt="Services Illustration" className="absolute bottom-0 right-0 w-198 opacity-30 pointer-events-none" />  

                      <div className="relative z-10 mt-10 rounded-2xl border border-white/15 bg-white/10 p-5">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2">
                          Typical outcome
                        </p>
                        <p className="text-white font-medium leading-relaxed">
                          A clearer, data-backed path toward sustainable excellence and
                          institutional transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Pillars */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                OUR SIX EXCELLENCE PILLARS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                A complete framework for school improvement
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eduvora reviews the core areas that shape institutional quality,
                sustainability, and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {excellencePillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <Card
                    key={index}
                    className="p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44]/10 text-[#0A1F44] shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0A1F44] mb-2">
                          0{index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#111111] leading-snug mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Eduvora */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                  WHY EDUVORA
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-5 leading-tight">
                  Designed for practical transformation, not just reports
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We combine independent assessment, strategic advice, and action
                  planning so that schools can move from review to measurable progress.
                </p>

                <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#0A1F44]/5 p-6">
                  {/* <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                    TAGLINE
                  </p> */}
                  <p className="text-lg font-semibold text-[#111111] leading-relaxed">
                    One Goal • Six Excellence Pillars • A Clear Roadmap to School
                    Excellence, Sustainability &amp; Growth
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyEduvora.map((item, index) => (
                  <Card
                    key={index}
                    className="p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-9 w-9 rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#111111] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 md:py-28 bg-[#0A1F44]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 mb-6">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">BOOK A CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Not sure where to begin?
            </h2>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Start with a School Excellence Health Check and gain an independent
              assessment of your institution&apos;s current performance and improvement
              opportunities.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0A1F44] hover:bg-white/90 font-semibold rounded-none px-8"
            >
              <Link href="/contact">
                Book a Free Consultation
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