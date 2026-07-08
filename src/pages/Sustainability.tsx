import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Leaf,
  Recycle,
  Droplet,
  TreePine,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
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
    desc: "Established our initial baseline measurement, tracking Scope 1 & 2 emissions across our printing/manufacturing facilities to begin our scientific decarbonization pathway.",
    image: "/Images/JOURNEY ROADMAP/2019–20.jpg"
  },
  {
    year: "2020–21",
    title: "Environmental Reporting",
    desc: "Integrated clean material waste metrics into our corporate logs, initiating transparent auditing of paper trim outputs and starting 100% recycling loops.",
    image: "/Images/JOURNEY ROADMAP/2020–21.jpg"
  },
  {
    year: "2021–22",
    title: "SDGs + Sustainability Report",
    desc: "Aligned our operations with the UN Sustainable Development Goals, launching our first comprehensive ESG policy detailing water recycling and soy ink transitions.",
    image: "/Images/JOURNEY ROADMAP/2021–22.jpg"
  },
  {
    year: "2022",
    title: "EcoVadis + SBTi Alignment",
    desc: "Submitted our carbon reduction goals to the Science Based Targets initiative (SBTi) and underwent our first formal EcoVadis sustainability rating audits.",
    image: "/Images/JOURNEY ROADMAP/2022.jpg"
  },
  {
    year: "2023",
    title: "UN Global Compact & Green Printer",
    desc: "Became a signatory to the UN Global Compact, and recognized as the Green Printer of the Year for outstanding solar offset integrations.",
    image: "/Images/JOURNEY ROADMAP/2023.jpg"
  },
  {
    year: "2024",
    title: "Green Printer of the Year",
    desc: "Secured back-to-back industry honors as Green Printer of the Year, completing our phase-1 transition to solar energy and introducing compostable cargo wraps.",
    image: "/Images/JOURNEY ROADMAP/2024.jpg"
  },
  {
    year: "2025 & 2026",
    title: "First printer in India to receive Ecovadis Gold Award",
    desc: "Achieved the prestigious EcoVadis Gold Medal rating, placing Multivista in the top tier of sustainable printing operations globally for environmental and ethical performance.",
    image: "/Images/JOURNEY ROADMAP/2025-2026.jpg"
  }
];

// Pillars data
const pillars = [
  {
    num: "01",
    title: "Climate Action",
    desc: "Measuring our footprint to hit near-zero targets. We track Scopes 1, 2, and 3 meticulously, actively reducing emissions through logistics optimizations and solar energy infrastructure.",
    tags: ["SBTi Decarbonization", "Net-Zero Goals", "Carbon Audits"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000",
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
    image: "/Images/SUSTAINABILITY INITIATIVE/FSC® & PEFC Certified Paper.jpg",
    icon: TreePine,
    category: "materials"
  },
  {
    num: "02",
    title: "Paper Tape Packaging",
    desc: "Replacing conventional plastic tape with paper-based alternatives to support environmentally responsible packaging.",
    image: "/Images/SUSTAINABILITY INITIATIVE/PAPER TAPE PACKAGING.jpg",
    icon: Recycle,
    category: "materials"
  },
  {
    num: "03",
    title: "Low Carbon Paper Sourcing",
    desc: "Prioritising paper sourced from mills with lower carbon emissions to reduce the environmental impact of every print project.",
    image: "/Images/SUSTAINABILITY INITIATIVE/LOW CARBON PAPER SOURCING.jpg",
    icon: Leaf,
    category: "materials"
  },
  {
    num: "04",
    title: "Green Factory Initiative",
    desc: "Chennai facility utilizing low-energy thermal chiller arrays and solar rooftops.",
    image: "/Images/SUSTAINABILITY INITIATIVE/GREEN FACTORY INITIATIVE.jpeg",
    icon: Zap,
    category: "production"
  },
  {
    num: "05",
    title: "Energy Audits & Motion Sensors",
    desc: "Implementing regular energy audits and installing motion sensors to optimize electricity usage across facilities.",
    image: "/Images/SUSTAINABILITY INITIATIVE/ENERGY AUDITS & MOTION SENSORS.jpg",
    icon: Zap,
    category: "production"
  },
  {
    num: "06",
    title: "Process-Less Plates",
    desc: "Saving thousands of liters of chemical developer fluids in prepress setups.",
    image: "/Images/SUSTAINABILITY INITIATIVE/PROCESS LESS PLATES.jpg",
    icon: Layers,
    category: "production"
  },
  {
    num: "07",
    title: "Responsible Procurement",
    desc: "Partnering with certified paper mills that provide responsibly sourced, low-carbon paper while maintaining strict supplier assessment standards.",
    image: "/Images/SUSTAINABILITY INITIATIVE/RESPONSIBLE PROCUREMENT.jpg",
    icon: ShieldCheck,
    category: "supply"
  },
  {
    num: "08",
    title: "Water Conservation",
    desc: "Closed-loop water systems and efficient chiller technology help reduce water consumption across our manufacturing operations.",
    image: "/Images/water_conservation.png",
    icon: Droplet,
    category: "production"
  },
  {
    num: "09",
    title: "Sustainable Procurement",
    desc: "Enforcing rigorous ethical standard checks on 100% of supply chain vendors.",
    image: "/Images/SUSTAINABILITY INITIATIVE/SUSTAINABLE PROCUREMENT.jpg",
    icon: Heart,
    category: "supply"
  },
  {
    num: "10",
    title: "Water Chiller Plant",
    desc: "Closed-loop industrial refrigeration saving 80% water on press cooling.",
    image: "/Images/water_chiller_plant.png?v=1",
    icon: Droplet,
    category: "production"
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


const sustainabilityTableData = [
  {
    year: "2019 Apr to 2020 Mar (BY)",
    scope1: "255",
    scope2: "1502",
    scope3: "Not measured",
    total: "1757",
    perBook: "0.18"
  },
  {
    year: "2020 Apr to 2021 Mar",
    scope1: "230",
    scope2: "460",
    scope3: "Not measured",
    total: "690",
    perBook: "0.10"
  },
  {
    year: "2021 Apr to 2022 Mar",
    scope1: "152",
    scope2: "112",
    scope3: "Not measured",
    total: "264",
    perBook: "0.03"
  },
  {
    year: "2022 Apr to 2023 Mar",
    scope1: "288",
    scope2: "271",
    scope3: "Not measured",
    total: "559",
    perBook: "0.06"
  },
  {
    year: "2023 Apr to 2024 Mar",
    scope1: "276",
    scope2: "143",
    scope3: "4268",
    total: "4687",
    perBook: "0.04 Scope 1+2"
  },
  {
    year: "2024 Apr to 2025 Mar",
    scope1: "206",
    scope2: "143",
    scope3: "4901",
    total: "5250",
    perBook: "0.04 Scope 1+2"
  },
  {
    year: "2025 Apr to 2026 Mar",
    scope1: "184",
    scope2: "89",
    scope3: "4190",
    total: "4463",
    perBook: "0.03 Scope 1+2"
  }
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
    <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left relative">
      {/* Image / Fallback block */}
      <div className="h-52 w-full bg-slate-50 relative overflow-hidden">
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
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl px-3 py-1 shadow-sm flex items-center gap-1.5 z-20">
          <span className="text-[10px] font-bold text-sky-600 font-mono tracking-wider">
            {num}
          </span>
        </div>

        {/* Light cover gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest uppercase font-heading">
              INITIATIVE
            </span>
            <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100/50 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300">
              <Icon className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-base font-bold text-deep-navy font-heading leading-snug group-hover:text-sky-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
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

  // Redesigned Sustainability Journey active index
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0); // Autoplay state for interactive timeline
  const [isPlaying, setIsPlaying] = useState(true);

  // Category switch state for Initiatives Section
  const [activeCategory, setActiveCategory] = useState<'all' | 'materials' | 'production' | 'supply'>('all');

  // Pillars Scroll Spy states & refs
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const isPillarScrollingRef = useRef(false);
  const pillarScrollTimeoutRef = useRef<number | null>(null);

  // Autoplay effect for the timeline journey
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveMilestoneIndex((prev) => (prev + 1) % milestones.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      // Hero Parallax
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        setHeroScroll(scrolled);
      }

      // Dynamic Active Pillar Scroll Spy
      if (!isPillarScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top of viewport
        let closestIdx = 0;
        let minDistance = Infinity;

        // Check if we have scrolled to the bottom of the page
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;

        if (isAtBottom) {
          closestIdx = pillars.length - 1;
        } else {
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
        }
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
            backgroundImage: `url('/Images/Sus1.jpg')`
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
            <Button href="#philosophy" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider shadow-md inline-flex items-center gap-2 group">
              <span>Explore Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Responsibility & Progress</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
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
                  src="/Images/SUSTAINABILITY/PHILOSOPHY.jpg"
                  alt="Responsible forestry paper production sourcing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 02.5: CARBON FOOTPRINT REPORTS */}
      <section
        id="carbon-footprints"
        className="relative py-24 bg-slate-950 overflow-hidden font-sans scroll-mt-24"
      >
        {/* Background Image Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0"
          style={{ backgroundImage: "url('/Images/CBR1.jpg')" }}
        />

        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

        <div className="absolute inset-0 bg-print-grid opacity-20 pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-md">
              CARBON AUDITS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-4 leading-tight font-heading">
              Carbon Footprint Disclosures
            </h2>
            <p className="text-xs md:text-sm text-slate-200 font-sans font-light leading-relaxed max-w-xl mx-auto">
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
                  className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-slate-900/60 hover:border-sky-500/30 transition-all duration-300 text-left relative group min-h-[300px]"
                >
                  <div className="space-y-4">
                    {/* Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[9px] font-bold text-sky-400 uppercase tracking-widest font-heading block">
                      {report.subtitle}
                    </span>

                    <h3 className="text-base font-bold text-white font-heading leading-tight group-hover:text-sky-400 transition-colors duration-300">
                      {report.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed font-light">
                      {report.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-col gap-3 mt-6">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono">
                      <span>PDF — {report.size}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveReport(report)}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-white/10 text-white font-medium text-xs bg-slate-900/60 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 group/btn mt-1 cursor-pointer"
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


      {/* SECTION 04: OUR SUSTAINABILITY JOURNEY (Interactive Showcase) */}
      {/* SECTION 03: A COMMITMENT THAT CONTINUES TO GROW (ROADMAP) */}
      <section className="relative py-28 bg-[#EEEEEE] overflow-hidden font-sans select-text border-t border-b border-slate-200/50">
        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.04] z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/Sus1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEEEEE]/95 via-[#EEEEEE]/80 to-[#EEEEEE] z-10 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-left max-w-3xl mb-16">
            <span className="text-[9px] font-bold text-sky-700 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full inline-block">
              JOURNEY ROADMAP
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              A Commitment That Continues to Grow
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-sans font-light leading-relaxed max-w-xl mt-3">
              Explore how we have scaled our ecological targets and green integrations step-by-step from 2019 to today.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* LEFT COLUMN: Year Switcher Timeline */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="relative pl-8 border-l-2 border-slate-300 space-y-6 py-4">
                {/* Year indicators */}
                {milestones.map((m, idx) => {
                  const isActive = activeMilestoneIndex === idx;
                  return (
                    <button
                      key={m.year}
                      type="button"
                      onClick={() => {
                        setActiveMilestoneIndex(idx);
                        setIsPlaying(false); // Stop autoplay when clicked
                      }}
                      className="group flex items-center gap-4 text-left relative focus:outline-none cursor-pointer"
                    >
                      {/* Active Year Line indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTimelineIndicator"
                          className="absolute -left-[35px] w-[5px] h-[32px] bg-sky-600 rounded-r-full shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Year circle node */}
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center -ml-[43px] z-20",
                        isActive
                          ? "bg-sky-500 border-sky-500 scale-120 shadow-[0_0_8px_rgba(14,165,233,0.3)]"
                          : "bg-[#EEEEEE] border-slate-300 group-hover:border-slate-400"
                      )}>
                        {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>

                      {/* Year label text */}
                      <div className="space-y-0.5">
                        <span className={cn(
                          "text-xl font-bold font-heading transition-colors duration-300 block",
                          isActive ? "text-sky-700 text-2xl" : "text-slate-500 group-hover:text-slate-700"
                        )}>
                          {m.year}
                        </span>
                        <span className={cn(
                          "text-[10px] font-sans font-light transition-colors duration-300 line-clamp-1 max-w-[200px]",
                          isActive ? "text-slate-700 font-normal" : "text-slate-500 group-hover:text-slate-600"
                        )}>
                          {m.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Active Card Details */}
            <div className="lg:col-span-8 flex flex-col justify-between">

              <div className="relative min-h-[380px] w-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestoneIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-white/95 backdrop-blur-md border border-slate-200/80 p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
                  >
                    {/* Corner decorative glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/[0.03] rounded-bl-full pointer-events-none" />

                    {/* Image with zoom effect */}
                    <div className="w-full md:w-2/5 shrink-0 relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-64 border border-slate-250/50 group bg-slate-100 shadow-md">
                      <img
                        src={milestones[activeMilestoneIndex].image}
                        alt={milestones[activeMilestoneIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Text descriptions */}
                    <div className="flex-1 text-left space-y-4">
                      <span className="text-sky-600 text-3xl font-extrabold font-heading block tracking-tight">
                        {milestones[activeMilestoneIndex].year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-deep-navy font-heading leading-snug">
                        {milestones[activeMilestoneIndex].title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 font-sans font-light leading-relaxed">
                        {milestones[activeMilestoneIndex].desc}
                      </p>

                      {/* Metric visual pill */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-500/15 bg-sky-500/5 text-sky-700 text-[10px] font-bold uppercase tracking-wider font-heading">
                          <Sparkles className="w-3.5 h-3.5" />
                          Validated Achievement
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CONTROLS BAR: Play, Pause, Previous, Next */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-300 pt-6">

                {/* Autoplay & Auto indicator */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer",
                      isPlaying
                        ? "border-sky-500/30 text-sky-700 bg-sky-500/10 shadow-sm"
                        : "border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400"
                    )}
                    aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {isPlaying ? "AUTOPLAYING ROADMAP" : "AUTOPLAY PAUSED"}
                  </span>
                </div>

                {/* Left/Right switches */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMilestoneIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
                      setIsPlaying(false);
                    }}
                    className="w-10 h-10 rounded-full border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label="Previous milestone"
                  >
                    <ChevronLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMilestoneIndex((prev) => (prev + 1) % milestones.length);
                      setIsPlaying(false);
                    }}
                    className="w-10 h-10 rounded-full border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label="Next milestone"
                  >
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 05: THE FIVE SUSTAINABILITY PILLARS (Sticky Scroll Spy layout) */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-x-clip scroll-mt-24">
        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/Core Sustainability Pillars.png')" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Column: Sticky Pillar Navigation List */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-36 space-y-8">
                <div className="space-y-4">
                  <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
                    OUR PILLARS
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading font-bold">
                    Core Sustainability Pillars
                  </h2>
                  <p className="text-sm md:text-base text-slate-300 font-sans font-light leading-relaxed">
                    Our environmental commitment is built on five strategic operational focus areas. Click any pillar to explore details.
                  </p>
                </div>

                {/* Vertical Timeline Card Track */}
                <div className="relative mt-8">
                  {/* Vertical Progress Line */}
                  <div className="absolute left-[18px] top-[36px] bottom-[36px] w-[2px] pointer-events-none">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
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
                              "absolute left-[18px] -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                              isActive
                                ? "border-sky-500 bg-sky-500 scale-110 ring-4 ring-sky-500/15 shadow-sm"
                                : "border-white/10 bg-slate-900/60 hover:border-white/30"
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
                              "w-full text-left ml-9 p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer backdrop-blur-sm",
                              isActive
                                ? "bg-slate-900/60 border-sky-500/40 shadow-xl shadow-sky-500/5 text-white"
                                : "bg-slate-900/20 border-white/5 hover:bg-slate-900/40 hover:border-white/10 text-slate-400"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300",
                                isActive
                                  ? "bg-sky-500/10 border-sky-500/20 text-sky-400"
                                  : "bg-slate-900/60 border-white/5 text-slate-500"
                              )}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <span className={cn(
                                  "text-[9px] font-bold font-heading tracking-widest uppercase block transition-colors duration-300",
                                  isActive ? "text-sky-400" : "text-slate-500"
                                )}>
                                  Pillar {item.num}
                                </span>
                                <h4 className={cn(
                                  "text-sm font-bold font-heading transition-colors duration-300",
                                  isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                                )}>
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            <ChevronRight className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              isActive ? "text-sky-400 translate-x-1" : "text-slate-500 group-hover:translate-x-0.5"
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
                      "relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border bg-slate-950/60 mb-6 transition-all duration-700",
                      isActive ? "border-sky-500/30 shadow-sky-500/5 shadow-2xl" : "border-white/5 shadow-md"
                    )}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-1000 ease-out",
                          isActive ? "scale-105" : "scale-100"
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className={cn(
                      "space-y-3 p-6 rounded-3xl text-left border backdrop-blur-md transition-all duration-700 mt-6",
                      isActive
                        ? "bg-slate-900/40 border-white/10 shadow-xl"
                        : "bg-slate-900/10 border-white/5 opacity-50"
                    )}>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className={cn(
                              "text-[10px] font-semibold px-2.5 py-1 rounded-md border transition-all duration-500",
                              isActive
                                ? "text-sky-400 bg-sky-500/10 border-sky-500/20"
                                : "text-slate-500 bg-slate-900/40 border-white/5"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={cn(
                        "text-2xl font-bold font-heading leading-tight transition-colors duration-500",
                        isActive ? "text-white" : "text-slate-400"
                      )}>
                        {item.title}
                      </h3>
                      <p className={cn(
                        "text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500",
                        isActive ? "text-slate-300" : "text-slate-500"
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

      {/* SECTION 06: SUSTAINABILITY INITIATIVES (Interactive Filter Dashboard) */}
      <section className="relative py-28 bg-[#EEEEEE] overflow-hidden font-sans border-t border-b border-slate-200/50">
        {/* Background print grid */}
        <div className="absolute inset-0 bg-print-grid opacity-[0.04] pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/[0.01] rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-700 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full inline-block">
              OPERATIONAL ACTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-4 leading-tight">
              Sustainability Initiatives
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-sans font-light leading-relaxed mt-3">
              Every print run we execute is backed by actionable, verified carbon and materials mitigation programs.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-xl mx-auto">
            {[
              { id: "all", label: "All Initiatives" },
              { id: "materials", label: "Eco Materials" },
              { id: "production", label: "Clean Production" },
              { id: "supply", label: "Responsible Supply" }
            ].map((tab) => {
              const count = tab.id === "all"
                ? initiatives.length
                : initiatives.filter(i => i.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer shadow-sm focus:outline-none flex items-center gap-2",
                    activeCategory === tab.id
                      ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/15"
                      : "bg-white text-slate-600 border-slate-300 hover:border-slate-400 hover:text-slate-800"
                  )}
                >
                  <span>{tab.label}</span>
                  <span className={cn(
                    "text-[10px] font-mono rounded-full px-1.5 py-0.5",
                    activeCategory === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-500"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filtered Grid display with Animating Cards */}
          <div className="min-h-[400px]">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {initiatives
                  .filter(item => activeCategory === "all" || item.category === activeCategory)
                  .map((init) => (
                    <motion.div
                      layout
                      key={init.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <InitiativeCard
                        num={init.num}
                        title={init.title}
                        desc={init.desc}
                        image={init.image}
                        icon={init.icon}
                      />
                    </motion.div>
                  ))
                }
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      <section
        className="relative py-28 bg-slate-950 overflow-hidden select-text"
      >
        {/* Background Image Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/MOI1.jpg')" }}
        />

        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

        {/* Subtle background printing alignment grids */}
        <div className="absolute inset-0 bg-print-grid opacity-15 pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
              ANALYTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading mt-4">
              Measuring Our Impact
            </h2>
            <p className="text-xs md:text-sm text-slate-200 font-sans font-light leading-relaxed mt-3">
              Decarbonization starts with transparency. Below is our verified greenhouse gas emissions audit and YoY comparison data.
            </p>
          </div>

          {/* Table Container */}
          <div className="p-6 md:p-8 rounded-[32px] border border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-sky-500/20 transition-all duration-300">
            <h3 className="text-xs md:text-sm font-bold text-white font-heading mb-6 border-b border-white/10 pb-4 uppercase tracking-wider text-center">
              SUSTAINABILITY METRICS – SCOPE 1, 2 & 3 EMISSION LEVEL (6 YRS , YoY COMPARISON)
            </h3>

            <div className="overflow-x-auto w-full">
              <table className="w-full border-collapse text-left text-xs md:text-sm text-slate-200">
                <thead>
                  <tr className="border-b border-white/20 bg-white/5 font-heading text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-350">
                    <th className="p-4 border-r border-white/10 whitespace-nowrap text-slate-200">Year</th>
                    <th className="p-4 border-r border-white/10 text-center">Scope 1 emissions<br /><span className="text-[9px] text-sky-400 font-sans font-light normal-case">Co2e (in MT)</span></th>
                    <th className="p-4 border-r border-white/10 text-center">Scope 2 emissions<br /><span className="text-[9px] text-sky-400 font-sans font-light normal-case">Co2e (in MT)</span></th>
                    <th className="p-4 border-r border-white/10 text-center">Scope 3 emissions Co2e<br /><span className="text-[9px] text-sky-400 font-sans font-light normal-case">(in MT)</span></th>
                    <th className="p-4 border-r border-white/10 text-center">Total emissions<br /><span className="text-[9px] text-sky-400 font-sans font-light normal-case">Co2e (in MT)</span></th>
                    <th className="p-4 text-center">Scope 1 & 2 Emission<br /><span className="text-[9px] text-sky-400 font-sans font-light normal-case">per book (in kgs)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {sustainabilityTableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "border-b border-white/10 hover:bg-white/10 transition-colors duration-200 font-sans",
                        idx % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                      )}
                    >
                      <td className="p-4 font-semibold text-white border-r border-white/10 whitespace-nowrap">{row.year}</td>
                      <td className="p-4 text-center border-r border-white/10 text-slate-100 font-medium">{row.scope1}</td>
                      <td className="p-4 text-center border-r border-white/10 text-slate-100 font-medium">{row.scope2}</td>
                      <td className="p-4 text-center border-r border-white/10 text-slate-100 font-medium">
                        <span className={cn(
                          row.scope3 === "Not measured" ? "text-slate-400/70 italic text-[11px]" : "text-slate-100"
                        )}>
                          {row.scope3}
                        </span>
                      </td>
                      <td className="p-4 text-center border-r border-white/10 text-sky-300 font-bold">{row.total}</td>
                      <td className="p-4 text-center text-emerald-400 font-semibold">{row.perBook}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 05.5: RESPONSIBLE PROCUREMENT */}
      <section className="relative py-28 bg-white border-t border-b border-slate-200/50 overflow-hidden font-sans select-text">
        {/* Background print grid */}
        <div className="absolute inset-0 bg-print-grid opacity-[0.04] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

          {/* Centered Header */}
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Procurement Integrity
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Responsible Procurement
            </h2>
            <p className="text-base text-gray-650 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              We source paper from certified mills that follow responsible forestry and low-carbon manufacturing practices, ensuring sustainability begins with every raw material we procure.
            </p>
            <div className="h-[2px] w-16 bg-sky-500 mx-auto" />
          </div>

          {/* Centered grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {[
              {
                title: "FSC Certified Papers",
                desc: "Procuring materials strictly from FSC® and PEFC certified sources to support global biodiversity conservation.",
                color: "border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/10",
                iconColor: "text-emerald-500"
              },
              {
                title: "Low Carbon Paper Mills",
                desc: "Partnering exclusively with manufacturing mills utilizing green energy loops to limit supply chain carbon footprints.",
                color: "border-sky-500/25 bg-sky-500/5 hover:border-sky-500/50 hover:bg-sky-500/10",
                iconColor: "text-sky-500"
              },
              {
                title: "Ethical Supplier Network",
                desc: "Enforcing zero-tolerance vendor audits regarding human rights, fair wages, and ethical labor standards.",
                color: "border-amber-500/25 bg-amber-500/5 hover:border-amber-500/50 hover:bg-amber-500/10",
                iconColor: "text-amber-500"
              },
              {
                title: "Responsible Procurement Policy",
                desc: "A structured, certified policy ensuring 100% accountability at every single stage of resource acquisition.",
                color: "border-purple-500/25 bg-purple-500/5 hover:border-purple-500/50 hover:bg-purple-500/10",
                iconColor: "text-purple-500"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between text-left shadow-sm ${item.color} hover:-translate-y-1.5`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                      PILLAR 0{idx + 1}
                    </span>
                    <ShieldCheck className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
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
            <Button href="/contact" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-md">
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
