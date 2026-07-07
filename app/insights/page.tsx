

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Eye,
  X,
  ExternalLink,
} from 'lucide-react'

export const metadata = {
  title: 'Featured Insights | EduVora Consulting',
  description:
    'Featured insights for school leaders, school owners, trustees, and academic decision-makers on academic audits, NEP readiness, learning outcomes, teacher attrition, school systems, and institutional excellence.',
}



const articles = [
  {
    id:1,
    number: '01',
    title: 'The Hidden Cost of Not Conducting Academic Audits',
    subtitle: 'Why Schools Need Academic Audits?',
    image: '/insights/bg-1.jpeg',
    body: [
      'Every school measures results. Very few measure the systems that create those results.',
      'When admissions remain healthy, examinations produce acceptable outcomes, and classrooms appear busy, it is easy to assume everything is functioning effectively.',
      'However, some of the most significant academic challenges remain invisible until they begin affecting student achievement, parent confidence, and institutional reputation.',
      'Students may be progressing without developing conceptual understanding. Teaching may be taking place without consistent learning. Assessments may be rewarding memory rather than mastery.',
      'An Academic Audit provides school leaders with objective visibility into classroom practices, academic systems, learning environments, assessment quality, and student engagement.',
      'The purpose is not to identify faults. The purpose is to identify opportunities.',
      'Because schools rarely struggle due to a lack of effort. They struggle because important realities remain unseen.',
    ],
  },
  {
    id:2,
    number: '02',
    title: 'Is Your School NEP Ready?',
    subtitle: 'NEP Readiness: Beyond Activities and Compliance',
    image: '/insights/bg-2.jpeg',
    body: [
      'Many schools believe they are implementing the National Education Policy because they have introduced projects, activities, experiential learning programs, or skill-based initiatives.',
      'But true NEP readiness goes far beyond activities.',
      'The real question is not whether new programs exist. The real question is whether the school’s systems support the outcomes NEP envisions.',
      'Are students developing competencies or merely completing tasks?',
      'Are assessments evaluating understanding or memorization?',
      'Are classrooms encouraging curiosity or reinforcing compliance?',
      'Schools that successfully embrace NEP are not those that add initiatives. They are the schools that align curriculum, pedagogy, assessments, leadership practices, and institutional culture with a shared educational vision.',
      'NEP readiness is not a checklist. It is an institutional transformation journey.',
    ],
  },
  {
    id:3,
    number: '03',
    title: 'How to Improve Student Learning Outcomes?',
    subtitle: 'Why Learning Outcomes Remain Stagnant Despite Hard Work',
    image: '/insights/bg-3.jpeg',
    body: [
      'Every school wants better learning outcomes. Teachers work hard. Students attend classes. Lessons are completed.',
      'Yet learning outcomes often remain unchanged.',
      'Because real improvement begins when schools understand a fundamental truth: teaching and learning are not the same thing.',
      'A lesson can be delivered effectively and still fail to create meaningful understanding.',
      'High-performing schools understand that improvement begins by measuring what students actually learn—not simply what teachers teach.',
      'They monitor learning progression, analyze evidence, identify struggling learners early, evaluate interventions, and make decisions based on insight rather than assumption.',
      'The true measure of educational success is not what teachers teach. It is what students learn.',
    ],
  },
  {
    id:4,
    number: '04',
    title: 'Reducing Teacher Attrition in Schools',
    subtitle: 'The Real Reasons Teachers Leave Schools',
    image: '/insights/bg-4.jpeg',
    body: [
      'Teacher attrition is often viewed as a recruitment problem. In reality, it is usually a leadership and systems challenge.',
      'While salary matters, experienced educators frequently leave schools for reasons that are less visible: lack of professional growth, unclear expectations, limited recognition, inconsistent leadership, excessive administrative burden, and absence of meaningful feedback.',
      'The consequences of attrition extend far beyond vacant positions. It disrupts student continuity, weakens institutional culture, impacts parent confidence, and places additional pressure on existing teams.',
      'The strongest schools focus not only on attracting talented educators. They focus on creating environments where talented educators choose to stay.',
      'Because every teacher who leaves takes more than experience. They take relationships, continuity, trust, and institutional knowledge that cannot be easily replaced.',
    ],
  },
]

const trends = [
  'Parents are evaluating schools beyond examination results.',
  'Student well-being is becoming a critical performance indicator.',
  'Competency-based learning is gaining greater importance than content coverage.',
  'Schools are under increasing pressure to demonstrate measurable learning outcomes.',
  'Teacher effectiveness is becoming a central determinant of institutional success.',
  'Data-driven decision making is replacing intuition-based management.',
  'Future readiness is becoming as important as academic achievement.',
]

const bestPractices = [
  'They monitor academic quality continuously.',
  'They invest in teacher development systematically.',
  'They use classroom observations as tools for improvement rather than inspection.',
  'They identify student learning gaps early.',
  'They make decisions using evidence rather than assumptions.',
  'They create accountability without creating fear.',
  'They build systems that continue performing even when individuals change.',
  'They are built through extraordinary consistency.',
]

const caseStudies = [
  {
    title: 'Improving Academic Performance Through Structured Classroom Observations',
    profile: 'A CBSE School in Telangana',
    challenge:
      'Student performance varied significantly across sections despite common curriculum delivery and experienced teaching staff.',
    findings:
      'Classroom observations revealed inconsistencies in instructional strategies, student engagement, questioning techniques, and formative assessment practices.',
    intervention:
      'A structured classroom observation framework, teacher coaching model, and academic monitoring process were introduced.',
    results:
      'Improved classroom engagement, greater instructional consistency, stronger academic accountability, and measurable improvement in learning outcomes.',
  },
  {
    title: 'When School Reputation Hid Operational Reality',
    profile: 'An Established School with Strong Market Presence',
    challenge:
      'The institution enjoyed healthy admissions and a positive parent perception but faced growing concerns regarding academic consistency and teacher accountability.',
    findings:
      'A comprehensive review revealed several hidden performance gaps that were not visible through routine reporting mechanisms.',
    intervention:
      'An institution-wide diagnostic review followed by targeted academic, HR, and operational improvement initiatives.',
    results:
      'Greater leadership visibility, stronger decision-making capability, improved accountability systems, and a clear roadmap for sustainable institutional growth.',
  },
]

function InsightFlipCard({
  number,
  title,
  subtitle,
  image,
  body,
}: {
  number: string
  title: string
  subtitle: string
  image: string
  body: string[]
}) {
  const modalId = `article-${number}-modal`

  return (
    <>
      <div className="group" style={{ perspective: '1500px' }}>
        <div
          className="relative min-h-[470px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="relative h-[390px]">
              <Image src={image} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0A1F44]/55" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/30 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-white text-sm font-semibold backdrop-blur-md border border-white/15">
                Article {number}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-xs uppercase tracking-[0.22em] font-semibold mb-2">
                  Featured Article
                </p>
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">{subtitle}</p>
              </div>
            </div>

            {/* Small footer strip — about 1 to 2 inches */}
            <div className="h-[80px] px-6 py-4 flex items-center justify-between gap-4 border-t border-slate-200 bg-white">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hover to read the article insights.
              </p>
              <a
                href={`#${modalId}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1F44]/10 text-[#0A1F44] shrink-0"
                aria-label={`Open full article: ${title}`}
              >
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="h-full p-6 md:p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A1F44]/10 text-[#0A1F44] font-bold">
                  {number}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#0A1F44] font-semibold">
                    Insight
                  </p>
                  <h3 className="text-lg font-bold text-[#111111]">{subtitle}</h3>
                </div>
              </div>

              <h4 className="text-xl font-bold text-[#111111] mb-4 leading-tight">
                {title}
              </h4>

              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed flex-1 overflow-y-auto pr-1">
                {body.slice(0, 4).map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                <p className="text-[#0A1F44] font-semibold">
                  Read the full article in the popup for the complete insight.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                <p className="text-sm text-[#0A1F44] font-semibold">
                  EduVora Featured Insight
                </p>
                <a
                  href={`#${modalId}`}
                  className="inline-flex items-center gap-2 rounded-none bg-[#0A1F44] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0A1F44]/90"
                >
                  Open Full Article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Popup / Modal */}
      <div
        id={modalId}
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/75 p-4 target:flex"
      >
        <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">
          <a
            href="#featured-insights-anchor"
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0A1F44] shadow-md hover:bg-white"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </a>

              <div className="grid lg:grid-cols-[0.95fr_1.05fr] h-[90vh] overflow-hidden">            <div className="relative min-h-[260px] lg:min-h-full">
              <Image src={image} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0A1F44]/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
                  Article {number}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-white/85">{subtitle}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44]/10 text-[#0A1F44] font-bold">
                  {number}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#0A1F44] font-semibold">
                    Full Article
                  </p>
                  <h4 className="text-lg font-bold text-[#111111]">{subtitle}</h4>
                </div>
              </div>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                {body.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#featured-insights-anchor"
                  className="inline-flex items-center justify-center rounded-none bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0A1F44]/90"
                >
                  Close Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="insights-top" className="bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[620px]">

            <Image
              src="/insights/hero-bg.jpg"
              alt="Insights Hero"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-10 max-w-[1500px] mx-auto h-full px-5 lg:px-12 flex items-center">

              <div className="max-w-[560px]">

                <div className="flex items-start gap-4 lg:gap-5 mb-6">
                  <div className="w-[2px] h-[80px] lg:h-[110px] bg-[#C9A227]" />

                  <div>
                    <h1 className="font-serif font-bold leading-[0.95]">
                      <span className="block text-[#0A1F44] text-[28px] sm:text-[38px] lg:text-[58px]">
                        Insights That Drive
                      </span>

                      <span className="block text-[28px] sm:text-[38px] lg:text-[58px]">
                        <span className="text-[#C9A227]">Better</span>{" "}
                        <span className="text-[#0A1F44]">
                          School Decisions
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="w-14 h-[3px] bg-[#C9A227] mb-6 ml-4 lg:ml-6" />

                <p className="text-[#0A1F44] text-[14px] sm:text-[15px] lg:text-[19px] leading-relaxed max-w-[520px] ml-4 lg:ml-6">
                  Practical insights, emerging trends and strategic perspectives
                  to help schools strengthen performance, make informed decisions
                  and achieve sustainable excellence.
                </p>

              </div>

            </div>
          </div>
        </section>

      <div id="featured-insights-anchor" className="absolute -top-24"></div>
        {/* Featured Articles */}
      <section className="py-16 lg:py-20 bg-[#F8F7F5]">

        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

          {/* Heading */}
          <div className="text-center mb-10 lg:mb-14">

            <div className="flex justify-center items-center gap-4 mb-3">
              <div className="w-10 lg:w-14 h-[2px] bg-[#C9A227]" />

              <p className="uppercase tracking-[0.3em] text-[#C9A227] text-[11px] lg:text-sm font-semibold">
                Featured Insights
              </p>

              <div className="w-10 lg:w-14 h-[2px] bg-[#C9A227]" />
            </div>

            <h2 className="font-serif text-[#0A1F44] text-[28px] sm:text-[38px] lg:text-[52px] font-bold leading-[1] mb-4">
              Insights for Leaders Who Shape
              <br />
              the Future of Schools
            </h2>

            <p className="text-[#555] text-[14px] lg:text-[17px] max-w-2xl mx-auto">
              Strategic perspectives, emerging trends and practical observations
              to help educational institutions make better decisions.
            </p>
          </div>

          {/* Featured Card */}
          <div className="bg-white rounded-[22px] overflow-hidden shadow-sm mb-5">
            <div className="grid lg:grid-cols-[1.25fr_0.9fr]">

              <Image
                src={articles[0].image}
                alt={articles[0].title}
                width={800}
                height={500}
                className="w-full h-[250px] lg:h-full object-cover"
              />

              <div className="p-6 lg:p-8">

                <div className="flex justify-between items-center mb-5">
                  <p className="uppercase text-[#C9A227] tracking-[0.22em] text-xs lg:text-sm font-semibold">
                    ARTICLE 01
                  </p>

                  <span className="text-xs text-[#6B7280]">
                    {articles[0].time}
                  </span>
                </div>

                <h3 className="font-serif text-[#0A1F44] text-[26px] lg:text-[34px] font-bold leading-[1.05] mb-5">
                  {articles[0].title}
                </h3>

                <div className="w-12 h-[3px] bg-[#C9A227] mb-6" />

                <p className="text-[#666] text-[15px] lg:text-[17px] leading-relaxed mb-6">
                  {articles[0].description}
                </p>

<a
  href="#article-01-modal"
  className="text-[#C9A227] font-semibold text-base"
>
  Read Insight →
</a>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={320}
                  className="w-full h-[190px] object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-between mb-4">
                    <p className="text-[#C9A227] uppercase tracking-[0.2em] text-xs font-semibold">
                      ARTICLE {article.number}
                    </p>

                    <span className="text-xs text-gray-500">
                      {article.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-[#0A1F44] text-[22px] lg:text-[26px] font-bold leading-[1.1] mb-4">
                    {article.title}
                  </h3>

<a
  href={`#article-${article.number}-modal`}
  className="text-[#C9A227] font-semibold"
>
  Read Insight →
</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

        {/* What We Are Observing */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                What We Are Observing
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                Emerging trends shaping the future of schools
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Across institutions, certain patterns are becoming increasingly visible.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
              <Card className="p-8 md:p-10 border border-slate-200 shadow-sm rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-10 w-10 text-[#0A1F44]" />
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Emerging Trends
                  </h3>
                </div>

                <div className="space-y-4">
                  {trends.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#0A1F44] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-[#0A1F44]/5 p-5">
                  <p className="text-lg font-semibold text-[#111111] leading-relaxed">
                    The schools that will thrive over the next decade will not
                    necessarily be those with the biggest campuses. They will be the
                    schools with the strongest systems.
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-10 border border-slate-200 shadow-sm rounded-2xl bg-[#0A1F44] text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-12 w-12 text-white" />
                  <h3 className="text-2xl font-bold">
                    Best Practices Followed by High-Performing Schools
                  </h3>
                </div>

                <p className="text-white/80 leading-relaxed mb-6">
                  Through observation and analysis, high-performing schools consistently
                  demonstrate certain characteristics.
                </p>

                <div className="grid gap-4">
                  {bestPractices.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0A1F44] font-bold shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-white/90 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-[#0A1F44] font-semibold mb-3">
                Case Studies
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                Real-world school improvement stories
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                How structure, visibility, and evidence create better decisions and
                stronger outcomes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white"
                >
                  <div className="p-8 md:p-10">
                    <div className="inline-flex items-center rounded-full bg-[#0A1F44]/5 px-4 py-2 text-[#0A1F44] text-sm font-semibold mb-5">
                      Case Study 0{index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-[#111111] mb-3 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-[#0A1F44] font-semibold mb-6">{study.profile}</p>

                    <div className="space-y-5">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                          Challenge
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                          Findings
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.findings}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                          Intervention
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.intervention}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#0A1F44]/5 p-5">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#0A1F44] font-semibold mb-2">
                          Results
                        </p>
                        <p className="text-[#111111] leading-relaxed font-medium">
                          {study.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final Thought */}
        <section className="py-20 md:py-28 bg-[#0A1F44] text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 mb-6">
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-[0.18em]">
                A Final Thought for School Leaders
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              The greatest risks facing a school are rarely the problems everyone can see.
            </h2>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-6">
              They are the gaps hidden beneath successful routines, positive
              assumptions, and familiar practices. Schools that continuously question,
              evaluate, and improve are the schools that remain relevant, respected,
              and future-ready.
            </p>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-semibold">
              Excellence is not achieved by chance. It is achieved by understanding
              reality clearly—and acting on it deliberately.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0A1F44] hover:bg-white/90 rounded-none px-8 py-6 text-base font-semibold"
              >
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 rounded-none px-8 py-6 text-base font-semibold"
              >
                <Link href="/services">Explore EduVora Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {articles.map((article) => (
  <div
    key={article.id}
    id={`article-${article.number}-modal`}
    className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/75 p-4 target:flex"
  >
    <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Close Button */}
   <a
  href="#featured-insights-anchor"
  className="
    absolute
    right-6
    top-6
    lg:right-8
    lg:top-8
    z-30
    inline-flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-lg
    border border-slate-200
  "
>
        <X className="h-5 w-5 text-[#0A1F44]" />
      </a>

<div className="grid lg:grid-cols-[0.95fr_1.05fr] h-[90vh] overflow-hidden">
        {/* Left Image */}
        <div className="relative min-h-[260px] lg:min-h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0A1F44]/45" />

         <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 pr-20 lg:pr-28 text-white">            <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-2">
              Article {article.number}
            </p>

            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-2">
              {article.title}
            </h2>

            <p className="text-white/90">
              {article.subtitle}
            </p>
          </div>
        </div>

        {/* Right Content */}
<div className="p-6 lg:p-8 overflow-y-auto h-full min-h-0">          <div className="space-y-5 text-[#555] leading-relaxed">
            {article.body.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
))}
      </main>
      <Footer />
    </>
  )
}