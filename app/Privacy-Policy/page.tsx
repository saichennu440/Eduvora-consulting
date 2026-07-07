import { Header } from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#F8F7F5] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#0A1F44] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-[#C9A227] text-sm font-semibold mb-4">
            Legal
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>

          <div className="w-20 h-[3px] bg-[#C9A227] mb-8"></div>

          <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
            At EduVora Consulting, we value your privacy and are committed to
            protecting the information you share with us. This policy explains
            how we collect, use, and safeguard your information while delivering
            our educational consulting services.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                1. Introduction
              </h2>

              <p className="text-slate-600 leading-8">
                EduVora Consulting is committed to protecting the privacy and
                confidentiality of our clients' information. This Privacy Policy
                explains how we collect, use, maintain, and safeguard
                information when you engage with our consulting services or use
                our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                2. Scope of Services
              </h2>

              <p className="text-slate-600 leading-8">
                All audit, consulting, compliance, training, and advisory
                services are delivered based on the information, documents, and
                access provided by the client. EduVora Consulting is not
                responsible for inaccuracies arising from incomplete, delayed,
                or incorrect information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                3. Information Collection
              </h2>

              <p className="text-slate-600 leading-8">
                We collect only the information necessary to provide our
                professional services. All information received from clients is
                treated as confidential and used solely for agreed consulting
                purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                4. Client Responsibilities
              </h2>

              <p className="text-slate-600 leading-8">
                Clients are responsible for providing accurate information,
                timely approvals, required documentation, and necessary access
                to facilitate successful project execution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                5. Fees & Payments
              </h2>

              <p className="text-slate-600 leading-8">
                Fees paid for consulting services are generally non-refundable
                unless otherwise agreed upon in writing by both parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                6. Limitation of Liability
              </h2>

              <p className="text-slate-600 leading-8">
                EduVora Consulting provides professional observations,
                recommendations, and guidance. Final implementation and all
                institutional or business decisions remain solely the
                responsibility of the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                7. Governing Law
              </h2>

              <p className="text-slate-600 leading-8">
                Any disputes arising from our services shall be governed by the
                applicable laws of India and shall fall under the jurisdiction
                of the competent courts of Andhra Pradesh, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                8. Force Majeure
              </h2>

              <p className="text-slate-600 leading-8">
                EduVora Consulting shall not be held liable for delays or
                inability to perform services caused by circumstances beyond its
                reasonable control, including natural disasters, government
                restrictions, pandemics, technical failures, or other unforeseen
                events.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                9. Intellectual Property
              </h2>

              <p className="text-slate-600 leading-8">
                All reports, audit methodologies, frameworks, templates,
                presentations, assessment tools, and supporting materials
                created by EduVora Consulting remain our intellectual property
                unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                10. Policy Updates
              </h2>

              <p className="text-slate-600 leading-8">
                EduVora Consulting reserves the right to revise or update this
                Privacy Policy at any time. Updated versions will be published
                on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                11. Acknowledgement
              </h2>

              <p className="text-slate-600 leading-8">
                By engaging with EduVora Consulting or using our services, you
                acknowledge that you have read, understood, and agreed to this
                Privacy Policy.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8">

              <h2 className="text-2xl font-bold text-[#0A1F44] mb-5">
                Contact Information
              </h2>

              <div className="bg-[#F8F7F5] rounded-2xl p-6">

                <p className="text-slate-700 leading-8 mb-2">
                  <strong>EduVora Consulting</strong>
                </p>

                <p className="text-slate-700">
                  Email :
                  <a
                    href="mailto:eduvoraconsulting@gmail.com"
                    className="ml-2 text-[#0A1F44] font-semibold hover:text-[#C9A227] transition-colors"
                  >
                    eduvoraconsulting@gmail.com
                  </a>
                </p>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Last Updated: July 2026
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}