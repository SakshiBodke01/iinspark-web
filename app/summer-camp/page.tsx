"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, Users, MapPin, Mail, Phone, Rocket, Lightbulb, Palette, 
  Brain, BookOpen, Star, ArrowRight, Globe, ShieldCheck, Sun, 
  Building2, CalendarDays, Info, Send, Loader2
} from "lucide-react";
import clsx from "clsx";

export default function SummerCampPage() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [numChildren, setNumChildren] = useState(1);
  const [childrenDetails, setChildrenDetails] = useState([{ name: "", age: "" }]);
  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  const campPrograms = [
    {
      id: "little-explorers",
      name: "Little Explorers Lab",
      tagline: "Play · Discover · Create",
      grades: "Nursery – Grade 2",
      description: "A joyful camp where little learners explore the world through play & discovery!",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      icon: Palette,
      tags: ["Hands-On Learning", "STEM", "Languages", "Fun & Play"],
    },
    {
      id: "young-creators",
      name: "Young Creators Lab",
      tagline: "Imagine · Make · Explore",
      grades: "Grades 3 – 5",
      description: "Where kids build their ideas into inventions, stories & adventures!",
      color: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50",
      icon: Lightbulb,
      tags: ["Hands-On Learning", "AI & Robots", "Exploration"],
    },
    {
      id: "future-founders",
      name: "Future Founders Lab",
      tagline: "Think · Create · Innovate",
      grades: "Grades 5 – 8",
      description: "Where young minds become young entrepreneurs through startup & innovation!",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      icon: Rocket,
      tags: ["Hands-On Learning", "AI & Robotics", "Innovation"],
    },
  ];

  const whyUs = [
    { icon: Brain, title: "Holistic Growth", desc: "Creativity, STEM, languages, and life skills." },
    { icon: Users, title: "Expert Mentors", desc: "Educators who inspire confidence and curiosity." },
    { icon: Globe, title: "Global Perspective", desc: "Multicultural exposure from an early age." },
    { icon: BookOpen, title: "Indian Knowledge", desc: "Ancient wisdom meets 21st-century skills." },
    { icon: ShieldCheck, title: "Safe & Engaging", desc: "Joyful hands-on learning experiences." },
    { icon: Star, title: "Unique Takeaways", desc: "Braille, Sign Language, German, Sanskrit." },
  ];

  const campCentres = [
    { id: "kalmadi-kothrud", name: "Kalmadi High School, Kothrud", batches: ["1 May – 15 May", "16 May – 30 May"], grades: "Grade 1–7" },
    { id: "kalmadi-baner", name: "Kalmadi High School, Baner", batches: ["1 May – 15 May", "16 May – 30 May"], grades: "KG – Grade 5" },
    { id: "dpes-kharadi", name: "Dhole Patil Education Society, Kharadi", batches: ["8 May – 24 May"], grades: "KG – Grade 8" },
    { id: "jagadguru-lohegaon", name: "Jagadguru International School, Lohegaon", batches: ["16 May – 30 May"], grades: "KG – Grade 8" },
    { id: "pune-international", name: "Pune International School", batches: ["4 May – 17 May"], grades: "KG – Grade 8" },
  ];

  const activeCentre = campCentres.find(c => c.id === selectedCentre);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    // Simulate API call
    setTimeout(() => {
      setIsPending(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleNumChildrenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = parseInt(e.target.value) || 1;
    setNumChildren(v);
    setChildrenDetails(p => {
      const d = [...p];
      while (d.length < v) d.push({ name: "", age: "" });
      return d.slice(0, v);
    });
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] overflow-hidden pb-32">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center bg-[#0a192f] border-b border-[#c5a059]/20">
        <div className="container relative z-10 px-8 text-center max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-sm bg-[#faf9f5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] mb-8 border border-[#c5a059]/30">
              <Sun className="h-4 w-4 text-[#c5a059]" />
              <span>Summer 2026 · Limited Seats</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.05] tracking-[-0.02em]">
              Summer <span className="text-[#c5a059]">Camp</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10">
              Three programs for <strong className="text-white font-semibold">Nursery to Grade 8</strong> — hands-on learning, creativity, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#register" className="w-full sm:w-auto px-8 py-4 bg-[#0a192f] hover:bg-[#112240] text-white border border-[#c5a059]/40 rounded-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2">
                <span className="flex items-center gap-2">Register Now <ArrowRight className="w-5 h-5 text-[#c5a059]" /></span>
              </a>
              <a href="#programs" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all flex items-center justify-center">
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-[#faf9f5] relative">
        <div className="container px-8 mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0a192f] mb-4">Three Camps. One Mission.</h2>
            <p className="text-lg text-[#44474d]">Choose the perfect program for your child.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {campPrograms.map((camp, idx) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg bg-white border border-[#0a192f]/5 p-8 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 relative flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center text-[#0a192f] mb-6 bg-[#f7f3e8] border border-[#c5a059]/30">
                  <camp.icon className="w-7 h-7 text-[#c5a059]" />
                </div>
                <h3 className="text-2xl font-serif text-[#0a192f] mb-2">{camp.name}</h3>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] mb-4">{camp.tagline}</p>
                <div className="inline-block px-3 py-1 bg-[#faf9f5] rounded-sm text-xs font-bold text-[#0a192f] border border-[#0a192f]/10 mb-4 self-start">
                  {camp.grades}
                </div>
                <p className="text-[#44474d] text-sm mb-8 leading-relaxed">{camp.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {camp.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-[#e2ece9] rounded-sm text-xs font-semibold text-[#2d5a52]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-32 bg-white border-y border-[#0a192f]/10">
        <div className="container mx-auto px-8 text-center max-w-[1280px]">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#c5a059] block mb-2">Excellence in Education</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0a192f] mb-12">Why Choose IINSPARK?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-[#faf9f5] border border-[#0a192f]/5 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#c5a059]/30 flex items-center justify-center mx-auto mb-4 text-[#c5a059]">
                  <item.icon className="w-6 h-6 text-[#c5a059]" />
                </div>
                <h3 className="font-serif font-bold text-[#0a192f] mb-2">{item.title}</h3>
                <p className="text-xs text-[#44474d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-32">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-[#0a192f]/5 rounded-lg p-12 text-center shadow-[0_4px_20px_rgba(10,25,47,0.04)]"
                >
                  <div className="w-24 h-24 bg-[#e2ece9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-[#2d5a52]" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0a192f] mb-4">You're All Set!</h2>
                  <p className="text-base text-[#44474d] mb-8 max-w-lg mx-auto">
                    Registration successful! We have received your details and will contact you shortly with confirmation and schedule details.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-[#0a192f] text-white rounded-lg font-medium hover:bg-[#112240] transition-colors shadow-sm"
                  >
                    Register Another Child
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-[#0a192f]/5 rounded-lg shadow-[0_4px_20px_rgba(10,25,47,0.04)] overflow-hidden"
                >
                  <div className="bg-[#0a192f] p-8 md:p-12 text-center relative overflow-hidden border-b border-[#c5a059]/20">
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Registration Form</h2>
                      <p className="text-[#c5a059] font-medium text-sm">Secure your child's spot today.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
                    
                    {/* Parent Details */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-bold text-[#c5a059] uppercase tracking-[0.1em] border-b border-[#0a192f]/5 pb-2">Parent / Guardian</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Full Name *</label>
                          <input required type="text" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all" placeholder="e.g. Priya Sharma" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Location *</label>
                          <input required type="text" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all" placeholder="e.g. Pune" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Email *</label>
                          <input required type="email" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Phone *</label>
                          <input required type="tel" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>

                    {/* Centre Selection */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-bold text-[#c5a059] uppercase tracking-[0.1em] border-b border-[#0a192f]/5 pb-2">Preferred Centre</h3>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Camp Centre *</label>
                        <select required value={selectedCentre} onChange={(e) => { setSelectedCentre(e.target.value); setSelectedBatch(""); }} className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all cursor-pointer">
                          <option value="">Select a centre...</option>
                          {campCentres.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>

                      <AnimatePresence>
                        {activeCentre && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-4">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a] mb-2">Preferred Batch *</label>
                              <select required value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)} className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0a192f] transition-all cursor-pointer">
                                <option value="">Select dates...</option>
                                {activeCentre.batches.map(b => <option key={b} value={b}>{b}</option>)}
                              </select>
                            </div>
                            <div className="p-4 bg-[#faf9f5] border border-[#0a192f]/10 rounded-lg flex items-start gap-3 text-[#0a192f]">
                              <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#c5a059]" />
                              <span className="text-sm"><span className="font-bold">Available grades:</span> {activeCentre.grades}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Children Details */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-[#0a192f]/5 pb-2">
                        <h3 className="text-xs font-bold text-[#c5a059] uppercase tracking-[0.1em]">Children</h3>
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#1b1c1a]">Count:</label>
                          <select value={numChildren} onChange={handleNumChildrenChange} className="bg-white border border-[#0a192f]/10 rounded-sm px-2 py-1 focus:outline-none text-sm font-bold cursor-pointer">
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {childrenDetails.map((child, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-[#faf9f5] border border-[#0a192f]/5 rounded-lg items-center">
                            <div className="w-8 h-8 rounded-lg bg-[#0a192f] text-white font-bold flex items-center justify-center shrink-0">{idx + 1}</div>
                            <div className="flex-1">
                              <input required type="text" placeholder="Child's name" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0a192f] text-sm" value={child.name} onChange={(e) => { const d = [...childrenDetails]; d[idx].name = e.target.value; setChildrenDetails(d); }} />
                            </div>
                            <div className="w-24 shrink-0">
                              <input required type="number" min="3" max="18" placeholder="Age" className="w-full bg-white border border-[#0a192f]/10 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0a192f] text-sm" value={child.age} onChange={(e) => { const d = [...childrenDetails]; d[idx].age = e.target.value; setChildrenDetails(d); }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6 border-t border-[#0a192f]/5">
                      <button type="submit" disabled={isPending} className="w-full md:w-auto px-8 py-4 bg-[#0a192f] hover:bg-[#112240] text-white rounded-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed">
                        <span className="flex items-center justify-center gap-2">
                          {isPending ? <><Loader2 className="w-5 h-5 animate-spin text-[#c5a059]" /> Processing...</> : <><Send className="w-5 h-5 text-[#c5a059]" /> Complete Registration</>}
                        </span>
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
