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
      icon: FileCheck,
      title: 'Academic Audits',
      description: 'Comprehensive evaluation of academic systems, curriculum delivery, and learning outcomes.'
    },
    {
      icon: UserCheck,
      title: 'HR & Recruitment',
      description: 'Strategic hiring solutions and HR system optimization for educational institutions.'
    },
    {
      icon: DollarSign,
      title: 'Payroll & Compliance',
      description: 'Streamlined payroll management and regulatory compliance support.'
    },
    {
      icon: Building,
      title: 'School Transformation',
      description: 'End-to-end institutional improvement projects for sustainable excellence.'
    }
  ];

  const auditSteps = [
    { number: '01', title: 'Consultation', description: 'Initial discussion to understand your needs' },
    { number: '02', title: 'Audit', description: 'Comprehensive assessment of systems' },
    { number: '03', title: 'Analysis', description: 'Deep dive into findings and opportunities' },
    { number: '04', title: 'Reporting', description: 'Detailed report with actionable insights' },
    { number: '05', title: 'Improvement Plan', description: 'Strategic roadmap for transformation' },
    { number: '06', title: 'Support', description: 'Ongoing monitoring and guidance' }
  ];

  const whyChooseUs = [
    'Expert consultants with 10+ years in education',
    'Data-driven approach to school improvement',
    'Customized solutions for each institution',
    'Proven track record of successful transformations',
    'Ongoing support and monitoring',
    'Compliance and best practices adherence'
  ];

  const testimonials = [
    {
      text: "EDUVORA Consulting transformed our academic systems. Their audit revealed key improvement areas and their implementation support was exceptional.",
      author: 'Dr. Rajesh Kumar',
      role: 'Principal, Delhi Public School',
    },
    {
      text: "The HR and payroll solutions provided by the team streamlined our operations significantly. Highly professional and results-oriented.",
      author: 'Mrs. Priya Sharma',
      role: 'Director, Bright Future Academy',
    },
    {
      text: "Outstanding consultancy services. Their school transformation project exceeded our expectations and delivered measurable results.",
      author: 'Mr. Amit Patel',
      role: 'Managing Director, Educational Group',
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-transparent">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden">
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
            <div className="absolute inset-0 bg-[#04152D]/40" />

            {/* Left content overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04152D]/95 via-[#04152D]/80 via-40% to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-4">
              <div className="max-w-3xl lg:-mt-2">
                <p className="text-sm uppercase tracking-[0.25em] font-semibold text-gray-300 mb-6">
                  EDUVORA CONSULTING
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 border-l-4 border-[#0A1F44] pl-5">
                  Transforming Schools
                  <br />
                  Through Academic
                  <br />
                  Excellence & HR Systems
                </h1>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                  We help schools improve academic quality, recruitment systems,
                  HR operations, payroll processes, and institutional performance.
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

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10 rounded-none px-8"
                  >
                    <Link href="/services">
                      Request Proposal
                    </Link>
                  </Button>
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
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">About Us</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-6">
                  Building Stronger Schools Through Systems & Excellence
                </h2>
                <p className="text-lg text-[#111111]/80 leading-relaxed mb-6">
                  EDUVORA Consulting is a professional consultancy specializing in academic audits, HR optimization, and institutional transformation. We partner with schools to build sustainable systems that drive excellence.
                </p>
                <Button asChild variant="outline" className="border-[#0A1F44] text-[#0A1F44] rounded-none">
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
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-2">Our Services</p>
              <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Consulting Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From academic excellence to operational efficiency, we provide end-to-end support for educational institutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-[#E5E5E5] hover:shadow-lg hover:border-[#0A1F44]/30 transition-all rounded-none group">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-[#0A1F44]/5 flex items-center justify-center group-hover:bg-[#0A1F44] transition-colors">
                        <Icon className="h-8 w-8 text-[#0A1F44] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Audit Process Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-2">Our Process</p>
              <h2 className="text-4xl font-bold text-foreground mb-4">How We Transform Your Institution</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {auditSteps.map((step, index) => (
                <div key={index} className="p-8 border-l-4 border-[#0A1F44] bg-[#F5F5F5]">
                  <div className="text-4xl font-black text-[#0A1F44]/20 mb-2">{step.number}</div>
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
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Why Choose Us</p>
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
        <section className="py-20 md:py-32 bg-[#0A1F44] text-white">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve academic excellence and operational efficiency.
            </p>
            <Button asChild size="lg" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white rounded-none">
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