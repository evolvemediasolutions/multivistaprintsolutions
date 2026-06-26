import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  BookOpen,
  Award,
  Sparkles,
  Leaf,
  Printer,
  Globe,
  Scissors,
  FolderCheck,
  ChevronRight,
  Droplet,
  Zap,
  Settings,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormatSection {
  id: string;
  label: string;
  title: string;
  subhead: string;
  description: string;
  image: string;
  idealFor: string[];
  capabilities: string[];
  bgStyle: string;
  visualTheme: string;
  layout: "standard" | "reverse" | "full-width";
  phase: "Paper" | "Printing" | "Binding" | "Finishing" | "Distribution";
}

export function Products() {
  // Format Sections configuration

  const sections: FormatSection[] = [
    {
      id: "hardcover",
      label: "PREMIUM FORMATS",
      title: "Hardcover Books",
      subhead: "Timeless craftsmanship. Built to last.",
      description: "Designed for publications where durability, prestige, and premium shelf presentation are paramount. Each hardcover is bound with a heavy binder's board wrapper and can be dressed in fine cloths, custom printed papers, or leathers.",
      image: "/Images/products/hardcover_showcase.png",
      idealFor: ["Trade Books", "Coffee Table Books", "Collector's Editions", "Academic References", "Children's Premium Editions"],
      capabilities: ["Case Binding", "Thread Sewing", "Jacket Covers", "Cloth Binding", "Foil Stamping", "Embossing", "Spot UV", "Ribbon Markers", "Slip Cases"],
      bgStyle: "bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] text-white",
      visualTheme: "luxury-blue",
      layout: "standard",
      phase: "Paper"
    },
    {
      id: "softcover",
      label: "EVERYDAY PUBLISHING",
      title: "Softcover Books",
      subhead: "High-volume production excellence.",
      description: "The standard for high-performance softcover manufacturing. We support high-speed offset book blocks combined with heavy soft covers, perfect bound or section sewn for dependable reading flexibility.",
      image: "/Images/products/softcover_showcase.png",
      idealFor: ["Trade Novels", "Academic Workbooks", "Classroom Materials", "Poetry Anthologies", "Commercial Catalogs"],
      capabilities: ["Perfect Binding", "Section Sewn Bindings", "PUR Adhesives", "Gloss/Matte/Soft-touch Laminations", "Custom Gatefold Covers"],
      bgStyle: "bg-blueprint-grid bg-white border-b border-gray-200/50",
      visualTheme: "blueprint",
      layout: "reverse",
      phase: "Printing"
    },
    {
      id: "layflat",
      label: "VISUAL STORYTELLING",
      title: "Lay-Flat Books",
      subhead: "Uninterrupted visual storytelling.",
      description: "Banish center-gutter splits entirely. Using custom lay-flat bindings, double pages flow together seamlessly. A premium solution for wide panoramic graphics, photography, and fine art showcases.",
      image: "/Images/products/layflat_showcase.png",
      idealFor: ["Photography Folios", "Fine Art Portfolios", "Architectural Portfolios", "Luxury Brand Monographs"],
      capabilities: ["Specialist Lay-Flat Bindings", "Continuous Image spreads", "Heavyweight Art Stocks", "Slipcase packaging"],
      bgStyle: "bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] text-white",
      visualTheme: "dark-gallery",
      layout: "full-width",
      phase: "Distribution"
    }
  ];


  return (
    <div className="bg-white relative">


      {/* SECTION INTRODUCTION (HERO) - Styled like Sustainability Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0A121E] text-white py-24 md:py-32 border-b border-gray-900 overflow-hidden select-text">

        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/products_hero_bg.png')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E] pointer-events-none" />

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.05] blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Book Manufacturing Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading max-w-4xl mx-auto">
              Precision Manufacturing Across Every Book Format
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto pt-2">
              Every publishing project has a unique purpose. From high-volume educational textbooks to premium collector's editions, our integrated manufacturing capabilities combine advanced technology, skilled craftsmanship, and sustainable practices to deliver books that meet the highest global standards.
            </p>
            <div className="h-[2px] w-32 bg-gradient-to-r from-royal-blue to-gold-accent mx-auto"></div>
            <p className="text-xs md:text-sm text-gray-400 font-sans font-light max-w-2xl mx-auto">
              Whether your priority is durability, efficiency, aesthetics, or functionality, Multivista offers tailored manufacturing solutions designed to bring every publication to life.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Discover Capabilities</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* RENDER THE 7 SECTIONS */}
      {sections.map((sec, idx) => {
        const isDark = sec.bgStyle.includes("text-white") || sec.bgStyle.includes("deep-navy") || sec.bgStyle.includes("navy-900") || sec.id === "layflat";

        return (
          <section
            key={sec.id}
            id={sec.id}
            className={`relative py-32 overflow-hidden scroll-mt-20 ${sec.bgStyle}`}
          >
            {/* Subtle printing marks/grid paper background (inverted white lines for vibrant blue background) */}
            {isDark && (
              <div className="absolute inset-0 bg-print-grid opacity-20 invert pointer-events-none" />
            )}

            {/* Background design graphics for specific themes */}
            {sec.visualTheme === "luxury-blue" && (
              <div className="absolute right-0 top-0 w-[300px] h-full bg-gradient-to-l from-gold-accent/[0.03] to-transparent pointer-events-none" />
            )}

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

              {sec.layout === "full-width" ? (
                // LAYOUT: FULL-WIDTH MONOGRAPH (Lay-Flat Section)
                <div className="space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-7 space-y-4">
                      <span className={`text-[10px] font-bold tracking-widest font-heading uppercase px-3 py-1 rounded-full ${isDark ? 'bg-white text-royal-blue shadow-sm' : 'text-royal-blue bg-royal-blue/5 border border-royal-blue/10'}`}>
                        {sec.label}
                      </span>
                      <h2 className={`text-3xl md:text-5xl font-bold tracking-tight font-heading mt-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
                        {sec.title}
                      </h2>
                      <p className={`text-xl font-light font-sans ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {sec.subhead}
                      </p>
                    </div>
                    <div className="lg:col-span-5">
                      <p className={`text-sm font-sans font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {sec.description}
                      </p>
                    </div>
                  </div>

                  {/* Huge Full Width Image Spread */}
                  <div className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[21/9] border ${isDark ? "border-white/10 bg-slate-900" : "border-gray-200/80 bg-white"} group`}>
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className={`absolute inset-0 ring-1 ring-inset ${isDark ? "ring-white/10" : "ring-black/10"} rounded-2xl pointer-events-none`} />
                  </div>

                  {/* Meta Capabilities/Ideal Footer */}
                  <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                    <div>
                      <h4 className={`text-xs font-bold font-heading uppercase tracking-widest mb-4 ${isDark ? 'text-white/80' : 'text-royal-blue'}`}>Ideal For</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {sec.idealFor.map(item => (
                          <span key={item} className={`text-xs font-sans font-light px-3 py-1.5 rounded-md border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-gray-250 text-gray-600'}`}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold font-heading uppercase tracking-widest mb-4 ${isDark ? 'text-white/80' : 'text-royal-blue'}`}>Technical Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {sec.capabilities.map(cap => (
                          <span key={cap} className={`text-xs font-sans font-semibold px-3 py-1.5 rounded-full ${isDark ? 'bg-white/15 border border-white/25 text-white' : 'bg-royal-blue/5 border border-royal-blue/10 text-royal-blue'}`}>
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // LAYOUT: SPLIT 60/40 EDITORIAL (Standard or Reverse)
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                  {/* IMAGE PANEL (occupies 60% on desktop) */}
                  <div className={`lg:col-span-7 relative ${sec.layout === "reverse" ? "lg:order-2" : "lg:order-1"}`}>

                    {/* Frame Decoration wrapper */}
                    <div className="relative group">

                      <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border ${isDark ? "border-white/10 bg-slate-900" : "border-gray-200/80 bg-white"}`}>
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 ring-1 ring-inset ${isDark ? "ring-white/10" : "ring-black/10"} rounded-2xl pointer-events-none`} />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT PANEL (occupies 40% on desktop) */}
                  <div className={`lg:col-span-5 space-y-8 ${sec.layout === "reverse" ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-4">
                      <span className={`text-[10px] font-bold tracking-widest font-heading uppercase px-3.5 py-1.5 rounded-full inline-block ${isDark ? 'bg-white text-royal-blue shadow-sm' : 'text-royal-blue bg-royal-blue/5 border border-royal-blue/10'}`}>
                        {sec.label}
                      </span>
                      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight font-heading mt-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
                        {sec.title}
                      </h2>
                      <p className={`text-lg font-light font-sans leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
                        {sec.subhead}
                      </p>
                    </div>

                    <p className={`text-sm font-sans font-light leading-relaxed ${isDark ? 'text-blue-100/90' : 'text-gray-500'}`}>
                      {sec.description}
                    </p>

                    {/* Features checklist details */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h4 className={`text-[10px] font-bold font-heading uppercase tracking-widest mb-3 ${isDark ? 'text-white/80' : 'text-royal-blue'}`}>
                          Ideal Applications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {sec.idealFor.map(item => (
                            <span
                              key={item}
                              className={`text-[11px] font-sans font-light px-2.5 py-1 rounded border ${isDark
                                  ? 'bg-white/10 border-white/20 text-white'
                                  : 'bg-white border-gray-200 text-gray-600'
                                }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className={`text-[10px] font-bold font-heading uppercase tracking-widest mb-3 ${isDark ? 'text-white/80' : 'text-royal-blue'}`}>
                          Production Details
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {sec.capabilities.map(cap => (
                            <span
                              key={cap}
                              className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full ${isDark
                                  ? 'bg-white/15 border border-white/25 text-white'
                                  : 'bg-royal-blue/5 border border-royal-blue/10 text-royal-blue'
                                }`}
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      href="/contact"
                      variant={isDark ? "outline" : "primary"}
                      className={`rounded-full px-6 py-3.5 shadow-sm inline-flex items-center gap-2 group/btn ${isDark ? 'border-white text-white hover:bg-white/10' : ''}`}
                    >
                      <span>Get Production Estimate</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>

                </div>
              )}

            </div>
          </section>
        );
      })}

      {/* SUSTAINABILITY SECTION (Full-Width Parallax) */}
      <section className="relative py-32 bg-slate-950 overflow-hidden border-t border-slate-900 select-text">

        {/* Parallax Background plate container */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
            style={{ backgroundImage: `url('/Images/sustainability_design_dark_bg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-sky-950/30 to-slate-950/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-950/80 border border-sky-800/50 px-3 py-1 rounded-full inline-block">
              Eco-Friendly Commitments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-heading mt-6 mb-4">
              Sustainability by Design
            </h2>
            <p className="text-lg text-slate-300 font-sans font-light leading-relaxed">
              Every book format is manufactured with the environment in mind. From papers sourced responsibly to green manufacturing loops, we reduce printing footprints.
            </p>
          </div>

          {/* Commitments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Responsibly Sourced Paper",
                desc: "100% FSC® Certified papers sourced strictly from responsibly managed forests and recycled origins.",
                icon: Leaf
              },
              {
                title: "Environmentally Conscious Inks",
                desc: "Strict utilization of non-toxic, child-safe, and eco-friendly soy and vegetable-based ink stocks.",
                icon: Droplet
              },
              {
                title: "Resource-Efficient Manufacturing",
                desc: "Integrated water filtration, paper recycling lines, and thermal heat recovery in high-volume press runs.",
                icon: Zap
              },
              {
                title: "Waste Reduction Initiatives",
                desc: "High precision offset printing plates and computerized bindery trims reduce paper scrap margins to under 2.5%.",
                icon: Settings
              },
              {
                title: "Carbon Reduction Programmes",
                desc: "Sourcing regional paper plates and optimizing logistics routes to minimize manufacturing carbon margins.",
                icon: Globe
              },
              {
                title: "Sustainable Packaging",
                desc: "Recyclable carton packs, bio-degradable shrink wrap wrappers, and wooden pallets shipped responsibly.",
                icon: Package
              }
            ].map((commit, idx) => {
              const Icon = commit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-md flex flex-col justify-start hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:translate-y-[-4px] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-950/80 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white font-heading mb-2">{commit.title}</h3>
                  <p className="text-xs md:text-sm text-slate-200 font-sans font-light leading-relaxed">{commit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Closing serif statement */}
          <div className="border-t border-slate-900 mt-24 pt-10 text-center max-w-3xl mx-auto">
            <p className="font-serif italic text-slate-300 text-lg md:text-xl font-medium px-4">
              "Because exceptional books shouldn't come at the planet's expense."
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
