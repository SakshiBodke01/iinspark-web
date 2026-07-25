import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | IINSPARK Education",
  description: "Privacy Policy for IINSPARK Education.",
};

export default function PrivacyPage() {
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
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#061224]">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">Last updated: January 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">1. Overview</h2>
            <p>
              At IINSPARK Education ("we", "our", "us"), we value your privacy and are committed to protecting the personal information you share with us when accessing our website, purchasing educational kits, or enrolling in our programs.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">2. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide, such as your name, email address, phone number, and school or organization details when submitting contact, application, or inquiry forms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">3. How We Use Your Information</h2>
            <p>
              Information collected is used solely to respond to inquiries, process program enrollments, deliver educational materials, and improve user experience across our website. We do not sell or share personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#061224] mb-2">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at{" "}
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
