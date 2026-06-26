import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Book,
  FileText,
  Layers,
  Sparkles,
  Grid,
  Maximize
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface NavigationItem {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const navigation: NavigationItem[] = [
  {
    name: "Capabilities",
    href: "/products",
    children: [
      { name: "Hardcover Books", href: "/products#hardcover", description: "Timeless craftsmanship. Built to last.", icon: BookOpen },
      { name: "Softcover Books", href: "/products#softcover", description: "High-volume production excellence.", icon: FileText },
      { name: "Lay-Flat Books", href: "/products#layflat", description: "Uninterrupted visual storytelling.", icon: Maximize },
    ]
  },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Markets", href: "/markets" },
  { name: "About Us", href: "/about" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = location.pathname === "/sustainability" || location.pathname === "/infrastructure" || location.pathname === "/markets" || location.pathname === "/about" || location.pathname === "/products" || location.pathname === "/careers" || location.pathname === "/contact" || location.pathname === "/";

  const getLinkClass = (href: string, hasChildren = false) => {
    const isActive = location.pathname === href || (hasChildren && location.pathname.startsWith(href));
    return cn(
      "text-sm font-semibold tracking-wide transition-colors duration-200",
      isScrolled || !isDarkHero
        ? isActive ? "text-royal-blue" : "text-navy-900 hover:text-brand-blue"
        : isActive ? "text-gold-accent" : "text-white/90 hover:text-white"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const navClass = cn(
    "fixed z-50 transition-all duration-300 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-7xl rounded-2xl lg:rounded-full",
    isScrolled || !isDarkHero
      ? "top-4 bg-white/80 backdrop-blur-md shadow-lg py-3 border border-gray-200/50"
      : "top-4 lg:top-6 bg-white/5 backdrop-blur-sm py-4 border border-white/10"
  );

  const textClass = cn(
    "text-sm font-semibold tracking-wide transition-colors duration-200",
    isScrolled || !isDarkHero ? "text-navy-900 hover:text-brand-blue" : "text-white/90 hover:text-white"
  );

  const logoClass = cn(
    "flex items-center gap-2 font-heading font-bold text-xl transition-colors duration-200",
    isScrolled || !isDarkHero ? "text-navy-900" : "text-white"
  );

  return (
    <>
      <header className={navClass}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className={logoClass}>
              <img src="/Logo/Logo.png" alt="Multivista Printers Logo" className={cn("h-8 w-auto object-contain transition-all duration-200", isScrolled || !isDarkHero ? "brightness-100" : "brightness-0 invert")} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", isScrolled || !isDarkHero ? "text-navy-900" : "text-white")}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        getLinkClass(item.href, true),
                        "flex items-center gap-1 cursor-pointer"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isProductsDropdownOpen && "rotate-180")} />
                    </Link>

                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={cn(
                            "absolute top-full left-0 mt-2 w-[45rem] rounded-2xl p-4 shadow-2xl border backdrop-blur-md transition-all duration-300 grid grid-cols-1 gap-2 z-50",
                            isScrolled || !isDarkHero
                              ? "bg-white/95 border-gray-200/50 text-navy-900"
                              : "bg-navy-900/95 border-white/10 text-white"
                          )}
                        >
                          <div className="grid grid-cols-3 gap-2">
                            {item.children.map((child, idx) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                  className={cn(
                                    "flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group",
                                    isScrolled || !isDarkHero
                                      ? "hover:bg-brand-blue/5 text-navy-800"
                                      : "hover:bg-white/5 text-white/90"
                                  )}
                                >
                                  <div className={cn(
                                    "p-2 rounded-lg transition-colors duration-200 shrink-0",
                                    isScrolled || !isDarkHero
                                      ? "bg-brand-blue/5 text-royal-blue group-hover:bg-brand-blue/10"
                                      : "bg-white/5 text-gold-accent group-hover:bg-white/10"
                                  )}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="space-y-0.5 text-left">
                                    <p className="text-xs font-bold font-heading tracking-wide">
                                      {child.name}
                                    </p>
                                    <p className={cn(
                                      "text-[10px] leading-normal font-sans font-light",
                                      isScrolled || !isDarkHero ? "text-gray-500" : "text-gray-400"
                                    )}>
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link key={item.name} to={item.href} className={getLinkClass(item.href)}>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href="/contact" variant={isScrolled || !isDarkHero ? "primary" : "secondary"} className="rounded-full">
              Get In Touch
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden flex"
          >
            <div className="fixed inset-0 bg-navy-900/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-navy-900 shadow-2xl pb-6 border-l border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-white">
                  <img src="/Logo/Logo.png" alt="Multivista Printers Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 px-6 flow-root flex-1">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href || (item.children && location.pathname.startsWith(item.href));
                      if (item.children) {
                        return (
                          <div key={item.name} className="space-y-1">
                            <button
                              type="button"
                              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                              className={cn(
                                "-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-colors",
                                isActive
                                  ? "text-gold-accent bg-white/5"
                                  : "text-gray-200 hover:text-white hover:bg-white/5"
                              )}
                            >
                              <span>{item.name}</span>
                              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 text-gray-400", mobileProductsOpen && "rotate-180")} />
                            </button>
                            <AnimatePresence initial={false}>
                              {mobileProductsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="overflow-hidden pl-4 border-l border-white/10 space-y-1 mt-1 mb-2"
                                >
                                  <Link
                                    to={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileProductsOpen(false);
                                    }}
                                    className={cn(
                                      "block rounded-lg py-2 px-3 text-sm font-semibold transition-colors",
                                      location.pathname === item.href
                                        ? "text-gold-accent"
                                        : "text-brand-blue hover:text-white hover:bg-white/5"
                                    )}
                                  >
                                    Capabilities Overview
                                  </Link>
                                  {item.children.map((child) => {
                                    const isChildActive = location.pathname + location.hash === child.href;
                                    return (
                                      <Link
                                        key={child.name}
                                        to={child.href}
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobileProductsOpen(false);
                                        }}
                                        className={cn(
                                          "block rounded-lg py-2 px-3 text-sm transition-colors",
                                          isChildActive
                                            ? "text-gold-accent bg-white/5"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                        )}
                                      >
                                        {child.name}
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
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-3.5 text-base font-semibold leading-7 transition-colors",
                            isActive
                              ? "text-gold-accent bg-white/5"
                              : "text-gray-200 hover:text-white hover:bg-white/5"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="py-6">
                    <Button href="/contact" variant="secondary" className="w-full rounded-full">Get In Touch</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
