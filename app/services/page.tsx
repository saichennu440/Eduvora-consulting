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
    User,
  Cog,
    BarChart3,
  Users,
  Building2,
  BadgeCheck,
  Target,
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Landmark,
  Wallet,
  Settings,
  Coins,
  Lightbulb,
  Check,
  TrendingUp,
} from 'lucide-react'
import { time } from 'console'

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

const serviceHighlights = [
  {
    image: "/service-card1.jpeg",
    badge: "Focused school improvement support",
    title: "What Schools Gain",
    benefits: [
      "A fresh, independent perspective on institutional performance",
      "Clear visibility of strengths, gaps, and emerging concerns",
      "Better-informed leadership discussions and decision-making",
      "Prioritised areas requiring immediate attention",
      "A stronger foundation for future planning and improvement",
    ],
    outcome:
      "Greater clarity, sharper priorities, and a well-informed starting point for institutional growth.",
  },

  {
    image: "/service-card2.jpeg",
    badge: "Strategic transformation guidance",
    title: "What Leaders Gain",
    benefits: [
      'Clear visibility into what is working and what requires attention ',
      'Prioritised opportunities for institutional advancement ',
      'Improved understanding of risks, gaps, and growth potential ',
      'Stronger foundations for planning and resource allocation ',
      'A unified direction for continuous improvement'
    ],
    outcome:
      "A comprehensive understanding of the institution's current reality, supported by clear priorities and strategic direction for long-term growth.",
  },

  {
    image: "/service-card3.jpeg",
    badge: "Long-term excellence partnership",
    title: "What Institutions Gain",
    benefits: [
      'Ongoing guidance and expert support throughout the improvement journey ',
      'Greater alignment between vision, strategy, and daily practice ',
      'Stronger systems and more effective decision-making ',
      'Enhanced capability to navigate change and emerging challenges ',
      'Sustainable progress across key areas of institutional performance '

    ],
    outcome:
      "A stronger, future-ready institution with the systems, leadership, and strategic direction needed to sustain excellence over time.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
{/* Hero Section */}
<section className="relative overflow-hidden min-h-screen">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/services-herobg.jpeg"
      alt="School Excellence Review"
      fill
      priority
      className="object-cover object-center"
    />

    {/* Dark overlay */}

    {/* Left gradient for text readability */}
  </div>

  {/* Content */}
  <div className="
    relative z-10
    max-w-[1600px]
    mx-auto
    px-6
    lg:px-12
    pt-[20px] lg:pt-[40px]
    pb-10
    min-h-screen
    flex items-center
  ">

    {/* Left Content */}
    <div className="max-w-[620px]">

      {/* Badge */}
      <div className="
        inline-flex
        items-center
        gap-3
        px-4
        py-2
        rounded-full
        border
        border-[#2F6FD5]
        bg-[#0A1F44]/40
        backdrop-blur-md
        mb-8
      ">
        <Sparkles className="w-4 h-4 text-white" />

        <span className="
          text-white
          text-xs
          lg:text-sm
          font-semibold
          tracking-[0.15em]
          uppercase
        ">
          Eduvora School Excellence
        </span>
      </div>

      {/* Heading */}
      <h1 className="
        text-white
        font-bold
        leading-[1.02]
        mb-6
      ">
        <span className="block text-[42px] sm:text-[54px] lg:text-[50px] mb-3">
          School Excellence
        </span>

        <span className="block text-[42px] sm:text-[54px] lg:text-[50px]">
          Review &          Transformation

        </span>
      </h1>

      {/* Blue Highlight Text */}
      <h2 className="
        text-[#2F80FF]
        text-[28px]
        lg:text-[22px]
        font-semibold
        mb-8
      ">
        Assess • Improve • Transform
      </h2>

      {/* Description */}
      <p className="
        text-white/85
        text-[17px]
        lg:text-[16px]
        leading-[1.8]
        max-w-[620px]
        mb-10
      ">
        Enabling educational institutions to gain objective insights,
        strengthen systems, enhance accountability, and build
        sustainable pathways toward excellence through structured
        reviews, strategic guidance, and continuous improvement
        frameworks.
      </p>

{/* Features */}
<div
  className="
    grid
    grid-cols-2
    lg:grid-cols-3
    gap-y-6
    gap-x-5
    mb-12
  "
>
  {[
    {
      title: "Academic Excellence",
      icon: GraduationCap,
    },
    {
      title: "Leadership & Governance",
      icon: Users,
    },
    {
      title: "Human Capital",
      icon: User,
    },
    {
      title: "Operational Effectiveness",
      icon: Cog,
    },
    {
      title: "Financial Sustainability",
      icon: BarChart3,
    },
    {
      title: "Future Readiness",
      icon: Lightbulb,
    },
  ].map((item, index) => {
    const Icon = item.icon;

    return (
      <div key={index} className="flex items-center gap-3">

        {/* Icon Circle */}
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-[#1C4FA3]/30
            border
            border-[#3E7BFF]/40
            backdrop-blur-md
            flex
            items-center
            justify-center
            flex-shrink-0
            shadow-[0_0_20px_rgba(47,128,255,0.25)]
          "
        >
          <Icon
            className="
              w-7
              h-7
              text-white
            "
            strokeWidth={1.8}
          />
        </div>

        {/* Text */}
        <span
          className="
            text-white
            text-[15px]
            lg:text-[18px]
            font-medium
            leading-[1.4]
          "
        >
          {item.title}
        </span>
      </div>
    );
  })}
</div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">

        <Button
          asChild
          className="
            bg-[#2F6FD5]
            hover:bg-[#1F5FD0]
            text-white
            rounded-xl
            px-8
            py-7
            text-lg
            font-semibold
          "
        >
          <Link href="/contact">
            Book a Free Consultation
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="
            border-white/30
            bg-white/5
            backdrop-blur-md
            text-white
            hover:bg-white/50
            rounded-xl
            px-8
            py-7
            text-lg
            font-semibold
          "
        >
          <Link href="#services">
            Explore Excellence Solutions
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
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
                Whether you're seeking a quick institutional review or ongoing strategic support, EduVora provides practical solutions with the direction, expertise, and support needed to navigate change effectively.
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

  {/* Background Image */}
  <img
    src={serviceHighlights[index].image}
    alt={serviceHighlights[index].title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-[#020B1F]/55" />
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020B1F]/25 to-[#020B1F]/92" />

  {/* Content */}
  <div className="relative z-10 ml-auto w-full max-w-[520px]">

    {/* Badge */}
    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-5 py-3 text-sm mb-8">
      <BadgeCheck className="h-4 w-4 text-[#2F80FF]" />

      <span className="text-white/90">
        {serviceHighlights[index].badge}
      </span>
    </div>

    {/* Heading */}
    <h4 className="text-[32px] font-bold mb-5 leading-none">
      {serviceHighlights[index].title}
    </h4>

    <div className="w-14 h-[4px] bg-[#2F80FF] rounded-full mb-8" />

    {/* Benefits */}
    <div className="space-y-0">
      {serviceHighlights[index].benefits.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-5 py-2 border-b border-white/10"
        >
          <div
            className="
              w-6 h-6
              rounded-full
              bg-[#2F80FF]
              flex
              items-center
              justify-center
              flex-shrink-0
              mt-1
            "
          >
            <Check className="w-4 h-4 text-white" />
          </div>

          <p className="text-[18px] leading-[1.7] text-white/95">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Outcome Card */}
  <div
    className="
      relative
      z-10
      mt-10
      ml-auto
      w-full
      max-w-[560px]
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-md
      p-6
    "
  >
    <div className="flex gap-5 items-start">

      <div
        className="
          w-16 h-16
          rounded-2xl
          bg-[#2F80FF]/20
          border border-[#2F80FF]/30
          flex items-center justify-center
          flex-shrink-0
        "
      >
        <TrendingUp className="w-8 h-8 text-[#2F80FF]" />
      </div>

      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#2F80FF]
            mb-3
            font-medium
          "
        >
          Typical Outcome
        </p>

        <p className="text-white/95 text-[18px] leading-[1.8]">
          {serviceHighlights[index].outcome}
        </p>
      </div>

    </div>
  </div>
</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Pillars */}
        {/* <section className="bg-slate-50 py-20 md:py-28">
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
        </section> */}

        {/* Why Eduvora */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                 What Sets EduVora Apart
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