import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  Lightbulb,
  Search,
  TrendingUp,
  Brain,
  Network,
  BookOpen,
  HeartHandshake,
  Landmark,
  MonitorCheck,
  BadgeCheck,
} from 'lucide-react'

export const metadata = {
  title: 'About Us | Eduvora Consulting',
  description:
    'Learn why Eduvora was created, what problem it solves, and how it helps schools achieve sustainable excellence through systems, leadership, and continuous improvement.',
}

const philosophy = [
  {
    title: 'Excellence Before Recognition',
    description: 'True excellence is achieved long before it is celebrated.',
  },
  {
    title: 'Systems Before Success',
    description: 'Sustainable success is built upon strong institutional systems.',
  },
  {
    title: 'Improvement Before Judgment',
    description: 'Every review should create growth, not fear.',
  },
  {
    title: 'Evidence Before Assumptions',
    description: 'Meaningful decisions require meaningful insights.',
  },
  {
    title: 'Students At The Centre',
    description: 'Every initiative must ultimately improve student learning and development.',
  },
]

const approach = [
  'Observe',
  'Analyze',
  'Identify',
  'Recommend',
  'Strengthen',
  'Monitor',
  'Transform',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/All-hero-bg.jpg"
              alt="Eduvora consulting background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1F44]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 min-h-[82vh] flex items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-[0.18em]">
                  About Us
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6">
                Seeing Beyond What Schools See
              </h1>

              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl mb-8">
                Helping schools discover hidden opportunities, strengthen systems,
                and achieve sustainable excellence.
              </p>

              <div className="max-w-3xl space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                <p>
                  Schools today face increasing expectations, evolving educational
                  demands, regulatory requirements, stakeholder pressures, and the
                  challenge of preparing students for an uncertain future.
                </p>
                <p>
                  Yet many institutions continue to work tirelessly without an objective
                  framework to identify strengths, uncover gaps, and build clear
                  pathways for improvement.
                </p>
                <p className="font-semibold text-white">
                  EduVora was established with a simple belief: great schools are not
                  built by chance. They are built through vision, systems, leadership,
                  accountability, and continuous improvement.
                </p>
                <p>
                  Our purpose is to help schools move beyond routine functioning and
                  progress toward purposeful excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                  Why We Exist
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
                  The Reality Facing Schools Today
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Schools are expected to deliver excellence across multiple dimensions
                  simultaneously:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Academic Excellence',
                    'Future Readiness',
                    'Regulatory Compliance',
                    'Leadership Effectiveness',
                    'Human Resource Management',
                    'Parent & Stakeholder Expectations',
                    'Operational Efficiency',
                    'Student Development',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle className="h-5 w-5 text-[#0A1F44] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#0A1F44]/5 p-6">
                  <p className="text-[#0A1F44] font-semibold mb-2">The gap we solve</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Many institutions lack an objective mechanism to answer critical
                    questions: Where are we performing well? What hidden gaps exist?
                    What should we improve first? How do we measure progress? Are we
                    truly future-ready?
                  </p>
                </div>
              </div>

              <div className="relative h-[520px] w-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400"
                  alt="School leadership and data analysis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
                      Eduvora Insight
                    </p>
                    <p className="text-lg font-semibold leading-relaxed">
                      This gap between aspiration and objective assessment inspired the
                      creation of EduVora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white p-10 md:p-12 border border-slate-200 shadow-sm rounded-2xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44]/10 text-[#0A1F44] mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To shape future-ready educational institutions through innovation,
                  leadership, and excellence.
                </p>
              </Card>

              <Card className="bg-white p-10 md:p-12 border border-slate-200 shadow-sm rounded-2xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44]/10 text-[#0A1F44] mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To empower schools with strategic academic, human resource, and
                  operational solutions that enhance performance, strengthen
                  accountability, and drive sustainable growth.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                Our Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                The principles behind every review and recommendation
              </h2>
            </div>

            <div className="space-y-4">
              {philosophy.map((item, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-[#F7F9FC] px-6 py-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1F44] text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-1">
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
        </section>

        {/* Core Belief */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400"
                  alt="School community and leadership"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1F44]/35" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                  Our Core Belief
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
                  Seeing Beyond What Schools See
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most schools are aware of their visible challenges. The greatest
                  opportunities for growth often exist within unseen gaps—processes that
                  have become routine, practices that are no longer effective, risks
                  that remain unnoticed, and opportunities that remain unexplored.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our role is to provide an independent, objective perspective that helps
                  schools identify hidden opportunities, strengthen systems, and create
                  sustainable improvement.
                </p>

                <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <BadgeCheck className="h-5 w-5 text-[#0A1F44]" />
                    <p className="font-semibold text-[#0A1F44]">Our guiding truth</p>
                  </div>
                  <p className="text-lg font-semibold text-[#111111] leading-relaxed">
                    What remains unseen today often determines tomorrow&apos;s success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                The EduVora Approach
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                Observe. Analyze. Identify. Recommend. Strengthen. Monitor. Transform.
              </h2>
            </div>

            <div className="grid gap-4">
              {approach.map((step, index) => {
                const icons = [
                  Search,
                  Brain,
                  ClipboardList,
                  Lightbulb,
                  ShieldCheck,
                  MonitorCheck,
                  TrendingUp,
                ]
                const Icon = icons[index]
                return (
                  <div key={step} className="relative">
                    <Card className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-4 md:min-w-[280px]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-sm uppercase tracking-[0.22em] text-[#0A1F44] font-semibold mb-1">
                              Step {index + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-[#111111]">
                              {step.toUpperCase()}
                            </h3>
                          </div>
                        </div>

                        <div className="hidden md:block text-[#0A1F44] text-2xl font-bold px-4">
                          →
                        </div>

                        <p className="text-muted-foreground leading-relaxed md:pl-2">
                          {index === 0 && 'Understanding the institution objectively.'}
                          {index === 1 && 'Evaluating systems, practices, and outcomes.'}
                          {index === 2 && 'Recognizing strengths, gaps, and opportunities.'}
                          {index === 3 && 'Providing evidence-based solutions.'}
                          {index === 4 && 'Supporting implementation and improvement.'}
                          {index === 5 && 'Tracking progress, measuring impact, and ensuring accountability.'}
                          {index === 6 && 'Creating sustainable institutional excellence.'}
                        </p>
                      </div>
                    </Card>

                    {index < approach.length - 1 && (
                      <div className="flex justify-center py-2 text-[#0A1F44]">
                        <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 md:py-28 bg-[#0A1F44] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-semibold mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Education Consultants. Auditors. Institutional Development Specialists.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  We help schools achieve excellence across academics, human resources,
                  governance, compliance, operations, and strategic growth.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our approach combines educational expertise, operational insight, and
                  practical implementation to create measurable and sustainable
                  improvements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: BookOpen,
                    title: 'Academic Systems',
                    description: 'Teaching quality, learning outcomes, and curriculum alignment.',
                  },
                  {
                    icon: Users,
                    title: 'Human Resources',
                    description: 'Recruitment, development, performance, and retention.',
                  },
                  {
                    icon: Landmark,
                    title: 'Governance',
                    description: 'Leadership, accountability, and decision-making structures.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Sustainability',
                    description: 'Operations, compliance, and future-ready institutional health.',
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <Card
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 text-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-white/75 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                Meet The Minds Behind The Mission
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                At The Heart Of EduVora
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every school has the potential to become an exceptional institution when
                guided by the right insights, systems, and strategy. Though EduVora is a
                young consulting firm, its foundation is built on more than two decades
                of combined professional experience across educational operations,
                academic excellence, school administration, human resources, and
                institutional development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative h-[360px]">
                  <Image
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400"
                    alt="Pavan Kumar"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-[#0A1F44]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
                      Founder & Partner
                    </p>
                    <h3 className="text-2xl font-bold mb-1">Pavan Kumar</h3>
                    <p className="text-white/80 font-medium">
                      “Strong schools are built on strong systems.”
                    </p>
                  </div>
                </div>
                <div className="p-7 md:p-8 bg-white">
                  <p className="text-muted-foreground leading-relaxed">
                    With more than a decade of experience across school administration,
                    human resource management, payroll operations, and institutional
                    processes, Pavan brings a strategic understanding of what enables
                    schools to perform at their best.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    His expertise lies in transforming operational complexity into
                    streamlined, sustainable systems that support excellence and growth.
                    From organizational effectiveness and workforce management to
                    administrative efficiency and governance, he helps schools build
                    foundations that are resilient, scalable, and future-ready.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative h-[360px]">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400"
                    alt="Aarzoo Baghadiya"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-[#0A1F44]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
                      Co-Founder & Partner
                    </p>
                    <h3 className="text-2xl font-bold mb-1">Aarzoo Baghadiya</h3>
                    <p className="text-white/80 font-medium">
                      “Meaningful transformation begins with meaningful learning.”
                    </p>
                  </div>
                </div>
                <div className="p-7 md:p-8 bg-white">
                  <p className="text-muted-foreground leading-relaxed">
                    With over 8+ years of experience across diverse educational
                    environments and curricular frameworks, Aarzoo brings deep expertise
                    in teaching, learning, curriculum implementation, learner engagement,
                    and academic improvement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    She believes exceptional schools successfully bridge vision and
                    execution, transforming ambitious goals into meaningful learning
                    experiences every day. Her focus is helping schools create
                    environments where both students and educators thrive.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="py-20 md:py-28 bg-[#0A1F44] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-semibold mb-3">
                  Our Promise
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Our Promise To Every School We Serve
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  We may be new as a firm. But we bring seasoned experience, fresh
                  energy, and a genuine passion for transforming schools into
                  exceptional institutions.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Every recommendation we make is guided by one question: “How can this
                  school become the very best version of itself?”
                </p>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                  <p className="text-white/70 text-sm uppercase tracking-[0.22em] mb-3">
                    OUR PROMISE
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-white/90">
                    {[
                      'We will listen before we advise.',
                      'We will understand before we recommend.',
                      'We will support before we evaluate.',
                      'We will strengthen before we transform.',
                      'We will always place the interests of students and educational excellence above everything else.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative h-[460px] rounded-2xl overflow-hidden">
                <Image
                  src="./bg6.jpg"
                  alt="School teamwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-[#0A1F44]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
                      To Every Institution We Serve
                    </p>
                    <p className="text-lg font-semibold leading-relaxed">
                      Together, we create schools that are not only successful today—but
                      prepared for tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            {/* <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
              Final Call To Action
            </p> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Ready to Discover What Your School Could Become?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s explore your school&apos;s strengths, opportunities, and pathway
              to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white rounded-none px-8 py-6 text-base font-medium"
              >
                <Link href="/contact">
                  Schedule a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44]/5 rounded-none px-8 py-6 text-base font-medium"
              >
                <Link href="/services">Explore the School Excellence Index</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}