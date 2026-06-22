import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  CheckCircle, 
  FileCheck, 
  UserCheck, 
  DollarSign, 
  Building 
} from 'lucide-react'

export default function Home() {
const services = [
  {
    title: 'School Excellence\nHealth Check',
    description:
      'A focused review to identify strengths, risks, and immediate improvement opportunities.',
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-15 w-15 text-[#163B73]"
      >
        <rect x="16" y="10" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 10v-3h12v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 22l2.5 2.5L29 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 32l2.5 2.5L29 29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 22h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M33 32h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="43" cy="42" r="9" stroke="currentColor" strokeWidth="2.2" />
        <path d="M49.5 48.5L55 54" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Excellence Review\n& Advisory',
    description:
      'Comprehensive institutional assessment with strategic recommendations.',
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-15 w-15 text-[#163B73]"
      >
        <path d="M18 10h24l8 8v36H18V10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M42 10v8h8" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="29" cy="25" r="6.5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M29 18.5V25h5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 39h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M33 39h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 46h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M33 46h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 32h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M29.5 32h9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Transformation\nPartnership',
    description:
      'Long-term support for sustainable growth, leadership development, and continuous improvement.',
    icon: (
      <svg
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="h-15 w-15 text-[#163B73]"
>
  {/* Stairs */}
  <path
    d="M38 44H44V38H50V32"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Flag pole */}
  <path
    d="M50 18V32"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  {/* Flag */}
  <path
    d="M50 18L56 21L50 24V18Z"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinejoin="round"
  />

  {/* Front person head */}
  <circle
    cx="38"
    cy="21"
    r="3.5"
    stroke="currentColor"
    strokeWidth="2.2"
  />

  {/* Front person body */}
  <path
    d="M38 24.5V34"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M38 28L44 31"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M38 28L33 32"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M38 34L34 41"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M38 34L43 38"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  {/* Back person head */}
  <circle
    cx="25"
    cy="30"
    r="3.5"
    stroke="currentColor"
    strokeWidth="2.2"
  />

  {/* Back person body */}
  <path
    d="M25 33.5V42"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M25 36L30 39"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M25 36L20 40"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M25 42L21 48"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />

  <path
    d="M25 42L29 47"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  />
</svg>
    ),
  },
  {
    title: 'EDUVORA School\nExcellence Index (ESEI)',
    description:
      'A structured framework for measuring, benchmarking, and improving institutional performance.',
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-15 w-15 text-[#163B73]"
      >
        <path d="M14 48h36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="20" y="34" width="6" height="14" stroke="currentColor" strokeWidth="2.2" />
        <rect x="30" y="26" width="6" height="22" stroke="currentColor" strokeWidth="2.2" />
        <rect x="40" y="18" width="6" height="30" stroke="currentColor" strokeWidth="2.2" />
        <path d="M18 30c6-2 10-5 15-10 5-5 10-8 18-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M49 9h4v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 10l3 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

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
  //     text: "EDUVORA Consulting transformed our academic systems. Their audit revealed key improvement areas and their implementation support was exceptional.",
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
              src="/hero-final-bg.jpeg"
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
                  EDUVORA CONSULTING
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
                 Helping schools discover hidden opportunities, strengthen systems, and achieve sustainable excellence.
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
        {/* About Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-m uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">WHY EDUVORA EXISTS?</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-6">
                  Enabling Schools to Move Beyond Routine Towards Excellence
                </h2>
                <p className="text-lg text-[#111111]/80 leading-relaxed mb-6">
                  Schools today face increasing expectations—from academic excellence and future readiness to leadership effectiveness, stakeholder engagement, compliance, and sustainable growth.
                </p>
                <p className="text-lg text-[#111111]/80 leading-relaxed mb-6">
                  Yet many institutions continue to work tirelessly without an objective framework to identify hidden gaps, recognize strengths, and prioritize meaningful improvement.                
                  </p>
                <h3 className="text-2xl font-semibold text-[#111111] mb-4">
                  EduVora was established with a simple belief:
                </h3>
                <p className="text-lg font-semibold text-[#111111]/80 leading-relaxed mb-6">
                Great schools are not built by chance. They are built through vision, strong systems, effective leadership, accountability, and continuous improvement.
                </p>
                <p className="text-lg text-[#111111]/80 leading-relaxed mb-6">
                  We exist to provide educational institutions with the clarity, insights, and strategic direction needed to strengthen performance, unlock potential, and achieve sustainable excellence.               
                   </p>
                <p className="text-lg font-semibold text-[#111111]/80 leading-relaxed mb-6">  
                What remains unseen today often determines tomorrow's success.
                </p>   
                <Button asChild variant="outline" className="border-[#0A1F44] text-[#0A1F44] rounded-none hover:bg-[#0A1F44]/10 px-8 py-3 font-semibold">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/aboutus.jpeg"
                  alt="Educational institution"
                  fill
                  className="object-cover rounded-sm shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-[#F5F5F5]">
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
        </section>
    
        {/* Audit Process Section */}
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
        </section>

         {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/whychooseus.jpeg"
                alt="Professional consultation"
                className="w-full h-auto"
                data-testid="why-choose-image"
              />
            </div>
            <div>
              <p className="text-m uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Why Choose Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111] mb-6">
                Your Trusted Partner in Educational Excellence
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`why-choose-item-${index}`}>
                    <CheckCircle size={20} className="text-[#0A1F44] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#111111]/80">{item}</span>
                  </li>
                ))}
              </ul>
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