import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | IINSPARK Education",
  description: "Privacy Policy for IINSPARK Education.",
};

export default function PrivacyPage() {
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
            <Shield className="w-5 h-5 text-[#c5a059]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#0a192f]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#44474d] mt-0.5">Last updated: January 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-[#44474d] text-sm leading-relaxed border-t border-[#0a192f]/5 pt-6">
          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">1. Overview</h2>
            <p>
              At IINSPARK Education ("we", "our", "us"), we value your privacy and are committed to protecting the personal information you share with us when accessing our website, purchasing educational kits, or enrolling in our programs.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">2. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide, such as your name, email address, phone number, and school or organization details when submitting contact, application, or inquiry forms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">3. How We Use Your Information</h2>
            <p>
              Information collected is used solely to respond to inquiries, process program enrollments, deliver educational materials, and improve user experience across our website. We do not sell or share personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-serif font-bold text-[#0a192f] mb-2">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at{" "}
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
