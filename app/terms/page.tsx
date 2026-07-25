import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | IINSPARK Education",
  description: "Terms of Service for IINSPARK Education.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#061224] hover:text-[#F2A900] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#061224]">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">Last updated: January 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website and educational services provided by IINSPARK Education, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">2. Intellectual Property</h2>
            <p>
              All content, learning kit designs, curriculum frameworks, logos, and digital tools displayed on this website are the proprietary property of IINSPARK Education and protected by copyright and intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">3. Use of Educational Programs</h2>
            <p>
              Programs, downloadable brochures, and educational materials provided are intended for non-commercial, personal, or institutional educational use as authorized by IINSPARK.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">4. Contact Information</h2>
            <p>
              For any questions regarding these Terms, please contact us at{" "}
              <a href="mailto:connect@iinspark.com" className="text-[#061224] font-semibold underline">
                connect@iinspark.com
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
