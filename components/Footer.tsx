"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a192f] text-slate-300 border-t border-[#c5a059]/20 overflow-hidden">
      
      {/* Subtle Academic Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23c5a059' fill-opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 pt-16 md:pt-20 pb-8 max-w-7xl">
        
        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14">

          {/* 1. Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img
                  src="/images/iinspark-logo.png"
                  alt="IINSPARK Logo"
                  className="h-8 sm:h-9 w-auto brightness-0 invert object-contain"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-serif font-extrabold text-base sm:text-lg text-white tracking-tight leading-none">
                    IINSPARK
                  </span>
                  <span className="text-[9px] font-semibold tracking-widest text-[#c5a059] uppercase mt-0.5 leading-none">
                    Innovate &amp; Inspire
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Igniting young minds through experiential learning in Science, Art, Robotics, and beyond. Creating the leaders and innovators of tomorrow.
            </p>

            {/* Architectural Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/18YLRmC2Gp/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-200 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f] hover:-translate-y-0.5 shadow-xs"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/iin_spark"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-200 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f] hover:-translate-y-0.5 shadow-xs"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"/>
                </svg>
              </a>

              <a
                href="https://in.linkedin.com/company/teamiinspark"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-200 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f] hover:-translate-y-0.5 shadow-xs"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c5a059] mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-3.5 rounded-xs bg-[#c5a059]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/summer-camp" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Summer Camp 2026
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Our Programs */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c5a059] mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-3.5 rounded-xs bg-[#c5a059]" />
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products#sparklab" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Science Explorers Lab
                </Link>
              </li>
              <li>
                <Link href="/products#techtrek" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Future Tech Lab
                </Link>
              </li>
              <li>
                <Link href="/products#artspire" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Creative Arts Studio
                </Link>
              </li>
              <li>
                <Link href="/products#greencraft" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Garden Science Lab
                </Link>
              </li>
              <li>
                <Link href="/products#dramanest" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  Theater &amp; Storytelling
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c5a059] mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-3.5 rounded-xs bg-[#c5a059]" />
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  Vishrantwadi, Pune,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:+918484854683" className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200">
                  +91 84848 54683
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href="mailto:connect@iinspark.com"
                  className="text-xs text-slate-300 hover:text-[#c5a059] transition-colors duration-200"
                >
                  connect@iinspark.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Crisp Muted Gold Divider Line */}
        <div aria-hidden="true" className="h-[1px] w-full bg-[#c5a059]/30 mb-6" />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} IINSPARK. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-400 hover:text-[#c5a059] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-400 hover:text-[#c5a059] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
