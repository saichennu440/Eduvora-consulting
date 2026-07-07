import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, TrendingUp, ShieldCheck, Sprout, Landmark, Quote } from "lucide-react";

import { 
  ArrowRight, 
  CheckCircle, 
  FileCheck, 
  UserCheck, 
  DollarSign, 
  Building 
} from 'lucide-react'
import SixExcellencePillars from '@/components/SixExcellencePillars'

export default function Home() {

const aboutFeatures = [
  {
    icon: Eye,
    title: "UNSEEN GAPS",
    description: "Critical opportunities often go unnoticed.",
  },
  {
    icon: TrendingUp,
    title: "COMPLEX PRIORITIES",
    description: "Many initiatives, limited focus and bandwidth.",
  },
  {
    icon: ShieldCheck,
    title: "GROWING PRESSURE",
    description: "Accountability, compliance, and stakeholder expectations continue to rise.",
  },
  {
    icon: Sprout,
    title: "SUSTAINABLE IMPACT",
    description: "Short-term fixes don't deliver long-term excellence.",
  },
];

// const services = [
//   {
//     number: "01",
//     title: "Academic Excellence &\nNEP 2020 Alignment",
//     description:
//       "Curriculum effectiveness, teaching quality, learning outcomes, assessment systems, competency-based learning, and NEP 2020 implementation.",
//     icon: "book",
//   },
//   {
//     number: "02",
//     title: "Student Learning &\nStakeholder Experience",
//     description:
//       "Student engagement, well-being, parent satisfaction, school culture, and stakeholder feedback.",
//     icon: "stakeholders",
//   },
//   {
//     number: "03",
//     title: "Leadership, Governance &\nSchool Management",
//     description:
//       "Leadership effectiveness, strategic planning, governance systems, accountability, and decision-making processes.",
//     icon: "governance",
//   },
//   {
//     number: "04",
//     title: "Human Capital &\nOrganizational Development",
//     description:
//       "Recruitment, performance management, professional development, staff engagement, and retention.",
//     icon: "human",
//   },
//   {
//     number: "05",
//     title: "Compliance, Operations &\nInstitutional Sustainability",
//     description:
//       "Regulatory compliance, safeguarding, infrastructure readiness, operational systems, and risk management.",
//     icon: "shield",
//   },
//   {
//     number: "06",
//     title: "Financial Sustainability &\nGrowth",
//     description:
//       "Revenue optimization, enrollment growth, fee systems, cost management, resource utilization, and long-term sustainability.",
//     icon: "growth",
//   },
// ];

const svgToDataUri = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const auditSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Initial discussion to understand your needs',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M14 18a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v18a8 8 0 0 1-8 8H28l-10 8v-8h-2a8 8 0 0 1-8-8V18Z" stroke="#0A1F44" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 24h16M24 32h10" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    number: '02',
    title: 'Audit',
    description: 'Comprehensive assessment of systems',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M22 14h20a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z" stroke="#0A1F44" stroke-width="3"/>
        <path d="M26 24h12M26 32h18M26 40h10" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
        <path d="M40 44l8 8" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
        <circle cx="44" cy="44" r="7" stroke="#0A1F44" stroke-width="3"/>
      </svg>
    `),
  },
  {
    number: '03',
    title: 'Analysis',
    description: 'Deep dive into findings and opportunities',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M12 50h40" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
        <path d="M20 44V30" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 44V22" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M44 44V16" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M18 20l8 6 10-10 10 6" stroke="#0A1F44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),
  },
  {
    number: '04',
    title: 'Reporting',
    description: 'Detailed report with actionable insights',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M18 10h18l10 10v34a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" stroke="#0A1F44" stroke-width="3" stroke-linejoin="round"/>
        <path d="M36 10v10h10" stroke="#0A1F44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 28h20M22 36h20M22 44h14" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    number: '05',
    title: 'Improvement Plan',
    description: 'Strategic roadmap for transformation',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M20 48h24" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
        <path d="M24 44V28" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 44V20" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M40 44V32" stroke="#0A1F44" stroke-width="4" stroke-linecap="round"/>
        <path d="M18 18l8 4 8-8 12 6" stroke="#0A1F44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="18" cy="18" r="2.5" fill="#0A1F44"/>
        <circle cx="26" cy="22" r="2.5" fill="#0A1F44"/>
        <circle cx="34" cy="14" r="2.5" fill="#0A1F44"/>
        <circle cx="46" cy="20" r="2.5" fill="#0A1F44"/>
      </svg>
    `),
  },
  {
    number: '06',
    title: 'Monitoring & Support',
    description: 'Ongoing monitoring and guidance',
    icon: svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path d="M22 18a10 10 0 0 1 20 0v8h4a4 4 0 0 1 4 4v10a14 14 0 0 1-14 14H28a14 14 0 0 1-14-14V30a4 4 0 0 1 4-4h4v-8Z" stroke="#0A1F44" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 34h16M24 40h10" stroke="#0A1F44" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `),
  },
]

  const whyChooseUs = [
    'Expert consultants with 10+ years in education',
    'Data-driven approach to school improvement',
    'Customized solutions for each institution',
    'Proven track record of successful transformations',
    'Ongoing support and monitoring',
    'Compliance and best practices adherence'
  ];

  // const testimonials = [
  //   {
  //     text: "EduVora Consulting transformed our academic systems. Their audit revealed key improvement areas and their implementation support was exceptional.",
  //     author: 'Dr. Rajesh Kumar',
  //     role: 'Principal, Delhi Public School',
  //   },
  //   {
  //     text: "The HR and payroll solutions provided by the team streamlined our operations significantly. Highly professional and results-oriented.",
  //     author: 'Mrs. Priya Sharma',
  //     role: 'Director, Bright Future Academy',
  //   },
  //   {
  //     text: "Outstanding consultancy services. Their school transformation project exceeded our expectations and delivered measurable results.",
  //     author: 'Mr. Amit Patel',
  //     role: 'Managing Director, Educational Group',
  //   }
  // ];

  return (
    <>
      <Header />
      <main className="bg-transparent">
        
        {/* Hero Section */}
        <section className="relative min-h-[98vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpeg"
              alt="School and Corporate Excellence"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#04152D]/1" />

            {/* Left content overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04152D]/95 via-[#04152D]/80 via-40% to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-4">
              <div className="max-w-3xl lg:-mb-8">
                <p className="text-sm uppercase tracking-[0.25em] font-semibold text-gray-300 mb-4">
                  EduVora CONSULTING
                </p>

            <h1 className="leading-[1] mb-8 border-l-4 border-[#0A1F44] pl-5">
              <span className="block text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                SEEING
              </span>

              <span className="block text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4B06A] to-[#F4E2A4]">
                BEYOND
              </span>

              <span className="block text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                WHAT <br></br>SCHOOLS SEE
              </span>
            </h1>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                Guiding schools towards sustainable Excellence
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#0A1F44] hover:bg-gray-100 font-semibold rounded-none px-8"
                  >
                    <Link href="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  {/* <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10 rounded-none px-8"
                  >
                    <Link href="/services">
                      Request Proposal
                    </Link>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why EduVora Exists */}
        <section className="py-20 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-12">
          {/* Top: Headline + Feature Grid | Image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 items-start">

            {/* Left Column */}
            <div>
              <p className="text-sm uppercase tracking-[0.22em] font-semibold text-[#C9A227] mb-5">
                WHY EduVora EXISTS
              </p>

              <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[52px] font-bold text-[#0A1F44] leading-[0.95]">
                Beyond Routine.
              </h2>

              <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[52px] font-bold leading-[0.95] mb-8">
                <span className="text-[#0A1F44]">Towards </span>
                <span className="text-[#C9A227]">Excellence.</span>
              </h2>

              <div className="w-24 h-[3px] bg-[#C9A227] mb-8 lg:mb-10" />

              <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed max-w-3xl mb-10 lg:mb-14">
                Schools today navigate complex challenges and rising expectations.
                Yet, meaningful improvement is difficult without an objective
                perspective, clear insights, and a strong strategy.
              </p>

              {/* Mobile Image */}
        <div className="block lg:hidden my-8">
          <Image
            src="/aboutus.jpeg"
            alt="Identifying hidden potential in schools"
            width={700}
            height={500}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

              {/* Feature Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#E7E7E7] pt-6 gap-y-8">
                {aboutFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`
                      px-3 sm:px-5
                      ${
                        index !== aboutFeatures.length - 1
                          ? "lg:border-r border-[#E7E7E7]"
                          : ""
                      }
                    `}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A1F44] flex items-center justify-center mb-4">
                      <feature.icon
                        className="w-5 h-5 sm:w-7 sm:h-7 text-[#C9A227]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h4 className="text-[15px] sm:text-[17px] font-bold uppercase tracking-wide text-[#0A1F44] mb-3">
                      {feature.title}
                    </h4>

                    <p className="text-[14px] sm:text-[15px] text-[#111111]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
          {/* Desktop Image */}
        <div className="hidden lg:flex relative justify-end items-start">
          <div className="relative w-full h-[680px]">
            <Image
              src="/aboutus.jpeg"
              alt="Identifying hidden potential in schools"
              fill
              priority
              className="
                object-contain
                object-right-top
                scale-[1.85]
                origin-top-right
              "
            />
          </div>
        </div>

          </div>



                    {/* Our Purpose + Quote Banner */}
                    <div className="mt-16 bg-[#0A1F44] relative overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C9A227]/30">

                        {/* Our Purpose */}
                        <div className="flex items-start gap-6 p-10 md:p-12">
                          <div className="w-10 h-10 lg:w-19 lg:h-19 rounded-full border-2 border-[#C9A227] flex items-center justify-center flex-shrink-0">
                            <Landmark className="w-5 h-5 lg:w-10 lg:h-10 text-[#C9A227]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#C9A227] mb-3">Our Purpose</h3>
                            <p className="text-white/90 leading-relaxed">
                              EduVora exists to help schools see what lies beneath the
                              surface, strengthen what matters, and build the foundations
                              for lasting success.
                            </p>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="relative flex items-start gap-6 p-10 md:p-12">
                          <Quote className="w-30 h-30 lg:w-26 lg:h-26 text-[#C9A227] rotate-180 fill-[#C9A227] -translate-y-12" strokeWidth={0} />
                          <div>
                          <p className="text-white/90 leading-relaxed text-lg">
                            Great schools are not built by chance. They are built through
                            vision, strong systems, effective leadership, accountability,
                            and continuous improvement.
                          </p>  
                           <div className="w-20 h-[3px] bg-[#C9A227] translate-y-2 mb-10" />
                          </div>                        
                          {/* Decorative wave lines (bottom-right) */}
                          <svg
                            className="absolute right-0 bottom-0 w-40 h-40 opacity-20 pointer-events-none"
                            viewBox="0 0 200 200"
                            fill="none"
                          >
                            <path d="M0,100 C50,50 150,150 200,100" stroke="#C9A227" strokeWidth="1" />
                            <path d="M0,120 C50,70 150,170 200,120" stroke="#C9A227" strokeWidth="1" />
                            <path d="M0,140 C50,90 150,190 200,140" stroke="#C9A227" strokeWidth="1" />
                            <path d="M0,160 C50,110 150,210 200,160" stroke="#C9A227" strokeWidth="1" />
                          </svg>   
                        </div>
                        
                      </div>
                    </div>

                    {/* Bottom Tagline */}
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span className="w-24 h-[1px] bg-[#C9A227]" />
                      </div>

                      <p className="font-serif text-xl md:text-2xl text-center text-[#0A1F44] leading-relaxed">
                        We partner with school leaders to turn insights into action
                        <br className="hidden md:block" />
                        and <span className="text-[#C9A227]">ambition</span> into{" "}
                        <span className="text-[#C9A227]">achievement.</span>
                      </p>

                      <div className="hidden sm:flex items-center gap-2">
                        <span className="w-24 h-[1px] bg-[#C9A227]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                      </div>
                    </div>

        </div>
        </section>

        {/* Services Section */}
        <SixExcellencePillars />
        {/* <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.28em] font-semibold text-[#0A1F44] mb-5 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-slate-300" />
                HOW WE PARTNER WITH SCHOOLS
                <span className="h-px w-16 bg-slate-300" />
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1F44] mb-5 leading-tight">
                Pathways to School Excellence
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Focused solutions designed to assess, strengthen, and transform
                educational institutions for long-term impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="rounded-[18px] border border-slate-200 bg-white px-8 py-10 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-8">
                    <div className="w-[120px] h-[120px] rounded-full bg-[#EEF3FA] flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[1.35rem] font-bold text-[#0A1F44] text-center leading-snug mb-5 whitespace-pre-line">
                    {service.title}
                  </h3>

                  <div className="flex justify-center mb-6">
                    <span className="h-[3px] w-16 bg-[#2F6FD5] rounded-full" />
                  </div>

                  <p className="text-center text-slate-600 leading-relaxed text-[0.98rem]">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-center gap-6">
              <span className="h-px w-32 bg-slate-300" />
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-[#2F6FD5] font-medium text-lg hover:opacity-90 transition-opacity"
              >
                Explore Our Solutions
                <span className="text-2xl leading-none">→</span>
              </Link>
              <span className="h-px w-32 bg-slate-300" />
            </div>
          </div>
        </section> */}
    
        {/* Audit Process Section
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-m uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-2">
                Our Process
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How We Transform Your Institution
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover Strengths. Uncover Opportunities. Build Excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {auditSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-8 border-l-4 border-[#0A1F44] bg-[#F5F5F5] rounded-2xl"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-4xl font-black text-[#0A1F44]/20">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why Choose Us Section */}
        <section
          className="relative overflow-hidden"
          data-testid="why-choose-section"
        >
          {/* Background Image */}
            <div className="relative">

              {/* Desktop Background */}
              <div
                className="
                  hidden lg:block
                  relative
                  w-full
                  h-[780px]
                  bg-center
                  bg-cover
                  bg-no-repeat
                "
                style={{
                  backgroundImage: "url('/why-choose-bg.jpg')",
                }}
              >
            {/* Content Overlay */}
            <div className="absolute inset-0">
              <div className="max-w-[1600px] mx-auto h-full px-6 lg:px-16 relative">

                {/* Right Side Content */}
                <div
                  className="
                    absolute
                    right-[6%]
                    top-1/2
                    -translate-y-1/2
                    scale-[0.85]
                    origin-center
                    w-[42%]
                    hidden
                    lg:block
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-16 h-[2px] bg-[#C9A227]" />

                    <p className="uppercase tracking-[0.3em] text-[#0A1F44] font-semibold text-sm">
                      WHY CHOOSE US
                    </p>

                    <div className="w-16 h-[2px] bg-[#C9A227]" />
                  </div>

                  <div className="w-2 h-2 rounded-full bg-[#C9A227] ml-[180px] mb-6" />

                  <h2 className="text-[42px] leading-[1.05] font-bold text-[#0A1F44] mb-8">
                    Your Trusted Partner in
                    <br />
                    Educational Excellence
                  </h2>

                  <div className="w-20 h-[3px] bg-[#C9A227] mb-10" />

                  {/* Points */}
                  <div className="space-y-0">

                    {[
                      {
                        title: "Education-Focused Expertise",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <path d="M8 24L32 12L56 24L32 36L8 24Z" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <path d="M18 29V40C18 45 24 49 32 49C40 49 46 45 46 40V29" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      },
                      {
                        title: "Independent Institutional Perspective",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <circle cx="22" cy="24" r="8" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <circle cx="42" cy="24" r="8" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      },
                      {
                        title: "Evidence-Based Recommendations",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <rect x="14" y="34" width="8" height="16" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <rect x="28" y="24" width="8" height="26" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <rect x="42" y="14" width="8" height="36" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      },
                      {
                        title: "Practical Implementation Support",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <circle cx="20" cy="20" r="6" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <circle cx="44" cy="20" r="6" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <circle cx="32" cy="42" r="6" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      },
                      {
                        title: "Sustainable Improvement Framework",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <circle cx="32" cy="32" r="20" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <circle cx="32" cy="32" r="10" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      },
                      {
                        title: "School Excellence Focus",
                        icon: (
                          <svg viewBox="0 0 64 64" className="w-8 h-8">
                            <path d="M18 36L26 28L38 40L46 32" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                            <path d="M18 28L26 36L38 24L46 32" stroke="#0A1F44" strokeWidth="2.5" fill="none"/>
                          </svg>
                        )
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                          flex items-center gap-5
                          py-5
                          border-b border-[#D8C8A6]
                        "
                      >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                          {item.icon}
                        </div>

                        <div className="w-2 h-2 rounded-full bg-[#0A1F44]"></div>

                        <p className="text-[#0A1F44] text-[20px] font-medium">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                 </div>
                   </div>
            </div>
          </div>
                {/* Mobile Version */}
{/* Mobile Layout */}
<div className="lg:hidden bg-white">

  {/* Mobile Image */}
  <img
    src="/"
    alt=""
    className="w-full h-auto object-contain"
  />

            {/* Mobile Content */}
            <div className="px-6 py-10">

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-[#C9A227]" />

                <p className="uppercase tracking-[0.3em] text-[#0A1F44] font-semibold text-xs">
                  WHY CHOOSE US
                </p>

                <div className="w-10 h-[2px] bg-[#C9A227]" />
              </div>

              <h2 className="text-[34px] leading-[1.1] font-bold text-[#0A1F44] text-center mb-8">
                Your Trusted Partner in
                <br />
                Educational Excellence
              </h2>

              <div className="w-16 h-[3px] bg-[#C9A227] mx-auto mb-8" />

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-[#E5D7B4] pb-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#0A1F44] flex-shrink-0" />

                    <p className="text-[#0A1F44] text-[16px] font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
            </div>

            
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 md:py-32 bg-[#0A1F44] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-white/70">Trusted by leading educational institutions.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 flex flex-col justify-between">
                  <p className="text-lg italic mb-8">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#0A1F44] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
            <p className="text-xl text-white/50 mb-8">
              Let's discuss how we can help you achieve academic excellence and operational efficiency.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#0A1F44] rounded-none">
              <Link href="/contact">
                Schedule Your Consultation
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