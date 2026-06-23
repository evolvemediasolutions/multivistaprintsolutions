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
      bgStyle: "bg-gradient-to-br from-deep-navy via-navy-900 to-[#07172B] text-white",
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
      bgStyle: "bg-gradient-to-b from-[#121E2E] to-deep-navy text-white",
      visualTheme: "dark-gallery",
      layout: "full-width",
      phase: "Distribution"
    }
  ];


  return (
    <div className="bg-white relative">
      

      {/* SECTION INTRODUCTION (HERO) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-blueprint-grid bg-white py-32 border-b border-gray-200/50 select-text">
        {/* Radial lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-royal-blue/[0.04] blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-gold-accent/[0.03] blur-3xl pointer-events-none"></div>

        {/* Floating book line-art graphics vector backdrop */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#0A2342" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="90%" y1="10%" x2="20%" y2="90%" stroke="#0A2342" strokeWidth="0.5" strokeDasharray="3 3" />
            {/* Hardcover outline blueprint box */}
            <rect x="75%" y="15%" width="120" height="160" rx="4" fill="none" stroke="#0057B8" strokeWidth="1" transform="rotate(15 75% 15%)" />
            <circle cx="20%" cy="30%" r="60" fill="none" stroke="#0057B8" strokeWidth="0.75" strokeDasharray="2 4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block">
              Book Manufacturing Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-deep-navy leading-tight font-heading max-w-4xl mx-auto">
              Precision Manufacturing Across Every Book Format
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Every publishing project has a unique purpose. From high-volume educational textbooks to premium collector's editions, our integrated manufacturing capabilities combine advanced technology, skilled craftsmanship, and sustainable practices to deliver books that meet the highest global standards.
            </p>
            <div className="h-[2px] w-32 bg-gradient-to-r from-royal-blue to-gold-accent mx-auto"></div>
            <p className="text-sm text-gray-500 font-sans font-light max-w-2xl mx-auto">
              Whether your priority is durability, efficiency, aesthetics, or functionality, Multivista offers tailored manufacturing solutions designed to bring every publication to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RENDER THE 7 SECTIONS */}
      {sections.map((sec, idx) => {
        const isDark = sec.bgStyle.includes("deep-navy") || sec.bgStyle.includes("navy-900") || sec.id === "layflat";
        
        return (
          <section 
            key={sec.id}
            id={sec.id}
            className={`relative py-32 overflow-hidden scroll-mt-20 ${sec.bgStyle}`}
          >
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
                      <span className={`text-[10px] font-bold tracking-widest font-heading uppercase px-3 py-1 rounded-full ${isDark ? 'text-gold-accent bg-gold-accent/5 border border-gold-accent/10' : 'text-royal-blue bg-royal-blue/5 border border-royal-blue/10'}`}>
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
                      <h4 className="text-xs font-bold font-heading uppercase tracking-widest text-gold-accent mb-4">Ideal For</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {sec.idealFor.map(item => (
                          <span key={item} className="text-xs font-sans font-light px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-heading uppercase tracking-widest text-gold-accent mb-4">Technical Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {sec.capabilities.map(cap => (
                          <span key={cap} className="text-xs font-sans font-semibold px-3 py-1.5 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent">
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
                      <span className={`text-[10px] font-bold tracking-widest font-heading uppercase px-3.5 py-1.5 rounded-full inline-block ${isDark ? 'text-gold-accent bg-gold-accent/5 border border-gold-accent/10' : 'text-royal-blue bg-royal-blue/5 border border-royal-blue/10'}`}>
                        {sec.label}
                      </span>
                      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight font-heading mt-4 ${isDark ? 'text-white' : 'text-navy-900'}`}>
                        {sec.title}
                      </h2>
                      <p className={`text-lg font-light font-sans leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {sec.subhead}
                      </p>
                    </div>

                    <p className={`text-sm font-sans font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {sec.description}
                    </p>

                    {/* Features checklist details */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h4 className={`text-[10px] font-bold font-heading uppercase tracking-widest mb-3 ${isDark ? 'text-gold-accent' : 'text-royal-blue'}`}>
                          Ideal Applications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {sec.idealFor.map(item => (
                            <span 
                              key={item} 
                              className={`text-[11px] font-sans font-light px-2.5 py-1 rounded border ${
                                isDark 
                                  ? 'bg-white/5 border-white/10 text-gray-300' 
                                  : 'bg-white border-gray-200 text-gray-600'
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className={`text-[10px] font-bold font-heading uppercase tracking-widest mb-3 ${isDark ? 'text-gold-accent' : 'text-royal-blue'}`}>
                          Production Details
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {sec.capabilities.map(cap => (
                            <span 
                              key={cap} 
                              className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full ${
                                isDark 
                                  ? 'bg-gold-accent/15 border border-gold-accent/30 text-gold-accent' 
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
      <section className="relative py-32 bg-white overflow-hidden border-t border-gray-150 select-text">
        
        {/* Parallax Background plate container */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.07]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=1200')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-50 border border-sky-100 px-3 py-1 rounded-full inline-block">
              Eco-Friendly Commitments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-4">
              Sustainability by Design
            </h2>
            <p className="text-lg text-gray-500 font-sans font-light leading-relaxed">
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
                  className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col justify-start hover:shadow-md hover:border-sky-200/50 hover:translate-y-[-2px] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-deep-navy font-heading mb-2">{commit.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">{commit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Closing serif statement */}
          <div className="border-t border-gray-150 mt-24 pt-10 text-center max-w-3xl mx-auto">
            <p className="font-serif italic text-gray-500 text-lg md:text-xl font-medium px-4">
              "Because exceptional books shouldn't come at the planet's expense."
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
