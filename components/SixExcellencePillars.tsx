"use client";

import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Academic Excellence & NEP 2020 Alignment",
    description:
      "Curriculum effectiveness, teaching quality, learning outcomes, assessment systems, competency-based learning, and NEP 2020 implementation.",
    icon: "book",
  },
  {
    number: "02",
    title: "Student Learning & Stakeholder Experience",
    description:
      "Student engagement, well-being, parent satisfaction, school culture, and stakeholder feedback.",
    icon: "stakeholder",
  },
  {
    number: "03",
    title: "Leadership, Governance & School Management",
    description:
      "Leadership effectiveness, strategic planning, governance systems, accountability, and decision-making processes.",
    icon: "governance",
  },
  {
    number: "04",
    title: "Human Capital & Organizational Development",
    description:
      "Recruitment, performance management, professional development, staff engagement, and retention.",
    icon: "human",
  },
  {
    number: "05",
    title: "Compliance, Operations & Institutional Sustainability",
    description:
      "Regulatory compliance, safeguarding, infrastructure readiness, operational systems, and risk management.",
    icon: "shield",
  },
  {
    number: "06",
    title: "Financial Sustainability & Growth",
    description:
      "Revenue optimization, enrollment growth, fee systems, cost management, resource utilization, and long-term sustainability.",
    icon: "growth",
  },
];

function PillarIcon({ type }) {
  switch (type) {
    case "book":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M14 16C14 12 17 10 22 10H32V50H22C17 50 14 52 14 56V16Z" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <path d="M50 16C50 12 47 10 42 10H32V50H42C47 50 50 52 50 56V16Z" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
        </svg>
      );

    case "stakeholder":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <circle cx="20" cy="20" r="6" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <circle cx="44" cy="20" r="6" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <circle cx="32" cy="38" r="8" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
        </svg>
      );

    case "governance":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <polygon points="32,12 12,24 52,24" stroke="#C9A227" fill="none" strokeWidth="2.5"/>
          <line x1="16" y1="28" x2="16" y2="48" stroke="#C9A227" strokeWidth="2.5"/>
          <line x1="32" y1="28" x2="32" y2="48" stroke="#C9A227" strokeWidth="2.5"/>
          <line x1="48" y1="28" x2="48" y2="48" stroke="#C9A227" strokeWidth="2.5"/>
          <line x1="12" y1="52" x2="52" y2="52" stroke="#C9A227" strokeWidth="2.5"/>
        </svg>
      );

    case "human":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <circle cx="32" cy="18" r="8" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <path d="M20 50C20 40 24 34 32 34C40 34 44 40 44 50" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
        </svg>
      );

    case "shield":
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M32 10L50 18V32C50 44 42 52 32 56C22 52 14 44 14 32V18L32 10Z" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <path d="M24 32L30 38L40 26" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <polyline points="16,44 28,32 38,38 50,20" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <polyline points="42,20 50,20 50,28" stroke="#C9A227" strokeWidth="2.5" fill="none"/>
          <line x1="14" y1="50" x2="50" y2="50" stroke="#C9A227" strokeWidth="2.5"/>
        </svg>
      );
  }
}

export default function SixExcellencePillars() {
  return (
    <section className="py-20 bg-[#F8F7F5]">
      <div className="max-w-[1500px] mx-auto">

        {/* Hero Section */}
    {/* Hero Section */}
<div className="relative mb-10">

  {/* Background Image */}
  <div className="relative w-full h-[450px] lg:h-[650px]">
    <Image
      src="/excellence-pillars-bg.jpg"
      alt="Six Excellence Pillars"
      fill
      priority
      className="object-cover object-center"
    />


            {/* left content overlay */}
            <div className="absolute inset-0 md:hidden bg-gradient-to-l from-white/95 via-white/80 via-50% to-transparent" />

    <div className="absolute inset-0 flex items-center">
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12">

        <div className="max-w-[420px] lg:ml-8">

          <p className="text-sm uppercase tracking-[0.3em] text-[#C9A227] font-semibold mb-4">
            OUR EXPERTISE
          </p>

          <div className="w-14 h-[2px] bg-[#C9A227] mb-6" />

          <h2 className="font-serif font-bold leading-[0.9]">
            <span className="block text-[#0A1F44] text-[42px] lg:text-[72px]">
              Six
            </span>

            <span className="block text-[#C9A227] text-[42px] lg:text-[72px]">
              Excellence
            </span>

            <span className="block text-[#0A1F44] text-[42px] lg:text-[72px]">
              Pillars
            </span>
          </h2>

          <div className="w-14 h-[2px] bg-[#C9A227] mt-6 mb-8" />

          <p className="text-lg leading-relaxed text-[#111111]/80 max-w-[360px]">
            A complete framework for school improvement.
            EduVora reviews the core areas that shape
            institutional quality, sustainability,
            and growth.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

        {/* Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
  {pillars.map((pillar) => (
    <div
      key={pillar.number}
      className="
        bg-white
        border border-[#E7E3DD]
        rounded-[14px]
        px-5 py-4
        hover:shadow-md
        transition-all duration-300
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="
          w-[72px]
          h-[72px]
          rounded-full
          border border-[#D9C49C]
          flex items-center justify-center
          flex-shrink-0
        ">
          <PillarIcon type={pillar.icon} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="
            text-[15px]
            lg:text-[16px]
            font-semibold
            text-[#0A1F44]
            leading-[1.35]
            mb-2
          ">
            {pillar.number}. {pillar.title}
          </h3>

          <p className="
            text-[13px]
            text-[#444]
            leading-[1.7]
          ">
            {pillar.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-6 px-6">

  {/* Left Line */}
  <span className="hidden lg:block h-px w-24 md:w-40 bg-slate-300" />

  {/* Button */}
  <Link
    href="/services"
    className="
      text-[#2F6FD5]
      text-base
      lg:text-lg
      xl:text-xl
      font-medium
      hover:opacity-80
      transition
      text-center
    "
  >
    Explore Our Solutions →
  </Link>

  {/* Right Line */}
  <span className="hidden lg:block h-px w-24 md:w-40 bg-slate-300" />

</div>
      </div>
    </section>
  );
}