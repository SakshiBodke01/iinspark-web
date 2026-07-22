"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Download, CheckCircle } from "lucide-react";
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
    <div className="min-h-screen bg-slate-50 dot-grid pb-20">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-20 pb-28 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 dot-grid-light opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-[1.05]">
              Our <span className="text-brand-light">Programs & Kits</span>
            </h1>
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Explore our extensive range of hands-on learning experiences, anatomical models, and interactive educational tools designed for every age group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-12 border border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex-1 w-full md:w-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search programs, kits, models..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id 
                    ? "bg-brand-navy text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:border-brand-blue/40 hover:shadow-[0_8px_40px_rgba(242,169,0,0.18)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full p-2"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.ageGroup} Yrs
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-4 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{product.title}</h3>
                  <p className="text-brand-blue font-medium text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-6 flex-1">
                    <ul className="space-y-2">
                      {product.features?.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-slate-900">{product.price}</span>
                    <button className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors">
                      <Download className="w-4 h-4" />
                      Brochure
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-400 mb-2">No programs found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}
