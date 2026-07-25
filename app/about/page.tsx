"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, BookOpen, School, ArrowRight, Rocket, Brain, Sparkles, Target, Heart, Compass, CheckCircle, Quote, GraduationCap, Building2, Eye } from "lucide-react";
import clsx from "clsx";

export default function AboutPage() {
  const [expandedStory, setExpandedStory] = useState(false);
  const [expandedFounder, setExpandedFounder] = useState<number | null>(null);

  const coreValues = [
    {
      number: "01",
      title: "Hands-on First",
      description: "We believe children learn best by touching, building, and experimenting rather than passive memorization.",
    },
    {
      number: "02",
      title: "Indian Knowledge Systems",
      description: "Rooted in India's rich heritage of scientific, mathematical, and philosophical inquiry integrated into modern STEM.",
    },
    {
      number: "03",
      title: "Holistic Development",
      description: "Balancing intellectual curiosity, emotional intelligence, artistic expression, and ethical character.",
    },
    {
      number: "04",
      title: "Inclusivity & Access",
      description: "Ensuring high-quality experiential learning tools reach children across urban centers and rural schools alike.",
    },
    {
      number: "05",
      title: "Creative Expression",
      description: "Blending art, drama, storytelling, and design thinking into scientific and technological explorations.",
    },
    {
      number: "06",
      title: "Nation Building",
      description: "Empowering the next generation of problem solvers, innovators, and leaders to shape India's future.",
    },
  ];

  const stakeholders = [
    {
      icon: Users,
      title: "For Children",
      desc: "Interactive, joyful learning experiences that ignite lifelong curiosity and problem-solving skills.",
    },
    {
      icon: GraduationCap,
      title: "For Educators",
      desc: "Structured kits, training, and curriculum-aligned tools to transform classroom engagement.",
    },
    {
      icon: Building2,
      title: "For Schools",
      desc: "End-to-end STEM, robotics, and curiosity lab installations that elevate academic prestige.",
    },
    {
      icon: Heart,
      title: "For Parents",
      desc: "Meaningful learning materials that support holistic cognitive and creative growth at home.",
    },
  ];

  const founders = [
    {
      name: "Shri Manoj Pochat",
      role: "Director & Co-Founder",
      subtitle: "Visionary Leader",
      image: "/images/founders/manoj-pochat.png",
      shortDescription: "Shri Manoj Pochat is a visionary entrepreneur and renowned leader in the business world, with a proven track record of building successful ventures across diverse industries.",
      fullDescription: [
        "Shri Manoj Pochat is a visionary entrepreneur and a renowned leader in the business world, with a proven track record of building and managing multiple successful ventures like Seva Infotech, Sakar Robotics, PPCR (Pune Platform for Collaborative Response) across diverse industries.",
        "His journey is one of perseverance, strategic thinking, and an unwavering commitment to excellence. Beyond his remarkable business achievements, Mr Manoj Pochat holds a deep passion for education and its transformative power.",
        "Recognizing the vital role education plays in shaping young minds and building a better society, he envisioned IINSPARK as a platform to bridge the gap between learning and understanding. Driven by the belief that every child deserves an opportunity to explore, discover, and excel, he has established this company to provide innovative educational tools that make learning engaging, practical, and impactful.",
      ],
      quote: "Our mission is simple yet profound: to inspire curiosity, nurture creativity, and empower children with knowledge that goes beyond textbooks.",
    },
    {
      name: "Shri Akshay Kelkar",
      role: "MD & CEO",
      subtitle: "Education Innovator",
      image: "/images/founders/akshay-kelkar.jpg",
      shortDescription: "Shri Akshay Kelkar is an esteemed educationist, accomplished writer, and motivational speaker, bringing scholarly excellence and practical insight to educational innovation.",
      fullDescription: [
        "Shri Akshay Kelkar, an esteemed educationist, accomplished writer, and motivational speaker, is a driving force behind IINSPARK. With MSc in Inorganic Chemistry and a profound understanding of academic principles, Mr Akshay Kelkar brings a unique blend of scholarly excellence and practical insight to the forefront of educational innovation.",
        "Passionate about redefining the way education is perceived and delivered, he envisions a system where learning extends beyond the pages of textbooks. He is dedicated to making education hands-on, interactive, and accessible to every child, regardless of their background.",
        "Through IINSPARK, Mr Akshay Kelkar strives to create an environment where curiosity is nurtured, creativity is encouraged, and every child has the tools to succeed.",
      ],
      quote: "Our commitment is to foster a deeper connection between theoretical concepts and their practical applications, allowing students to truly understand and enjoy what they learn.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1b1c1a] overflow-hidden">
      
      {/* 1. HERO SECTION ("OUR PHILOSOPHY") */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#faf9f5] border-b border-[#0a192f]/10 text-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block">
            Our Philosophy
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0a192f] tracking-[-0.02em] font-bold leading-tight">
            Nurturing the <span className="italic font-serif font-normal text-[#c5a059]">Next Generation</span> <br className="hidden sm:inline" />
            of Confident Creators.
          </h1>

          <p className="text-base sm:text-lg text-[#44474d] font-normal max-w-3xl mx-auto leading-relaxed pt-2">
            IINSPARK is an experiential learning lab designed to bridge the gap between traditional education and the creative demands of tomorrow. We believe every child is a natural-born thinker waiting for the right spark.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-24 md:py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-5 text-[#44474d] text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block">
                Our Story
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0a192f] tracking-[-0.02em] font-bold">
                From a Tiny Lab to a Global Vision.
              </h2>
              
              <p>
                Founded by a group of educators and creative technologists, IINSPARK began with a simple observation: students thrive when they are given the freedom to build, fail, and iterate in a supportive environment.
              </p>
              
              <p>
                What started as a weekend workshop series has evolved into a comprehensive experiential ecosystem. We've replaced rigid textbooks with robotics kits, blank canvases, and digital studios, fostering a culture where "Why?" is the most important question in the room.
              </p>

              <AnimatePresence>
                {expandedStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-2 overflow-hidden"
                  >
                    <p>
                      IINSPARK was founded with a singular mission — to redefine education by empowering young minds with clarity, confidence, and career-readiness. One where students deeply understand what they learn, explore real-world applications, and discover who they are and what they can become.
                    </p>
                    <p>
                      Born from the collective expertise of educators, innovators, and visionaries, IINSPARK equips children with practical skills, future-ready exposure, and a sense of direction. Our programs integrate curriculum mastery with life skills, technology, languages, creative expression, and cognitive development.
                    </p>
                    <p className="font-semibold text-[#0a192f] border-l-4 border-l-[#c5a059] pl-4 py-2 bg-white rounded-r-lg shadow-2xs">
                      IINSPARK is not a classroom. It is a launchpad — for brighter minds, bolder choices, and boundless futures.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2">
                <button
                  onClick={() => setExpandedStory(!expandedStory)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0a192f] text-white hover:bg-[#112240] font-medium text-xs tracking-wide transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>{expandedStory ? "Read Less" : "Read More About Our Story"}</span>
                  <ArrowRight className={clsx("w-3.5 h-3.5 text-[#c5a059] transition-transform duration-200", expandedStory && "-rotate-90")} />
                </button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-[#0a192f]/10 overflow-hidden bg-white p-2 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
                <img
                  src="/images/SparkLab.png"
                  alt="Students in lab"
                  className="w-full aspect-[4/3] sm:aspect-[1/1] object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/images/team.jpeg"; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION (SOLID DEEP NAVY + GOLD FLOATING BADGE) */}
      <section className="w-full py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-6 space-y-10">
              
              {/* Mission Block */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-[-0.02em]">
                  Empowering Minds through Craft
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                  To provide a playground for intellectual curiosity where students master the tools of the future—from AI to artistic expression—through hands-on mentorship and real-world projects.
                </p>
              </div>

              {/* Vision Block */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block">
                  Our Vision
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-[-0.02em]">
                  A World of Limitless Agency
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                  We envision a world where every young learner possesses the technical skill and creative confidence to solve the most complex challenges of their generation with empathy and ingenuity.
                </p>
              </div>

            </div>

            {/* Right Image Container with Gold Badge */}
            <div className="md:col-span-6 relative pt-6 md:pt-0">
              <div className="rounded-2xl overflow-hidden border border-white/20 p-2 bg-white/5 shadow-2xl relative">
                <img
                  src="/images/TuitionPlus.png"
                  alt="Kids in Lab Coats"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                />

                {/* Floating Gold Badge (Top-Right) */}
                <div className="absolute top-4 right-4 sm:-top-4 sm:-right-4 bg-[#d4b982] text-[#0a192f] px-6 py-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/30 z-20">
                  <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#0a192f] leading-none mb-1">
                    15k+
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#0a192f] text-center">
                    Lives Impacted
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR TEAM SECTION ("GUIDED BY MASTERS, FUELLED BY PASSION.") */}
      <section className="py-24 md:py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#0a192f]/5 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0a192f] tracking-[-0.02em] font-bold">
                Guided by Masters, Fuelled by Passion.
              </h2>
            </div>
            <Link
              href="/career"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors duration-200 shrink-0"
            >
              <span>Join Our Faculty</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
            </Link>
          </div>

          {/* 3 Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Card 1: Shri Manoj Pochat */}
            <div className="group rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-6 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 bg-[#faf9f5]">
                  <img
                    src={founders[0].image}
                    alt={founders[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-1">
                  {founders[0].name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#c5a059] mb-3">
                  {founders[0].role} &middot; {founders[0].subtitle}
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  {founders[0].shortDescription}
                </p>

                <AnimatePresence>
                  {expandedFounder === 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 pt-1 text-xs text-[#44474d] leading-relaxed overflow-hidden"
                    >
                      {founders[0].fullDescription.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-[#0a192f]/5 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setExpandedFounder(expandedFounder === 0 ? null : 0)}
                  className="text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {expandedFounder === 0 ? "Show Less" : "Read Full Bio"}
                </button>
              </div>
            </div>

            {/* Card 2: Shri Akshay Kelkar */}
            <div className="group rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-6 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 bg-[#faf9f5]">
                  <img
                    src={founders[1].image}
                    alt={founders[1].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-1">
                  {founders[1].name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#c5a059] mb-3">
                  {founders[1].role} &middot; {founders[1].subtitle}
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  {founders[1].shortDescription}
                </p>

                <AnimatePresence>
                  {expandedFounder === 1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 pt-1 text-xs text-[#44474d] leading-relaxed overflow-hidden"
                    >
                      {founders[1].fullDescription.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-[#0a192f]/5 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setExpandedFounder(expandedFounder === 1 ? null : 1)}
                  className="text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  {expandedFounder === 1 ? "Show Less" : "Read Full Bio"}
                </button>
              </div>
            </div>

            {/* Card 3: Pedagogy & Faculty Leads */}
            <div className="group rounded-lg bg-white border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-6 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 bg-[#faf9f5]">
                  <img
                    src="/images/team.jpeg"
                    alt="IINSPARK Pedagogy Team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-1">
                  Pedagogy &amp; Academic Team
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#c5a059] mb-3">
                  ART, ROBOTICS &amp; STEM FACULTY
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed mb-4">
                  A multi-disciplinary team of researchers, chemical scientists, roboticists, and master artisans passionate about student outcome and hands-on learning.
                </p>
              </div>

              <div className="pt-4 border-t border-[#0a192f]/5 mt-4 flex items-center justify-between">
                <Link
                  href="/career"
                  className="text-xs font-bold text-[#0a192f] hover:text-[#c5a059] transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Explore Open Roles</span>
                  <ArrowRight className="w-3 h-3 text-[#c5a059]" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="py-24 md:py-32 bg-[#faf9f5] border-b border-[#0a192f]/10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          <div className="max-w-5xl mx-auto bg-white rounded-lg border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] p-8 sm:p-12">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0a192f] font-bold">
                Our Core Values
              </h2>
              <p className="text-[#44474d] text-sm mt-2 leading-relaxed">
                The fundamental principles that guide our approach to education, curriculum design, and institutional partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {coreValues.map((value) => (
                <div key={value.number} className="flex items-start gap-4 pb-6 border-b border-[#0a192f]/5">
                  <span className="text-2xl font-serif font-bold text-[#c5a059] shrink-0">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0a192f] mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[#44474d] text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER ("READY TO SPARK A NEW JOURNEY?") */}
      <section className="py-24 md:py-32 bg-[#faf9f5]">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          
          <div className="bg-[#ebe9e3] rounded-2xl p-10 sm:p-14 text-center max-w-[1280px] mx-auto border border-[#0a192f]/10 shadow-xs">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0a192f] font-bold mb-3 tracking-[-0.02em]">
              Ready to spark a new journey?
            </h2>
            
            <p className="text-[#44474d] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Experience the IINSPARK difference in person. Book a tour of our lab or join an upcoming open day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#0a192f] hover:bg-[#112240] text-white font-medium text-sm transition-all duration-200 cursor-pointer shadow-sm"
              >
                Book a Private Tour
              </Link>
              
              <a
                href="/pdf/LabofCuriosity.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-transparent border border-[#0a192f]/20 hover:bg-white text-[#0a192f] font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                Download Prospectus
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
