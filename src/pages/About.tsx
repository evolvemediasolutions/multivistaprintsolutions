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
  Milestone,
  CheckCircle,
  FileText,
  MapPin,
  Award,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Story Evolution
const evolutionJourney = [
  {
    phase: "Small Print Shop",
    year: "1976",
    title: "The Founding Era",
    description: "Multivista began as a localized printing unit in Chennai. Driven by standard letterpress and offset machinery, we committed to precision and reliability from day one.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=800"
  },
  {
    phase: "Expansion",
    year: "1980s",
    title: "Scaling Capabilities",
    description: "During the 1980s, we moved into high-speed printing capabilities. We expanded the factory workspace and brought on expert technicians to support scaling educational runs.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800"
  },
  {
    phase: "Technology Investments",
    year: "1990s",
    title: "Automation & CTP Systems",
    description: "We digitalized prepress operations, investing heavily in state-of-the-art Computer-to-Plate (CTP) engines, automated color scanners, and initial multi-color web offset systems.",
    image: "https://images.unsplash.com/photo-1544382835-06a3656c1756?auto=format&fit=crop&q=80&w=800"
  },
  {
    phase: "Export Growth",
    year: "2000s",
    title: "Global Footprint Integration",
    description: "With certifications and high-volume consistency in hand, Multivista entered global exports. We established dedicated cargo channels to Europe, North America, and Australia.",
    image: "https://images.unsplash.com/photo-1494707924440-294d5d8525da?auto=format&fit=crop&q=80&w=800"
  },
  {
    phase: "Global Manufacturing Partner",
    year: "Present",
    title: "The Modern Ecosystem",
    description: "Today, we operate a 100,000+ sq ft integrated plant shipping over 15 million books annually. We are a trusted partner to tier-1 educational, academic, and trade publishers globally.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
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
    bg: "from-amber-50/50 to-orange-50/50 text-amber-600",
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

// Milestones
const milestones = [
  { year: "1976", label: "Company Founded", desc: "Multivista established in Chennai, starting small-format letterpress runs." },
  { year: "1980s", label: "Manufacturing Expansion", desc: "Acquired large-scale single-color sheetfed offset presses to support textbooks." },
  { year: "1990s", label: "Technology Investments", desc: "Digitalized layout systems and upgraded to multi-color Heidelberg presses." },
  { year: "2000s", label: "Export Growth", desc: "Integrated global quality benchmarks and initiated direct exports to the UK & Europe." },
  { year: "2010s", label: "Integrated Ecosystem", desc: "Built our 100,000+ sq ft consolidated factory and unified bindery setups." },
  { year: "2020s", label: "Sustainability Leadership", desc: "Became a leading FSC-certified provider utilizing solar energy and non-toxic soy inks." },
  { year: "Future", label: "Innovation & Ethics", desc: "Pioneering robotic material logistics and print carbon footprint tracing systems." }
];

// Differentiators
const differentiators = [
  { title: "Nearly five decades of expertise", desc: "Built on half a century of publishing experience, translating to absolute trust.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600" },
  { title: "Integrated production under one roof", desc: "From prepress preflight checks to final dispatch, executed inside our facility.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
  { title: "Export-focused operations", desc: "Specially calibrated supply chains optimized for global shipping ports.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" },
  { title: "World-class quality systems", desc: "Adhering to strict global publisher guidelines and environmental loops.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" }
];

// World Regions
const globalRegions = [
  { name: "North America", x: 22, y: 35, routePath: "M 68,36.7 Q 45,23.3 22,23.3" },
  { name: "Europe & UK", x: 48, y: 30, routePath: "M 68,36.7 Q 58,21.3 48,20" },
  { name: "Middle East", x: 58, y: 46, routePath: "M 68,36.7 Q 63,32 58,30.7" },
  { name: "Africa", x: 50, y: 65, routePath: "M 68,36.7 Q 58,40 50,43.3" },
  { name: "Asia-Pacific (HQ)", x: 68, y: 55, routePath: "" },
  { name: "Australia", x: 88, y: 80, routePath: "M 68,36.7 Q 78,46.7 88,53.3" }
];

export function About() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState<string | null>("Asia-Pacific (HQ)");
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const valuesRef = useRef<HTMLDivElement>(null);
  const milestoneSectionRef = useRef<HTMLDivElement>(null);
  const [milestoneProgress, setMilestoneProgress] = useState(0);
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

  // Scroll event hook for Section 05 Milestones vertical progress track & Section 02 Story scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Milestones progress calculation
      if (milestoneSectionRef.current) {
        const rect = milestoneSectionRef.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        const startOffset = viewportHeight * 0.8;
        const endOffset = viewportHeight * 0.2;
        
        const totalScrollable = elementHeight + startOffset - endOffset;
        const scrolledAmount = startOffset - rect.top;
        const rawProgress = scrolledAmount / totalScrollable;
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        
        setMilestoneProgress(progress);
      }

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

      {/* SECTION 01: ABOUT HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-blueprint-grid bg-white py-32">
        
        {/* Absolute Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Multivista Manufacturing Facility" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-center mx-auto">
            <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block">
              ABOUT MULTIVISTA
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Manufacturing Knowledge.<br />
              Built on Trust. Driven by Responsibility.
            </h1>
            <p className="text-lg md:text-xl text-gray-650 font-sans font-light leading-relaxed max-w-3xl mx-auto">
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
      <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">
        
        {/* Connected vector backdrop */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" xmlns="http://www.w3.org/2000/svg">
          <path d="M 150,150 L 500,200 L 900,100" fill="none" stroke="#0057B8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 500,200 L 900,300 L 1200,100" fill="none" stroke="#D4A437" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              Our Core Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
            
            {/* Panel 1: Purpose */}
            <div className="p-8 rounded-[24px] border border-white/30 bg-white/70 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 relative group">
              <div className="absolute top-4 right-4 text-royal-blue/20 font-heading text-4xl font-bold group-hover:text-royal-blue/30 transition-colors">
                01
              </div>
              <div className="space-y-6">
                <span className="text-[9px] font-bold text-royal-blue font-heading tracking-widest uppercase bg-royal-blue/5 border border-royal-blue/10 px-2 py-0.5 rounded">
                  PURPOSE
                </span>
                <h3 className="text-2xl font-bold text-deep-navy font-heading leading-tight pt-2">
                  Empowering Global Publishing Through Responsible Manufacturing
                </h3>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed pt-8 font-light border-t border-gray-100/60 mt-8">
                Supporting the distribution of critical ideas, curriculum, and stories with high ethics, solar offsets, and paper loops.
              </p>
            </div>

            {/* Panel 2: Vision */}
            <div className="p-8 rounded-[24px] border border-white/30 bg-white/70 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 relative group">
              <div className="absolute top-4 right-4 text-gold-accent/20 font-heading text-4xl font-bold group-hover:text-gold-accent/30 transition-colors">
                02
              </div>
              <div className="space-y-6">
                <span className="text-[9px] font-bold text-gold-accent font-heading tracking-widest uppercase bg-gold-accent/5 border border-gold-accent/10 px-2 py-0.5 rounded">
                  VISION
                </span>
                <h3 className="text-2xl font-bold text-deep-navy font-heading leading-tight pt-2">
                  Preferred Global Manufacturing Partner for Publishers
                </h3>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed pt-8 font-light border-t border-gray-100/60 mt-8">
                Continuously setting global benchmarks for print fidelity, workflow digitalizations, and zero-defect quality parameters.
              </p>
            </div>

            {/* Panel 3: Mission */}
            <div className="p-8 rounded-[24px] border border-white/30 bg-white/70 backdrop-blur-md shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 relative group">
              <div className="absolute top-4 right-4 text-royal-blue/20 font-heading text-4xl font-bold group-hover:text-royal-blue/30 transition-colors">
                03
              </div>
              <div className="space-y-6">
                <span className="text-[9px] font-bold text-royal-blue font-heading tracking-widest uppercase bg-royal-blue/5 border border-royal-blue/10 px-2 py-0.5 rounded">
                  MISSION
                </span>
                <h3 className="text-2xl font-bold text-deep-navy font-heading leading-tight pt-2">
                  Delivering World-Class Book Manufacturing Solutions
                </h3>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed pt-8 font-light border-t border-gray-100/60 mt-8">
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

      {/* SECTION 05: THE MULTIVISTA JOURNEY (Interactive Vertical Scroll-Spy Timeline) */}
      <section className="relative py-24 bg-white select-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
              MILESTONES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 mb-2 leading-tight">
              The Multivista Journey
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
              Since our inception, every milestone has been driven by one principle: continuous improvement.
            </p>
          </div>

          <div className="relative mt-12 max-w-4xl mx-auto" ref={milestoneSectionRef}>
            {/* Continuous track line */}
            <div className="absolute left-[104px] md:left-[152px] top-8 bottom-8 w-[2px] bg-slate-100 pointer-events-none">
              <div 
                className="absolute top-0 left-0 w-full bg-royal-blue rounded-full transition-all duration-300 ease-out origin-top"
                style={{
                  height: `${milestoneProgress * 100}%`
                }}
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-2">
              {milestones.map((m, idx) => {
                const threshold = idx / (milestones.length - 1);
                const isActive = milestoneProgress >= threshold;
                
                return (
                  <div key={m.year} className="flex items-start">
                    {/* Year */}
                    <div className="w-20 md:w-32 text-right pt-3 shrink-0">
                      <span className={cn(
                        "text-base md:text-2xl font-bold font-heading transition-all duration-500 block",
                        isActive ? "text-royal-blue scale-105" : "text-gray-300"
                      )}>
                        {m.year}
                      </span>
                    </div>

                    {/* Dot / Line center marker */}
                    <div className="w-12 md:w-12 flex justify-center shrink-0 relative self-stretch pt-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full border bg-white transition-all duration-500 flex items-center justify-center z-10",
                        isActive 
                          ? "border-royal-blue bg-royal-blue ring-4 ring-royal-blue/15 shadow-sm" 
                          : "border-slate-200"
                      )}>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-grow pb-10">
                      <div className={cn(
                        "p-6 rounded-2xl border transition-all duration-500 text-left bg-white",
                        isActive 
                          ? "border-royal-blue/20 shadow-md shadow-royal-blue/[0.02] bg-gradient-to-br from-white to-royal-blue/[0.01]" 
                          : "border-slate-100 hover:border-slate-200 shadow-sm"
                      )}>
                        <span className={cn(
                          "text-[9px] font-bold tracking-widest font-heading uppercase px-2.5 py-1 rounded-md inline-block mb-3 transition-colors duration-500",
                          isActive 
                            ? "bg-royal-blue/5 text-royal-blue border border-royal-blue/10" 
                            : "bg-slate-50 text-gray-400 border border-slate-100"
                        )}>
                          Milestone {idx + 1}
                        </span>
                        <h4 className={cn(
                          "text-lg md:text-xl font-bold font-heading mb-2 transition-colors duration-500",
                          isActive ? "text-deep-navy" : "text-gray-700"
                        )}>
                          {m.label}
                        </h4>
                        <p className={cn(
                          "text-xs md:text-sm font-sans font-light leading-relaxed transition-colors duration-500",
                          isActive ? "text-gray-650" : "text-gray-400"
                        )}>
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 06: BY THE NUMBERS (Command Dashboard) */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
              BENCHMARKS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              By The Numbers
            </h2>
          </div>

          {/* Command Dashboard structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Stat Block 1: Scale */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white to-slate-50 border border-gray-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-royal-blue/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
              {/* Micro-grid overlay */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                  BENCHMARK 01 // AREA SCALE
                </span>
                <div className="mt-8 mb-4">
                  <div className="text-6xl font-bold font-heading text-deep-navy tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                    100,000<span className="text-royal-blue font-sans">+</span>
                  </div>
                  <h3 className="text-lg font-bold text-deep-navy font-heading mt-1">Sq Ft Integrated Plant</h3>
                </div>
                <p className="text-xs text-gray-500 font-sans leading-relaxed font-light mt-4">
                  Consolidated state-of-the-art print plant situated in Chennai, India. Houses prepress, offset presses, binding lines, and logistics under a single secure roof.
                </p>
              </div>
              {/* Visual layout element: sketch of dimensions */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-400 text-[10px] font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-royal-blue" />
                  <span>LAT: 13.0827° N</span>
                </span>
                <span>LON: 80.2707° E</span>
              </div>
            </div>

            {/* Stat Block 2: Volume */}
            <div className="lg:col-span-7 bg-gradient-to-br from-white to-slate-50 border border-gray-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-royal-blue/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                  BENCHMARK 02 // OUTPUT DENSITY
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-6xl font-bold font-heading text-deep-navy tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                      15M<span className="text-royal-blue font-sans">+</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy font-heading mt-1">Books Manufactured</h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed font-light mt-2">
                      High-speed perfect bindings, mechanical binds, and sewn hardbounds shipped globally to leading educational publishers.
                    </p>
                  </div>
                  {/* Dynamic graph bar indicators */}
                  <div className="flex flex-col justify-end space-y-3 pt-4 md:pt-0">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400">
                        <span>EDUCATIONAL RUNS</span>
                        <span className="text-royal-blue font-sans">65%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-royal-blue rounded-full transition-all duration-500" style={{ width: '65%' }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400">
                        <span>TRADE & NOVELS</span>
                        <span className="text-royal-blue font-sans">20%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-royal-blue rounded-full transition-all duration-500" style={{ width: '20%' }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400">
                        <span>ACADEMIC TEXTS</span>
                        <span className="text-royal-blue font-sans">15%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-royal-blue rounded-full transition-all duration-500" style={{ width: '15%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Block 3: People */}
            <div className="lg:col-span-7 bg-gradient-to-br from-white to-slate-50 border border-gray-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-royal-blue/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                  BENCHMARK 03 // EXPERT STAFF
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-6xl font-bold font-heading text-deep-navy tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                      200<span className="text-royal-blue font-sans">+</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy font-heading mt-1">Print Professionals</h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed font-light mt-2">
                      Skilled preflight technicians, expert press operators, bindery specialists, and certified QA controllers.
                    </p>
                  </div>
                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 content-center">
                    {['Prepress QC', 'Offset Lithography', 'Case Binding', 'Saddle Stitching', 'Color Calibration', 'FSC Logistics'].map(skill => (
                      <span key={skill} className="text-[10px] font-semibold text-gray-650 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200/40">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Block 4: Export Control */}
            <div className="lg:col-span-5 bg-gradient-to-br from-deep-navy to-[#0D253F] border border-navy-800 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px] text-white">
              <div>
                <span className="text-[10px] font-bold text-gold-accent tracking-widest font-heading uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block">
                  BENCHMARK 04 // EXPORT CONTROL
                </span>
                <div className="mt-8 mb-4">
                  <div className="text-5xl font-bold font-heading text-gold-accent tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                    100%
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mt-1">Export Calibration</h3>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed font-light mt-2">
                  Optimized ocean cargo pathways meeting stringent international guidelines and fast port-dispatch clearance workflows.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-gold-accent text-xs font-bold uppercase tracking-wider">
                <span>50+ Years Global Trade</span>
                <ArrowRight className="w-4 h-4 text-gold-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 07: WHAT SETS US APART (Differentiators) */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block">
              DIFFERENTIATORS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 mb-2 leading-tight">
              More Than Manufacturing
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
              Our customers choose Multivista because we deliver more than books—we deliver confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {differentiators.map((diff) => (
              <div 
                key={diff.title}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-150 bg-slate-50 min-h-[320px] flex flex-col justify-end"
              >
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent z-10" />
                  <img src={diff.image} alt={diff.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                {/* Content details overlay */}
                <div className="relative z-20 p-8 text-white text-left space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans font-light leading-relaxed max-w-sm">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
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
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                  alt="Managing Director" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-deep-navy/95 border border-white/10 p-5 rounded-2xl text-left text-white shadow-xl z-20">
                  <h4 className="text-base font-bold text-white font-heading">
                    Mr. Sunil Abraham
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
                    Sunil Abraham
                  </h4>
                  <p className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">
                    Managing Director
                  </p>
                </div>
                
                {/* Simulated luxury signature script */}
                <div className="font-serif italic text-2xl font-semibold text-royal-blue opacity-85 select-none pr-8">
                  Sunil Abraham
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

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
                <div className="grid grid-cols-2 gap-2">
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

            {/* Right Column: World Map SVG */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-[1.5/1]">
                
                {/* SVG Map backdrop */}
                <svg viewBox="0 0 100 66.7" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <linearGradient id="map-continent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0057B8" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.02" />
                    </linearGradient>
                    <pattern id="dot-grid" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="0.4" fill="#CBD5E1" fillOpacity="0.6" />
                    </pattern>
                  </defs>
                  
                  {/* Backdrop patterns */}
                  <rect width="100" height="66.7" fill="url(#dot-grid)" />

                  {/* Continent paths */}
                  <g fill="url(#map-continent-gradient)" stroke="#E2E8F0" strokeWidth="0.25" strokeLinejoin="round" opacity="0.85">
                    {/* North America */}
                    <path d="M 5,18 C 10,12 18,8 25,10 C 28,11 31,14 34,14 C 36,18 36,22 34,25 C 32,27 33,31 31,34 C 28,38 25,41 23,45 C 22,43 21,38 20,36 C 18,34 16,33 14,34 C 11,35 9,30 8,26 C 7,22 4,20 5,18 Z" />
                    {/* Greenland */}
                    <path d="M 33,6 C 36,5 40,6 40,9 C 39,12 34,15 31,13 C 30,11 31,8 33,6 Z" />
                    {/* South America */}
                    <path d="M 23,45 C 26,48 29,50 30,53 C 30,58 27,62 24,65 C 23,65 22,60 21,56 C 20,52 19,48 23,45 Z" />
                    {/* Africa */}
                    <path d="M 44,35 C 38,39 36,46 42,52 C 45,56 47,60 49,63 C 50,63 51,58 53,54 C 55,48 54,44 52,42 C 50,41 49,40 44,35 Z" />
                    {/* Eurasia */}
                    <path d="M 40,26 C 42,18 48,12 55,14 C 65,12 80,10 92,14 C 95,18 97,25 94,32 C 92,36 88,40 84,43 C 82,45 80,48 76,52 C 73,50 70,48 68,44 C 64,43 60,40 56,41 C 52,40 46,34 40,26 Z" />
                    {/* Australia */}
                    <path d="M 80,52 C 84,50 88,52 90,54 C 90,58 86,62 82,62 C 79,62 77,57 80,52 Z" />
                    
                    {/* Islands */}
                    {/* Madagascar */}
                    <circle cx="56" cy="58" r="0.75" />
                    {/* Great Britain */}
                    <circle cx="39" cy="18" r="0.75" />
                    {/* Ireland */}
                    <circle cx="37" cy="19" r="0.5" />
                    {/* Japan */}
                    <path d="M 94,24 C 95,26 95,29 93,31" fill="none" stroke="url(#map-continent-gradient)" strokeWidth="0.5" />
                  </g>

                  {/* Curving routing lines from Chennai to target */}
                  {globalRegions.map((reg) => {
                    if (!reg.routePath || activeRegion !== reg.name) return null;
                    return (
                      <path
                        key={reg.name}
                        d={reg.routePath}
                        fill="none"
                        stroke="#0057B8"
                        strokeWidth="0.5"
                        strokeDasharray="2 1"
                        className="animate-[flow-pattern_6s_linear_infinite]"
                      />
                    );
                  })}
                </svg>

                {/* Chennai India Headquarters (HQ) point */}
                <div 
                  style={{ left: "68%", top: "55%" }} 
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-royal-blue flex items-center justify-center animate-glow">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="mt-1 text-[7px] font-bold text-deep-navy tracking-widest font-heading bg-white border border-royal-blue/20 px-1 py-0.5 rounded shadow-sm">
                    HQ HUB
                  </span>
                </div>

                {/* Global Region Points */}
                {globalRegions.map((reg) => {
                  if (reg.name === "Asia-Pacific (HQ)") return null;
                  const isActive = activeRegion === reg.name;
                  return (
                    <button
                      key={reg.name}
                      type="button"
                      style={{ left: `${reg.x}%`, top: `${reg.y}%` }}
                      onClick={() => setActiveRegion(reg.name)}
                      className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 z-10 w-4.5 h-4.5 rounded-full border bg-white flex items-center justify-center shadow-md cursor-pointer transition-all duration-300",
                        isActive 
                          ? "border-royal-blue ring-4 ring-royal-blue/15 bg-royal-blue scale-110" 
                          : "border-gray-250 hover:border-gray-450"
                      )}
                      aria-label={reg.name}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                  );
                })}

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
              <Button href="/contact" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-lg hover:bg-gold-accent hover:text-navy-900 transition-colors">
                Partner With Multivista
              </Button>
            </div>
          </motion.div>
        </div>

      </section>

    </div>
  );
}
