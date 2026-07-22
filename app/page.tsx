"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  ArrowRight, Play, Rocket, Users, School, BookOpen, 
  ChevronRight, ChevronLeft, Bot, Palette, Leaf, Brain, 
  CreditCard, Drama, Microscope, BookMarked, CheckCircle
} from "lucide-react";
import clsx from "clsx";

function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.8 });
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

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const offerings = [
    {
      icon: BookMarked,
      title: "Lab of Curiosity",
      description: "Inquiry-based tutoring sessions",
      features: ["Personalized Coaching", "Expert Mentors", "Curiosity Driven"],
      image: "/images/TuitionPlus.png",
      pdf: "/pdf/LabofCuriosity.pdf",
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
    },
    {
      quote: "My daughter's creativity has flourished beyond my expectations with ArtSpire. She's more confident, expressive, and genuinely excited about learning every day.",
      name: "Rajesh Patel",
      role: "Parent & Software Engineer",
      location: "Mumbai, Maharashtra",
    },
    {
      quote: "The FlashyCards have revolutionized language learning in our classroom. Students are more engaged, retain information better, and actually look forward to lessons.",
      name: "Prof. Anita Desai",
      role: "Language Teacher & Curriculum Designer",
      location: "Bangalore International School",
    },
    {
      quote: "Collaborating with IINSPARK has been transformative—nurturing curiosity, clarity, and confidence in students through innovative, holistic education that shapes empowered, future-ready minds.",
      name: "Dr. Kashinath Munde",
      role: "Principal RIT College",
      location: "",
    },
  ];

  const carouselImages = [
    { src: "/images/SparkLab.png", title: "Science Explorers Lab", description: "Hands-on experiments that ignite curiosity" },
    { src: "/images/TechTrek.png", title: "Future Tech Lab", description: "Building tomorrow's innovators" },
    { src: "/images/ArtSpire.png", title: "Creative Arts Studio", description: "Nurturing artistic talents" },
    { src: "/images/GreenCraft.png", title: "Garden Science Lab", description: "Connecting with nature" },
    { src: "/images/SmartSheets.png", title: "Futuristic Worksheets", description: "Progressive skill development" },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden flex items-center justify-center">
        {/* Subtle dot-grid texture */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, #06122415 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Gradient blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-brand-light/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/5 blur-[100px]" />
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-amber-500/5 blur-[80px]" />
        </div>

        <div className="container relative z-10 px-6 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content — staggered line reveal */}
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="flex flex-col items-start text-left space-y-6 pl-4 md:pl-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.05] overflow-hidden">
                {[
                  { text: 'Igniting', className: 'text-slate-900' },
                  { text: 'Young Minds', className: 'text-gradient-brand' },
                  { text: 'Inspiring Leaders', className: 'text-slate-900' },
                ].map((line, i) => (
                  <motion.span
                    key={i}
                    className={`block ${line.className}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line.text}
                  </motion.span>
                ))}
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl text-slate-500 font-light max-w-xl leading-relaxed"
              >
                Experience transformative learning through science, art, technology, and creativity. <span className="font-medium text-slate-700">IINSPARK</span> offers meticulously curated educational experiences designed to nurture confident, capable creators of tomorrow.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto"
              >
                {/* Gold-shimmer CTA */}
                <Link
                  href="/products"
                  className="relative w-full sm:w-auto overflow-hidden px-8 py-4 bg-brand-navy text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(6,18,36,0.25)] hover:shadow-[0_12px_40px_rgba(242,169,0,0.3)] flex items-center justify-center gap-2 group"
                >
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative">Explore Programs</span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* Summer Camp CTA */}
                <Link
                  href="/summer-camp"
                  className="w-full sm:w-auto px-6 py-4 glass-panel border border-amber-200/50 hover:border-amber-400/60 rounded-full flex items-center justify-center gap-3 transition-all duration-300 group hover:shadow-xl hover:shadow-amber-200/40 bg-gradient-to-r from-amber-50 to-orange-50"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-amber-900 leading-none">Summer Camp 2026</span>
                    <span className="text-xs text-amber-700/80 mt-1">Enrolling Now &middot; Limited Seats</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Video Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg lg:max-w-full mx-auto aspect-video lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group glass-panel p-1.5"
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-900">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src="/hello.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <span className="glass-panel text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Educational Experience
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Programs Grid (Our Offerings) */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Dot-grid texture */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, #06122410 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">Our Programs</h2>
            <p className="text-slate-500 text-lg max-w-4xl mx-auto font-light leading-relaxed">
              Educational programs designed to ignite curiosity and foster creativity. From interactive robotics to engaging science experiments, our programs cater to a wide range of interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-1 shadow-sm transition-all duration-500 border border-slate-100 hover:border-brand-blue/40 hover:shadow-[0_8px_40px_rgba(242,169,0,0.18)]"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-0">
                  <img src={offering.image} alt={offering.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl drop-shadow">{offering.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white">
                    <offering.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="px-5 pb-6 pt-5">
                  <p className="text-sm font-medium text-brand-blue mb-4">{offering.description}</p>
                  <ul className="space-y-2 mb-6">
                    {offering.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-500">
                        <CheckCircle className="w-3 h-3 mr-2 text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={offering.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-brand-blue transition-colors group/link">
                    Download PDF
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Compact Testimonials Section (Themed) */}
      <section className="w-full py-20 md:py-28 bg-brand-navy relative overflow-hidden">
        {/* Dot-grid on dark bg */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-brand-light font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Loved by Parents, Trusted by Schools
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Hear what our community has to say about their transformative learning experiences with IINSPARK.
            </p>
          </motion.div>

          {/* Compact testimonial carousel — swipe enabled */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) setActiveTestimonial((prev) => (prev + 2) % testimonials.length);
                  if (info.offset.x > 60) setActiveTestimonial((prev) => (prev - 2 + testimonials.length) % testimonials.length);
                }}
              >
                {/* First Testimonial */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 relative overflow-hidden transition-all duration-500 hover:bg-white/8 hover:border-white/20">
                  <div className="relative z-10">
                    <div className="mb-6">
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light italic text-center">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-center">
                        <p className="text-sm font-bold text-white mb-1">
                          {testimonials[activeTestimonial].name}
                        </p>
                        <p className="text-xs text-brand-light font-medium">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 relative overflow-hidden transition-all duration-500 hover:bg-white/8 hover:border-white/20">
                  <div className="relative z-10">
                    <div className="mb-6">
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light italic text-center">
                        "{testimonials[(activeTestimonial + 1) % testimonials.length].quote}"
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-center">
                        <p className="text-sm font-bold text-white mb-1">
                          {testimonials[(activeTestimonial + 1) % testimonials.length].name}
                        </p>
                        <p className="text-xs text-brand-light font-medium">
                          {testimonials[(activeTestimonial + 1) % testimonials.length].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 gap-4">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 2 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonials"
                  className="h-10 w-10 flex items-center justify-center rounded-full glass-panel-dark hover:bg-white/10 text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Carousel indicators */}
                <div className="flex space-x-2">
                  {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index * 2)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
                        Math.floor(activeTestimonial / 2) === index
                          ? "w-6 bg-brand-light"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`View testimonial pair ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 2) % testimonials.length)}
                  aria-label="Next testimonials"
                  className="h-10 w-10 flex items-center justify-center rounded-full glass-panel-dark hover:bg-white/10 text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Impact Stats */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Our Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming education and inspiring young minds. See how our programs are making a difference in the lives of students and educators across the nation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { icon: Users, target: 5000, suffix: "+", label: "Students Impacted" },
              { icon: School, target: 100, suffix: "+", label: "Schools Partnered" },
              { icon: BookOpen, target: 20, suffix: "+", label: "Collaborations" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative w-20 h-20 rounded-2xl bg-white shadow-md text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  <item.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-2 tabular-nums">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </h3>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Watch Us In Action */}
      <section className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Watch Us Transform Learning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">See how IINSPARK is revolutionizing classrooms.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl p-1.5 bg-gradient-to-br from-brand-blue to-brand-navy shadow-2xl"
          >
            <div className="aspect-video w-full rounded-[1.5rem] overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/rYv-GtnQ4Do?si=ZJ9VLflTLnT6IxjD"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-full font-semibold transition-colors shadow-sm hover:shadow-md"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Image Carousel */}
      <section className="w-full py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Ready to Transform Learning?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">Discover our world-class educational kits and programs.</p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl h-[350px] md:h-[500px] bg-slate-900 group border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={carouselImages[activeSlide].src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={carouselImages[activeSlide].title}
                onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-end justify-between">
              <div>
                <motion.h3 
                  key={`title-${activeSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-2"
                >
                  {carouselImages[activeSlide].title}
                </motion.h3>
                <motion.p 
                  key={`desc-${activeSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-brand-light text-lg"
                >
                  {carouselImages[activeSlide].description}
                </motion.p>
              </div>
              
              <div className="flex items-center gap-3 mt-6 md:mt-0 glass-panel-dark rounded-full p-2">
                <button 
                  onClick={() => setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 px-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={clsx("h-2 rounded-full transition-all duration-300", activeSlide === i ? "w-6 bg-brand-light" : "w-2 bg-white/30 hover:bg-white/50")}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveSlide((prev) => (prev + 1) % carouselImages.length)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <motion.div 
                key={`progress-${activeSlide}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-brand-light"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
