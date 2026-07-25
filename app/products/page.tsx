"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, CheckCircle, ArrowRight, Award, Users, Compass, BookOpen, Sparkles, Brain, Drama, Palette, Leaf, Microscope, Bot } from "lucide-react";
import clsx from "clsx";
import productsData from "../../data/products.json";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const mainPrograms = [
    {
      badge: "FOUNDATIONAL",
      title: "Lab of Curiosity",
      description: "An exploratory space where students engage in hands-on inquiry-based learning, uncovering the 'why' behind everyday phenomena.",
      features: ["Critical Thinking & Inquiry", "Experiential Discovery"],
      image: "/images/TuitionPlus.png",
      pdf: "/pdf/LabofCuriosity.pdf",
    },
    {
      badge: "ADVANCED TECH",
      title: "Future Tech Lab",
      description: "Immersion into the world of AI, robotics, and complex coding. Students build real-world applications while learning ethical technology.",
      features: ["AI & Python Fundamentals", "Robotics Engineering"],
      image: "/images/TechTrek.png",
      pdf: "/pdf/FutureTechLab.pdf",
    },
    {
      badge: "AESTHETICS",
      title: "Creative Arts Studio",
      description: "A tactile sanctuary for self-expression where traditional media meets digital design, encouraging students to visualize their inner worlds.",
      features: ["Multi-media Exploration", "Visual Storytelling"],
      image: "/images/ArtSpire.png",
      pdf: "/pdf/CreativeArtsStudio.pdf",
    },
    {
      badge: "ENVIRONMENTAL",
      title: "Garden Science Lab",
      description: "Blending biology with sustainability, students study ecosystems by tending to the living lab, learning the science of life.",
      features: ["Botany & Soil Ecology", "Sustainable Practices"],
      image: "/images/GreenCraft.png",
      pdf: "/pdf/GardenScienceLab.pdf",
    },
    {
      badge: "ADVANCED SCIENCE",
      title: "Science Explorers Lab",
      description: "Rigorous scientific investigation in physics and chemistry. Advanced students tackle hypothesis testing and experimental design.",
      features: ["Quantitative Research", "Applied Physics"],
      image: "/images/SparkLab.png",
      pdf: "/pdf/ScienceExplorersLab.pdf",
    },
    {
      badge: "PERFORMANCE",
      title: "Theater & Storytelling",
      description: "Building confidence and communication skills through the art of performance. Students learn scriptwriting, improvisation, and public speaking.",
      features: ["Public Speaking Mastery", "Creative Narrative"],
      image: "/images/DramaNest.png",
      pdf: "/pdf/Theater&Storytelling.pdf",
    },
  ];

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "courses", name: "Courses & Labs" },
    { id: "kits", name: "Experiment Kits" },
    { id: "models", name: "Anatomical Models" },
    { id: "charts", name: "Educational Charts" },
    { id: "products", name: "Learning Products" },
    { id: "others", name: "Other Programs" },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory || product.type === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] overflow-hidden">
      
      {/* 1. HERO SECTION ("OUR CURRICULUM") */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-[#faf9f5] border-b border-[#0a192f]/10 text-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block">
            Our Curriculum
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0a192f] tracking-[-0.02em] font-bold leading-tight">
            Nurturing the Architects of Tomorrow
          </h1>

          <p className="text-base sm:text-lg text-[#44474d] font-normal max-w-3xl mx-auto leading-relaxed pt-2">
            At IINSPARK, we bridge the gap between traditional excellence and future-ready innovation. Our specialized labs are designed to ignite curiosity, foster creativity, and build foundational expertise in the skills that will define the next century.
          </p>
        </div>
      </section>

      {/* 2. FEATURED PROGRAMS 6-CARD GRID */}
      <section className="py-20 md:py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {mainPrograms.map((program) => (
              <div
                key={program.title}
                className="group flex flex-col justify-between rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 overflow-hidden"
              >
                {/* Image Top with Category Badge Overlay */}
                <div className="relative h-56 w-full overflow-hidden shrink-0 bg-[#faf9f5]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-sm bg-white/95 backdrop-blur-md text-[#0a192f] text-[9px] font-bold uppercase tracking-wider border border-[#0a192f]/10 shadow-xs">
                    {program.badge}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0a192f] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#44474d] leading-relaxed mb-6 line-clamp-3">
                      {program.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-2 mb-6">
                      {program.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-[#44474d]">
                          <CheckCircle className="w-3.5 h-3.5 mr-2 text-[#2d5a52] shrink-0" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Syllabus Link */}
                  <div className="pt-4 border-t border-[#0a192f]/5 mt-auto">
                    <a
                      href={program.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors duration-200"
                    >
                      <span>Download Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CATALOG & SEARCH SECTION */}
      <section className="py-20 md:py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">
              Learning Tools &amp; Kits
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a192f] tracking-[-0.02em]">
              Explore Complete Product Catalog
            </h2>
          </div>

          {/* Floating Search & Filter Bar */}
          <div className="bg-white rounded-lg border border-[#0a192f]/10 shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-4 md:p-5 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="flex-1 w-full md:w-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5a059] pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search programs, kits, models..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#faf9f5] border border-[#0a192f]/10 rounded-lg text-xs sm:text-sm text-[#1b1c1a] placeholder:text-[#44474d] focus:outline-none focus:border-[#0a192f] transition-colors duration-150 ease-out"
              />
            </div>
            
            {/* Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={clsx(
                    "whitespace-nowrap px-3.5 py-2 rounded-sm text-xs font-semibold transition-colors duration-150 border cursor-pointer focus:outline-none",
                    activeCategory === cat.id 
                      ? "bg-[#0a192f] border-[#0a192f] text-white" 
                      : "bg-white border-[#0a192f]/10 text-[#44474d] hover:border-[#0a192f]/30 hover:text-[#0a192f]"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg overflow-hidden border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 group flex flex-col h-full p-3"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-[#faf9f5] overflow-hidden rounded-md shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 text-[#0a192f] text-[11px] font-bold px-2.5 py-0.5 rounded-sm border border-[#0a192f]/10 shadow-xs">
                        {product.ageGroup} Yrs
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-serif font-bold text-[#0a192f] mb-1 leading-snug">{product.title}</h3>
                    <p className="text-[#c5a059] font-semibold text-xs mb-3 line-clamp-1">{product.description}</p>
                    
                    <div className="mb-4 flex-1">
                      <ul className="space-y-1.5">
                        {product.features?.slice(0, 3).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start text-xs text-[#44474d] leading-snug">
                            <CheckCircle className="w-3.5 h-3.5 mr-2 text-[#2d5a52] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3.5 border-t border-[#0a192f]/5 flex items-center justify-between mt-auto">
                      <span className="text-base font-serif font-bold text-[#0a192f]">{product.price}</span>
                      <button className="flex items-center gap-1.5 text-xs font-medium text-[#0a192f] hover:text-[#c5a059] transition-colors duration-150 cursor-pointer">
                        <Download className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>Brochure</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
              <h3 className="text-xl font-serif text-[#0a192f] mb-1">No programs found</h3>
              <p className="text-xs text-[#44474d]">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. HOLISTIC APPROACH SECTION (SOLID DEEP NAVY CONTAINER) */}
      <section className="w-full py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-[-0.02em] leading-tight">
                A Holistic Approach to Excellence
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Our programs are not isolated disciplines. They are interconnected pathways that encourage students to see the mathematics in music, the science in art, and the humanity in technology. This interdisciplinary philosophy is what sets an IINSPARK education apart.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/20 shadow-xs">
                  <Award className="w-4 h-4 text-[#c5a059]" />
                  <span>Certified Instructors</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/20 shadow-xs">
                  <Users className="w-4 h-4 text-[#c5a059]" />
                  <span>Small Cohorts</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/20 p-2 bg-white/5 shadow-2xl">
                <img
                  src="/images/girl-studying.jpeg"
                  alt="Student using microscope"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/images/SparkLab.png"; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER ("READY TO SPARK THEIR FUTURE?") */}
      <section className="py-24 md:py-32 bg-[#faf9f5]">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          <div className="bg-[#ebe9e3] rounded-2xl p-10 sm:p-14 text-center max-w-[1280px] mx-auto border border-[#0a192f]/10 shadow-xs">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0a192f] font-bold mb-3 tracking-[-0.02em]">
              Ready to spark their future?
            </h2>
            
            <p className="text-[#44474d] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Admissions are open for the upcoming academic cycle. Secure a place in our specialized labs and watch your child grow into a confident, creative thinker.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#0a192f] hover:bg-[#112240] text-white font-medium text-sm transition-all duration-200 cursor-pointer shadow-sm"
              >
                Apply Now
              </Link>
              
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent border border-[#0a192f]/20 hover:bg-white text-[#0a192f] font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                Request a Tour
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
