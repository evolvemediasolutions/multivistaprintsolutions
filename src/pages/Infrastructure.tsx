import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Printer, 
  Layers, 
  Truck, 
  Sun, 
  Zap, 
  Activity, 
  Maximize2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FacilitySection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  stats: { label: string; value: string }[];
  image: string;
  colorClass: string;
}

const facilitySections: FacilitySection[] = [
  {
    id: "prepress",
    title: "Pre-Press & Digital Workflow",
    subtitle: "Automated Precision & Color Fidelity",
    description: "Our digital prepress department leverages automated Computer-to-Plate (CTP) systems and computerized raster image processing to ensure high-fidelity translation from digital manuscript files to physical printing plates.",
    icon: Cpu,
    features: [
      "Computer-to-Plate (CTP) automation with zero-chemical chemistry",
      "Spectrophotometric digital color validation profiles",
      "Direct digital proofs calibrated to ISO printing standards",
      "Fully integrated automated prepress preflight validation logs"
    ],
    stats: [
      { label: "Plate Output Capacity", value: "320+ Plates / Hour" },
      { label: "Color Calibration Accuracy", value: "99.8% Delta-E Match" }
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    colorClass: "from-blue-500/10 to-cyan-500/5 text-royal-blue"
  },
  {
    id: "pressroom",
    title: "The Pressroom (High-Speed Production)",
    subtitle: "Offset & Web-Offset Printing Power",
    description: "Equipped with high-performance Heidelberg sheet-fed offset presses and Komori web offset lines, our facility is engineered to run high-volume print cycles with uniform ink density and rapid output turnaround.",
    icon: Printer,
    features: [
      "Multi-color sheet-fed offset presses with inline aqueous coater units",
      "High-speed double-sided web offset lines for educational manuals",
      "Computerized central ink control systems for micro-zoning adjustments",
      "Real-time electronic sheet checking and defect detection"
    ],
    stats: [
      { label: "Max Output Speed", value: "15,000 Sheets / Hour" },
      { label: "Supported Paper Range", value: "40 gsm to 400 gsm" }
    ],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1200",
    colorClass: "from-indigo-500/10 to-purple-500/5 text-indigo-600"
  },
  {
    id: "bindery",
    title: "Post-Press & Automated Bindery",
    subtitle: "Premium Finishes & Multi-Format Options",
    description: "Our post-press department is fully integrated with automated folding, sewing, gathering, and casing-in machinery. We support multiple book formats—from hardcover case bindings to board books.",
    icon: Layers,
    features: [
      "Fully automated gatherer-binder-trimmer book binding lines",
      "Premium hardcover casing-in lines with ribbon insertion",
      "High-speed thread sewing machines for durable book backbones",
      "Custom board book mounting, scoring, and round-corner finishing"
    ],
    stats: [
      { label: "Daily Binding Capacity", value: "50,000+ Books / Day" },
      { label: "Available Bind Formats", value: "7+ Professional Formats" }
    ],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200",
    colorClass: "from-amber-500/10 to-orange-500/5 text-gold-accent"
  },
  {
    id: "logistics",
    title: "Logistics & Global Warehousing",
    subtitle: "Eco-Friendly Packing & Secure Container Cargo",
    description: "Multivista’s integrated logistics system ensures all print batches are packed using sustainable materials and shipped securely. We manage complete container cargo operations to global trade nodes.",
    icon: Truck,
    features: [
      "Dedicated 20,000 sq ft logistics shipping warehouse layout",
      "FSC®-certified paper trace custody tracking logs",
      "Compostable cargo wrapping and heavy-gauge carton packing",
      "Direct port connectivity with global shipping line tracking"
    ],
    stats: [
      { label: "Warehouse Capacity", value: "1,500+ Cargo Pallets" },
      { label: "Annual Book Exports", value: "15M+ Copies Shipped" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    colorClass: "from-teal-500/10 to-emerald-500/5 text-teal-600"
  }
];

export function Infrastructure() {
  const [activeTab, setActiveTab] = useState(facilitySections[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* SECTION 01: HERO HEADER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-blueprint-grid bg-white py-24 md:py-32 border-b border-gray-200/50 overflow-hidden">
        {/* Radial graphic lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-blue/[0.03] blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-accent/[0.02] blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
            FACILITIES & TECHNOLOGY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-deep-navy font-heading max-w-4xl mx-auto mb-6">
            World-Class Printing Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Spanning over a state-of-the-art 100,000+ square foot integrated manufacturing plant in Chennai, India, 
            Multivista combines high-speed offset printing, automation color diagnostics, and automated post-press finishing.
          </p>
        </div>
      </section>

      {/* SECTION 02: CORE PLANTS STATISTICS CARD */}
      <section className="py-12 bg-light-gray/50 border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Plant Footprint", value: "100,000+", suffix: "Sq Ft", icon: Maximize2, desc: "Integrated manufacturing facility" },
              { label: "Annual Book Output", value: "15M+", suffix: "Copies", icon: Activity, desc: "Shipped to publishers worldwide" },
              { label: "Renewable Energy", value: "100%", suffix: "Solar Offset", icon: Sun, desc: "Powered by clean energy grids" },
              { label: "Operational Runs", value: "24/7", suffix: "Continuous", icon: Zap, desc: "Continuous production uptime" }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl border border-gray-200/30 bg-white shadow-sm flex flex-col items-center text-center">
                  <div className="p-3 rounded-xl bg-royal-blue/5 text-royal-blue mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-gray-500 font-sans tracking-wide uppercase mb-1">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-deep-navy font-heading">
                    {stat.value} <span className="text-xs md:text-sm font-normal text-gray-500 font-sans">{stat.suffix}</span>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2 leading-tight">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: INTERACTIVE SHOWCASE TABS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-2.5 py-1 rounded-md inline-block mb-3">
              FACILITY STAGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy font-heading mb-4">
              Integrated Production Stages
            </h2>
            <p className="text-base text-gray-600 font-sans font-light">
              Click through our main facility stages to explore the technology and machinery configurations supporting our daily output.
            </p>
          </div>

          {/* Tabs Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 max-w-4xl mx-auto">
            {facilitySections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeTab === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isActive 
                      ? "bg-deep-navy text-white shadow-lg scale-105" 
                      : "bg-light-gray text-gray-600 border border-gray-200/50 hover:bg-gray-100 hover:text-deep-navy"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sec.title.split(" & ")[0].split(" (")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Pane */}
          {facilitySections.map((sec) => {
            if (sec.id !== activeTab) return null;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Left side: content detail */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="text-[10px] font-bold text-royal-blue tracking-wider font-heading uppercase">
                    {sec.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-navy font-heading leading-tight">
                    {sec.title}
                  </h3>
                  <p className="text-base text-gray-650 font-sans font-light leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="h-[1px] w-full bg-gray-200/60 my-6" />

                  {/* Feature Lists */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-deep-navy uppercase tracking-wide">Key Technologies & Controls</p>
                    {sec.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5 shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm text-gray-600 font-sans font-light">{feat}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 grid grid-cols-2 gap-4">
                    {sec.stats.map((stat, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border border-gray-200/50 bg-gradient-to-br ${sec.colorClass} text-left`}>
                        <p className="text-[10px] text-gray-500 font-sans uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-lg md:text-xl font-bold text-deep-navy font-heading">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: image card */}
                <div className="lg:col-span-6 relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 border border-dashed border-gray-200 rounded-3xl pointer-events-none z-0" />
                  
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[1.4/1] bg-gray-50 z-10">
                    <img 
                      src={sec.image} 
                      alt={sec.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/35 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* SECTION 04: GREEN POWER FOOTER HERO */}
      <section className="relative py-24 md:py-32 bg-deep-navy text-white overflow-hidden">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,87,184,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 w-fit mx-auto border border-emerald-500/20 mb-2 animate-pulse">
            <Workflow className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading leading-tight max-w-2xl mx-auto">
            Clean Energy Infrastructure
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Our Chennai production facilities are powered by integrated high-capacity rooftop solar arrays. 
            We combine manufacturing scalability with strict environmental governance.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/sustainability" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-deep-navy transition-colors">
              Explore Sustainability
            </Button>
            <Button href="/contact" variant="outline" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider border-white text-white hover:bg-white/10 transition-colors">
              Contact Facility Manager
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Infrastructure;
