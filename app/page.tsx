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
    },
    {
      icon: Bot,
      title: "Future Tech Lab",
      description: "Robotics & AI Bootcamps",
      features: ["Coding Basics", "Robot Building", "AI Fundamentals"],
      image: "/images/TechTrek.png",
      pdf: "/pdf/FutureTechLab.pdf",
    },
    {
      icon: Palette,
      title: "Creative Arts Studio",
      description: "Art, Craft, Music & Dance Kits",
      features: ["Creative Expression", "Multi-disciplinary", "Skill Development"],
      image: "/images/ArtSpire.png",
      pdf: "/pdf/CreativeArtsStudio.pdf",
    },
    {
      icon: Leaf,
      title: "Garden Science Lab",
      description: "Horticulture & Nature Learning",
      features: ["Environmental Awareness", "Gardening Skills", "Nature Connection"],
      image: "/images/GreenCraft.png",
      pdf: "/pdf/GardenScienceLab.pdf",
    },
    {
      icon: Brain,
      title: "Futuristic Worksheets",
      description: "Grade-wise Interactive Worksheets",
      features: ["Curriculum Aligned", "Progressive Learning", "Skill Assessment"],
      image: "/images/SmartSheets.png",
      pdf: "/pdf/FuturisticWorksheets.pdf",
    },
    {
      icon: CreditCard,
      title: "Visual Learning Cards",
      description: "Visual Flashcards for Concept Learning",
      features: ["Visual Learning", "Memory Enhancement", "Quick Revision"],
      image: "/images/FlashyCards.png",
      pdf: "/pdf/VisualLearningCards.pdf",
    },
    {
      icon: Drama,
      title: "Theater & Storytelling",
      description: "Theatrical & Storytelling Adventures",
      features: ["Confidence Building", "Communication Skills", "Creative Expression"],
      image: "/images/DramaNest.png",
      pdf: "/pdf/Theater&Storytelling.pdf",
    },
    {
      icon: Microscope,
      title: "Science Explorers Lab",
      description: "Hands-on Science & Curiosity Labs",
      features: ["Interactive Experiments", "STEM Learning", "Age-appropriate Kits"],
      image: "/images/SparkLab.png",
      pdf: "/pdf/ScienceExplorersLab.pdf",
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

  // Auto-advance hero carousel
  useEffect(() => {
    if (isHoveringCarousel) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHoveringCarousel, carouselImages.length]);

  // Auto-advance testimonials
  useEffect(() => {
    if (isHoveringTestimonials) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 2) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHoveringTestimonials, testimonials.length]);

  // Hero Staggered Page-Load Entrance Only
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
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden text-slate-900">
      
      {/* 1. HERO SECTION (LOAD-ONCE ENTRANCE & REBUILT HIERARCHY) */}
      <section className="relative w-full pt-14 pb-20 md:pt-24 md:pb-28 bg-white border-b border-slate-200">
        <div className="container px-6 md:px-8 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7"
            >
              {/* Eyebrow Badge with Pulsing Dot */}
              <motion.div variants={heroItemVariants}>
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold hover:border-[#061224]/30 hover:bg-slate-100/80 transition-colors duration-150 shadow-xs"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2A900] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2A900]"></span>
                  </span>
                  <span>Summer Camp 2026 &middot; Enrolling Now</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={heroItemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.04] text-[#061224]"
              >
                Igniting Young Minds, <br />
                <span className="italic font-normal bg-gradient-to-r from-[#061224] via-slate-800 to-[#F2A900] bg-clip-text text-transparent">
                  Inspiring Leaders
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-[620px] leading-relaxed"
              >
                Experience transformative learning through science, art, technology, and creativity. <strong className="font-semibold text-slate-900">IINSPARK</strong> offers meticulously curated educational experiences designed to nurture confident creators.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={heroItemVariants} className="pt-2">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#061224] via-[#0b1e3b] to-[#061224] text-white font-semibold text-sm sm:text-base tracking-wide border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#F2A900] group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Video Media Panel */}
            <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
              <div className="rounded-3xl p-2.5 bg-slate-100 border border-slate-200/90 shadow-lg shadow-slate-900/5">
                <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/hello.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute bottom-3.5 left-3.5 px-3.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 shadow-sm">
                    Interactive Experience
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROGRAMS SECTION (CONSISTENT GRID + EQUAL CARDS + PILL TAGS) */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Curriculum Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Our Programs
            </h2>
            <p className="text-slate-600 text-base mt-2 leading-relaxed">
              Meticulously designed educational programs to ignite curiosity, foster creativity, and empower young minds through hands-on learning.
            </p>
          </div>

          {/* Equal Height Clean Grid (3-col desktop / 2-col tablet / 1-col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {offerings.map((offering) => {
              const CategoryIcon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Card Header Media */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                    />
                    
                    {/* Featured Badge or Category Icon */}
                    {offering.featured ? (
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#061224] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm border border-white/10">
                        Featured Program
                      </span>
                    ) : (
                      <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs border border-slate-200 flex items-center justify-center text-[#061224] shadow-xs">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-slate-900 mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mb-5 line-clamp-2">
                        {offering.description}
                      </p>

                      {/* Feature Pills / Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {offering.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80"
                          >
                            <CheckCircle className="w-3 h-3 text-[#10B981] mr-1.5 shrink-0" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer (Right-aligned CTA Button) */}
                    <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Brochure</span>
                      <a
                        href={offering.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-[#061224] text-[#061224] hover:text-white transition-colors duration-150 shadow-2xs group/btn"
                      >
                        <span>Download Syllabus PDF</span>
                        <Download className="w-3.5 h-3.5 text-[#F2A900] group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION (PREMIUM CARDS + QUOTE ICON + GRADIENT AVATARS) */}
      <section className="w-full py-20 md:py-28 bg-[#061224] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2A900] block mb-2">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Loved by Parents, Trusted by Schools
            </h2>
            <p className="text-slate-300 text-base mt-2 leading-relaxed">
              Hear what our community has to say about their transformative learning experiences with IINSPARK.
            </p>
          </div>

          {/* Testimonial Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setIsHoveringTestimonials(true)}
            onMouseLeave={() => setIsHoveringTestimonials(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 shadow-xl">
                <div>
                  <Quote className="w-10 h-10 text-[#F2A900]/30 mb-4" />
                  <div className="flex items-center gap-1 mb-3 text-[#F2A900]">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2A900] text-[#F2A900]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F2A900] to-amber-600 text-[#061224] font-extrabold text-sm flex items-center justify-center border-2 border-white/20 shadow-sm shrink-0">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonials[activeTestimonial].role} &middot; {testimonials[activeTestimonial].location}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 shadow-xl">
                <div>
                  <Quote className="w-10 h-10 text-[#F2A900]/30 mb-4" />
                  <div className="flex items-center gap-1 mb-3 text-[#F2A900]">
                    {Array.from({ length: testimonials[(activeTestimonial + 1) % testimonials.length].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2A900] text-[#F2A900]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{testimonials[(activeTestimonial + 1) % testimonials.length].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F2A900] to-amber-600 text-[#061224] font-extrabold text-sm flex items-center justify-center border-2 border-white/20 shadow-sm shrink-0">
                    {testimonials[(activeTestimonial + 1) % testimonials.length].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{testimonials[(activeTestimonial + 1) % testimonials.length].name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonials[(activeTestimonial + 1) % testimonials.length].role} &middot; {testimonials[(activeTestimonial + 1) % testimonials.length].location}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 2 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index * 2)}
                    className={clsx(
                      "h-1.5 rounded-full transition-all duration-200 cursor-pointer",
                      Math.floor(activeTestimonial / 2) === index ? "w-6 bg-[#F2A900]" : "w-1.5 bg-white/30"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 2) % testimonials.length)}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. OUR IMPACT STATS (ANIMATED COUNT-UP ON SCROLL) */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200 relative dot-grid">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              By The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Impact Across India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-4">
            
            <div className="py-8 md:py-0 md:px-8 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224] mb-4 shadow-xs">
                <Users className="w-5 h-5 text-[#F2A900]" />
              </div>
              <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={5000} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Students Impacted
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224] mb-4 shadow-xs">
                <School className="w-5 h-5 text-[#F2A900]" />
              </div>
              <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={100} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Schools Partnered
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224] mb-4 shadow-xs">
                <Award className="w-5 h-5 text-[#F2A900]" />
              </div>
              <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={20} suffix="+" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Collaborations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VIDEO STORY SECTION (POLISHED FRAME + SCROLL REVEAL) */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          
          <div className="mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Video Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Watch Us Transform Learning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              See firsthand how IINSPARK is revolutionizing classrooms and empowering students through experiential education.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl p-3 bg-slate-100 border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/rYv-GtnQ4Do?si=ZJ9VLflTLnT6IxjD"
                title="Watch IINSPARK Transform Learning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#061224] hover:text-[#F2A900] transition-colors duration-150"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F2A900]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. CTA SECTION ("READY TO TRANSFORM LEARNING?") */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          
          <div className="bg-gradient-to-br from-[#061224] via-[#0a1b36] to-[#061224] rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F2A900] block">
                  Get Started Today
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
                  Ready to Transform Learning?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Discover our world-class educational kits, state-of-the-art innovation labs, and seasonal bootcamps.
                </p>
                <div className="pt-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F2A900] hover:bg-amber-400 text-[#061224] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <span>Explore All Programs</span>
                    <ArrowRight className="w-4 h-4 text-[#061224]" />
                  </Link>
                </div>
              </div>

              {/* Carousel / Mini Preview Panel */}
              <div className="lg:col-span-5 relative w-full">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/20 h-64 sm:h-72 bg-slate-950 shadow-lg"
                  onMouseEnter={() => setIsHoveringCarousel(true)}
                  onMouseLeave={() => setIsHoveringCarousel(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide}
                      src={carouselImages[activeSlide].src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={carouselImages[activeSlide].title}
                      onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2A900] block mb-0.5">
                        {carouselImages[activeSlide].description}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {carouselImages[activeSlide].title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-sm border border-white/20 rounded-full p-1">
                      <button
                        onClick={() => setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                        className="p-1 rounded-full text-white hover:bg-white/20 transition-colors duration-150 cursor-pointer"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev + 1) % carouselImages.length)}
                        className="p-1 rounded-full text-white hover:bg-white/20 transition-colors duration-150 cursor-pointer"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
