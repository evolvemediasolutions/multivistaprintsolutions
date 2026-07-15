import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Database,
  Sparkles,
  Book,
  Compass,
  Building2,
  PenTool,
  ChevronRight,
  Cpu,
  Printer,
  Layers,
  Globe,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Sector {
  index: number;
  id: string;
  name: string;
  tag: string;
  x: number; // orbital coordinates %
  y: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  capabilities: string[];
  image: string;
  visualTheme: string;
}

const sectors: Sector[] = [
  {
    index: 0,
    id: "educational",
    name: "Education",
    tag: "K-12 & Higher Ed",
    x: 50,
    y: 10,
    description: "Manufacturing high-volume textbooks and curriculum materials with consistent quality, durable binding, and reliable delivery schedules.",
    icon: BookOpen,
    accentColor: "text-royal-blue",
    capabilities: ["High-Volume Offset runs", "FSC-Sourced Papers", "Reinforced Softcover Bindings", "State-Aligned Specifications"],
    image: "/Images/MANUFACTURING PATH/EDUCATION NEW.jpg",
    visualTheme: "blueprint-bg"
  },
  {
    index: 1,
    id: "academic",
    name: "STM",
    tag: "Scholarly & Professional",
    x: 77,
    y: 23,
    description: "High-detail print production and precise color matching for technical diagrams. Engineered for exact visual representations in scientific journals and medical texts.",
    icon: Database,
    accentColor: "text-[#0A2342]",
    capabilities: ["Extended Gamut CMYK", "Anatomy Atlas Formats", "Gloss & Matte Coated Stocks", "Coated Paper Calibration"],
    image: "/Images/MANUFACTURING PATH/STM.jpg",
    visualTheme: "elegant-editorial"
  },
  {
    index: 2,
    id: "stm",
    name: "Children's Books",
    tag: "Durability & Safety",
    x: 88,
    y: 50,
    description: "Heavy-grade board books and vibrant children's storybooks. Finished with child-safe, non-toxic soy inks and protective rounded corners for safe handling.",
    icon: Sparkles,
    accentColor: "text-emerald-600",
    capabilities: ["Board Mounting & Glueing", "Die-Cut Board Folds", "Round-Corner Safety Cuts", "Soy-Based Ink Coating"],
    image: "/Images/MANUFACTURING PATH/CHILDREN NEW.jpg",
    visualTheme: "playful-gradient"
  },
  {
    index: 3,
    id: "childrens",
    name: "Trade Books",
    tag: "Premium Finish",
    x: 77,
    y: 77,
    description: "Fiction, non-fiction, biographies, custom portfolios, and general trade literature produced with premium specialty papers and precise binding styles.",
    icon: Book,
    accentColor: "text-brand-blue",
    capabilities: ["Custom Slipcase Sets", "Foil Stamping & Debossing", "Panoramic Lay-Flat Spreads", "Mixed Media Material Wraps"],
    image: "/Images/MANUFACTURING PATH/TRADE NEW.jpg",
    visualTheme: "custom-experimental"
  },
  {
    index: 4,
    id: "custom",
    name: "Travel Books",
    tag: "Durable & Flexible",
    x: 23,
    y: 23,
    description: "Pocket guides, travel memoirs, maps, and tourist references engineered with flexible covers and lightweight, durable stocks for ease of transport.",
    icon: Compass,
    accentColor: "text-purple-600",
    capabilities: ["Lightweight Flexi-Covers", "Water-Resistant Coating", "Fold-out Map Layouts", "Pocket-Sized Impositions"],
    image: "/Images/MANUFACTURING PATH/TRAVEL.jpg",
    visualTheme: "custom-experimental"
  }
];



const zones = {
  prepress: {
    title: "Prepress Excellence",
    subtitle: "Automated Precision & Color Fidelity",
    theme: "Precision begins before printing.",
    image: "/Images/PRODUCTION STAGE/PRE PRESS.jpg",
    description: "Before paper meets ink, our prepress suite ensures absolute layout fidelity, color proofing, and plating accuracy. We combine advanced calibration workflows with computerized Computer-to-Plate (CTP) engines.",
    capabilities: [
      "Color Management (ISO Standards)",
      "Digital Inkjet Contract Proofing",
      "Thermal CTP technology",
      "High-resolution artwork optimization",
      "Imposition & pagination checks",
      "PDF-VT variable print preflighting"
    ],
    stats: [
      { label: "Plate Output Capacity", value: "320+ Plates / Hour" },
      { label: "Color Match Guarantee", value: "Absolute Color Accuracy" }
    ],
    colorClass: "from-blue-500/10 to-sky-500/5 text-royal-blue"
  },
  printing: {
    title: "Precision Printing",
    subtitle: "Offset & Web-Offset Printing Power",
    theme: "Manufacturing at scale.",
    image: "/Images/PRODUCTION STAGE/PRESS.jpg",
    description: "At the heart of our facility are high-speed multi-color offset presses. Optimized for long production runs, our sheet-fed and web-offset systems maintain absolute color consistency and print sharpness sheet after sheet.",
    capabilities: [
      "High-speed multi-color offset printing",
      "Closed-loop spectrophotometer scans",
      "Large-scale educational textbook runs",
      "Short-run digital print production",
      "Consistent ink density monitors",
      "Environmentally friendly soy-based inks"
    ],
    stats: [
      { label: "Max Output Speed", value: "15,000 Sheets / Hour" },
      { label: "Supported Paper Range", value: "40 gsm to 400 gsm" }
    ],
    colorClass: "from-blue-600/10 to-blue-400/5 text-deep-navy"
  },
  binding: {
    title: "Advanced Binding",
    subtitle: "Premium Finishes & Multi-Format Options",
    theme: "Engineering durability.",
    image: "/Images/PRODUCTION STAGE/BINDING.jpg",
    description: "A book's spine is its foundation of durability. Our bindery lines execute high-precision folding, section sewing, thread binding, and thermal gluing, transforming print blocks into premium hardbacks and paperbacks.",
    capabilities: [
      "Automated case-making & case-binding",
      "Section sewing & thread stitching",
      "Perfect binding with EVA adhesives",
      "High-durability PUR glue bindings",
      "Tactile flexi-board bindings",
      "Double-loop corporate wire-o & spiral"
    ],
    stats: [
      { label: "Daily Binding Capacity", value: "50,000+ Books / Day" },
      { label: "Available Bind Formats", value: "7+ Professional Formats" }
    ],
    colorClass: "from-sky-500/10 to-cyan-500/5 text-sky-600"
  }
};

export function Industries() {
  const [activeSection, setActiveSection] = useState("educational");
  const [activeZone, setActiveZone] = useState<"prepress" | "printing" | "binding">("prepress");

  const isJourneyScrollingRef = useRef(false);
  const journeyScrollTimeoutRef = useRef<number | null>(null);

  // Track scroll position to update journey steps
  useEffect(() => {
    const handleScroll = () => {
      if (!isJourneyScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top
        let closestId = "educational";
        let minDistance = Infinity;

        sectors.forEach((sec) => {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - targetOffset);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = sec.id;
            }
          }
        });
        setActiveSection(closestId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);



  const scrollToSection = (sectionId: string) => {
    isJourneyScrollingRef.current = true;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (journeyScrollTimeoutRef.current) {
      window.clearTimeout(journeyScrollTimeoutRef.current);
    }

    journeyScrollTimeoutRef.current = window.setTimeout(() => {
      isJourneyScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className="bg-white relative select-text overflow-x-clip">

      {/* Inline styles for animated flow lines */}
      <style>
        {`
          @keyframes flow-pattern {
            to {
              stroke-dashoffset: -28;
            }
          }
          .animate-flow-line {
            animation: flow-pattern 5s linear infinite;
          }
          @keyframes float-dust {
            0%, 100% { transform: translateY(0px) opacity: 0.2; }
            50% { transform: translateY(-10px) opacity: 0.4; }
          }
          .dust-particle {
            animation: float-dust 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* SECTION 01: PAGE INTRODUCTION (HERO) - Styled like Sustainability Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0A121E] text-white py-24 md:py-32 border-b border-gray-900 overflow-hidden">

        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/HERO SECTIONS/MARKET HERO.jpg')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E] pointer-events-none" />

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.05] blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
            MARKETS WE SERVE
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-heading mt-6 mb-6">
            Printing Expertise Across Every Sector
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Every publishing segment has unique production requirements. Our expertise enables us to deliver tailored manufacturing solutions that meet the quality, durability, and scalability expected by publishers around the world.
          </p>
          <div className="h-[2px] w-32 bg-gradient-to-r from-royal-blue to-sky-400 mx-auto mt-8"></div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Explore Sectors</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 02: INTERACTIVE MARKET JOURNEY (Scroll Showcase) */}
      <section className="relative bg-white py-16 md:py-24">

        {/* Core Layout container: Left Journey Timeline, Right Showcase Cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

            {/* STICKY TIMELINE (Visible on desktop) */}
            <div className="hidden lg:block lg:col-span-3 sticky top-36 select-none pl-4 pr-6">
              {/* Timeline Flow */}
              <div className="relative">
                {/* Vertical Progress Line */}
                <div className="absolute left-[18px] top-[14px] bottom-[14px] w-[2px] pointer-events-none">
                  <div className="absolute inset-0 bg-slate-100 rounded-full" />
                  <div
                    className="absolute top-0 left-0 w-full bg-royal-blue rounded-full transition-all duration-500 ease-out"
                    style={{
                      height: `${(sectors.findIndex(s => s.id === activeSection) / (sectors.length - 1)) * 100}%`
                    }}
                  />
                </div>

                <div className="space-y-6">
                  {sectors.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <div key={sec.id} className="relative flex items-center min-h-[40px]">
                        {/* Timeline dot */}
                        <button
                          type="button"
                          onClick={() => scrollToSection(sec.id)}
                          className={cn(
                            "absolute left-[18px] -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                            isActive
                              ? "border-royal-blue bg-royal-blue scale-110 ring-4 ring-royal-blue/15 shadow-sm"
                              : "border-slate-200 hover:border-slate-400"
                          )}
                          aria-label={`Go to ${sec.name}`}
                        >
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                        </button>

                        {/* Button label */}
                        <button
                          type="button"
                          onClick={() => scrollToSection(sec.id)}
                          className={cn(
                            "w-full text-left ml-9 py-1 text-xs font-semibold tracking-wider uppercase font-heading transition-all duration-300 cursor-pointer outline-none hover:text-royal-blue",
                            isActive ? "text-royal-blue translate-x-1 font-bold" : "text-gray-400 font-normal"
                          )}
                        >
                          {sec.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SHOWCASE CARDS (8 Viewports) */}
            <div className="lg:col-span-9 space-y-32 lg:pb-[20vh]">
              {sectors.map((sec, idx) => {
                const isEven = idx % 2 === 0;
                const isActive = activeSection === sec.id;

                return (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className={cn(
                      "scroll-mt-36 transition-all duration-700 ease-out origin-center",
                      isActive ? "opacity-100 scale-100 filter-none" : "opacity-45 scale-98 blur-[0.5px]"
                    )}
                  >

                    {/* Editorial Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                      {/* Text Column */}
                      <div className={cn(
                        "md:col-span-6 space-y-6 text-left",
                        isEven ? "md:order-1" : "md:order-2"
                      )}>
                        <h2 className={cn(
                          "text-3xl md:text-4xl font-bold tracking-tight font-heading leading-tight transition-colors duration-500",
                          isActive ? "text-deep-navy" : "text-gray-705"
                        )}>
                          {sec.name}
                        </h2>

                        <p className={cn(
                          "text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500",
                          isActive ? "text-gray-650" : "text-gray-400"
                        )}>
                          {sec.description}
                        </p>

                        <div className="border-t border-gray-100 pt-6">
                          <h4 className="text-[10px] font-bold text-deep-navy font-heading uppercase tracking-widest mb-3">
                            Production Specifications
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                            {sec.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-2 text-xs font-sans font-light">
                                <ChevronRight className={cn(
                                  "w-3.5 h-3.5 shrink-0 transition-colors duration-500",
                                  isActive ? "text-royal-blue" : "text-gray-300"
                                )} />
                                <span className={cn(
                                  "transition-colors duration-500",
                                  isActive ? "text-gray-600" : "text-gray-450"
                                )}>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button
                            href="/contact"
                            variant={isActive ? "primary" : "outline"}
                            className={cn(
                              "rounded-full px-5 py-3 text-xs shadow-sm transition-all duration-300",
                              isActive ? "bg-gradient-to-r from-[#0057B8] via-[#007cdb] to-[#0EA5E9] text-white hover:brightness-110" : "border-gray-250 text-gray-450 hover:bg-slate-50"
                            )}
                          >
                            Inquire Sector Capabilities
                          </Button>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className={cn(
                        "md:col-span-6",
                        isEven ? "md:order-2" : "md:order-1"
                      )}>
                        <div className={cn(
                          "relative group rounded-[20px] overflow-hidden shadow-xl aspect-[4/3] border bg-slate-50 transition-all duration-700",
                          isActive ? "border-royal-blue/30 shadow-royal-blue/5 shadow-2xl" : "border-gray-200/60 shadow-md"
                        )}>

                          {/* Image Grid markings */}
                          <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none z-10" />
                          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 pointer-events-none z-10" />
                          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 pointer-events-none z-10" />

                          <img
                            src={sec.image}
                            alt={sec.name}
                            className={cn(
                              "w-full h-full object-cover transition-transform duration-1000 ease-out",
                              isActive ? "scale-105" : "scale-100"
                            )}
                            loading="lazy"
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>      {/* SECTION 03: INTEGRATED PRODUCTION STAGES (Tabs Layout matching Infrastructure) */}
      <section className="relative py-20 md:py-28 bg-[#EEEEEE] overflow-hidden text-left">
        {/* Subtle printing marks/grid paper background (dark lines for light background) */}
        <div className="absolute inset-0 bg-print-grid opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/20 px-2.5 py-1 rounded-full inline-block mb-3">
              FACILITY STAGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy font-heading mb-4">
              Market-Focused Print Solutions
            </h2>
            <p className="text-base text-slate-650 font-sans font-light">
              Click through our main facility stages to explore the technology and machinery configurations supporting our daily output.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { id: "prepress", label: "Prepress", icon: Cpu },
              { id: "printing", label: "Printing", icon: Printer },
              { id: "binding", label: "Binding", icon: Layers }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeZone === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveZone(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-white text-royal-blue border-slate-200 shadow-lg scale-105"
                    : "bg-white/30 text-slate-700 border-white/40 hover:bg-white/50 hover:text-royal-blue"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Capability Showcase Area */}
          <div className="min-h-[440px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
              >

                {/* Left side: content detail */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="text-[10px] font-bold text-royal-blue tracking-wider font-heading uppercase">
                    {zones[activeZone].subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-navy font-heading leading-tight">
                    {zones[activeZone].title}
                  </h3>
                  <p className="text-base text-slate-650 font-sans font-light leading-relaxed">
                    {zones[activeZone].description}
                  </p>

                  <div className="h-[1px] w-full bg-slate-200 my-6" />

                  {/* Feature Lists */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-deep-navy uppercase tracking-wide">Key Technologies & Controls</p>
                    {zones[activeZone].capabilities.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-royal-blue/5 text-royal-blue mt-0.5 shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm text-slate-650 font-sans font-light">{feat}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="pt-6 grid grid-cols-2 gap-4">
                    {zones[activeZone].stats.map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-[#0057B8] via-[#007CDB] to-[#0EA5E9] text-white shadow-md text-left border border-white/10">
                        <p className="text-[10px] text-cyan-200 font-sans uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-lg md:text-xl font-bold text-white font-heading">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: capability showcase image */}
                <div className="lg:col-span-6 relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 border border-dashed border-slate-300/40 rounded-3xl pointer-events-none z-0" />

                  <div className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[1.4/1] w-full bg-slate-100 z-10 border border-white/40">
                    <img
                      src={zones[activeZone].image}
                      alt={zones[activeZone].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* FINAL SECTION: GLOBAL PUBLISHING PARTNERSHIP (Cinematic CTA) */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-deep-navy via-navy-900 to-[#07172B] text-white overflow-hidden">

        {/* Animated abstract stars / dust background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-gold-accent dust-particle" />
          <div className="absolute top-2/3 left-1/5 w-2 h-2 rounded-full bg-royal-blue dust-particle" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white dust-particle" style={{ animationDelay: "-5s" }} />
          <div className="absolute bottom-1/5 right-1/3 w-2.5 h-2.5 rounded-full bg-gold-accent dust-particle" style={{ animationDelay: "-2s" }} />

          {/* Subtle global routing vector graph */}
          <svg className="w-full h-full opacity-[0.06] select-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5%" y1="90%" x2="45%" y2="25%" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="45%" y1="25%" x2="85%" y2="85%" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="45%" cy="25%" r="6" fill="none" stroke="#0057B8" strokeWidth="1" />
            <circle cx="85%" cy="85%" r="4" fill="none" stroke="#0057B8" strokeWidth="1" />
            <circle cx="5%" cy="90%" r="4" fill="none" stroke="#0057B8" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[9px] font-bold text-gold-accent tracking-widest font-heading uppercase bg-gold-accent/10 border border-gold-accent/20 px-3.5 py-1.5 rounded-full inline-block">
              GLOBAL PUBLISHING PARTNERSHIP
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading max-w-4xl mx-auto">
              Your Publishing Vision.<br />Manufactured with Precision.
            </h2>

            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              From educational publishing and academic research to premium trade books and specialized projects, Multivista delivers manufacturing solutions trusted by publishers around the world.
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-royal-blue via-gold-accent to-royal-blue mx-auto"></div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="/contact" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-lg">
                Start a Conversation
              </Button>
              <Button href="/products" variant="outline" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto border-white text-white hover:bg-white/10 transition-colors">
                Explore Our Capabilities
              </Button>
            </div>
          </motion.div>
        </div>

      </section>

    </div>
  );
}
