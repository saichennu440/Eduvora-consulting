import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Eye, Users, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us | Eduvora Consulting',
  description: 'Where Educational Excellence Begins. Learn about our data-driven approach, expert team, and mission to transform educational institutions.',
}

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Elizabeth Mitchell',
      role: 'Founder & Chief Consultant',
      bio: 'PhD in Educational Leadership with 20+ years of experience transforming institutions globally.',
      expertise: ['Strategic Planning', 'Institutional Leadership', 'Change Management'],
    },
    {
      name: 'Prof. James Richardson',
      role: 'Senior Curriculum Consultant',
      bio: 'Expert in curriculum design with extensive experience in K-12 and higher education sectors.',
      expertise: ['Curriculum Design', 'Learning Outcomes', 'Program Development'],
    },
    {
      name: 'Dr. Maria Santos',
      role: 'Quality Assurance Specialist',
      bio: 'Accreditation expert and quality systems pioneer with 18 years in institutional improvement.',
      expertise: ['QA Systems', 'Accreditation', 'Assessment'],
    },
    {
      name: 'Prof. David Wong',
      role: 'Technology Integration Lead',
      bio: 'Technology strategist specializing in digital transformation in educational settings.',
      expertise: ['Technology Integration', 'Digital Learning', 'Change Management'],
    },
    {
      name: 'Ms. Sarah Thompson',
      role: 'Staff Development Consultant',
      bio: 'Organizational development specialist focused on faculty growth and institutional capacity.',
      expertise: ['Staff Training', 'Leadership Development', 'Organizational Culture'],
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Market Analysis Consultant',
      bio: 'Industry analyst with deep expertise in educational market trends and institutional positioning.',
      expertise: ['Market Analysis', 'Strategic Positioning', 'Growth Strategy'],
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
                           About Eduvora Consulting
                      </h1>
        
                  <p className="text-lg text-white/80 max-w-2xl">
                    Where Educational Excellence Begins Through Systems, Strategy, and Leadership

                  </p>
                </div>
              </div>
        
        </section>

        {/* Vision & Mission */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-[#F5F5F5] p-12 border border-[#E5E5E5] rounded-none shadow-none">
                <Eye size={40} className="text-[#0A1F44] mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">Our Vision</h2>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  To be the most trusted partner for educational institutions seeking transformative excellence. 
                  We envision a future where every school has access to world-class systems, processes, and 
                  expertise that enable them to deliver outstanding educational outcomes.
                </p>
              </Card>
              
              <Card className="bg-[#F5F5F5] p-12 border border-[#E5E5E5] rounded-none shadow-none">
                <Target size={40} className="text-[#0A1F44] mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">Our Mission</h2>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  To empower educational institutions through comprehensive audits, strategic HR solutions, 
                  and sustainable transformation projects. We are committed to building stronger schools 
                  through data-driven insights and proven best practices.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Consultancy Approach Section */}
        <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Our Approach</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">
                How We Work
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[450px] w-full">
                <Image 
                  src="https://images.pexels.com/photos/18587790/pexels-photo-18587790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Modern educational facility" 
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#111111]">
                  Data-Driven, Customized Solutions
                </h3>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  Every institution is unique. We begin with a thorough assessment of your current systems, 
                  processes, and performance metrics. Our consultants use evidence-based methodologies to 
                  identify strengths, gaps, and opportunities.
                </p>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Each recommendation is tailored to 
                  your institution's context, resources, and goals. Our implementation support ensures 
                  sustainable change that delivers lasting results.
                </p>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  From academic audits to HR transformation, we partner with you throughout the journey—providing 
                  ongoing monitoring, guidance, and support to ensure success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise / Experience Stats Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Expertise</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111111]">
                Experience That Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '10+', label: 'Years of Experience' },
                { number: '50+', label: 'Schools Transformed' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <Card key={index} className="p-8 text-center border-[#E5E5E5] rounded-none shadow-none bg-[#F5F5F5]">
                  <div className="text-5xl font-extrabold text-[#0A1F44] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-base text-[#111111]/80 font-medium">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Expert Team */}
        {/* <section className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Leadership</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Our consultants bring decades of combined experience and proven expertise in educational transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-8 border-[#E5E5E5] bg-white rounded-none hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#0A1F44]/5 rounded-none flex items-center justify-center mb-4">
                    <Users size={24} className="text-[#0A1F44]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0A1F44] font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5E5E5]">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2.5 py-1 bg-[#F5F5F5] text-[#0A1F44] text-xs font-semibold border border-[#E5E5E5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Founder Profile / Shared Insights Overlay Layout */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[450px] w-full">
                <Image 
                  src="https://images.pexels.com/photos/5427663/pexels-photo-5427663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Educational leadership" 
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0A1F44] mb-4">Background</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-6">
                  Led by Education Experts
                </h2>
                <p className="text-base text-[#111111]/80 leading-relaxed mb-4">
                  Our founding team comprises seasoned education professionals with extensive experience in 
                  school management, academic leadership, and institutional transformation. With backgrounds 
                  spanning curriculum design, HR optimization, and operational excellence, we bring a 
                  holistic perspective to every engagement.
                </p>
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  We've worked with schools across diverse contexts—from emerging institutions to established 
                  educational groups. This breadth of experience enables us to provide practical, actionable 
                  guidance that drives real improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#0A1F44] text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                These principles guide everything we do and every recommendation we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Integrity', description: 'Honest, transparent communication and ethical consulting practices.' },
                { title: 'Excellence', description: 'Commitment to highest standards in all our work and deliverables.' },
                { title: 'Collaboration', description: 'Partnership approach with deep respect for your institutional context.' },
                { title: 'Impact', description: 'Focus on measurable results and sustainable institutional improvement.' },
              ].map((value, index) => (
                <div key={index} className="text-center sm:text-left p-4 border-l border-white/20">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your institution achieve excellence and sustainable growth.
            </p>
            <Button asChild size="lg" className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white rounded-none px-8 py-6 text-base font-medium">
              <Link href="/contact">
                Start the Conversation
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