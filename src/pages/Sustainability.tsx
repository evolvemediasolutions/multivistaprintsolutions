import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  Recycle, 
  Droplet, 
  TreePine, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Award, 
  Compass, 
  Heart,
  Globe,
  Sparkles,
  Zap,
  TrendingDown,
  Layers,
  Star,
  ArrowUpRight,
  X,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Timeline data
const milestones = [
  { 
    year: "2019–20", 
    title: "First Carbon Footprint Analysis", 
    desc: "Established our initial baseline measurement, tracking Scope 1 & 2 emissions across our printing facilities to begin our scientific decarbonization pathway.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    year: "2020–21", 
    title: "Environmental Reporting", 
    desc: "Integrated clean material waste metrics into our corporate logs, initiating transparent auditing of paper trim outputs and starting 100% recycling loops.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    year: "2021–22", 
    title: "SDGs + Sustainability Report", 
    desc: "Aligned our operations with the UN Sustainable Development Goals, launching our first comprehensive ESG policy detailing water recycling and soy ink transitions.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    year: "2022", 
    title: "EcoVadis + SBTi Alignment", 
    desc: "Submitted our carbon reduction goals to the Science Based Targets initiative (SBTi) and underwent our first formal EcoVadis sustainability rating audits.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    year: "2023", 
    title: "UN Global Compact & Green Printer", 
    desc: "Became a signatory to the UN Global Compact, and recognized as the Green Printer of the Year for outstanding solar offset integrations.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    year: "2024", 
    title: "Green Printer of the Year", 
    desc: "Secured back-to-back industry honors as Green Printer of the Year, completing our phase-1 transition to solar energy and introducing compostable cargo wraps.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200" 
  }
];

// Pillars data
const pillars = [
  {
    num: "01",
    title: "Climate Action",
    desc: "Measuring our footprint to hit near-zero targets. We track Scopes 1, 2, and 3 meticulously, actively reducing emissions through logistics optimizations and solar energy infrastructure.",
    tags: ["SBTi Decarbonization", "Net-Zero Goals", "Carbon Audits"],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000",
    icon: Globe
  },
  {
    num: "02",
    title: "Responsible Procurement",
    desc: "Guaranteeing 100% ethical wood fibers. Over 90% of our paper stock is FSC® and PEFC certified, sourced from responsibly managed forests that preserve biodiversity and support local communities.",
    tags: ["FSC® & PEFC Paper", "Ethical Forestry", "Traceable Supply Chain"],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000",
    icon: TreePine
  },
  {
    num: "03",
    title: "Sustainable Manufacturing",
    desc: "Running production loops on clean energy. Our Chennai manufacturing facility leverages high-yield rooftop solar arrays, computer-calibrated press layouts to reduce paper scrap, and zero-process plates.",
    tags: ["Solar Power Grid", "LED Plant Lighting", "VOC-Free Soy Inks"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    icon: Zap
  },
  {
    num: "04",
    title: "Circular Resource Management",
    desc: "Eliminating waste before it starts. We enforce a strict zero-waste-to-landfill mandate, recovering 100% of printing aluminum plates, paper trimmings, and recycling water through closed chiller loops.",
    tags: ["Closed-Loop Water", "100% Paper Recycling", "No Plastic Zones"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
    icon: Recycle
  },
  {
    num: "05",
    title: "People & Communities",
    desc: "Building an inclusive and ethical workplace. Certified as a Great Place to Work®, we invest in safety protocols, continuous skills training, and sponsor environmental learning loops in neighboring schools.",
    tags: ["Great Place to Work®", "Safe Environments", "Community Outreach"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
    icon: Heart
  }
];

// Initiatives
const initiatives = [
  { 
    num: "01",
    title: "FSC® & PEFC Certified Paper", 
    desc: "Over 90% of book runs printed on ethically traceable forest products.", 
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
    icon: TreePine
  },
  { 
    num: "02",
    title: "Compostable Packaging", 
    desc: "Replacing shrink wraps with 100% bio-degradable organic wrappers.", 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    icon: Recycle
  },
  { 
    num: "03",
    title: "Water-Based Varnish", 
    desc: "Eco-friendly, chemical-free coatings that ensure easy paper decomposition.", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    icon: Droplet
  },
  { 
    num: "04",
    title: "Green Factory Initiative", 
    desc: "Chennai facility utilizing low-energy thermal chiller arrays and solar rooftops.", 
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    icon: Zap
  },
  { 
    num: "05",
    title: "No Plastic Zone", 
    desc: "Eliminating single-use plastics across our entire administrative and press floors.", 
    image: "https://images.unsplash.com/photo-1526951914841-389f4142f360?auto=format&fit=crop&q=80&w=800",
    icon: ShieldCheck
  },
  { 
    num: "06",
    title: "Process-Less Plates", 
    desc: "Saving thousands of liters of chemical developer fluids in prepress setups.", 
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    icon: Layers
  },
  { 
    num: "07",
    title: "Sustainable Procurement", 
    desc: "Enforcing rigorous ethical standard checks on 100% of supply chain vendors.", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    icon: Heart
  },
  { 
    num: "08",
    title: "Water Chiller Plant", 
    desc: "Closed-loop industrial refrigeration saving 80% water on press cooling.", 
    image: "https://images.unsplash.com/photo-1473643080040-61799b2e043b?auto=format&fit=crop&q=80&w=800",
    icon: Droplet
  }
];

// Emissions data
const emissionsData = {
  scope1: {
    title: "Scope 1 Emissions",
    desc: "Direct emissions from sources owned or controlled by Multivista, primarily diesel generators for plant backup and company delivery vehicles.",
    reduction: "40% reduction",
    chart: [
      { year: "2021", value: 420, label: "420 tCO2e" },
      { year: "2022", value: 380, label: "380 tCO2e" },
      { year: "2023", value: 310, label: "310 tCO2e" },
      { year: "2024", value: 250, label: "250 tCO2e" }
    ]
  },
  scope2: {
    title: "Scope 2 Emissions",
    desc: "Indirect emissions from purchased electricity. The massive drop is driven by the integration of our 450kW plant rooftop solar panels since late 2022.",
    reduction: "71% reduction",
    chart: [
      { year: "2021", value: 1850, label: "1,850 tCO2e" },
      { year: "2022", value: 1420, label: "1,420 tCO2e" },
      { year: "2023", value: 980, label: "980 tCO2e" },
      { year: "2024", value: 520, label: "520 tCO2e" }
    ]
  },
  scope3: {
    title: "Scope 3 Emissions",
    desc: "Value chain emissions including raw paper materials manufacturing, ocean cargo shipments, and outbound publisher distribution logistics.",
    reduction: "26% reduction",
    chart: [
      { year: "2021", value: 8400, label: "8,400 tCO2e" },
      { year: "2022", value: 7900, label: "7,900 tCO2e" },
      { year: "2023", value: 7100, label: "7,100 tCO2e" },
      { year: "2024", value: 6200, label: "6,200 tCO2e" }
    ]
  }
};

// Certifications
const certifications = [
  { title: "SBTi Validated", org: "Science Based Targets", desc: "Recognized 1.5°C reduction alignment pathway.", icon: Award },
  { title: "UN Global Compact", org: "United Nations", desc: "Signatory to universal sustainable principles.", icon: ShieldCheck },
  { title: "EcoVadis Silver/Gold", org: "EcoVadis Audits", desc: "Ranked in the top tier of printing companies.", icon: Compass },
  { title: "Green Printer 2023", org: "National Print Awards", desc: "Honored for outstanding green energy swaps.", icon: Sparkles },
  { title: "Green Printer 2024", org: "National Print Awards", desc: "Back-to-back award-winner for plant efficiency.", icon: Star },
  { title: "Great Place to Work®", org: "GPTW® Institute", desc: "Certified for inclusive culture and safety.", icon: Heart },
  { title: "FSC® Certified", org: "Forest Stewardship Council", desc: "Ethically managed wood fiber chain validation.", icon: TreePine },
  { title: "PEFC Certified", org: "Endorsement of Forest Certification", desc: "Guaranteed sustainable paper pathways.", icon: Leaf }
];

// Reports
const reports = [
  { title: "Sustainability Report 2024", type: "Annual ESG Report", size: "4.2 MB", desc: "Full performance disclosures on our carbon offset loops, water metrics, and social audits." },
  { title: "Carbon Footprint Report 2023", type: "Scope 1, 2 & 3 Audit", size: "2.8 MB", desc: "Detailed breakdown of greenhouse gas metrics validated against carbon offsets." },
  { title: "ESG & Compliance Policy", type: "Corporate Policy", size: "1.1 MB", desc: "Our environmental guidelines, ethical standards, and code of conduct for suppliers." },
  { title: "FSC® & PEFC Certifications", type: "Certificate Document", size: "0.9 MB", desc: "Official forest product tracking certifications and registration keys." }
];

const footprintReports = [
  {
    title: "Carbon Footprint Report FY 2025-26",
    subtitle: "CFP Report FY 2025-26",
    description: "Detailed carbon footprint calculations and disclosures for the fiscal year 2025-2026, mapping emissions offsets and solar energy yields.",
    pdfPath: "/Carbon Footprints/CFP Report FY 2025-26.pdf",
    size: "1.2 MB",
    icon: Leaf
  },
  {
    title: "GHG Emissions Report FY 2024-25",
    subtitle: "GHG Emissions FY 2024-25",
    description: "Comprehensive Scope 1, 2, and 3 greenhouse gas auditing and validation data, demonstrating significant reduction steps.",
    pdfPath: "/Carbon Footprints/Multivista GHG emissions report FY 2024-2025.pdf",
    size: "1.3 MB",
    icon: Globe
  },
  {
    title: "GHG Emissions Report FY 2021-22",
    subtitle: "GHG Emissions FY 2021-22",
    description: "Decarbonization tracking and carbon accounting validation data for the fiscal year 2021-22.",
    pdfPath: "/Carbon Footprints/GHG Report 2021_22.pdf",
    size: "1.1 MB",
    icon: Recycle
  },
  {
    title: "CFP Assessment Report 2020-21",
    subtitle: "CFP Assessment 2020-21",
    description: "Initial environmental audits, mapping emission points and outlining the foundational steps of our net-zero pathway.",
    pdfPath: "/Carbon Footprints/CFP ASSESSMENT REPORT_MultiVista_2020_21.pdf",
    size: "1.4 MB",
    icon: Award
  }
];

interface InitiativeCardProps {
  key?: React.Key;
  num: string;
  title: string;
  desc: string;
  image: string;
  icon: any;
}

function InitiativeCard({ num, title, desc, image, icon: Icon }: InitiativeCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left relative">
      {/* Image / Fallback block */}
      <div className="h-56 w-full bg-slate-50 relative overflow-hidden">
        {!imageError ? (
          <img 
            src={image} 
            alt={title} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-sky-500/10 to-blue-500/5 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blueprint-grid opacity-5" />
            <Leaf className="w-8 h-8 text-sky-500/40 animate-pulse" />
          </div>
        )}
        {/* Number Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl px-3 py-1 shadow-sm flex items-center gap-1.5 z-20">
          <span className="text-[10px] font-bold text-sky-600 font-mono tracking-wider">
            {num}
          </span>
        </div>
        
        {/* Thin top gradient for subtle shadow */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest uppercase font-heading">
              INITIATIVE
            </span>
            <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100/50 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
              <Icon className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-deep-navy font-heading leading-snug group-hover:text-sky-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed font-light">
            {desc}
          </p>
        </div>
        
        {/* Subtle decorative line */}
        <div className="h-[2px] w-8 bg-sky-500/20 group-hover:w-16 group-hover:bg-sky-500 transition-all duration-300" />
      </div>
    </div>
  );
}

export function Sustainability() {
  const [activeScope, setActiveScope] = useState<'scope1' | 'scope2' | 'scope3'>('scope1');
  const [activeReport, setActiveReport] = useState<any>(null);
  
  // Parallax Hero state
  const [heroScroll, setHeroScroll] = useState(0);
  
  // Timeline horizontal scroll state
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const [journeyProgress, setJourneyProgress] = useState(0);

  // Pillars Scroll Spy states & refs
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const isPillarScrollingRef = useRef(false);
  const pillarScrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Hero Parallax
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        setHeroScroll(scrolled);
      }

      // Timeline Horizontal Scroll
      if (journeySectionRef.current) {
        const rect = journeySectionRef.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        const start = -rect.top;
        const total = elementHeight - viewportHeight;
        
        if (total > 0) {
          const progress = Math.min(Math.max(start / total, 0), 1);
          setJourneyProgress(progress);
        }
      }

      // Dynamic Active Pillar Scroll Spy
      if (!isPillarScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top of viewport
        let closestIdx = 0;
        let minDistance = Infinity;

        pillars.forEach((_, idx) => {
          const el = document.getElementById(`pillar-section-${idx}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - targetOffset);
            if (distance < minDistance) {
              minDistance = distance;
              closestIdx = idx;
            }
          }
        });
        setActivePillarIndex(closestIdx);
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

  const scrollToPillar = (idx: number) => {
    isPillarScrollingRef.current = true;
    setActivePillarIndex(idx);

    const el = document.getElementById(`pillar-section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (pillarScrollTimeoutRef.current) {
      window.clearTimeout(pillarScrollTimeoutRef.current);
    }

    pillarScrollTimeoutRef.current = window.setTimeout(() => {
      isPillarScrollingRef.current = false;
    }, 800);
  };

  const activeTimelineIndex = Math.min(
    Math.floor(journeyProgress * milestones.length),
    milestones.length - 1
  );

  return (
    <div className="bg-white relative select-text overflow-x-clip">
      
      {/* Inline styles for custom animations */}
      <style>
        {`
          @keyframes draw-line {
            to { stroke-dashoffset: 0; }
          }
          .animate-draw-svg {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-line 3.5s ease-in-out forwards;
          }
          @keyframes glow-pulsate {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8)); }
          }
          .animate-glow-green {
            animation: glow-pulsate 3s infinite;
          }
          @keyframes float-slower {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(3deg); }
          }
          .floating-leaf {
            animation: float-slower 8s ease-in-out infinite;
          }
          @keyframes slide-infinite {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-flow-dash {
            stroke-dasharray: 6 3;
            animation: slide-infinite 2s linear infinite;
          }
        `}
      </style>

      {/* SECTION 01: SUSTAINABILITY HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A121E] text-white">
        {/* Layer 1: Forest Background Parallax */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${heroScroll * 0.4}px) scale(1.05)`,
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2000')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E]" />

        {/* Floating environmental leaf outlines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
          <g className="floating-leaf text-sky-500/15" transform="translate(150, 150)">
            <path d="M0,0 Q30,-20 60,0 T120,0 Q90,30 60,30 T0,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </g>
          <g className="floating-leaf text-sky-500/10" transform="translate(1200, 350) scale(0.8)" style={{ animationDelay: "-3s" }}>
            <path d="M0,0 Q30,-20 60,0 T120,0 Q90,30 60,30 T0,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Hero content */}
        <div className="relative z-30 max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
            RESPONSIBILITY & PROGRESS
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight font-heading leading-tight max-w-5xl mx-auto text-white">
            Manufacturing a Better Future,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">One Book at a Time</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            At Multivista, sustainability is more than a responsibility; it is a business philosophy that shapes every decision we make.
          </p>
          <div className="pt-6 flex justify-center">
            <Button href="#philosophy" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-600 border-none shadow-md inline-flex items-center gap-2 group">
              <span>Explore Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[8px] font-bold tracking-widest uppercase text-gray-400">SCROLL DOWN</span>
          <div className="w-1.5 h-6 bg-white/20 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2.5 bg-sky-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 02: OUR SUSTAINABILITY PHILOSOPHY */}
      <section id="philosophy" className="relative py-28 md:py-36 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Headline & editorial typography */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-3.5 py-1.5 rounded-full inline-block">
                PHILOSOPHY
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
                Progress with Purpose
              </h2>
              <p className="text-lg text-gray-650 font-sans font-light leading-relaxed">
                Our sustainability journey is guided by a simple belief: manufacturing excellence and environmental stewardship must go hand in hand.
              </p>
              <div className="h-[2px] w-16 bg-sky-500" />
            </div>

            {/* Right: Environmental portrait overlapping the grid */}
            <div className="lg:col-span-7 relative">
              {/* Outer decoration border */}
              <div className="absolute -inset-4 border border-dashed border-slate-200 rounded-3xl pointer-events-none z-0" />
              
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[1.5/1] bg-slate-50 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="Responsible forestry paper production sourcing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 02.5: CARBON FOOTPRINT REPORTS */}
      <section id="carbon-footprints" className="relative py-24 bg-[#F8FAFC] border-t border-b border-slate-100 font-sans scroll-mt-24">
        <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block mb-4">
              CARBON AUDITS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mt-4 mb-4 leading-tight font-heading">
              Carbon Footprint Disclosures
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed max-w-xl mx-auto">
              Access and preview our certified greenhouse gas accounting sheets and environmental assessment reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {footprintReports.map((report) => {
              const Icon = report.icon;
              return (
                <motion.div 
                  key={report.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 text-left relative group min-h-[300px]"
                >
                  <div className="space-y-4">
                    {/* Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest font-heading block">
                      {report.subtitle}
                    </span>

                    <h3 className="text-base font-bold text-deep-navy font-heading leading-tight group-hover:text-sky-600 transition-colors duration-300">
                      {report.title}
                    </h3>

                    <p className="text-xs text-gray-450 font-sans leading-relaxed font-light">
                      {report.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col gap-3 mt-6">
                    <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 font-mono">
                      <span>PDF — {report.size}</span>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setActiveReport(report)}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-slate-100 text-slate-655 font-medium text-xs bg-slate-50 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 group/btn mt-1 cursor-pointer"
                    >
                      <span>View Report</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: SUSTAINABILITY AT A GLANCE */}
      <section className="relative py-28 text-white overflow-hidden bg-[#070E17]">
        {/* Background Image with Aerial forestry */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1600')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070E17] via-transparent to-[#070E17] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full inline-block">
              IMPACT WALL
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4 leading-tight">
              Sustainability at a Glance
            </h2>
          </div>

          {/* Glassmorphism statistics items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "SBTi", label: "Validated Target Pathway", desc: "First Indian Printer to align and receive validation for a 1.5°C decarbonization target." },
              { val: "UN Global Compact", label: "Global Signatory Member", desc: "Active member committing to universal principles on climate and human standards." },
              { val: "90%+", label: "FSC® & PEFC Usage", desc: "Ethical paper inputs from responsibly managed forestry loops." },
              { val: "EcoVadis", label: "Rated Sustainability", desc: "Independent ESG rating placing us in top metrics of printing companies." },
              { val: "GPTW®", label: "Certified Great Workplace", desc: "Recognized for continuous workplace safety, employee loops, and diversity." },
              { val: "Scope 1, 2, 3", label: "Carbon Measurement", desc: "Comprehensive Greenhouse Gas audits measured and published annually since 2019." },
              { val: "Water-Free", label: "Chemical Free Prepress", desc: "Employing process-less plate sets to eliminate chemical fluids completely." },
              { val: "100%", label: "Solar Operations Loop", desc: "Consolidated Chennai plant partially running on 450kW grid of solar energy." }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.val}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="text-3xl font-bold font-heading text-sky-400 mb-1">
                    {stat.val}
                  </div>
                  <h4 className="text-xs font-bold text-white font-heading uppercase tracking-wide mb-3">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-xs text-gray-300 font-sans font-light leading-relaxed border-t border-white/5 pt-3 mt-4">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: OUR SUSTAINABILITY JOURNEY (Cinematic Horizontal Timeline) */}
      <section ref={journeySectionRef} className="relative h-[300vh] bg-[#0A121E]">
        {/* Sticky element wrapper */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Animated Background Overlay changing index based */}
          <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out">
            <img 
              src={milestones[activeTimelineIndex].image} 
              alt="" 
              className="w-full h-full object-cover opacity-15 filter transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A121E] via-[#0A121E]/85 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-left max-w-2xl mb-12">
              <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full inline-block">
                TIMELINE
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4 leading-tight">
                A Commitment That Continues to Grow
              </h2>
            </div>

            {/* Horizontal Timeline Slider Frame */}
            <div className="relative w-full overflow-hidden py-8">
              <div 
                className="flex gap-8 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${journeyProgress * 65}%)` }}
              >
                {milestones.map((m, idx) => {
                  const isActive = activeTimelineIndex === idx;
                  return (
                    <div 
                      key={m.year}
                      className={cn(
                        "w-[20rem] md:w-[26rem] shrink-0 p-8 rounded-3xl border transition-all duration-500 text-left relative overflow-hidden",
                        isActive 
                          ? "bg-white/10 backdrop-blur-md border-sky-500/40 shadow-xl shadow-sky-500/5" 
                          : "bg-white/5 backdrop-blur-sm border-white/5 opacity-40 scale-98"
                      )}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full pointer-events-none" />
                      
                      <span className={cn(
                        "text-3xl font-bold font-heading transition-colors duration-500",
                        isActive ? "text-sky-400 scale-105 inline-block" : "text-gray-400"
                      )}>
                        {m.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white font-heading mt-4 mb-2 leading-tight">
                        {m.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 font-sans font-light leading-relaxed mt-2">
                        {m.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Horizontal Track line indicating scroll depth */}
            <div className="mt-12 max-w-xl h-[2px] bg-white/10 rounded-full relative overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-sky-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${journeyProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: THE FIVE SUSTAINABILITY PILLARS (Sticky Scroll Spy layout) */}
      <section className="relative py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Sticky Pillar Navigation List */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-36 space-y-8">
                <div className="space-y-4">
                  <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-3 py-1 rounded-full inline-block">
                    OUR PILLARS
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading font-bold">
                    Core Sustainability Pillars
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
                    Our environmental commitment is built on five strategic operational focus areas. Click any pillar to explore details.
                  </p>
                </div>

                {/* Vertical Timeline Card Track */}
                <div className="relative mt-8">
                  {/* Vertical Progress Line */}
                  <div className="absolute left-[18px] top-[36px] bottom-[36px] w-[2px] pointer-events-none">
                    <div className="absolute inset-0 bg-slate-100 rounded-full" />
                    <div 
                      className="absolute top-0 left-0 w-full bg-sky-500 rounded-full transition-all duration-500 ease-out"
                      style={{
                        height: `${(activePillarIndex / (pillars.length - 1)) * 100}%`
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    {pillars.map((item, idx) => {
                      const isActive = activePillarIndex === idx;
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="relative flex items-center min-h-[72px]">
                          {/* Timeline dot */}
                          <button
                            type="button"
                            onClick={() => scrollToPillar(idx)}
                            className={cn(
                              "absolute left-[18px] -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 bg-white cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                              isActive 
                                ? "border-sky-500 bg-sky-500 scale-110 ring-4 ring-sky-500/15 shadow-sm" 
                                : "border-slate-200 hover:border-slate-400"
                            )}
                            aria-label={`Go to ${item.title}`}
                          >
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                          </button>

                          {/* Button card */}
                          <button
                            type="button"
                            onClick={() => scrollToPillar(idx)}
                            className={cn(
                              "w-full text-left ml-9 p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer",
                              isActive 
                                ? "bg-sky-500/[0.02] border-sky-500/30 shadow-md shadow-sky-500/5" 
                                : "bg-white border-gray-100 hover:border-gray-200"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300",
                                isActive 
                                  ? "bg-sky-500/10 border-sky-500/20 text-sky-600" 
                                  : "bg-slate-50 border-transparent text-gray-400"
                              )}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <span className={cn(
                                  "text-[9px] font-bold font-heading tracking-widest uppercase block transition-colors duration-300",
                                  isActive ? "text-sky-600" : "text-gray-400"
                                )}>
                                  Pillar {item.num}
                                </span>
                                <h4 className={cn(
                                  "text-sm font-bold font-heading transition-colors duration-300",
                                  isActive ? "text-deep-navy" : "text-gray-500"
                                )}>
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            <ChevronRight className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              isActive ? "text-sky-500 translate-x-1" : "text-gray-300 group-hover:translate-x-0.5"
                            )} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scrolling Cards */}
            <div className="lg:col-span-7 space-y-24 lg:space-y-36">
              {pillars.map((item, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <div
                    key={item.title}
                    id={`pillar-section-${idx}`}
                    className={cn(
                      "scroll-mt-36 transition-all duration-700 ease-out origin-center",
                      isActive ? "opacity-100 scale-100 filter-none" : "opacity-40 scale-95 blur-[0.5px]"
                    )}
                  >
                    <div className={cn(
                      "relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border bg-slate-50 mb-6 transition-all duration-700",
                      isActive ? "border-sky-500/30 shadow-sky-500/5 shadow-2xl" : "border-gray-200/60 shadow-md"
                    )}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-1000 ease-out",
                          isActive ? "scale-105" : "scale-100"
                        )} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="space-y-3 px-4 text-left transition-all duration-700">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map(tag => (
                          <span 
                            key={tag} 
                            className={cn(
                              "text-[10px] font-semibold px-2.5 py-1 rounded-md border transition-all duration-500",
                              isActive 
                                ? "text-sky-600 bg-sky-500/10 border-sky-500/20" 
                                : "text-gray-400 bg-gray-50 border-gray-200"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={cn(
                        "text-2xl font-bold font-heading leading-tight transition-colors duration-500",
                        isActive ? "text-deep-navy" : "text-gray-700"
                      )}>
                        {item.title}
                      </h3>
                      <p className={cn(
                        "text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed transition-colors duration-500",
                        isActive ? "text-gray-650" : "text-gray-400"
                      )}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 06: SUSTAINABILITY INITIATIVES (Editorial Visual Panels) */}
      <section className="relative py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block">
              GALLERY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              Sustainability Initiatives
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
              Every print run we execute is backed by actionable carbon and resources mitigation programs.
            </p>
          </div>

          {/* Editorial Card Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {initiatives.map((init) => (
              <InitiativeCard 
                key={init.title}
                num={init.num}
                title={init.title}
                desc={init.desc}
                image={init.image}
                icon={init.icon}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 07: MEASURING OUR IMPACT (Apple-style Analytics) */}
      <section className="relative py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 text-left space-y-4">
              <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-3.5 py-1.5 rounded-full inline-block">
                ANALYTICS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-2">
                Measuring Our Impact
              </h2>
              <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
                Decarbonization starts with transparency. Click standard scopes to view verified carbon metrics.
              </p>
            </div>

            {/* Apple style tabs */}
            <div className="lg:col-span-6 flex flex-wrap gap-2 lg:justify-end">
              {(['scope1', 'scope2', 'scope3'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setActiveScope(s)}
                  className={cn(
                    "px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 cursor-pointer shadow-sm focus:outline-none",
                    activeScope === s
                      ? "bg-sky-500 text-white border-sky-500"
                      : "bg-slate-50 text-gray-650 border-slate-200 hover:border-slate-300"
                  )}
                >
                  {s === 'scope1' ? "Scope 1 (Direct)" : s === 'scope2' ? "Scope 2 (Indirect)" : "Scope 3 (Supply Chain)"}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="p-8 md:p-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50/50 to-white shadow-sm text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-sky-600">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-xs font-bold font-heading uppercase tracking-wide">
                    {emissionsData[activeScope].reduction}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-deep-navy font-heading">
                  {emissionsData[activeScope].title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed max-w-2xl">
                  {emissionsData[activeScope].desc}
                </p>
              </div>
            </div>

            {/* Bar chart animations */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              {emissionsData[activeScope].chart.map((item) => {
                // Compute width scaling
                const maxValue = Math.max(...emissionsData[activeScope].chart.map(c => c.value));
                const widthPercent = (item.value / maxValue) * 100;

                return (
                  <div key={item.year} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <span className="md:col-span-2 text-sm font-bold text-gray-400 font-heading">
                      Year {item.year}
                    </span>
                    <div className="md:col-span-8 h-8 w-full bg-slate-100 rounded-lg relative overflow-hidden flex items-center px-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${widthPercent}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-sky-400 to-blue-400 rounded-lg"
                      />
                      <span className="relative z-10 text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 08: RECOGNISED FOR RESPONSIBLE MANUFACTURING (Museum Plaque Dark Wall) */}
      <section className="relative py-28 bg-[#080E17] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full inline-block">
              EXHIBITION WALL
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4 leading-tight">
              Recognized for Responsible Manufacturing
            </h2>
            <p className="text-xs md:text-sm text-gray-400 font-sans font-light leading-relaxed">
              Our processes have undergone rigorous auditing and validation by global agencies.
            </p>
          </div>

          {/* Museum floating plaque cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={cert.title}
                  className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-lg hover:border-sky-500/30 hover:shadow-sky-500/5 transition-all duration-500 flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 border border-white/5 self-start inline-block mb-4">
                      <Icon className="w-5 h-5 animate-pulse" />
                    </div>
                    <h3 className="text-base font-bold text-white font-heading leading-tight group-hover:text-sky-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mt-1">
                      {cert.org}
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-400 font-sans font-light leading-normal border-t border-white/5 pt-3 mt-6">
                    {cert.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 09: SUSTAINABILITY REPORTS */}
      <section className="relative py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block">
              RESOURCES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              Sustainability Reports
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
              Explore and download our certified environmental disclosures and ESG papers.
            </p>
          </div>

          {/* Book Library shelf layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {reports.map((rep) => (
              <div 
                key={rep.title}
                className="bg-white rounded-2xl border border-slate-150 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group"
              >
                <div className="space-y-4">
                  {/* Decorative book binder line */}
                  <div className="h-1.5 w-12 bg-sky-500 rounded-full" />
                  
                  <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest font-heading">
                    {rep.type}
                  </span>
                  
                  <h3 className="text-base font-bold text-deep-navy font-heading leading-tight group-hover:text-sky-600 transition-colors">
                    {rep.title}
                  </h3>
                  
                  <p className="text-xs text-gray-450 font-sans leading-relaxed font-light">
                    {rep.desc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                  <span className="text-[10px] font-bold text-gray-400 font-mono">
                    PDF — {rep.size}
                  </span>
                  <button 
                    type="button"
                    className="w-8 h-8 rounded-lg bg-sky-50 hover:bg-sky-500 text-sky-600 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-sky-100"
                    aria-label="Download Document"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL SECTION: THE FUTURE WE ARE BUILDING */}
      <section className="relative py-28 bg-gradient-to-br from-deep-navy via-navy-900 to-[#0A121E] text-white overflow-hidden">
        {/* Graphic backdrop of books transforming into leaves */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,150 C 200,50 400,250 600,150 C 800,50 1000,250 1200,150" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 100,180 C 300,80 500,280 700,180 C 900,80 1100,280 1300,180" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
            CREATING THE FUTURE
          </span>
          
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading">
            Together, We Are Building a More Sustainable Future
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Together with our partners, we are creating a future where exceptional books are manufactured responsibly, ethically and sustainably.
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-sky-500 via-blue-300 to-sky-500 mx-auto" />

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-600 border-none w-full sm:w-auto shadow-md">
              Partner With Multivista
            </Button>
            <Button href="#philosophy" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
              Explore Our Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Popup Preview */}
      <AnimatePresence>
        {activeReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReport(null)}
              className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 bg-white w-full max-w-5xl h-[82vh] md:h-[85vh] rounded-[24px] shadow-2xl border border-slate-150 overflow-hidden flex flex-col select-text"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <div>
                  <h3 className="text-lg font-bold text-deep-navy font-heading">
                    {activeReport.title}
                  </h3>
                  <p className="text-xs text-slate-450 font-sans tracking-wide uppercase font-medium">
                    {activeReport.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeReport.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-sky-600 hover:bg-slate-100 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setActiveReport(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal PDF iframe */}
              <div className="flex-1 w-full h-full bg-slate-50">
                <iframe
                  src={`${activeReport.pdfPath}#toolbar=1&navpanes=0`}
                  className="w-full h-full border-none"
                  title={activeReport.title}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
