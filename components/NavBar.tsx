"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import clsx from "clsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Show/hide navbar on scroll direction + glass effect trigger
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    // Hide when scrolling down fast, show when scrolling up
    if (latest > prev && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/products" },
    { name: "Careers", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      animate={{
        y: hidden ? -100 : 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_20px_rgba(6,18,36,0.08)]"
          : "py-4 bg-transparent border-b border-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex items-center justify-between transition-all duration-500",
          scrolled ? "px-6 md:px-10 max-w-7xl" : "px-4 md:px-6 container"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <motion.div
            animate={{ scale: scrolled ? 0.88 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src="/images/iinspark-logo.png"
              alt="IINSPARK Logo"
              className="h-8 md:h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </motion.div>
          <motion.span
            animate={{
              fontSize: scrolled ? "1.15rem" : "1.25rem",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            className="font-heading font-semibold text-brand-navy tracking-tight"
          >
            IINSPARK
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group",
                pathname === link.href
                  ? "text-brand-navy font-semibold"
                  : "text-slate-600 hover:text-brand-navy"
              )}
            >
              {/* Hover background pill */}
              <span className="absolute inset-0 rounded-full bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative">{link.name}</span>

              {/* Active underline indicator */}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-brand-blue rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.div
            animate={{ scale: scrolled ? 0.93 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-brand-navy rounded-full hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-navy/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy overflow-hidden"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Enquire Now</span>
              <ChevronRight className="relative ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/60 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-brand-navy/5 text-brand-navy font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-3 pt-3 border-t border-slate-100"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-brand-navy rounded-xl hover:bg-brand-blue transition-colors"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
