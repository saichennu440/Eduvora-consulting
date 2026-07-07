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
  title: 'About Us | EduVora Consulting',
  description:
    'Learn why EduVora was created, what problem it solves, and how it helps schools achieve sustainable excellence through systems, leadership, and continuous improvement.',
}



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
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/about-herobg.jpeg"
              alt="EduVora Consulting"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Left White Fade Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 via-[45%] to-transparent md:hidden " />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[35%] to-transparent hidden md:block " />

          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1600px] mx-auto min-h-[760px] flex items-center px-6 lg:px-16 py-20">

            <div className="max-w-[650px]">
              {/* Heading */}
              <h1 className="font-serif font-bold leading-[0.95] mb-8">

                <span className="block text-[#0A1F44] text-[42px] md:text-[58px] lg:text-[52px]">
                  Your Trusted Partner
                </span>

                <span className="block text-[42px] md:text-[58px] lg:text-[52px]">
                  <span className="text-[#C9A227]">
                    in School
                  </span>{" "}

                  <span className="italic text-[#C9A227]">
                    Transformation
                  </span>
                </span>

              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-[2px] bg-[#C9A227]" />
                <div className="w-3 h-3 rotate-45 border-2 border-[#C9A227]" />
                <div className="w-14 h-[2px] bg-[#C9A227]" />
              </div>

              {/* Description */}
              <p className="text-black text-[17px] lg:text-[22px] leading-[1.9] max-w-[620px] mb-14">
                At EduVora Consulting, we partner with educational institutions
                to turn vision into measurable impact. Through deep expertise,
                strategic insight, and hands-on collaboration, we help schools
                strengthen leadership, elevate performance, and build
                future-ready learning environments.
              </p>

              {/* Bottom Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[700px]">

                {/* Partnership */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0A1F44] flex items-center justify-center mx-auto mb-4">

                    <svg viewBox="0 0 64 64" className="w-10 h-10">
                      <circle cx="22" cy="24" r="8" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <circle cx="42" cy="24" r="8" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <path d="M12 48C12 40 18 36 22 36C26 36 32 40 32 48" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <path d="M32 48C32 40 38 36 42 36C46 36 52 40 52 48" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                    </svg>

                  </div>

                  <h3 className="font-bold text-[#0A1F44] text-sm uppercase mb-2">
                    Partnership
                  </h3>

                  <p className="text-xs font-medium text-[#121212] leading-relaxed">
                    Built on trust and collaboration
                  </p>
                </div>

                {/* Expertise */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0A1F44] flex items-center justify-center mx-auto mb-4">

                    <svg viewBox="0 0 64 64" className="w-10 h-10">
                      <circle cx="32" cy="32" r="18" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <path d="M32 18V14" stroke="#C9A227" strokeWidth="2.5"/>
                      <path d="M32 50V46" stroke="#C9A227" strokeWidth="2.5"/>
                      <path d="M18 32H14" stroke="#C9A227" strokeWidth="2.5"/>
                      <path d="M50 32H46" stroke="#C9A227" strokeWidth="2.5"/>
                      <path d="M32 24V34L40 40" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                    </svg>

                  </div>

                  <h3 className="font-bold text-[#0A1F44] text-sm uppercase mb-2">
                    Expertise
                  </h3>

                  <p className="text-xs font-medium text-[#121212] leading-relaxed">
                    Powered by deep educational insight
                  </p>
                </div>

                {/* Focus */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0A1F44] flex items-center justify-center mx-auto mb-4">

                    <svg viewBox="0 0 64 64" className="w-10 h-10">
                      <circle cx="32" cy="32" r="18" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <circle cx="32" cy="32" r="8" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <circle cx="32" cy="32" r="2" fill="#C9A227"/>
                    </svg>

                  </div>

                  <h3 className="font-bold text-[#0A1F44] text-sm uppercase mb-2">
                    Focus
                  </h3>

                  <p className="text-xs font-medium text-[#121212] leading-relaxed">
                    Tailored strategies for meaningful impact
                  </p>
                </div>

                {/* Impact */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0A1F44] flex items-center justify-center mx-auto mb-4">

                    <svg viewBox="0 0 64 64" className="w-10 h-10">
                      <polyline points="16,44 28,32 38,38 50,20" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <polyline points="42,20 50,20 50,28" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      <line x1="14" y1="50" x2="50" y2="50" stroke="#C9A227" strokeWidth="2.5"/>
                    </svg>

                  </div>

                  <h3 className="font-bold text-[#0A1F44] text-sm uppercase mb-2">
                    Impact
                  </h3>

                  <p className="text-xs font-medium text-[#121212] leading-relaxed">
                    Creating excellence that lasts
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Curved Ribbon */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-[#0A1F44] rounded-tr-[300px] border-t-4 border-[#C9A227]" />
        </section>

        {/* Why We Exist */}
        {/* <section className="py-20 md:py-28 bg-white">
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
                      EduVora Insight
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
        </section> */}

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-[#F8F7F5] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">

          {/* ================= VISION ================= */}
          <div className="grid lg:grid-cols-[320px_40px_1fr] gap-8 lg:gap-12 items-center">

            {/* Left Title */}
            <div className="flex items-center">

              {/* Gold Vertical Line */}
              <div className="relative mr-8 hidden lg:block">
                <div className="w-[2px] h-[230px] bg-[#D5A84A]/60" />

                <div className="absolute top-1/2 -translate-y-1/2 -left-[5px] w-3 h-3 rounded-full bg-[#D5A84A]" />
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[#C9A227] font-semibold text-[18px] mb-2">
                  OUR
                </p>

                <h2 className="font-serif text-[#0A1F44] text-[58px] lg:text-[76px] font-bold leading-[0.9]">
                  VISION
                </h2>

                <div className="w-20 h-[3px] bg-[#C9A227] mt-6" />
              </div>
            </div>

            {/* Center Divider */}
            <div className="hidden lg:flex justify-center">
              <div className="w-px h-[220px] bg-[#E7E3DD]" />
            </div>

            {/* Right Content */}
            <div>
              <p className="font-serif text-[#0A1F44] text-[34px] lg:text-[46px] leading-[1.35]">

                To shape{" "}

                <span className="italic text-[#C9A227]">
                  future-ready
                </span>{" "}

                educational institutions through{" "}

                <span className="italic text-[#C9A227]">
                  innovation,
                </span>

                <br className="hidden lg:block" />

                <span className="italic text-[#C9A227]">
                  leadership,
                </span>{" "}

                and{" "}

                <span className="italic text-[#C9A227]">
                  excellence.
                </span>

              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="my-16 lg:my-20 flex items-center">
            <div className="flex-1 h-px bg-[#D5A84A]/60" />

            <div className="mx-6 w-4 h-4 rotate-45 bg-[#D5A84A]" />

            <div className="flex-1 h-px bg-[#D5A84A]/60" />
          </div>

          {/* ================= MISSION ================= */}
          <div className="grid lg:grid-cols-[320px_40px_1fr] gap-8 lg:gap-12 items-center">

            {/* Left Title */}
            <div className="flex items-center">

              {/* Gold Vertical Line */}
              <div className="relative mr-8 hidden lg:block">
                <div className="w-[2px] h-[250px] bg-[#D5A84A]/60" />

                <div className="absolute top-1/2 -translate-y-1/2 -left-[5px] w-3 h-3 rounded-full bg-[#D5A84A]" />
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[#C9A227] font-semibold text-[18px] mb-2">
                  OUR
                </p>

                <h2 className="font-serif text-[#0A1F44] text-[58px] lg:text-[76px] font-bold leading-[0.9]">
                  MISSION
                </h2>

                <div className="w-20 h-[3px] bg-[#C9A227] mt-6" />
              </div>
            </div>

            {/* Center Divider */}
            <div className="hidden lg:flex justify-center">
              <div className="w-px h-[240px] bg-[#E7E3DD]" />
            </div>

            {/* Right Content */}
            <div>
              <p className="font-serif text-[#0A1F44] text-[30px] lg:text-[46px] leading-[1.35]">

                To empower schools with strategic{" "}

                <span className="italic text-[#C9A227]">
                  academic,
                </span>{" "}

                <span className="italic text-[#C9A227]">
                  human resource,
                </span>{" "}

                and{" "}

                <span className="italic text-[#C9A227]">
                  operational solutions
                </span>{" "}

                that enhance performance,

               <br className="hidden lg:block" />

                strengthen accountability, and

               <br className="hidden lg:block" />


                drive sustainable growth.

              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EduVora Way Section */}
      <section className="py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-20">

            <p className="uppercase tracking-[0.28em] text-[#C9A227] font-semibold text-[14px] lg:text-[18px] mb-5">
              THE EduVora WAY
            </p>

            <div className="w-20 h-[2px] bg-[#C9A227] mx-auto mb-8" />

            <h2 className="text-[#0A1F44] font-bold text-[24px] sm:text-[46px] lg:text-[52px] leading-[1.18]">
              Five principles that shape every review,
              <br className="hidden lg:block" />
              recommendation, and institutional {" "}
              <br className="hidden lg:block" />
               transformation we lead.
            </h2>

            <div className="w-20 h-[2px] bg-[#C9A227] mx-auto mt-10" />

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

            {[
              {
                number: "01",
                title: "Excellence Before Recognition",
                description:
                  "True excellence is built long before it is celebrated. We focus on what truly matters.",
              },
              {
                number: "02",
                title: "Systems Before Success",
                description:
                  "Sustainable growth is possible only when strong systems, processes, and governance are in place.",
              },
              {
                number: "03",
                title: "Improvement Before Judgement",
                description:
                  "Every review is an opportunity to learn, improve, and unlock potential — not to find fault.",
              },
              {
                number: "04",
                title: "Evidence Before Assumptions",
                description:
                  "Meaningful decisions are grounded in data, insights, and proven practices — not opinions.",
              },
              {
                number: "05",
                title: "Students At The Centre",
                description:
                  "Everything we do is designed to enhance student learning, development, and future readiness.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  relative
                  bg-white
                  border border-[#ECE8E2]
                  rounded-[6px]
                  px-8
                  py-10
                  min-h-[420px]
                  transition-all
                  duration-300
                  hover:shadow-lg
                  hover:-translate-y-2
                "
              >
                {/* Large Background Number */}
                <div
                  className="
                    absolute
                    top-5
                    left-8
                    text-[90px]
                    lg:text-[110px]
                    font-serif
                    text-[#EDE9E5]
                    leading-none
                    select-none
                    pointer-events-none
                  "
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10 pt-24">

                  {/* Gold Line */}
                  <div className="w-12 h-[2px] bg-[#C9A227] mb-8" />

                  <h3
                    className="
                      text-[#0A1F44]
                      text-[28px]
                      lg:text-[28px]
                      font-bold
                      leading-[1.35]
                      mb-8
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#666]
                      text-[18px]
                      leading-[2]
                    "
                  >
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

        {/* Core Belief */}
        {/* <section className="py-20 md:py-28 bg-slate-50">
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
        </section> */}

        {/* Approach */}
        {/* <section className="py-20 md:py-28 bg-white">
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
        </section> */}

        {/* Who We Are */}
        {/* <section className="py-20 md:py-28 bg-[#0A1F44] text-white">
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
        </section> */}

        {/* Founders */}
        {/* <section className="py-20 md:py-28 bg-white">
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
        </section> */}

        {/* OUR PROMISE */}
        <section className="py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden">
          <div className="max-w-[1550px] mx-auto px-6 lg:px-12">

            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-20 items-start">

              {/* LEFT CONTENT */}
              <div>

                {/* Top Label */}
                <div className="flex items-center gap-5 mb-10">
                  <p className="uppercase tracking-[0.35em] text-[#C9A227] font-semibold text-[16px]">
                    OUR PROMISE
                  </p>

                  <div className="w-20 h-[2px] bg-[#C9A227]/70" />
                </div>

                {/* Main Heading */}
                <h2 className="font-serif font-bold leading-[0.92] mb-10">
                  <span className="block text-[#0A1F44] text-[48px] lg:text-[56px]">
                    Our Promise To
                  </span>

                  <span className="block text-[#0A1F44] text-[48px] lg:text-[56px] mb-3">
                    Every School
                  </span>

                  <span className="block text-[#C9A227] text-[48px] lg:text-[56px]">
                    We Serve.
                  </span>
                </h2>

                {/* Decorative Line */}
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-16 h-[2px] bg-[#C9A227]" />
                  <div className="w-3 h-3 rotate-45 border-2 border-[#C9A227]" />
                  <div className="w-16 h-[2px] bg-[#C9A227]" />
                </div>

                {/* Paragraphs */}
                <div className="space-y-8 text-[#0A1F44] text-[18px] leading-[1.9] max-w-[520px]">

                  <p>
                    We may be new as a firm. But we bring seasoned experience,
                    fresh energy, and a genuine passion for transforming schools
                    into exceptional institutions.
                  </p>

                  <div>
                    <p className="mb-4">
                      Every recommendation we make is guided by one question:
                    </p>

                    <p className="text-[#C9A227] text-[20px] lg:text-[24px] font-serif italic leading-relaxed">
                      "How can this school become the very
                      <br></br>
                      best version of itself?"
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-0">

                {[
                  {
                    number: "01",
                    title: "We Listen Before We Advise.",
                    desc: "Understanding comes first. We listen deeply to your context, challenges, and aspirations.",
                    icon: (
                      <svg viewBox="0 0 64 64" className="w-10 h-10">
                        <path d="M32 12C24 12 18 18 18 26V34C18 40 22 44 28 44H30V52C30 55 33 56 35 54L42 46H44C50 46 54 42 54 36V26C54 18 46 12 32 12Z"
                          stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                      </svg>
                    )
                  },
                  {
                    number: "02",
                    title: "We Understand Before We Recommend.",
                    desc: "Insight drives every recommendation. We ensure every solution is relevant, realistic, and aligned with your vision.",
                    icon: (
                      <svg viewBox="0 0 64 64" className="w-10 h-10">
                        <circle cx="28" cy="28" r="14" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
                        <line x1="38" y1="38" x2="50" y2="50" stroke="#C9A227" strokeWidth="2.5"/>
                      </svg>
                    )
                  },
                  {
                    number: "03",
                    title: "We Strengthen Before We Transform.",
                    desc: "We build the right foundations and capabilities so that transformation is sustainable and lasting.",
                    icon: (
                      <svg viewBox="0 0 64 64" className="w-10 h-10">
                        <polyline points="14,42 26,30 36,36 50,18"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <polyline points="42,18 50,18 50,26"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <line x1="14" y1="50" x2="50" y2="50"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                        />
                      </svg>
                    )
                  },
                  {
                    number: "04",
                    title: "We Support Before We Evaluate.",
                    desc: "Partnership comes before performance. We stand alongside leaders through every step of the journey.",
                    icon: (
                      <svg viewBox="0 0 64 64" className="w-10 h-10">
                        <path d="M20 34L28 42L44 26"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <path d="M18 20C22 16 26 16 30 20L34 24L38 20C42 16 46 16 50 20"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                      </svg>
                    )
                  },
                  {
                    number: "05",
                    title: "Students At The Centre.",
                    desc: "Every decision, every strategy, every action ultimately serves student learning, growth, and wellbeing.",
                    icon: (
                      <svg viewBox="0 0 64 64" className="w-10 h-10">
                        <circle cx="32" cy="20" r="8"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <path d="M18 50C18 38 24 32 32 32C40 32 46 38 46 50"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <path d="M22 42L32 36L42 42"
                          stroke="#C9A227"
                          strokeWidth="2.5"
                          fill="none"
                        />
                      </svg>
                    )
                  }
                ].map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[70px_60px_1fr] gap-4  py-8 border-b border-[#ECE8E2]"
                  >

                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="w-15 h-15 rounded-full border border-[#D8B56A] flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    {/* Number */}
                    <div className="flex items-start justify-center border-r border-[#E7E3DD]">
                      <span className="font-serif text-[44px] text-[#C9A227] leading-none">
                        {item.number}
                      </span>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-serif text-[#0A1F44] text-[28px] lg:text-[28px] leading-[1.15] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-[#4B5563] text-[17px] leading-[1.9] max-w-[650px]">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        {/* <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
          
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
        </section> */}
      </main>
      <Footer />
    </>
  )
}