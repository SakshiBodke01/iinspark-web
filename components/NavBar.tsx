"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Cpu,
  Sparkles,
  Rocket,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);

    if (latest > prev && latest > 220 && !mobileMenuOpen && !programsDropdownOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setProgramsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Programs",
      href: "/products",
      hasDropdown: true,
    },
    { name: "Careers", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const programItems = [
    {
      title: "STEM & Robotics",
      description: "Hands-on robotics kits, sensors & microcontrollers",
      href: "/products",
      icon: Cpu,
      accentColor: "bg-slate-100 text-[#061224]",
    },
    {
      title: "AI & Innovation Labs",
      description: "Cutting-edge curriculum in AI, IoT & machine learning",
      href: "/products",
      icon: Sparkles,
      accentColor: "bg-slate-100 text-[#061224]",
    },
    {
      title: "Summer Bootcamps",
      description: "Exciting seasonal programs for young innovators",
      href: "/summer-camp",
      icon: Rocket,
      accentColor: "bg-slate-100 text-[#061224]",
    },
    {
      title: "School Workshops",
      description: "Tailored STEM integration for academic institutions",
      href: "/about",
      icon: GraduationCap,
      accentColor: "bg-slate-100 text-[#061224]",
    },
  ];

  return (
    <motion.header
      role="banner"
      animate={{
        y: hidden ? -100 : 0,
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pointer-events-auto"
    >
      {/* Floating Glassmorphic Pill Container */}
      <div
        className={clsx(
          "max-w-6xl mx-auto rounded-full border transition-all duration-300 ease-in-out px-5 sm:px-8 py-2.5 flex items-center justify-between",
          "bg-white/80 dark:bg-[#061224]/80 backdrop-blur-xl border-white/40 shadow-lg shadow-black/5",
          scrolled ? "bg-white/95 dark:bg-[#061224]/95 shadow-xl shadow-black/10 border-slate-200/80" : ""
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#061224] rounded-full transition-transform duration-200 hover:scale-[1.02]"
          aria-label="IINSPARK Homepage"
        >
          <img
            src="/images/iinspark-logo.png"
            alt="IINSPARK Logo"
            className="h-7 sm:h-8 w-auto object-contain shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#061224] dark:text-white leading-none">
              IINSPARK
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-slate-400 dark:text-slate-400 uppercase mt-0.5 leading-none">
              Innovate &amp; Inspire
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Sliding Pill Highlight */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredLink === link.name;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative flex items-center"
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    setProgramsDropdownOpen(true);
                  }}
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setProgramsDropdownOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "relative z-10 px-3 py-1.5 font-semibold text-xs tracking-wider uppercase transition-colors duration-200 flex items-center gap-1 cursor-pointer",
                      isActive || programsDropdownOpen
                        ? "text-[#061224] dark:text-white font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:text-[#061224]"
                    )}
                  >
                    <span>{link.name}</span>
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setProgramsDropdownOpen(!programsDropdownOpen);
                    }}
                    aria-expanded={programsDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Toggle Programs Dropdown"
                    className="relative z-10 p-1 text-slate-400 hover:text-[#061224] transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      className={clsx(
                        "w-3.5 h-3.5 transition-transform duration-200 ease-in-out",
                        programsDropdownOpen ? "rotate-180 text-[#F2A900]" : "text-slate-400"
                      )}
                    />
                  </button>

                  {/* Sliding Pill Indicator */}
                  {(isHovered || isActive) && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/10 z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Desktop Mega-Menu Dropdown Panel */}
                  <AnimatePresence>
                    {programsDropdownOpen && (
                      <motion.div
                        id="programs-dropdown"
                        role="menu"
                        aria-label="Programs submenu"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 sm:w-[380px] p-2.5 rounded-2xl bg-white/95 dark:bg-[#061224]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl z-50"
                      >
                        <div className="grid grid-cols-1 gap-1" role="none">
                          {programItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                role="menuitem"
                                onClick={() => setProgramsDropdownOpen(false)}
                                className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-200"
                              >
                                <div
                                  className={clsx(
                                    "p-2 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105",
                                    item.accentColor
                                  )}
                                >
                                  <IconComponent className="w-4 h-4 text-[#061224]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-[#F2A900] transition-colors duration-200">
                                      {item.title}
                                    </span>
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F2A900] transition-colors duration-200" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-1.5 pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between px-3 py-1">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Custom STEM integration?</span>
                          <Link
                            href="/contact"
                            role="menuitem"
                            onClick={() => setProgramsDropdownOpen(false)}
                            className="text-xs font-semibold text-[#061224] dark:text-[#F2A900] hover:text-[#F2A900] flex items-center gap-1 transition-colors duration-200"
                          >
                            Get in touch
                            <ArrowRight className="w-3 h-3 text-[#F2A900]" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div
                key={link.name}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "relative z-10 px-3 py-1.5 font-semibold text-xs tracking-wider uppercase transition-colors duration-200 flex items-center justify-center cursor-pointer",
                    isActive
                      ? "text-[#061224] dark:text-white font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#061224]"
                  )}
                >
                  <span>{link.name}</span>
                </Link>

                {/* Sliding Pill Indicator */}
                {(isHovered || isActive) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-slate-100 dark:bg-white/10 z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Shimmer CTA Button with Glowing Border & Hover Scale */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#061224] via-[#0b1e3b] to-[#061224] text-white text-xs font-semibold tracking-wide border border-white/20 shadow-md shadow-black/10 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden shimmer-btn"
          >
            <span className="relative z-10">Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F2A900] relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Responsive Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          className="md:hidden p-2 rounded-full text-[#061224] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden pointer-events-auto"
            />

            <motion.div
              id="mobile-navigation-drawer"
              role="dialog"
              aria-label="Mobile Navigation Menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl bg-white/95 dark:bg-[#061224]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl z-50 md:hidden overflow-hidden pointer-events-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={isActive ? "page" : undefined}
                            className={clsx(
                              "flex-1 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-colors duration-200",
                              isActive
                                ? "bg-slate-100 dark:bg-white/10 text-[#061224] dark:text-white font-bold"
                                : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                            )}
                          >
                            <span>{link.name}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                            aria-expanded={mobileProgramsOpen}
                            aria-label="Toggle Programs Submenu"
                            className="p-2.5 rounded-2xl text-slate-500 hover:text-[#061224] cursor-pointer"
                          >
                            <ChevronDown
                              className={clsx(
                                "w-4 h-4 transition-transform duration-200",
                                mobileProgramsOpen ? "rotate-180 text-[#F2A900]" : "text-slate-400"
                              )}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileProgramsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-1"
                            >
                              {programItems.map((item) => {
                                const IconComp = item.icon;
                                return (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                  >
                                    <div className="p-1.5 rounded-lg shrink-0 bg-slate-100 dark:bg-white/10 text-[#061224] dark:text-white">
                                      <IconComp className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                        {item.title}
                                      </span>
                                      <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                        {item.description}
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-slate-100 dark:bg-white/10 text-[#061224] dark:text-white font-bold"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                      )}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-slate-100 dark:border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#061224] via-[#0b1e3b] to-[#061224] text-white text-sm font-semibold shadow-md"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 text-[#F2A900]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
