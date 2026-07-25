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
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Page Header ('Our Programs & Kits') */}
      <section className="bg-[#061224] pt-14 pb-20 md:pt-16 md:pb-24 px-6 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
            Our <span className="text-[#F2A900]">Programs &amp; Kits</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Explore our extensive range of hands-on learning experiences, anatomical models, and interactive educational tools designed for every age group.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="container mx-auto px-6 md:px-8 -mt-8 relative z-20">
        
        {/* Floating Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 md:p-5 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="flex-1 w-full md:w-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search programs, kits, models..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#061224] transition-colors"
            />
          </div>
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  "whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-semibold transition-colors border cursor-pointer focus:outline-none",
                  activeCategory === cat.id 
                    ? "bg-[#061224] border-[#061224] text-white" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col h-full p-2.5"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden rounded-xl shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                  {/* Standardized Age Group Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 text-[#061224] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200/80">
                      {product.ageGroup} Yrs
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading leading-snug">{product.title}</h3>
                  <p className="text-[#F2A900] font-semibold text-xs mb-3 line-clamp-1">{product.description}</p>
                  
                  {/* Feature Checklist */}
                  <div className="mb-4 flex-1">
                    <ul className="space-y-1.5">
                      {product.features?.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600 leading-snug">
                          <CheckCircle className="w-3.5 h-3.5 mr-2 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Row: Price + Brochure Link */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-base font-bold text-slate-900">{product.price}</span>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-[#061224] hover:text-[#F2A900] transition-colors cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
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
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-1">No programs found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

    </div>
  );
}
