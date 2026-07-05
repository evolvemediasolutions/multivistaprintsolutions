import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Star,
  Leaf,
  Cpu,
  Handshake,
  CheckCircle,
  FileText,
  MapPin,
  Award,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/ui/CountUp";
import { FoundationPrinciples } from "@/components/layout/FoundationPrinciples";

// Story Evolution
const evolutionJourney = [
  {
    phase: "Small Print Shop",
    year: "1976",
    title: "The Founding Era",
    description: "Multivista began as a localized printing unit in Chennai. Driven by standard letterpress and offset machinery, we committed to precision and reliability from day one.",
    image: "/Images/story_1976.png"
  },
  {
    phase: "Expansion",
    year: "1980s",
    title: "Scaling Capabilities",
    description: "During the 1980s, we moved into high-speed printing capabilities. We expanded the factory workspace and brought on expert technicians to support scaling educational runs.",
    image: "/Images/story_1980s.png"
  },
  {
    phase: "Technology Investments",
    year: "1990s",
    title: "Automation & CTP Systems",
    description: "We digitalized prepress operations, investing heavily in state-of-the-art Computer-to-Plate (CTP) engines, automated color scanners, and initial multi-color web offset systems.",
    image: "/Images/story_1990s.png"
  },
  {
    phase: "Export Growth",
    year: "2000s",
    title: "Global Footprint Integration",
    description: "With certifications and high-volume consistency in hand, Multivista entered global exports. We established dedicated cargo channels to Europe, North America, and Australia.",
    image: "/Images/story_2000s.png"
  },
  {
    phase: "Global Manufacturing Partner",
    year: "Present",
    title: "The Modern Ecosystem",
    description: "Today, we operate a 100,000+ sq ft integrated plant shipping over 15 million books annually. We are a trusted partner to tier-1 educational, academic, and trade publishers globally.",
    image: "/Images/story_present.png"
  }
];

// Values
const values = [
  {
    title: "Integrity",
    visuals: ["Trust", "Transparency", "Partnership"],
    desc: "Maintaining transparency across our entire supply chain. Our partnerships are built on a solid foundation of honest communication and dependable execution.",
    icon: ShieldCheck,
    bg: "from-blue-50/50 to-indigo-50/50 text-blue-600",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Excellence",
    visuals: ["Precision", "Quality", "Craftsmanship"],
    desc: "Engineering quality standards on every single sheet. We ensure clean folding grids, robust thermal bind backbones, and zero-defect packaging checks.",
    icon: Star,
    bg: "from-blue-50/50 to-sky-50/50 text-royal-blue",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sustainability",
    visuals: ["Responsible manufacturing", "Environmental stewardship"],
    desc: "Pioneering eco-friendly print manufacturing. We utilize vegetable soy inks, water recycling setups, and 100% FSC-certified ethical paper stocks.",
    icon: Leaf,
    bg: "from-emerald-50/50 to-teal-50/50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Innovation",
    visuals: ["Technology", "Automation", "Future readiness"],
    desc: "Constantly upgrading printing automation. Our facility leverages high-speed offset machinery and computerized quality scan modules.",
    icon: Cpu,
    bg: "from-purple-50/50 to-fuchsia-50/50 text-purple-600",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Partnership",
    visuals: ["Publisher relationships", "Long-term collaboration"],
    desc: "Growing side-by-side with global publishing houses. Over 80% of our clients have partnered with Multivista for more than a decade.",
    icon: Handshake,
    bg: "from-teal-50/50 to-cyan-50/50 text-teal-600",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
  }
];




// World Regions with paths aligned to the 99x50 dotted map
const globalRegions = [
  { name: "North America", routePaths: ["M 73.74,52 Q 49,30 24.24,34"] },
  { name: "Europe & UK", routePaths: ["M 73.74,52 Q 60,30 49.49,24"] },
  { name: "Middle East", routePaths: ["M 73.74,52 Q 70,46 66.67,44"] },
  { name: "Africa", routePaths: ["M 73.74,52 Q 68,64 58.59,76"] },
  { name: "Asia-Pacific (HQ)", routePaths: ["M 73.74,52 Q 77,56 80.81,60", "M 73.74,52 Q 78,58 81.82,64"] },
  { name: "Australia", routePaths: ["M 73.74,52 Q 84,67 94.95,82"] }
];

// All 22 pins matching the user's screenshot
const mapPins = [
  { name: "Canada", x: 27.27, y: 30, region: "North America" },
  { name: "US Midwest", x: 24.24, y: 34, region: "North America" },
  { name: "UK", x: 49.49, y: 24, region: "Europe & UK" },
  { name: "Northern Europe", x: 55.56, y: 16, region: "Europe & UK" },
  { name: "Western Europe", x: 50.51, y: 28, region: "Europe & UK" },
  { name: "Spain/Portugal", x: 48.48, y: 34, region: "Europe & UK" },
  { name: "Italy/Southern Europe", x: 52.53, y: 30, region: "Europe & UK" },
  { name: "Egypt/Cairo", x: 59.6, y: 42, region: "Middle East" },
  { name: "Persian Gulf", x: 66.67, y: 44, region: "Middle East" },
  { name: "Saudi Arabia", x: 61.62, y: 48, region: "Middle East" },
  { name: "Ghana/Accra", x: 49.49, y: 56, region: "Africa" },
  { name: "Nigeria/Lagos", x: 50.51, y: 56, region: "Africa" },
  { name: "Nigeria/Abuja", x: 52.53, y: 54, region: "Africa" },
  { name: "Cameroon", x: 52.53, y: 58, region: "Africa" },
  { name: "Nairobi", x: 60.61, y: 60, region: "Africa" },
  { name: "South Africa (Johannesburg)", x: 58.59, y: 76, region: "Africa" },
  { name: "South Africa (Cape Town)", x: 55.56, y: 82, region: "Africa" },
  { name: "South Africa (Durban)", x: 59.6, y: 78, region: "Africa" },
  { name: "South Africa (Port Elizabeth)", x: 57.58, y: 82, region: "Africa" },
  { name: "India (Chennai)", x: 73.74, y: 52, region: "Asia-Pacific (HQ)", isHQ: true },
  { name: "Singapore", x: 80.81, y: 60, region: "Asia-Pacific (HQ)" },
  { name: "Kuala Lumpur", x: 79.8, y: 58, region: "Asia-Pacific (HQ)" },
  { name: "Jakarta", x: 81.82, y: 64, region: "Asia-Pacific (HQ)" },
  { name: "Sydney", x: 94.95, y: 82, region: "Australia" }
];


export function About() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState<string | null>("Asia-Pacific (HQ)");
  const [scrollProgress, setScrollProgress] = useState(0);

  const valuesRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handleValuesScroll = () => {
    if (valuesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = valuesRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      }
    }
  };

  // Scroll event hook for Section 02 Story scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Dynamic Active Story Era Scroll Spy
      if (!isScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top of viewport
        let closestIdx = 0;
        let minDistance = Infinity;

        evolutionJourney.forEach((_, idx) => {
          const el = document.getElementById(`story-era-${idx}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - targetOffset);
            if (distance < minDistance) {
              minDistance = distance;
              closestIdx = idx;
            }
          }
        });
        setActiveStoryIndex(closestIdx);
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

  const scrollToEra = (idx: number) => {
    isScrollingRef.current = true;
    setActiveStoryIndex(idx); // Update active state immediately for visual response

    const el = document.getElementById(`story-era-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); // Reset after smooth scroll finishes
  };

  const scrollValues = (dir: "left" | "right") => {
    if (valuesRef.current) {
      const { scrollLeft, clientWidth } = valuesRef.current;
      const scrollTo = dir === "left" ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      valuesRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };


  return (
    <div className="bg-white relative select-text overflow-x-clip">

      {/* Inline styles for custom animations */}
      <style>
        {`
          @keyframes draw-line {
            to {
              stroke-dashoffset: 0;
            }
          }
          .animate-draw-svg {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-line 3.5s ease-in-out forwards;
          }
          @keyframes glow-pulsate {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(14, 165, 233, 0.4)); }
            50% { filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.8)); }
          }
          .animate-glow {
            animation: glow-pulsate 3s infinite;
          }
          @keyframes float-badge {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .floating-plaque {
            animation: float-badge 6s ease-in-out infinite;
          }
          @keyframes flow-pattern {
            to {
              stroke-dashoffset: -20;
            }
          }
        `}
      </style>

      {/* SECTION 01: ABOUT HERO - Styled like Sustainability Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0A121E] text-white py-24 md:py-32 border-b border-gray-900 overflow-hidden">

        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/about_hero_bg.png')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E] pointer-events-none" />

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.05] blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-center mx-auto">
            <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
              ABOUT MULTIVISTA
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Manufacturing Knowledge.<br />
              Built on Trust. Driven by Responsibility.
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto pt-2">
              For nearly five decades, Multivista has partnered with publishers across the world to manufacture books that educate, inspire and endure.
            </p>
            <div className="pt-4 flex justify-center">
              <Button href="#story" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider shadow-md inline-flex items-center gap-2 group">
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Explore Our Legacy</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 02: THE MULTIVISTA STORY (Split Screen Journey) */}
      <section id="story" className="relative py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Column: Outer Grid Item (stretches to fill grid height track) */}
            <div className="lg:col-span-5">
              {/* Sticky Timeline container (slides inside the column track) */}
              <div className="lg:sticky lg:top-36 space-y-8">
                <div className="space-y-4">
                  <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                    OUR LEGACY
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading">
                    The Multivista Story
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
                    What began in 1976 as a small printing operation has evolved into one of India's leading integrated book manufacturing companies. Scroll through our visual evolution eras.
                  </p>
                </div>

                {/* Interactive evolution selector blocks */}
                <div className="relative mt-8">
                  {/* Vertical Track Line Container */}
                  <div className="absolute left-[18px] top-[36px] bottom-[36px] w-[2px] pointer-events-none">
                    {/* Background Track */}
                    <div className="absolute inset-0 bg-slate-100 rounded-full" />

                    {/* Active Progress */}
                    <div
                      className="absolute top-0 left-0 w-full bg-royal-blue rounded-full transition-all duration-500 ease-out"
                      style={{
                        height: `${(activeStoryIndex / (evolutionJourney.length - 1)) * 100}%`
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    {evolutionJourney.map((item, idx) => {
                      const isActive = activeStoryIndex === idx;
                      return (
                        <div key={item.phase} className="relative flex items-center min-h-[72px]">
                          {/* Timeline Dot */}
                          <button
                            type="button"
                            onClick={() => scrollToEra(idx)}
                            className={cn(
                              "absolute left-[18px] -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 bg-white cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                              isActive
                                ? "border-royal-blue bg-royal-blue scale-110 ring-4 ring-royal-blue/15 shadow-sm"
                                : "border-slate-200 hover:border-slate-400"
                            )}
                            aria-label={`Go to ${item.phase}`}
                          >
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                          </button>

                          {/* Button card */}
                          <button
                            type="button"
                            onClick={() => scrollToEra(idx)}
                            className={cn(
                              "w-full text-left ml-9 p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer",
                              isActive
                                ? "bg-royal-blue/[0.02] border-royal-blue/30 shadow-md shadow-royal-blue/5"
                                : "bg-white border-gray-100 hover:border-gray-200"
                            )}
                          >
                            <div className="space-y-1">
                              <span className={cn(
                                "text-[9px] font-bold font-heading tracking-widest uppercase transition-colors duration-300",
                                isActive ? "text-royal-blue" : "text-gray-400"
                              )}>
                                {item.year} — {item.phase}
                              </span>
                              <h4 className={cn(
                                "text-sm font-bold font-heading transition-colors duration-300",
                                isActive ? "text-deep-navy" : "text-gray-500"
                              )}>
                                {item.title}
                              </h4>
                            </div>
                            <ChevronRight className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              isActive ? "text-royal-blue translate-x-1" : "text-gray-300 group-hover:translate-x-0.5"
                            )} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scrolling cards one by one (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-24 lg:space-y-36">
              {evolutionJourney.map((item, idx) => {
                const isActive = activeStoryIndex === idx;
                return (
                  <div
                    key={item.phase}
                    id={`story-era-${idx}`}
                    className={cn(
                      "scroll-mt-36 transition-all duration-700 ease-out origin-center",
                      isActive ? "opacity-100 scale-100 filter-none" : "opacity-40 scale-95 blur-[0.5px]"
                    )}
                  >
                    <div className={cn(
                      "relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border bg-slate-50 mb-6 transition-all duration-700",
                      isActive ? "border-royal-blue/30 shadow-royal-blue/5 shadow-2xl" : "border-gray-200/60 shadow-md"
                    )}>
                      <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none z-10" />
                      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 pointer-events-none z-10" />
                      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 pointer-events-none z-10" />

                      <img
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-1000 ease-out",
                          isActive ? "scale-105" : "scale-100"
                        )}
                      />
                    </div>

                    <div className="space-y-3 px-4 transition-all duration-700">
                      <span className={cn(
                        "text-xs font-bold tracking-widest font-heading uppercase transition-colors duration-500",
                        isActive ? "text-gold-accent" : "text-gray-400"
                      )}>
                        Era {idx + 1} — {item.year}
                      </span>
                      <h3 className={cn(
                        "text-xl md:text-2xl font-bold font-heading transition-colors duration-500",
                        isActive ? "text-deep-navy" : "text-gray-700"
                      )}>
                        {item.title}
                      </h3>
                      <p className={cn(
                        "text-sm font-sans font-light leading-relaxed transition-colors duration-500",
                        isActive ? "text-gray-650" : "text-gray-400"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 03: PURPOSE • VISION • MISSION (Interconnected Glass Pillars) */}
      <section className="relative py-28 bg-slate-950 overflow-hidden border-t border-slate-900 select-text">
        {/* Parallax Background container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80"
            style={{ backgroundImage: `url('/Images/OCP1.jpg')` }}
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        </div>

        {/* Subtle printing marks/grid paper background (inverted white lines for vibrant blue background) */}
        <div className="absolute inset-0 bg-print-grid opacity-20 invert pointer-events-none z-1"></div>

        {/* Connected vector backdrop */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M 150,150 L 500,200 L 900,100" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 500,200 L 900,300 L 1200,100" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4 leading-tight">
              Our Core Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">

            {/* Panel 1: Purpose */}
            <div className="p-8 rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:translate-y-[-4px] transition-all duration-300 relative group text-left">
              <div className="absolute top-6 right-6 text-white/10 font-heading text-5xl font-bold tracking-tight transition-all duration-300 group-hover:text-sky-500/30 group-hover:scale-105 select-none">
                01
              </div>
              <div className="space-y-6">
                <span className="inline-block text-[10px] font-bold text-sky-400 font-heading tracking-widest uppercase bg-sky-950/80 border border-sky-800/50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                  PURPOSE
                </span>
                <h3 className="text-2xl font-bold text-white font-heading leading-tight pt-2">
                  Empowering Global Publishing Through Responsible Manufacturing
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-200 font-sans leading-relaxed pt-8 font-light border-t border-slate-800/60 mt-8">
                Supporting the distribution of critical ideas, curriculum, and stories with high ethics, solar offsets, and paper loops.
              </p>
            </div>

            {/* Panel 2: Vision */}
            <div className="p-8 rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:translate-y-[-4px] transition-all duration-300 relative group text-left">
              <div className="absolute top-6 right-6 text-white/10 font-heading text-5xl font-bold tracking-tight transition-all duration-300 group-hover:text-sky-500/30 group-hover:scale-105 select-none">
                02
              </div>
              <div className="space-y-6">
                <span className="inline-block text-[10px] font-bold text-amber-400 font-heading tracking-widest uppercase bg-amber-950/80 border border-amber-800/50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                  VISION
                </span>
                <h3 className="text-2xl font-bold text-white font-heading leading-tight pt-2">
                  Preferred Global Manufacturing Partner for Publishers
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-200 font-sans leading-relaxed pt-8 font-light border-t border-slate-800/60 mt-8">
                Continuously setting global benchmarks for print fidelity, workflow digitalizations, and zero-defect quality parameters.
              </p>
            </div>

            {/* Panel 3: Mission */}
            <div className="p-8 rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:translate-y-[-4px] transition-all duration-300 relative group text-left">
              <div className="absolute top-6 right-6 text-white/10 font-heading text-5xl font-bold tracking-tight transition-all duration-300 group-hover:text-sky-500/30 group-hover:scale-105 select-none">
                03
              </div>
              <div className="space-y-6">
                <span className="inline-block text-[10px] font-bold text-sky-400 font-heading tracking-widest uppercase bg-sky-950/80 border border-sky-800/50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                  MISSION
                </span>
                <h3 className="text-2xl font-bold text-white font-heading leading-tight pt-2">
                  Delivering World-Class Book Manufacturing Solutions
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-200 font-sans leading-relaxed pt-8 font-light border-t border-slate-800/60 mt-8">
                Providing consistent color density, premium cover styling, dependable logistics, and environmentally friendly outputs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 04: OUR VALUES (Horizontal Scroll Reveal) */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Swipeable Values cards track */}
          <div
            ref={valuesRef}
            onScroll={handleValuesScroll}
            className="flex gap-6 items-start overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8 px-2 select-text"
          >
            {/* FIRST CARD: Intro Card (Solid blue gradient) */}
            <div className="w-[24rem] shrink-0 snap-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] text-white flex flex-col justify-between aspect-[4/5]">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-white/80 tracking-widest font-heading uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block">
                  CORE BELIEFS
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading leading-tight pt-4">
                  Principles Behind Every Print
                </h2>
              </div>
              <p className="text-xs md:text-sm text-white/90 font-sans font-light leading-relaxed">
                Our beliefs define our actions. Every book we print, bind, and ship is a reflection of our dedication to quality, ethics, and partnership.
              </p>
            </div>

            {/* VALUE CARDS */}
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="w-[18rem] md:w-[20rem] shrink-0 snap-center rounded-3xl overflow-hidden relative aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/50 to-transparent z-10" />
                  </div>

                  {/* Overlaid details at the bottom */}
                  <div className="relative z-20 h-full p-6 flex flex-col justify-end text-left space-y-3 text-white">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md text-white mb-2">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white">
                      {v.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-250 font-sans font-light leading-relaxed">
                      {v.desc}
                    </p>

                    <div className="border-t border-white/10 pt-4 flex flex-wrap gap-1.5">
                      {v.visuals.map((tag) => (
                        <span key={tag} className="text-[9px] font-bold font-sans tracking-wide text-white/80 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM ACTION ROW: Progress bar + Scroll arrows */}
          <div className="mt-8 flex items-center justify-between gap-8">
            {/* Progress bar */}
            <div className="flex-grow max-w-md h-[3px] bg-slate-100 rounded-full relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-royal-blue rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${(scrollProgress * 100).toFixed(1)}%`
                }}
              />
            </div>

            {/* Scroll navigation arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollValues("left")}
                className="w-10 h-10 rounded-lg bg-royal-blue hover:bg-royal-blue/90 text-white transition-colors flex items-center justify-center cursor-pointer shadow-sm outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollValues("right")}
                className="w-10 h-10 rounded-lg bg-royal-blue hover:bg-royal-blue/90 text-white transition-colors flex items-center justify-center cursor-pointer shadow-sm outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 06: BY THE NUMBERS */}
      <section className="relative py-28 bg-slate-950 overflow-hidden select-text border-y border-slate-900">
        {/* Parallax Background container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80"
            style={{ backgroundImage: `url('/Images/BTN1.jpg')` }}
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        </div>

        {/* Subtle printing marks/grid paper background (inverted white lines for dark theme) */}
        <div className="absolute inset-0 bg-print-grid opacity-20 invert pointer-events-none z-1"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md mb-3">
              BENCHMARKS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4 mb-4 leading-tight">
              By The Numbers
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-sans font-light leading-relaxed">
              Our operational capabilities measured by manufacturing scale and printing volume.
            </p>
          </div>

          {/* Grid Layout matching Homepage design Stats section (2-column custom split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

            {/* Card 1: Scale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px] text-left lg:col-span-5"
            >
              <div>
                <span className="px-2.5 py-0.5 border border-white/10 text-sky-400 text-[9px] font-bold uppercase tracking-widest rounded-full bg-sky-950/80 w-fit block mb-3">
                  Benchmark 01 // Area Scale
                </span>
                <div className="text-5xl font-bold tracking-tight text-white font-heading mb-1.5 mt-4">
                  <CountUp to={100000} suffix="+" />
                </div>
                <h3 className="text-base font-bold text-white mb-1 font-heading leading-snug">
                  Sq Ft Integrated Plant
                </h3>
                <p className="text-slate-300 font-sans text-xs leading-relaxed font-light mb-4">
                  Consolidated state-of-the-art print plant situated in Chennai, India. Houses prepress, offset presses, binding lines, and logistics under a single secure roof.
                </p>

                {/* Coordinates */}
                <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono pt-4 border-t border-slate-800/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LAT: 13.0827° N</span>
                  </span>
                  <span>LON: 80.2707° E</span>
                </div>
              </div>

              {/* Bottom Visual Element */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 h-[160px] rounded-b-[20px] overflow-hidden">
                <img
                  src="/Images/about_scale.png"
                  alt="Area Scale"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Card 2: Volume */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-lg hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px] text-left lg:col-span-7"
            >
              <div>
                <span className="px-2.5 py-0.5 border border-white/10 text-sky-400 text-[9px] font-bold uppercase tracking-widest rounded-full bg-sky-950/80 w-fit block mb-3">
                  Benchmark 02 // Output Density
                </span>

                {/* Responsive internal split grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-4">
                  {/* Left part: Text details */}
                  <div className="md:col-span-7">
                    <div className="text-5xl font-bold tracking-tight text-white font-heading mb-1.5">
                      <CountUp to={15} suffix="M+" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 font-heading leading-snug">
                      Books Manufactured
                    </h3>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed font-light">
                      High-speed perfect bindings, mechanical binds, and sewn hardbounds shipped globally to leading educational publishers.
                    </p>
                  </div>

                  {/* Right part: Progress bars */}
                  <div className="md:col-span-5 flex flex-col space-y-4 pt-2 md:pt-0">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>EDUCATIONAL RUNS</span>
                        <span className="text-sky-400 font-sans">65%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: "65%" }} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>TRADE & NOVELS</span>
                        <span className="text-sky-400 font-sans">20%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: "20%" }} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>ACADEMIC TEXTS</span>
                        <span className="text-sky-400 font-sans">15%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: "15%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Visual Element */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 h-[160px] rounded-b-[20px] overflow-hidden">
                <img
                  src="/Images/about_volume.png"
                  alt="Output Density"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* SECTION 08: LEADERSHIP MESSAGE (MD Letter) */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: MD Environmental Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-gray-200/50 bg-slate-50">
                <img
                  src="/Images/Karthick_Narayan.jpeg"
                  alt="Managing Director"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-deep-navy/95 border border-white/10 p-5 rounded-2xl text-left text-white shadow-xl z-20">
                  <h4 className="text-base font-bold text-white font-heading">
                    Mr. Karthik Narayan
                  </h4>
                  <p className="text-xs text-gold-accent font-sans mt-0.5">
                    Managing Director — Multivista Printers
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Letter content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
                LEADERSHIP CORE
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-deep-navy font-heading leading-tight">
                A Message from Our Leadership
              </h3>

              <div className="space-y-4 font-serif text-sm md:text-base text-gray-600 leading-relaxed font-light italic">
                <p>
                  "At Multivista, we have always believed that printing is more than a mechanical process—it is the material preservation of human knowledge. For nearly five decades, our focus has remained anchored on three principles: precision, ethics, and partnership."
                </p>
                <p>
                  "We have continuously updated our press capabilities, integrating solar-powered loops and certified paper channels, to guarantee that our manufacturing solutions help protect the environment for future readers."
                </p>
                <p>
                  "Our partnerships with global publishing groups are built on transparency and long-term commitment. We thank you for trusting Multivista to print the future."
                </p>
              </div>

              {/* Signature Graphic block */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-deep-navy font-heading">
                    Karthik Narayan
                  </h4>
                  <p className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">
                    Managing Director
                  </p>
                </div>

                {/* Simulated luxury signature script */}
                <div className="font-serif italic text-2xl font-semibold text-royal-blue opacity-85 select-none pr-8">
                  Karthik Narayan
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION - FOUNDATION PRINCIPLES */}
      <FoundationPrinciples />

      {/* SECTION 09: GLOBAL MANUFACTURING PARTNER (Interactive Map) */}
      <section className="relative py-24 bg-white select-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Descriptions */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase">
                GLOBAL REACH
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
                A Global Manufacturing Partner
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
                Publishing knows no boundaries. Neither do we. Our work begins in our manufacturing facility in Chennai but reaches readers around the world.
              </p>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-[10px] font-bold text-deep-navy font-heading uppercase tracking-widest mb-3">
                  Export Regions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {globalRegions.map((region) => (
                    <button
                      key={region.name}
                      type="button"
                      onClick={() => setActiveRegion(region.name)}
                      className={cn(
                        "text-left text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer",
                        activeRegion === region.name
                          ? "bg-royal-blue/5 border-royal-blue text-royal-blue"
                          : "bg-white border-gray-150 text-gray-650 hover:border-gray-300"
                      )}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: World Map SVG backdrop + interactive overlay */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div
                className="relative w-full max-w-[500px] select-none"
                style={{ aspectRatio: "99/50" }}
              >
                {/* Dotted Map Backdrop Image */}
                <img
                  src="/Images/world-dotted-bg.svg"
                  alt="Dotted World Map"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-80"
                />


                {/* Render All 22 Pins */}
                {mapPins.map((pin) => {
                  const isPinInActiveRegion = activeRegion === pin.region;
                  const isHighlighted = isPinInActiveRegion || (pin.isHQ && activeRegion === "Asia-Pacific (HQ)");

                  return (
                    <button
                      key={pin.name}
                      type="button"
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      onClick={() => setActiveRegion(pin.region)}
                      className={cn(
                        "group absolute -translate-x-1/2 -translate-y-1/2 z-20 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center",
                        pin.isHQ
                          ? "w-4 h-4 bg-royal-blue shadow-lg border border-white z-30 animate-glow"
                          : isHighlighted
                            ? "w-3 h-3 bg-royal-blue border border-white ring-4 ring-royal-blue/15 scale-110 z-25"
                            : "w-2 h-2 bg-royal-blue/70 hover:bg-royal-blue hover:scale-110"
                      )}
                      aria-label={pin.name}
                    >
                      {/* Inner white dot for highlighted or HQ pins */}
                      {(pin.isHQ || isHighlighted) && (
                        <div className="w-1 h-1 rounded-full bg-white" />
                      )}

                      {/* Tooltip on hover */}
                      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block whitespace-nowrap text-[8px] font-bold text-white bg-deep-navy px-1.5 py-0.5 rounded shadow-md z-30">
                        {pin.name} {pin.isHQ && "(HQ)"}
                      </span>
                    </button>
                  );
                })}

                {/* Headquarters label overlay */}
                <div
                  style={{ left: "73.74%", top: "52%" }}
                  className="absolute -translate-x-1/2 translate-y-3.5 z-25 pointer-events-none"
                >
                  <span className="text-[7px] font-bold text-deep-navy tracking-widest font-heading bg-white/95 border border-royal-blue/20 px-1 py-0.5 rounded shadow-sm">
                    HQ HUB
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* SECTION 11: FINAL BRAND STATEMENT (Cinematic CTA) */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-deep-navy via-navy-900 to-[#07172B] text-white overflow-hidden">

        {/* Abstract page-turning visual vector lines backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold-accent dust-particle" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-royal-blue dust-particle" style={{ animationDelay: "-3s" }} />

          <svg className="w-full h-full opacity-[0.06] select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,150 C 150,50 300,250 450,150 C 600,50 750,250 900,150" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 150,180 C 300,80 450,280 600,180 C 750,80 900,280 1050,180" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
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
              BUILDING THE FUTURE
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading max-w-4xl mx-auto animate-pulse">
              Building the Future of Responsible Manufacturing
            </h2>

            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              As publishing continues to evolve, so do we. By combining manufacturing excellence with ethical practices, sustainability leadership and continuous innovation, Multivista is helping publishers create books that not only meet the highest standards of quality but also contribute to a more responsible and sustainable future.
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-royal-blue via-gold-accent to-royal-blue mx-auto"></div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="/contact" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-lg">
                Partner With Multivista
              </Button>
            </div>
          </motion.div>
        </div>

      </section>

    </div>
  );
}
