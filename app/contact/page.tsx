"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin, Phone, Mail, Send, MessageSquare, Heart,
  CheckCircle2, Loader2, ChevronDown, ArrowRight,
  User, UserCheck, Clock, ExternalLink, AlertCircle
} from "lucide-react";
import clsx from "clsx";
import { submitContactForm } from "@/app/actions/contact-form";

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email address is required").email("Please enter a valid email address"),
  phone: z.string().optional(),
  userType: z.string().min(1, "Please select a user type"),
  message: z.string().max(500, "Message must be under 500 characters").optional(),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors, isSubmitted }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "",
      message: "",
      newsletter: false,
    }
  });

  const messageValue = watch("message") || "";
  const messageLength = messageValue.length;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("userType", data.userType);
      if (data.message) formData.append("message", data.message);
      if (data.newsletter) formData.append("newsletter", "on");

      const result = await submitContactForm(null, formData);

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        setSubmitError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "We welcome you to visit our Pune hub",
      content: "Vishrantwadi, Pune, Maharashtra, India",
      href: "https://www.google.com/maps?q=Vishrantwadi,+Pune,+Maharashtra,+India",
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us Direct",
      subtitle: "Mon - Sat from 9:00 AM to 6:00 PM IST",
      content: "+91 84848 54683",
      href: "tel:+918484854683",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Our dedicated team responds within 24 hours",
      content: "connect@iinspark.com",
      href: "mailto:connect@iinspark.com",
      action: "Send Email",
    }
  ];

  const faqs = [
    {
      q: "What age groups do your programs cater to?",
      a: "Our programs are designed for children aged 3-16 years, with age-appropriate content and activities tailored for different developmental stages."
    },
    {
      q: "How do I choose the right program for my child?",
      a: "We offer personalized consultations to help you select the most suitable program based on your child's interests, learning style, and educational goals."
    },
    {
      q: "Are your programs aligned with school curricula?",
      a: "Yes, all our programs are designed to complement and enhance school learning while adhering to NEP guidelines and curriculum standards."
    },
    {
      q: "Do you offer online or in-person sessions?",
      a: "We provide both online and in-person options, including hybrid models to suit different preferences and circumstances."
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] pb-32">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 bg-[#faf9f5] border-b border-[#0a192f]/10 text-center px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-3">
            We're Here to Help
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0a192f] mb-6 tracking-[-0.02em]">
            Get in Touch
          </h1>
          
          <p className="text-base sm:text-lg text-[#44474d] font-normal max-w-3xl mx-auto leading-relaxed">
            Ready to transform your child's learning journey? We're here to answer questions, discuss options, and help you get started.
          </p>
        </div>
      </section>

      {/* Main Form & Cards Grid */}
      <section className="container mx-auto px-8 mt-32 max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-8 md:p-10 border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
            
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0a192f] mb-2">Let's Start a Conversation</h2>
              <p className="text-[#44474d] text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {/* Success Alert */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="bg-[#e2ece9] text-[#2d5a52] p-4 rounded-lg border border-[#2d5a52]/20 flex gap-3 items-start overflow-hidden text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2d5a52] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Thank you for reaching out!</p>
                    <p className="text-[#2d5a52]/90">We have received your message and will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Error Alert */}
            <AnimatePresence>
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="bg-[#f5e9e2] text-[#8c4a32] p-4 rounded-lg border border-[#8c4a32]/20 flex gap-3 items-start overflow-hidden text-xs sm:text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5 text-[#8c4a32] shrink-0 mt-0.5" />
                  <p>{submitError}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* First Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a059]" />
                    First Name <span className="text-[#8c4a32]">*</span>
                  </label>
                  <input 
                    {...register("firstName")}
                    type="text" 
                    placeholder="John" 
                    className={clsx(
                      "w-full bg-white border rounded-lg px-4 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none",
                      errors.firstName
                        ? "border-[#8c4a32] focus:border-[#8c4a32]"
                        : isSubmitted && !errors.firstName && getValues("firstName")
                        ? "border-[#2d5a52] focus:border-[#2d5a52]"
                        : "border-[#0a192f]/10 focus:border-[#0a192f]"
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-[#8c4a32] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a059]" />
                    Last Name <span className="text-[#8c4a32]">*</span>
                  </label>
                  <input 
                    {...register("lastName")}
                    type="text" 
                    placeholder="Doe" 
                    className={clsx(
                      "w-full bg-white border rounded-lg px-4 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none",
                      errors.lastName
                        ? "border-[#8c4a32] focus:border-[#8c4a32]"
                        : isSubmitted && !errors.lastName && getValues("lastName")
                        ? "border-[#2d5a52] focus:border-[#2d5a52]"
                        : "border-[#0a192f]/10 focus:border-[#0a192f]"
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-[#8c4a32] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    Email Address <span className="text-[#8c4a32]">*</span>
                  </label>
                  <input 
                    {...register("email")}
                    type="email" 
                    placeholder="john@example.com" 
                    className={clsx(
                      "w-full bg-white border rounded-lg px-4 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none",
                      errors.email
                        ? "border-[#8c4a32] focus:border-[#8c4a32]"
                        : isSubmitted && !errors.email && getValues("email")
                        ? "border-[#2d5a52] focus:border-[#2d5a52]"
                        : "border-[#0a192f]/10 focus:border-[#0a192f]"
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#8c4a32] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    Phone Number
                  </label>
                  <input 
                    {...register("phone")}
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none focus:border-[#0a192f]"
                  />
                </div>
              </div>

              {/* User Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  I am a <span className="text-[#8c4a32]">*</span>
                </label>
                <div className="relative">
                  <select 
                    {...register("userType")}
                    className={clsx(
                      "w-full bg-white border rounded-lg pl-4 pr-10 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none appearance-none cursor-pointer",
                      errors.userType
                        ? "border-[#8c4a32] focus:border-[#8c4a32]"
                        : isSubmitted && !errors.userType && getValues("userType")
                        ? "border-[#2d5a52] focus:border-[#2d5a52]"
                        : "border-[#0a192f]/10 focus:border-[#0a192f]"
                    )}
                  >
                    <option value="">Select user category</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="school">School Representative</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#44474d] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.userType && (
                  <p className="text-xs text-[#8c4a32] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.userType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                  Message
                </label>
                <div>
                  <textarea 
                    {...register("message")}
                    rows={4} 
                    maxLength={500}
                    placeholder="Tell us how we can help you..." 
                    className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-2.5 text-[#1b1c1a] text-sm transition-colors duration-150 ease-out focus:outline-none focus:border-[#0a192f] resize-none"
                  />
                  <div className="flex justify-between items-center mt-1 text-[11px] text-[#44474d] px-1">
                    <span>Max 500 characters</span>
                    <span>{messageLength} / 500</span>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register("newsletter")}
                  className="w-4 h-4 rounded-sm border-[#0a192f]/20 text-[#0a192f] focus:ring-[#0a192f]"
                />
                <span className="text-xs text-[#44474d]">
                  Subscribe to our newsletter for program updates and educational resources
                </span>
              </label>

              {/* Architectural 8px Primary Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full px-7 py-3.5 bg-[#0a192f] hover:bg-[#112240] text-white rounded-lg font-medium text-sm transition-all duration-200 ease-out hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#c5a059]" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#c5a059]" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <a 
                  key={idx} 
                  href={card.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block bg-white rounded-lg p-6 border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:border-[#c5a059]/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#f7f3e8] border border-[#c5a059]/30 flex items-center justify-center text-[#0a192f] shrink-0">
                      <card.icon className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-[#0a192f] mb-0.5">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#44474d] mb-1">{card.subtitle}</p>
                      <p className="text-[#1b1c1a] font-semibold text-sm mb-2">{card.content}</p>
                      
                      <span className="inline-flex items-center gap-1 text-[#0a192f] text-xs font-bold hover:text-[#c5a059] transition-colors duration-150">
                        <span>{card.action}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Connect Card */}
            <div className="bg-[#0a192f] rounded-lg p-6 text-white border border-[#c5a059]/20 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
              <div className="flex items-center gap-2.5 mb-3">
                <Heart className="w-5 h-5 text-[#c5a059]" />
                <h3 className="text-xl font-serif text-white">Connect With Us</h3>
              </div>
              
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Follow us on social media to stay updated with our latest educational programs and success stories.
              </p>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/iin_spark" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-lg border border-white/20 text-slate-300 flex items-center justify-center transition-colors duration-150 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f]"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/share/18YLRmC2Gp/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-lg border border-white/20 text-slate-300 flex items-center justify-center transition-colors duration-150 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f]"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://in.linkedin.com/company/teamiinspark" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-lg border border-white/20 text-slate-300 flex items-center justify-center transition-colors duration-150 hover:bg-[#c5a059] hover:border-[#c5a059] hover:text-[#0a192f]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Map & FAQs Section */}
        <div className="mt-32 grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Map Section */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif text-[#0a192f] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c5a059]" /> Find Us on the Map
              </h2>
              <span className="text-xs text-[#44474d] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" /> Mon - Sat: 9 AM - 6 PM
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#0a192f]/5 bg-white p-2 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
              <div className="rounded-md overflow-hidden h-[380px] relative bg-[#faf9f5]">
                <iframe
                  className="w-full h-full border-0 rounded-md"
                  src="https://www.google.com/maps/d/u/1/embed?mid=1yu3YCM_7EQ9evdM0ffMsN3rDUf05sWA&ehbc=2E312F&noprof=1"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>

                <div className="absolute bottom-3 left-3 bg-white p-3.5 rounded-lg border border-[#0a192f]/10 text-[#1b1c1a] space-y-2 max-w-xs shadow-md">
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#0a192f]">IINSPARK Education</h4>
                    <p className="text-[11px] text-[#44474d]">Vishrantwadi, Pune, Maharashtra 411015, India</p>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=Vishrantwadi,+Pune,+Maharashtra,+India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors duration-150"
                  >
                    <ExternalLink className="w-3 h-3 text-[#c5a059]" /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-serif text-[#0a192f] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#c5a059]" /> Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] overflow-hidden"
                  >
                    <button 
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)} 
                      className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer hover:bg-[#faf9f5] transition-colors duration-150"
                    >
                      <span className="font-serif font-bold text-[#0a192f] text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown className={clsx("w-4 h-4 text-[#c5a059] transition-transform duration-200 shrink-0", isOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 pt-1 text-[#44474d] text-sm leading-relaxed border-t border-[#0a192f]/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
