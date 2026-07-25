"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, Rocket, BookMarked, CheckCircle, Quote, Star,
  Bot, Palette, Leaf, Brain, CreditCard, Drama, Microscope, ChevronRight, ChevronLeft,
  Download, Award, Users, School, Sparkles as SparklesIcon
} from "lucide-react";
import clsx from "clsx";

function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 18, mass: 0.8 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionVal.set(target);
  }, [isInView, target, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {target >= 1000 ? display.toLocaleString("en-IN") : display}{suffix}
    </span>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHoveringTestimonials, setIsHoveringTestimonials] = useState(false);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const offerings = [
    {
      icon: BookMarked,
      title: "Lab of Curiosity",
      description: "Inquiry-based tutoring sessions",
      features: ["Personalized Coaching", "Expert Mentors", "Curiosity Driven"],
      image: "/images/TuitionPlus.png",
      pdf: "/pdf/LabofCuriosity.pdf",
      featured: true,
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: Bot,
      title: "Future Tech Lab",
      description: "Robotics & AI Bootcamps",
      features: ["Coding Basics", "Robot Building", "AI Fundamentals"],
      image: "/images/TechTrek.png",
      pdf: "/pdf/FutureTechLab.pdf",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: Palette,
      title: "Creative Arts Studio",
      description: "Art, Craft, Music & Dance Kits",
      features: ["Creative Expression", "Multi-disciplinary", "Skill Development"],
      image: "/images/ArtSpire.png",
      pdf: "/pdf/CreativeArtsStudio.pdf",
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: Leaf,
      title: "Garden Science Lab",
      description: "Horticulture & Nature Learning",
      features: ["Environmental Awareness", "Gardening Skills", "Nature Connection"],
      image: "/images/GreenCraft.png",
      pdf: "/pdf/GardenScienceLab.pdf",
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: Brain,
      title: "Futuristic Worksheets",
      description: "Grade-wise Interactive Worksheets",
      features: ["Curriculum Aligned", "Progressive Learning", "Skill Assessment"],
      image: "/images/SmartSheets.png",
      pdf: "/pdf/FuturisticWorksheets.pdf",
      badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      icon: CreditCard,
      title: "Visual Learning Cards",
      description: "Visual Flashcards for Concept Learning",
      features: ["Visual Learning", "Memory Enhancement", "Quick Revision"],
      image: "/images/FlashyCards.png",
      pdf: "/pdf/VisualLearningCards.pdf",
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      icon: Drama,
      title: "Theater & Storytelling",
      description: "Theatrical & Storytelling Adventures",
      features: ["Confidence Building", "Communication Skills", "Creative Expression"],
      image: "/images/DramaNest.png",
      pdf: "/pdf/Theater&Storytelling.pdf",
      badgeStyle: "bg-[#F2A900]/10 text-[#061224] border-[#F2A900]/30",
    },
    {
      icon: Microscope,
      title: "Science Explorers Lab",
      description: "Hands-on Science & Curiosity Labs",
      features: ["Interactive Experiments", "STEM Learning", "Age-appropriate Kits"],
      image: "/images/SparkLab.png",
      pdf: "/pdf/ScienceExplorersLab.pdf",
      badgeStyle: "bg-sky-50 text-sky-700 border-sky-200",
    },
  ];

  const testimonials = [
    {
      quote: "IINSPARK has completely transformed how my students approach science. The hands-on experiments make complex concepts incredibly easy to understand and remember.",
      name: "Dr. Priya Sharma",
      role: "Science Teacher & Department Head",
      location: "Delhi Public School, New Delhi",
      initials: "PS",
      rating: 5,
    },
    {
      quote: "My daughter's creativity has flourished beyond my expectations with ArtSpire. She's more confident, expressive, and genuinely excited about learning every day.",
      name: "Rajesh Patel",
      role: "Parent & Software Engineer",
      location: "Mumbai, Maharashtra",
      initials: "RP",
      rating: 5,
    },
    {
      quote: "The FlashyCards have revolutionized language learning in our classroom. Students are more engaged, retain information better, and actually look forward to lessons.",
      name: "Prof. Anita Desai",
      role: "Language Teacher & Curriculum Designer",
      location: "Bangalore International School",
      initials: "AD",
      rating: 5,
    },
    {
      quote: "Collaborating with IINSPARK has been transformative—nurturing curiosity, clarity, and confidence in students through innovative, holistic education that shapes empowered, future-ready minds.",
      name: "Dr. Kashinath Munde",
      role: "Principal RIT College",
      location: "RIT Educational Institution",
      initials: "KM",
      rating: 5,
    },
  ];

  const carouselImages = [
    { src: "/images/SparkLab.png", title: "Science Explorers Lab", description: "Hands-on experiments that ignite curiosity" },
    { src: "/images/TechTrek.png", title: "Future Tech Lab", description: "Building tomorrow's innovators" },
    { src: "/images/ArtSpire.png", title: "Creative Arts Studio", description: "Nurturing artistic talents" },
    { src: "/images/GreenCraft.png", title: "Garden Science Lab", description: "Connecting with nature" },
    { src: "/images/SmartSheets.png", title: "Futuristic Worksheets", description: "Progressive skill development" },
  ];

  useEffect(() => {
    if (isHoveringCarousel) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHoveringCarousel, carouselImages.length]);

  useEffect(() => {
    if (isHoveringTestimonials) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 2) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHoveringTestimonials, testimonials.length]);

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f5] overflow-hidden text-[#1b1c1a]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-28 pb-24 md:pt-36 md:pb-32 bg-[#faf9f5] border-b border-[#0a192f]/10 overflow-hidden">
        <div className="container px-6 md:px-8 mx-auto max-w-[1280px] relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7"
            >
              {/* Eyebrow Chip */}
              <motion.div variants={heroItemVariants}>
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#faf9f5] border border-[#0a192f]/10 text-[#44474d] text-xs font-bold uppercase tracking-[0.1em] hover:border-[#c5a059] transition-all duration-200 shadow-xs"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
                  </span>
                  <span>Summer Camp 2026 &middot; Enrolling Now</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </Link>
              </motion.div>

              {/* Headline with Gold Italic "Inspiring Leaders" */}
              <motion.h1 
                variants={heroItemVariants}
                className="font-serif tracking-[-0.02em] leading-[1.04] text-[#0a192f] text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold"
              >
                Igniting Young <br />
                Minds, <br />
                <span className="italic text-[#c5a059] font-serif font-normal">
                  Inspiring Leaders
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg text-[#44474d] font-normal max-w-[600px] leading-relaxed"
              >
                Experience transformative learning through science, art, technology, and creativity. <strong className="font-semibold text-[#1b1c1a]">IINSPARK</strong> offers meticulously crafted educational experiences designed to nurture confident creators.
              </motion.p>

              {/* Primary CTA Button */}
              <motion.div variants={heroItemVariants} className="pt-2">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#0a192f] text-white font-medium text-sm sm:text-base tracking-wide shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-0.5 hover:bg-[#112240] hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Hero Image Container with Floating Badge */}
            <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
              <div className="rounded-2xl p-2 bg-white border border-[#0a192f]/10 shadow-[0_4px_20px_rgba(10,25,47,0.04)] overflow-hidden relative group">
                <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] rounded-xl overflow-hidden bg-[#0a192f]">
                  <img
                    src="/images/nation-building-v2.png"
                    alt="Hands-on Experience"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/images/SparkLab.png"; }}
                  />
                  
                  {/* Floating Badge (Bottom-Left) */}
                  <div className="absolute bottom-5 left-5 px-5 py-3 rounded-lg bg-white/95 backdrop-blur-md text-[#0a192f] border border-[#0a192f]/10 shadow-md flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#c5a059]">INTERACTIVE</span>
                    <span className="text-sm font-bold font-serif text-[#0a192f] leading-tight mt-0.5">Hands-on</span>
                    <span className="text-xs text-[#44474d] font-normal">Experience</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CURRICULUM OVERVIEW ("OUR PROGRAMS") */}
      <section className="py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          {/* Header Row: Title on Left, Description on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#0a192f]/5 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">
                Curriculum Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#0a192f] tracking-[-0.02em]">
                Our Programs
              </h2>
            </div>
            <p className="text-[#44474d] text-sm sm:text-base max-w-lg leading-relaxed">
              Meticulously designed educational programs to ignite curiosity, foster creativity, and empower young minds through hands-on learning.
            </p>
          </div>

          {/* Grid Layout: Featured Program (Double-Width) + Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Featured Card (Lab of Curiosity) - Spans 2 Columns on Desktop */}
            <div className="lg:col-span-2 group flex flex-col md:flex-row rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 overflow-hidden min-h-[360px]">
              {/* Left Image */}
              <div className="md:w-1/2 relative min-h-[220px] md:min-h-full bg-[#faf9f5] overflow-hidden">
                <img
                  src="/images/TuitionPlus.png"
                  alt="Lab of Curiosity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-sm bg-[#f7f3e8] border border-[#c5a059]/30 text-[#c5a059] text-[10px] font-bold uppercase tracking-wider mb-4">
                    Featured Program
                  </span>

                  <h3 className="text-2xl font-serif text-[#0a192f] mb-2">
                    Lab of Curiosity
                  </h3>
                  
                  <p className="text-xs text-[#44474d] leading-relaxed mb-6">
                    Inquiry-based tutoring sessions designed to foster deep understanding through exploration.
                  </p>

                  <div className="space-y-2 mb-6">
                    {["Personalized Learning", "Expert Mentors", "Curiosity Driven"].map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-[#44474d]">
                        <CheckCircle className="w-4 h-4 mr-2 text-[#2d5a52] shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0a192f]/5 mt-auto">
                  <a
                    href="/pdf/LabofCuriosity.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors duration-200"
                  >
                    <span>Download Syllabus PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Other Program Cards */}
            {offerings.filter(o => !o.featured).slice(0, 5).map((offering) => (
              <div
                key={offering.title}
                className="group flex flex-col justify-between rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 overflow-hidden"
              >
                {/* Image Top */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 bg-[#faf9f5]">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-serif text-[#0a192f] mb-1.5">
                      {offering.title}
                    </h3>
                    <p className="text-xs text-[#44474d] font-normal mb-5 line-clamp-2 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>

                  {/* Bottom Download Link */}
                  <div className="pt-4 border-t border-[#0a192f]/5 mt-auto">
                    <a
                      href={offering.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors duration-200"
                    >
                      <span>Download Syllabus PDF</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 3. COMMUNITY VOICES */}
      <section className="w-full py-32 bg-[#0a192f] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1280px]">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">
              Community Voices
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-[-0.02em]">
              Loved by Parents, Trusted by Schools
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setIsHoveringTestimonials(true)}
            onMouseLeave={() => setIsHoveringTestimonials(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1 */}
              <div className="group flex flex-col justify-between rounded-lg bg-[#112240] border border-[#c5a059]/20 p-8 shadow-xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#c5a059]">
                      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                      ))}
                    </div>
                    <span className="font-serif text-4xl text-[#c5a059] leading-none">”</span>
                  </div>

                  <p className="text-[20px] sm:text-[22px] text-slate-100 italic leading-relaxed mb-8 font-serif">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0a192f] border border-[#c5a059] text-[#c5a059] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col justify-between rounded-lg bg-[#112240] border border-[#c5a059]/20 p-8 shadow-xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#c5a059]">
                      {Array.from({ length: testimonials[(activeTestimonial + 1) % testimonials.length].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                      ))}
                    </div>
                    <span className="font-serif text-4xl text-[#c5a059] leading-none">”</span>
                  </div>

                  <p className="text-[20px] sm:text-[22px] text-slate-100 italic leading-relaxed mb-8 font-serif">
                    "{testimonials[(activeTestimonial + 1) % testimonials.length].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0a192f] border border-[#c5a059] text-[#c5a059] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                    {testimonials[(activeTestimonial + 1) % testimonials.length].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{testimonials[(activeTestimonial + 1) % testimonials.length].name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonials[(activeTestimonial + 1) % testimonials.length].role}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center mt-10 gap-3">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index * 2)}
                  className={clsx(
                    "h-2 rounded-full transition-all duration-200 cursor-pointer",
                    Math.floor(activeTestimonial / 2) === index ? "w-8 bg-[#c5a059]" : "w-2 bg-white/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. BY THE NUMBERS */}
      <section className="py-32 bg-[#faf9f5] border-b border-[#0a192f]/10 relative">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-1">
              By The Numbers
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#0a192f] tracking-[-0.02em]">
              Our Impact Across India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stat 1 */}
            <div className="rounded-lg border border-[#0a192f]/5 bg-white shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-10 text-center flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-serif font-bold tracking-tight text-[#0a192f] block mb-3 tabular-nums">
                <AnimatedCounter target={5000} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#44474d]">
                Students Impacted
              </p>
            </div>

            {/* Stat 2 */}
            <div className="rounded-lg border border-[#0a192f]/5 bg-white shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-10 text-center flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-serif font-bold tracking-tight text-[#0a192f] block mb-3 tabular-nums">
                <AnimatedCounter target={100} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#44474d]">
                Schools Partnered
              </p>
            </div>

            {/* Stat 3 */}
            <div className="rounded-lg border border-[#0a192f]/5 bg-white shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-10 text-center flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-serif font-bold tracking-tight text-[#0a192f] block mb-3 tabular-nums">
                <AnimatedCounter target={20} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#44474d]">
                Collaborations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION (CTA) BANNER */}
      <section className="py-32 bg-[#faf9f5]">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          <div className="bg-[#0a192f] rounded-2xl p-10 sm:p-14 text-white border border-[#c5a059]/20 shadow-xl relative overflow-hidden">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-[-0.02em] leading-tight">
                  Ready <span className="italic font-normal text-[#c5a059]">to</span> Transform Learning?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Discover our world-class educational kits, state-of-the-art innovation labs, and seasonal bootcamps designed for the curious leaders of tomorrow.
                </p>
              </div>

              {/* Gold Button on Right */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#c5a059] hover:bg-[#d4b982] text-[#0a192f] font-bold text-sm sm:text-base tracking-wide shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#0a192f] -rotate-45" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
