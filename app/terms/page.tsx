import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | IINSPARK Education",
  description: "Terms of Service for IINSPARK Education.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] pt-32 pb-32 px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-[#0a192f]/5 p-8 sm:p-12 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 text-[#c5a059]" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#f7f3e8] border border-[#c5a059]/30 flex items-center justify-center text-[#0a192f]">
            <FileText className="w-5 h-5 text-[#c5a059]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#0a192f]">
              Terms of Service
            </h1>
            <p className="text-xs text-[#44474d] mt-0.5">Last updated: January 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-[#44474d] text-sm leading-relaxed border-t border-[#0a192f]/5 pt-6">
          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website and educational services provided by IINSPARK Education, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">2. Intellectual Property</h2>
            <p>
              All content, learning kit designs, curriculum frameworks, logos, and digital tools displayed on this website are the proprietary property of IINSPARK Education and protected by copyright and intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">3. Use of Educational Programs</h2>
            <p>
              Programs, downloadable brochures, and educational materials provided are intended for non-commercial, personal, or institutional educational use as authorized by IINSPARK.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">4. Contact Information</h2>
            <p>
              For any questions regarding these Terms, please contact us at{" "}
              <a href="mailto:connect@iinspark.com" className="text-[#0a192f] font-semibold underline hover:text-[#c5a059]">
                connect@iinspark.com
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
