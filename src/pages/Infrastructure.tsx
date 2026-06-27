import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Printer,
  Layers,
  Package,
  BookOpen,
  Sparkles,
  MapPin,
  ArrowRight,
  Download,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Section 2: Infrastructure Categories Data
const categories = [
  {
    name: "Pre Press",
    desc: "Our state-of-the-art prepress facility handles high-volume processing with surgical precision. Through computer-to-plate automation, we translate digital manuscripts into production-ready printing plates with zero detail loss.",
    icon: Cpu,
    image: "/Images/prepress_capability_showcase.png",
    equipment: ["Kodak Trendsetter CTP systems", "Processless thermal plate technologies", "Automated pre-flight validation software", "High-fidelity digital proofing units"]
  },
  {
    name: "Printing",
    desc: "Featuring industry-leading multi-colour presses, our press floor operates 24/7 to deliver crisp, vibrant, and uniform colour replication. Ideal for fine art books, textbooks, and trade publications.",
    icon: Printer,
    image: "/Images/printing_capability_showcase.png",
    equipment: ["Heidelberg Speedmaster 102 8-Colour Perfector", "RMGT high-efficiency printing presses", "In-line color measurement scan systems", "Environmentally safe soy & vegetable inks"]
  },
  {
    name: "Folding",
    desc: "Post-print precision begins with computerized folding loops. We offer diverse pagination setups and layouts, preparing printed sheets seamlessly for binding collation.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    equipment: ["Horizon automated folding arrays", "High-speed signatures folding machines", "Rotary suction feed folding platforms", "Continuous feed operations"]
  },
  {
    name: "Binding",
    desc: "From case-bound hardcovers to flexible paperbacks, our high-volume automated bindery preserves structurally resilient books built to stand the test of time.",
    icon: BookOpen,
    image: "/Images/binding_capability_showcase.png",
    equipment: ["Muller Martini perfect binding lines", "Thread-sewing binding hardware", "Automated hardcover case-making equipment", "Three-knife trimming units"]
  },
  {
    name: "Finishing",
    desc: "Add visual depth and tactile luxury to dust jackets and covers. Premium finishes raise customer perception and market impact for prestige publications.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    equipment: ["Sakurai Spot UV screen coating lines", "Embossing and foil-stamping hardware", "Matte & gloss lamination equipment", "Precision die-cutting capabilities"]
  },
  {
    name: "Packaging",
    desc: "Safe logistics begin inside the factory. Our automated wrapping and packing systems ensure complete protection against environmental factors during shipping.",
    icon: Package,
    image: "/Images/manufacturing_capabilities_showcase.png",
    equipment: ["Automated poly-shrink wrapping setups", "Heavy-duty custom pallet strapping", "Moisture-controlled transport packing", "Integrated shipping label scanners"]
  }
];

// Section 3: Featured Machinery Data
const machines = [
  {
    name: "Heidelberg Speedmaster 102",
    desc: "High-performance 8-colour perfecting printing press.",
    image: "/Images/heidelberg_speedmaster.png"
  },
  {
    name: "Kodak Trendsetter 800",
    desc: "Advanced Computer-to-Plate imaging system.",
    image: "/Images/kodak_trendsetter.png"
  },
  {
    name: "Muller Martini",
    desc: "Industrial binding and book production system.",
    image: "/Images/muller_martini.png"
  },
  {
    name: "Horizon Folder",
    desc: "Precision folding machine for commercial printing.",
    image: "/Images/horizon_folder.png"
  },
  {
    name: "Sakurai Spot UV",
    desc: "Premium finishing and coating technology.",
    image: "/Images/sakurai_spot_uv.png"
  },
  {
    name: "Polar 115 Cutter",
    desc: "High-precision paper cutting system.",
    image: "/Images/polar_cutter.png"
  }
];

const machineImages = [
  { path: "/Machines Image/Digital Print Inspection System (Automatic Print Inspection Machine).JPG", name: "Automatic Print Inspection System" },
  { path: "/Machines Image/Digital Print Inspection System.JPG", name: "Digital Print Inspection System" },
  { path: "/Machines Image/Freedom 5K Perfect Binder - 1.JPG", name: "Freedom 5K Perfect Binder" },
  { path: "/Machines Image/Freedom 5K Perfect Binder.JPG", name: "High-Volume Perfect Binder" },
  { path: "/Machines Image/Paper Folding Machine.JPG", name: "Automated Signature Folder" },
  { path: "/Machines Image/RMGT 9 Series Sheetfed Offset Offset Printing Press - 4.JPG", name: "RMGT 9 Series Sheetfed Offset Press" },
  { path: "/Machines Image/RMGT 9 Series Sheetfed Offset Printing Press - 1.JPG", name: "RMGT 9 Series Multi-Color Press" },
  { path: "/Machines Image/RMGT 9 Series Sheetfed Offset Printing Press - 3.JPG", name: "RMGT 9 Series High-Speed Press" },
  { path: "/Machines Image/RMGT 9 Series Sheetfed Offset Printing Press.JPG", name: "RMGT 9 Series Sheetfed Offset Printing Press" },
  { path: "/Machines Image/RMGT 928PF-6+CC+LED (6-color with Coater) - with fouder.JPG", name: "RMGT 6-Color Offset Press with Coater" },
  { path: "/Machines Image/RMGT 928PF-6+CC+LED (6-color with Coater).png", name: "RMGT 6-Color LED Offset Press" },
  { path: "/Machines Image/SMT Pick-and-Place Machine.JPG", name: "SMT Pick-and-Place Machine" },
];

export function Infrastructure() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen selection:bg-royal-blue selection:text-white font-sans overflow-x-hidden">

      {/* SECTION 1: HERO SECTION (Styled like Sustainability Hero Section) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#0A121E] text-white py-24 md:py-32 border-b border-gray-900 overflow-hidden">

        {/* Layer 1: Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/infra_hero_bg.png')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E] pointer-events-none" />

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.05] blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center w-full mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Advanced Manufacturing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-heading mt-6 mb-6">
              World-Class Printing & <br className="hidden md:block" />
              Packaging Infrastructure
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto pt-2">
              Equipped with industry-leading printing, binding, finishing, and packaging technologies, our integrated facility delivers precision, quality, and speed at every stage of production.
            </p>
            <div className="h-[2px] w-32 bg-gradient-to-r from-royal-blue to-sky-400 mx-auto mt-8"></div>
          </motion.div>

          {/* 4 statistics cards below */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16"
          >
            {[
              { val: "30+", label: "Industrial Machines" },
              { val: "8", label: "Colour Perfecting Technology" },
              { val: "End-to-End", label: "Production Workflow" },
              { val: "Global", label: "Manufacturing Standards" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:bg-white/10 transition-all duration-350 relative group"
              >
                {/* Micro Light Blue Accent Dot in the corner */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-500 transition-colors" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-heading">
                  {stat.val}
                </div>
                <div className="text-[10px] text-gray-300 font-sans font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Discover Our Plant</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ x: [-120, 120] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION: MACHINERY AUTO-SCROLL SHOWCASE */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200/50 overflow-hidden select-none">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-print-grid opacity-15 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
          <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/20 px-2.5 py-1.5 rounded-full inline-block mb-3">
            Hardware Assets
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy font-heading">
            Our Machine Fleet
          </h2>
          <div className="w-12 h-1 bg-royal-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Contained Slider Wrapper */}
        <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden border border-slate-200/60 bg-white shadow-xl p-6 md:p-8">
          
          {/* Edge Gradient Fades for a premium floating transition */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="overflow-hidden w-full">
            <div className="animate-marquee flex gap-6">
              {[...machineImages, ...machineImages].map((img, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[24rem] h-64 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50 group hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={img.path}
                    alt={img.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle label overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-[9px] font-bold text-sky-300 tracking-wider uppercase mb-1">
                      Operational Asset
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {img.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCTION PIPELINE SHOWCASE */}
      <section className="relative py-28 bg-[#EEEEEE] overflow-hidden select-text">
        {/* Subtle printing marks/grid paper background (dark lines for light background) */}
        <div className="absolute inset-0 bg-print-grid opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/20 px-2.5 py-1 rounded-full inline-block mb-4">
              Production Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Integrated Production Stages
            </h2>
            <div className="w-12 h-1 bg-royal-blue mx-auto mt-4 rounded-full" />
          </div>

          {/* Stepper Tabs */}
          <div className="flex flex-nowrap lg:flex-wrap items-center justify-start lg:justify-center gap-3 mb-16 pb-4 overflow-x-auto scrollbar-none border-b border-slate-200">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isActive = activeCategoryIdx === index;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategoryIdx(index)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 border shrink-0 ${
                    isActive
                      ? "bg-white text-royal-blue border-slate-200 shadow-lg scale-103"
                      : "bg-white/30 text-slate-700 border-white/40 hover:bg-white/50 hover:text-royal-blue"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display Panel */}
          <div className="min-h-[480px]">
            {categories.map((cat, index) => {
              if (index !== activeCategoryIdx) return null;
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left content block (Glassmorphic Vibrant Blue) */}
                  <div className="lg:col-span-6 bg-gradient-to-br from-[#0057B8] via-[#007CDB] to-[#0EA5E9] p-8 md:p-10 rounded-[28px] text-white text-left shadow-2xl flex flex-col justify-between min-h-[420px]">
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-bold text-cyan-200 tracking-wider font-sans uppercase">
                          Stage 0{index + 1} of 06
                        </span>
                        <div className="p-3 rounded-2xl bg-white/15 border border-white/10 text-white shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-heading mb-4 text-white">
                        {cat.name} Stage
                      </h3>
                      <p className="text-sm md:text-base text-blue-50 font-sans font-light leading-relaxed mb-8">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Stage capabilities list */}
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-200 mb-4 font-sans">
                        Key Capabilities & Assets
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {cat.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-white/95 font-sans font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right image block */}
                  <div className="lg:col-span-6">
                    <div className="relative group overflow-hidden rounded-[28px] border border-white/40 shadow-xl aspect-[4/3] w-full">
                      {/* Image zoom effect */}
                      <img
                        src={cat.image}
                        alt={`${cat.name} equipment`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Interactive shine overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: FEATURED MACHINERY */}
      <section className="relative py-32 bg-slate-950 overflow-hidden border-y border-slate-900 select-text">
        {/* Parallax Background container */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
            style={{ backgroundImage: `url('/Images/featured_machinery_dark_bg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-sky-950/20 to-slate-950/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-950/80 border border-sky-800/50 px-2.5 py-1 rounded-full inline-block mb-4">
              HARDWARE ASSETS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Featured Machinery
            </h2>
            <div className="w-12 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Simple grid showcasing key machines with large images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((mac, index) => (
              <motion.div
                key={mac.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-slate-900/60 hover:border-sky-500/30 hover:translate-y-[-4px] transition-all duration-300 text-left flex flex-col h-full"
              >
                {/* Large Machine Image */}
                <div className="h-60 w-full overflow-hidden bg-slate-950/50 relative border-b border-white/5">
                  <img
                    src={mac.image}
                    alt={mac.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Text details */}
                <div className="p-6 md:p-8 space-y-2 flex-grow">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-sky-300 transition-colors duration-300">
                    {mac.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-200 font-sans font-light leading-relaxed">
                    {mac.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 6: CAPACITY & SCALE */}
      <section className="relative py-28 bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] overflow-hidden border-t border-white/10 select-text">
        {/* Inverted print grid background */}
        <div className="absolute inset-0 bg-print-grid opacity-20 invert pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[10px] font-bold text-white tracking-widest font-heading uppercase bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full inline-block">
                Production Scale
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-[1.15]">
                Built for High-Volume Publishing
              </h2>
              <p className="text-base text-blue-50 font-sans font-light leading-relaxed">
                Our plant is custom-engineered to execute complex, high-capacity printing tasks under strict timelines. With fully integrated preparation, offset press units, and automated binderies, we offer scalability that guarantees speed without sacrificing quality.
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white hover:text-royal-blue hover:border-white transition-all duration-300 group font-sans"
                >
                  Request Plant Capacity Sheet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Asymmetric Metrics Grid */}
            <div className="lg:col-span-7 grid grid-cols-6 gap-6 w-full">
              {[
                { 
                  val: 30, 
                  suffix: "+", 
                  label: "Machinery Assets", 
                  desc: "High-performance prepress, press, and post-press systems.",
                  gridClass: "col-span-6 sm:col-span-3"
                },
                { 
                  val: 8, 
                  suffix: " Colour", 
                  label: "Perfector Passes", 
                  desc: "High-fidelity double-sided printing in a single pass.",
                  gridClass: "col-span-6 sm:col-span-3"
                },
                { 
                  val: 20, 
                  suffix: " Station", 
                  label: "Gathering loops", 
                  desc: "Collation machinery with multi-station loops.",
                  gridClass: "col-span-6 sm:col-span-2"
                },
                { 
                  val: 10000, 
                  suffix: "+", 
                  label: "Covers / Hour", 
                  desc: "High-speed cover wrapping and laminating.",
                  gridClass: "col-span-6 sm:col-span-2"
                },
                { 
                  val: 2, 
                  suffix: "M+", 
                  label: "Daily Punch Capacity", 
                  desc: "Dynamic punching and die-cutting.",
                  gridClass: "col-span-6 sm:col-span-2"
                }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`${stat.gridClass} bg-white/10 border border-white/20 backdrop-blur-lg rounded-[20px] p-6 text-left hover:bg-white/15 hover:border-white/35 hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-1.5">
                    <CountUp to={stat.val} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-white font-bold text-base font-heading mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-blue-50 font-sans text-xs font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-gray-200/50 bg-[#0A2342] text-white">
        {/* Facility background with overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600')`
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A2342] via-[#0A2342]/90 to-[#0A2342]" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading leading-tight text-white">
              Ready to Print at Scale?
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Partner with Multivista Print Solutions and leverage advanced manufacturing capabilities designed for quality, efficiency, and reliability.
            </p>
          </motion.div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              variant="primary"
              className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider shadow-lg w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider border-white/30 text-white hover:bg-white/10 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <span>Download Brochure</span>
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Infrastructure;
