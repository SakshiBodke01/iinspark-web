"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, CheckCircle } from "lucide-react";
import clsx from "clsx";
import productsData from "../../data/products.json";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-[#faf9f5] pb-32">
      
      {/* 1. Page Header ('Our Programs & Kits') */}
      <section className="bg-[#0a192f] pt-24 pb-28 md:pt-32 md:pb-32 px-8 text-center relative border-b border-[#c5a059]/20">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 tracking-[-0.02em]">
            Our <span className="text-[#c5a059]">Programs &amp; Kits</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Explore our extensive range of hands-on learning experiences, anatomical models, and interactive educational tools designed for every age group.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="container mx-auto px-8 -mt-8 relative z-20 max-w-[1280px]">
        
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

        {/* 3. Products Grid */}
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
                className="bg-white rounded-lg overflow-hidden border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] transition-all duration-300 group flex flex-col h-full p-2.5"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-[#faf9f5] overflow-hidden rounded-md shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                  {/* Standardized Age Group Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 text-[#0a192f] text-[11px] font-bold px-2.5 py-0.5 rounded-sm border border-[#0a192f]/10 shadow-xs">
                      {product.ageGroup} Yrs
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-serif text-[#0a192f] mb-1 leading-snug">{product.title}</h3>
                  <p className="text-[#c5a059] font-semibold text-xs mb-3 line-clamp-1">{product.description}</p>
                  
                  {/* Feature Checklist */}
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

                  {/* Card Footer Row */}
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg border border-[#0a192f]/5 shadow-[0_4px_20px_rgba(10,25,47,0.04)]">
            <h3 className="text-xl font-serif text-[#0a192f] mb-1">No programs found</h3>
            <p className="text-xs text-[#44474d]">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

    </div>
  );
}
