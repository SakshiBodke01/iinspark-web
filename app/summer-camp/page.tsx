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
    <div className="min-h-screen bg-slate-50 dot-grid overflow-hidden pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center bg-gradient-to-br from-brand-navy via-[#0f172a] to-brand-navy">
        <div className="absolute inset-0 z-0 dot-grid-light opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-panel-dark px-4 py-2 text-sm font-medium text-white mb-8 border border-white/20">
              <Sun className="h-4 w-4 text-amber-400" />
              <span>Summer 2026 · Limited Seats</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-[1.05]">
              Summer <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Camp</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10">
              Three programs for <strong className="text-white font-semibold">Nursery to Grade 8</strong> — hands-on learning, creativity, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#register" className="relative overflow-hidden group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center gap-2">Register Now <ArrowRight className="w-5 h-5" /></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </a>
              <a href="#programs" className="w-full sm:w-auto px-8 py-4 glass-panel-dark hover:bg-white/10 text-white rounded-full font-semibold transition-all flex items-center justify-center">
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Three Camps. One Mission.</h2>
            <p className="text-lg text-slate-600">Choose the perfect program for your child.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {campPrograms.map((camp, idx) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={clsx("rounded-2xl border border-slate-100 p-8 shadow-lg hover:shadow-[0_8px_40px_rgba(242,169,0,0.18)] hover:border-brand-blue/30 transition-all duration-300 relative overflow-hidden", camp.bgLight)}
              >
                <div className={clsx("absolute top-0 left-0 w-full h-2 bg-gradient-to-r", camp.color)} />
                <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md bg-gradient-to-br", camp.color)}>
                  <camp.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">{camp.name}</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">{camp.tagline}</p>
                <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-700 shadow-sm mb-4">
                  {camp.grades}
                </div>
                <p className="text-slate-600 mb-8">{camp.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {camp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/60 border border-white rounded-full text-xs font-semibold text-slate-700">
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
      <section className="py-20 bg-slate-50 dot-grid">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-12">Why Choose IINSPARK?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-b from-slate-50 to-white border-none p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4 text-brand-blue">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-b from-slate-50 to-white border-none rounded-2xl p-12 text-center shadow-xl"
                >
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">You're All Set!</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                    Registration successful! We have received your details and will contact you shortly with confirmation and schedule details.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-brand-navy text-white rounded-full font-semibold hover:bg-brand-blue transition-colors"
                  >
                    Register Another Child
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-b from-slate-50 to-white border-none rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-brand-navy to-brand-blue p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/placeholder.svg')] opacity-10 bg-cover bg-center" />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">Registration Form</h2>
                      <p className="text-brand-light font-medium">Secure your child's spot today.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
                    
                    {/* Parent Details */}
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-brand-blue uppercase tracking-wider border-b border-slate-100 pb-2">Parent / Guardian</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                          <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="e.g. Priya Sharma" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                          <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="e.g. Pune" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                          <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                          <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>

                    {/* Centre Selection */}
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-brand-blue uppercase tracking-wider border-b border-slate-100 pb-2">Preferred Centre</h3>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Camp Centre *</label>
                        <select required value={selectedCentre} onChange={(e) => { setSelectedCentre(e.target.value); setSelectedBatch(""); }} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all cursor-pointer">
                          <option value="">Select a centre...</option>
                          {campCentres.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>

                      <AnimatePresence>
                        {activeCentre && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Batch *</label>
                              <select required value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all cursor-pointer">
                                <option value="">Select dates...</option>
                                {activeCentre.batches.map(b => <option key={b} value={b}>{b}</option>)}
                              </select>
                            </div>
                            <div className="p-4 bg-brand-blue/5 border border-brand-blue/20 rounded-xl flex items-start gap-3 text-brand-navy">
                              <Info className="w-5 h-5 shrink-0 mt-0.5" />
                              <span className="text-sm"><span className="font-bold">Available grades:</span> {activeCentre.grades}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Children Details */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <h3 className="text-sm font-bold text-brand-blue uppercase tracking-wider">Children</h3>
                        <div className="flex items-center gap-2">
                          <label className="text-sm font-semibold text-slate-700">Count:</label>
                          <select value={numChildren} onChange={handleNumChildrenChange} className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-none text-sm font-bold cursor-pointer">
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {childrenDetails.map((child, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center shrink-0">{idx + 1}</div>
                            <div className="flex-1">
                              <input required type="text" placeholder="Child's name" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-blue text-sm" value={child.name} onChange={(e) => { const d = [...childrenDetails]; d[idx].name = e.target.value; setChildrenDetails(d); }} />
                            </div>
                            <div className="w-24 shrink-0">
                              <input required type="number" min="3" max="18" placeholder="Age" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-blue text-sm" value={child.age} onChange={(e) => { const d = [...childrenDetails]; d[idx].age = e.target.value; setChildrenDetails(d); }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6 border-t border-slate-100">
                      <button type="submit" disabled={isPending} className="relative overflow-hidden group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isPending ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <><Send className="w-5 h-5" /> Complete Registration</>}
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
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
