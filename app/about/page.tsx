"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, BookOpen, School, ArrowRight, Rocket, Brain, Sparkles, Target, Heart, Compass, CheckCircle } from "lucide-react";
import clsx from "clsx";

export default function AboutPage() {
  const [expandedStory, setExpandedStory] = useState(false);
  const [expandedFounder, setExpandedFounder] = useState<number | null>(null);

  const coreValues = [
    {
      icon: Brain,
      title: "Purposeful Learning",
      description: "Education that ignites curiosity and critical thinking, moving beyond rote memorization to real-world application.",
    },
    {
      icon: Rocket,
      title: "Future-Ready Skills",
      description: "Preparing creators and innovators through Robotics, AI, Languages, and Financial Literacy programs.",
    },
    {
      icon: Heart,
      title: "Empathy & Inclusion",
      description: "Nurturing kind hearts and sharp minds, with opportunities for all children regardless of background.",
    },
    {
      icon: Sparkles,
      title: "Joyful Discovery",
      description: "Making learning an adventure through gamification, storytelling, and hands-on innovation.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Embracing global practices while staying rooted in ethics and traditions.",
    },
    {
      icon: Target,
      title: "Personal Growth Focus",
      description: "Taking every learner's journey personally, nurturing and celebrating progress at every step.",
    },
  ];

  const stakeholders = [
    {
      icon: Users,
      title: "Parents",
      description: "We support parents with concept clarity, career discovery tools, and holistic development programs that make learning engaging and future-focused.",
    },
    {
      icon: BookOpen,
      title: "Teachers & Educators",
      description: "We partner with educators through curriculum-aligned resources, science kits, worksheets, and innovative teaching tools that make complex topics interactive.",
    },
    {
      icon: School,
      title: "Schools & Preschools",
      description: "We help institutions elevate their learning environment with STEM labs, language modules, and art-integrated activities.",
    },
    {
      icon: Compass,
      title: "Community Clubs",
      description: "We transform community spaces into learning zones with after-school programs, weekend workshops, and summer camps.",
    },
    {
      icon: Heart,
      title: "NGOs & Foundations",
      description: "We support organizations working with underserved children by providing affordable, scalable, and impactful educational tools.",
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
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center text-center px-4 overflow-hidden border-none">
        <div className="absolute inset-0 z-0 dot-grid opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6 leading-[1.05]">
            About <span className="text-gradient-brand">IINSPARK</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            Making education meaningful, practical, and accessible for all children through hands-on learning experiences that spark joy and curiosity.
          </p>
        </motion.div>
      </section>

      {/* 2. Our Story */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                A Vision for <br />
                <span className="text-brand-blue italic font-light">Transformative Education</span>
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 font-light">
                <p>
                  IINSPARK was founded with a singular mission — to redefine education by empowering young minds with clarity, confidence, and career-readiness.
                </p>
                <p>
                  In a world where traditional learning often fails to connect knowledge with purpose, we envisioned a system that bridges this critical gap. IINSPARK is not just about academic support — it's about creating a better path.
                </p>

                <AnimatePresence>
                  {expandedStory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-2"
                    >
                      <p>
                        One where students deeply understand what they learn, explore real-world applications, and discover who they are and what they can become.
                      </p>
                      <p>
                        Born from the collective expertise of educators, innovators, and visionaries, IINSPARK equips children with practical skills, future-ready exposure, and a sense of direction. Our programs integrate curriculum mastery with life skills, technology, languages, creative expression, and cognitive development — all designed to help learners thrive in every domain of life.
                      </p>
                      <p>
                        At IINSPARK, we believe education must go beyond textbooks and marks. It must lead to purpose, passion, and potential. Through curiosity-driven labs, gamified learning, and hands-on experiences, we prepare children not just to perform — but to excel, adapt, and lead in an ever-evolving world.
                      </p>
                      <p className="font-medium text-brand-navy border-l-4 border-brand-blue pl-4 py-1">
                        IINSPARK is not a classroom. It is a launchpad — for brighter minds, bolder choices, and boundless futures.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpandedStory(!expandedStory)}
                  className="group inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors mt-2"
                >
                  {expandedStory ? "Read Less" : "Read More"}
                  <ArrowRight className={clsx("ml-2 w-4 h-4 transition-transform", expandedStory && "-rotate-90")} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-navy/20" />
              <img
                src="/images/team.jpeg"
                alt="IINSPARK founder with students"
                className="relative z-10 w-full aspect-[4/3] object-cover rounded-[1.5rem]"
                onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Mission & Vision</h2>
            <p className="text-lg text-brand-light font-light">The guiding principles that drive everything we do at IINSPARK.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel-dark p-8 md:p-10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4 text-white">Our Mission</h3>
              <div className="space-y-4 text-slate-300 font-light text-lg">
                <p className="text-white font-medium">To ignite the spark within every learner — through experiential, value-based, and future-ready education.</p>
                <p>Our mission is to create a transformative learning environment that blends academic excellence with creativity, innovation, and life skills.</p>
                <p>At IINSPARK, we don't just prepare children for school — we prepare them for life. Because when learning is real, relevant, and inspiring, every child becomes unstoppable.</p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel-dark p-8 md:p-10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-white text-brand-navy flex items-center justify-center mb-6 shadow-lg">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4 text-white">Our Vision</h3>
              <div className="space-y-4 text-slate-300 font-light text-lg mb-6">
                <p className="text-white font-medium">To nurture a generation that learns with purpose, leads with confidence, and lives with curiosity.</p>
                <p>We envision an education system where learning is joyful, meaningful, and deeply connected to life.</p>
              </div>
              <ul className="space-y-3">
                {["Curiosity-driven learning", "Holistic development", "Future-ready skills", "Inclusive education"].map((point, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-brand-light mr-3 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden border-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">What We Believe In</h2>
            <p className="text-lg text-slate-600 font-light">The pillars that define who we are, what we believe in, and how we transform futures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-brand-navy to-slate-900 shadow-xl flex items-center justify-center text-brand-light mb-6 border border-white/10 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-brand-blue/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand-blue/20 rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <value.icon className="w-8 h-8 relative z-10 drop-shadow-sm" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stakeholders */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-none">
        <div className="absolute inset-0 z-0 dot-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Empowering Every Stakeholder</h2>
            <p className="text-lg text-slate-600 font-light">At IINSPARK, we don't just educate—we co-create a powerful learning ecosystem that supports every stakeholder involved in shaping a child's future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
            {stakeholders.map((stakeholder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={clsx("bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group", idx === 4 && "lg:col-start-2 lg:col-span-1")}
              >
                <div className="relative w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-brand-blue to-amber-500 shadow-xl flex items-center justify-center text-white mb-6 border border-white/20 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-brand-blue/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand-blue rounded-[1.25rem] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                  <stakeholder.icon className="w-8 h-8 relative z-10 drop-shadow-sm" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{stakeholder.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{stakeholder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Our Founders */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Meet Our Founders</h2>
            <p className="text-lg text-slate-600 font-light">The visionaries behind IINSPARK who are transforming education through innovation and passion.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-none flex flex-col"
              >
                <div className="bg-brand-navy p-8 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-brand-blue/20" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white/20 shadow-xl bg-slate-200">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-brand-light font-medium mb-1">{founder.role}</p>
                    <p className="text-slate-300 text-xs uppercase tracking-wider">{founder.subtitle}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="space-y-4 mb-6 text-slate-600 font-light text-sm md:text-base flex-1">
                    <p>{founder.shortDescription}</p>

                    <AnimatePresence>
                      {expandedFounder === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-2"
                        >
                          {founder.fullDescription.slice(1).map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => setExpandedFounder(expandedFounder === index ? null : index)}
                    className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors mb-6"
                  >
                    {expandedFounder === index ? "Read Less" : "Read More"}
                    <ArrowRight className={clsx("ml-2 w-4 h-4 transition-transform", expandedFounder === index && "-rotate-90")} />
                  </button>

                  <div className="pt-6 border-t border-slate-200 mt-auto">
                    <blockquote className="text-brand-navy font-medium text-sm italic text-center">
                      "{founder.quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
