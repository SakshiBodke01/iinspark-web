"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, Rocket, BookMarked, CheckCircle, Quote, Star,
  Bot, Palette, Leaf, Brain, CreditCard, Drama, Microscope, ChevronRight, ChevronLeft
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

  // Hero Staggered Page-Load Entrance Only (headline -> subtext -> CTA, 100ms stagger)
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
              {/* Single Eyebrow Badge with Pulsing Dot */}
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

              {/* Headline with Increased Size, Tighter Line-Height & Gradient Highlight */}
              <motion.h1 
                variants={heroItemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.04] text-[#061224]"
              >
                Igniting Young Minds, <br />
                <span className="italic font-normal bg-gradient-to-r from-[#061224] via-slate-800 to-[#F2A900] bg-clip-text text-transparent">
                  Inspiring Leaders
                </span>
              </motion.h1>

              {/* Subtitle with Constrained Max-Width */}
              <motion.p
                variants={heroItemVariants}
                className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-[620px] leading-relaxed"
              >
                Experience transformative learning through science, art, technology, and creativity. <strong className="font-semibold text-slate-900">IINSPARK</strong> offers meticulously curated educational experiences designed to nurture confident creators.
              </motion.p>

              {/* CTA Button - Bold Gradient Button with Hover Scale & Shadow */}
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

      {/* 2. PROGRAMS SECTION (STATIC RENDERING) */}
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

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Featured Program Card */}
            <div className="md:col-span-2 lg:col-span-2 group rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-colors duration-200 overflow-hidden flex flex-col md:flex-row">
              <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden shrink-0">
                <img
                  src={offerings[0].image}
                  alt={offerings[0].title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#061224] text-white text-[11px] font-bold uppercase tracking-wider">
                  Featured Program
                </span>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#061224] flex items-center justify-center border border-slate-200 shrink-0">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-slate-900">
                        {offerings[0].title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {offerings[0].description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-5 mb-6">
                    {offerings[0].features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#10B981] mr-2.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={offerings[0].pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#061224] hover:text-[#F2A900] transition-colors duration-150"
                  >
                    <span>Download Syllabus PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#F2A900]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Remaining Standard Cards */}
            {offerings.slice(1).map((offering) => {
              const CategoryIcon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-colors duration-200 overflow-hidden"
                >
                  <div className="relative h-44 w-full overflow-hidden shrink-0">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/90 border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mb-4">
                        {offering.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {offering.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={offering.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold text-[#061224] hover:text-[#F2A900] transition-colors duration-150"
                      >
                        <span>Download Syllabus PDF</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#F2A900]" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION (SCROLL REVEAL #1 - 300ms) */}
      <section className="w-full py-20 md:py-28 bg-[#061224] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2A900] block mb-2">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Loved by Parents, Trusted by Schools
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Hear what our community has to say about their transformative learning experiences with IINSPARK.
            </p>
          </div>

          {/* Testimonial Cards (Single viewport trigger, 300ms) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setIsHoveringTestimonials(true)}
            onMouseLeave={() => setIsHoveringTestimonials(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
                <div>
                  <Quote className="w-8 h-8 text-[#F2A900]/40 mb-4" />
                  <div className="flex items-center gap-1 mb-3 text-[#F2A900]">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2A900] text-[#F2A900]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#F2A900]/20 text-[#F2A900] font-bold text-sm flex items-center justify-center border border-[#F2A900]/30 shrink-0">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-xs text-slate-400">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
                <div>
                  <Quote className="w-8 h-8 text-[#F2A900]/40 mb-4" />
                  <div className="flex items-center gap-1 mb-3 text-[#F2A900]">
                    {Array.from({ length: testimonials[(activeTestimonial + 1) % testimonials.length].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2A900] text-[#F2A900]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{testimonials[(activeTestimonial + 1) % testimonials.length].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#F2A900]/20 text-[#F2A900] font-bold text-sm flex items-center justify-center border border-[#F2A900]/30 shrink-0">
                    {testimonials[(activeTestimonial + 1) % testimonials.length].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{testimonials[(activeTestimonial + 1) % testimonials.length].name}</h4>
                    <p className="text-xs text-slate-400">{testimonials[(activeTestimonial + 1) % testimonials.length].role}</p>
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

      {/* 4. OUR IMPACT STATS (COUNTER ANIMATION - ONCE ONLY) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              By The Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Impact Across India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-4">
            
            <div className="py-6 md:py-0 md:px-8 text-center">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={5000} suffix="+" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Students Impacted
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 text-center">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={100} suffix="+" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Schools Partnered
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 text-center">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-[#061224] block mb-2 tabular-nums">
                <AnimatedCounter target={20} suffix="+" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Collaborations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VIDEO SECTION (SCROLL REVEAL #2 - FADE + SLIGHT SCALE-IN FROM 0.98 TO 1.0) */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          
          <div className="mb-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Video Story
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Watch Us Transform Learning
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              See firsthand how IINSPARK is revolutionizing classrooms and empowering students through experiential education.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-slate-300 overflow-hidden bg-slate-950 shadow-sm"
          >
            <div className="relative aspect-video w-full">
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

      {/* 6. IMAGE CAROUSEL CTA SECTION (FUNCTIONAL CROSSFADE TRANSITION 300-400ms) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to Transform Learning?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Discover our world-class educational kits, state-of-the-art innovation labs, and seasonal bootcamps.
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-slate-200 h-[380px] sm:h-[440px] bg-slate-950"
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

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2A900] block mb-1">
                  {carouselImages[activeSlide].description}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {carouselImages[activeSlide].title}
                </h3>
              </div>

              <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-sm border border-white/20 rounded-full p-1.5">
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                  className="p-1.5 rounded-full text-white hover:bg-white/20 transition-colors duration-150 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % carouselImages.length)}
                  className="p-1.5 rounded-full text-white hover:bg-white/20 transition-colors duration-150 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
