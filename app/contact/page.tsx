"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Send, MessageSquare, Users, Heart,
  CheckCircle2, Loader2, ChevronDown, ArrowRight
} from "lucide-react";
import clsx from "clsx";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: "Vishrantwadi, Pune, Maharashtra, India",
      href: "https://www.google.com/maps?q=Vishrantwadi,+Pune,+Maharashtra,+India",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 84848 54683",
      href: "tel:+918484854683",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "connect@iinspark.com",
      href: "mailto:connect@iinspark.com",
      action: "Send Email"
    }
  ];

  const faqs = [
    { q: "What age groups do your programs cater to?", a: "Our programs are designed for children aged 3-16 years, with age-appropriate content and activities for different developmental stages." },
    { q: "How do I choose the right program for my child?", a: "We offer personalized consultations to help you select the most suitable program based on your child's interests, learning style, and educational goals." },
    { q: "Are your programs aligned with school curricula?", a: "Yes, all our programs are designed to complement and enhance school learning while following NEP guidelines and curriculum standards." },
    { q: "Do you offer online or in-person sessions?", a: "We provide both online and in-person options, including hybrid models to suit different preferences and circumstances." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dot-grid pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-32 relative text-center px-4">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-brand-navy/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            We're Here to Help
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 mb-6 leading-[1.05]">
            Get in <span className="text-gradient-brand">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
            Ready to transform your child's learning journey? We're here to help you discover the perfect educational experience.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 relative z-10 -mt-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 h-max"
          >
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-2">Let's Start a Conversation</h2>
            <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-100 flex gap-3 items-start overflow-hidden"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Thank you for your message! We'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="Enter your last name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="Enter your phone" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">I am a *</label>
                <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all cursor-pointer">
                  <option value="">Select user type</option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="school">School</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none" placeholder="Tell us more about your inquiry..."></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="newsletter" className="w-5 h-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                <label htmlFor="newsletter" className="text-sm text-slate-600 cursor-pointer">Subscribe to our newsletter</label>
              </div>

              <button type="submit" disabled={isPending} className="w-full px-8 py-4 bg-brand-navy hover:bg-brand-blue text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isPending ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <a key={idx} href={card.href} target="_blank" rel="noreferrer" className="block group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-[0_8px_40px_rgba(242,169,0,0.18)] hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1">{card.title}</h3>
                      <p className="text-slate-600 mb-2">{card.content}</p>
                      <span className="text-brand-blue text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        {card.action} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="bg-brand-navy rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/placeholder.svg')] opacity-10 bg-cover bg-center" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-brand-light" />
                  <h3 className="text-2xl font-bold font-heading">Connect With Us</h3>
                </div>
                <p className="text-slate-300 mb-6">Follow us on social media to stay updated with our latest programs and success stories.</p>
                
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/iin_spark" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"/></svg>
                  </a>
                  <a href="https://www.facebook.com/share/18YLRmC2Gp/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
                  </a>
                  <a href="https://in.linkedin.com/company/teamiinspark" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Map & FAQs */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2"><MapPin className="text-brand-blue" /> Find Us on the Map</h2>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] border border-slate-100 relative bg-slate-200">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/d/u/1/embed?mid=1yu3YCM_7EQ9evdM0ffMsN3rDUf05sWA&ehbc=2E312F&noprof=1"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2"><MessageSquare className="text-brand-blue" /> FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-blue/30 shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className={clsx("w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0", openFaq === idx && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-600 border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
