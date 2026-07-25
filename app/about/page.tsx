"use client";

import { useState } from "react";
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
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      
      {/* 1. Hero Section */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-slate-50 border-b border-slate-200 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Our Mission &amp; Identity
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#061224] mb-6 tracking-tight">
            About IINSPARK
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            Making education meaningful, practical, and accessible for all children through hands-on learning experiences that spark joy, curiosity, and career readiness.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Our Origin
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#061224] tracking-tight mb-4">
                A Vision for Transformative Education
              </h2>
              
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
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-2 overflow-hidden"
                  >
                    <p>
                      One where students deeply understand what they learn, explore real-world applications, and discover who they are and what they can become.
                    </p>
                    <p>
                      Born from the collective expertise of educators, innovators, and visionaries, IINSPARK equips children with practical skills, future-ready exposure, and a sense of direction. Our programs integrate curriculum mastery with life skills, technology, languages, creative expression, and cognitive development.
                    </p>
                    <p>
                      At IINSPARK, we believe education must go beyond textbooks and marks. It must lead to purpose, passion, and potential. Through curiosity-driven labs, gamified learning, and hands-on experiences, we prepare children to adapt and lead in an ever-evolving world.
                    </p>
                    <p className="font-semibold text-[#061224] border-l-4 border-l-[#F2A900] pl-4 py-2 bg-slate-50 rounded-r-xl">
                      IINSPARK is not a classroom. It is a launchpad — for brighter minds, bolder choices, and boundless futures.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-3">
                <button
                  onClick={() => setExpandedStory(!expandedStory)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#061224] text-white hover:bg-slate-900 font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>{expandedStory ? "Read Less" : "Read More About Our Story"}</span>
                  <ArrowRight className={clsx("w-3.5 h-3.5 text-[#F2A900] transition-transform duration-200", expandedStory && "-rotate-90")} />
                </button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 p-2">
                <img
                  src="/images/team.jpeg"
                  alt="IINSPARK team with students"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="container mx-auto px-6 md:px-8 mt-14">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224] mb-6">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#F2A900] block mb-2">
                Our Purpose
              </span>

              <h2 className="text-2xl font-bold font-heading text-[#061224] mb-4">
                Our Mission
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                To ignite curiosity and foster holistic development in every child by providing experiential learning tools, STEM labs, and creative platforms that blend ancient Indian knowledge with 21st-century skills.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <ul className="space-y-2">
                {["Experiential Learning", "STEM & Robotics Integration", "Holistic Skill Building"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#061224]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224] mb-6">
                <Eye className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#F2A900] block mb-2">
                Our Ambition
              </span>

              <h2 className="text-2xl font-bold font-heading text-[#061224] mb-4">
                Our Vision
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                To be India's leading educational ecosystem, empowering millions of children to become self-reliant innovators, critical thinkers, and compassionate leaders shaping the future of nation building.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <ul className="space-y-2">
                {["Nation Building Focus", "21st Century Skills", "Accessible Innovation"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#061224]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values (Editorial Numbered List 01-06) */}
      <section className="container mx-auto px-6 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#061224]">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              The fundamental principles that guide our approach to education, curriculum design, and institutional partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {coreValues.map((value) => (
              <div key={value.number} className="flex items-start gap-4 pb-6 border-b border-slate-100">
                <span className="text-2xl font-bold font-heading text-slate-400 shrink-0">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#061224] mb-1">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Stakeholders Impact (Flat Layout Grid) */}
      <section className="container mx-auto px-6 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Ecosystem Impact
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#061224]">
              Empowering Every Stakeholder
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our comprehensive programs create meaningful value across the entire learning ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#061224]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#061224]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Founders & Leadership (Full Unchanged Copy & Read More Links) */}
      <section className="container mx-auto px-6 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#061224]">
              Meet Our Founders
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              The visionaries behind IINSPARK who are transforming education through innovation, academic excellence, and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={founder.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-16 h-16 rounded-full object-cover border border-slate-200 shrink-0"
                      onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                    />
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#061224]">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#F2A900]">
                        {founder.role} &middot; <span className="uppercase text-[10px] text-slate-500 font-bold tracking-wider">{founder.subtitle}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-slate-600 text-xs leading-relaxed mb-4">
                    <p>{founder.shortDescription}</p>

                    <AnimatePresence>
                      {expandedFounder === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-1 overflow-hidden"
                        >
                          {founder.fullDescription.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read More / Read Less Pill Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setExpandedFounder(expandedFounder === index ? null : index)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-[#061224] hover:bg-[#061224] hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <span>{expandedFounder === index ? "Read Less" : "Read More"}</span>
                        <ArrowRight className={clsx("w-3.5 h-3.5 text-[#F2A900] transition-transform duration-200", expandedFounder === index && "-rotate-90")} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <p className="text-xs italic text-slate-600 font-serif">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
