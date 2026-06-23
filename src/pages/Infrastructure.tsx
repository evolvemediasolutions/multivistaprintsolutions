import React, { useEffect } from "react";
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
    desc: "CTP systems and plate-making technologies for accurate print preparation.",
    icon: Cpu,
    image: "/Images/prepress_capability_showcase.png"
  },
  {
    name: "Printing",
    desc: "Advanced Heidelberg and RMGT presses for high-quality production.",
    icon: Printer,
    image: "/Images/printing_capability_showcase.png"
  },
  {
    name: "Folding",
    desc: "Precision folding systems for efficient post-print processing.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Binding",
    desc: "Perfect binding, thread sewing, and book finishing solutions.",
    icon: BookOpen,
    image: "/Images/binding_capability_showcase.png"
  },
  {
    name: "Finishing",
    desc: "Spot UV, punching, and specialty enhancement technologies.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Packaging",
    desc: "Automated wrapping, sealing, and packaging systems.",
    icon: Package,
    image: "/Images/manufacturing_capabilities_showcase.png"
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


// Section 5: Key Capabilities Data
const capabilities = [
  {
    title: "High-Speed Printing",
    desc: "8 Colour Perfecting Technology for exceptional print quality.",
    icon: Printer
  },
  {
    title: "Precision Binding",
    desc: "Advanced binding systems for durable and premium publications.",
    icon: BookOpen
  },
  {
    title: "Premium Finishing",
    desc: "Spot UV and specialty finishing solutions for enhanced presentation.",
    icon: Sparkles
  },
  {
    title: "Automated Packaging",
    desc: "Efficient packaging systems ensuring safe and reliable delivery.",
    icon: Package
  }
];

export function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen selection:bg-royal-blue selection:text-white font-sans overflow-x-hidden">

      {/* SECTION 1: HERO SECTION (Styled like Industries Hero Section) */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-blueprint-grid bg-white py-24 md:py-32 border-b border-gray-200/50">

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3.5 py-1.5 rounded-full inline-block">
              Advanced Manufacturing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-deep-navy font-heading mt-6 mb-6">
              World-Class Printing & <br className="hidden md:block" />
              Packaging Infrastructure
            </h1>
            <p className="text-base md:text-lg text-gray-650 font-sans font-light leading-relaxed max-w-3xl mx-auto pt-2">
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
                className="bg-white border border-gray-150 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-350 relative group"
              >
                {/* Micro Light Blue Accent Dot in the corner */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-500 transition-colors" />
                <div className="text-3xl md:text-4xl font-extrabold text-deep-navy mb-2 font-heading">
                  {stat.val}
                </div>
                <div className="text-[10px] text-gray-500 font-sans font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: INFRASTRUCTURE CATEGORIES */}
      <section className="relative py-24 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block mb-4">
              PLANT AREAS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Infrastructure Categories
            </h2>
            <div className="w-12 h-1 bg-royal-blue mx-auto mt-4 rounded-full" />
          </div>

          {/* Clean 3-column card layout with light backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[420px] text-left"
                >
                  <div className="p-8">
                    {/* Header: Name, Icon & Small Accent Line */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[9px] font-bold text-royal-blue uppercase tracking-wider font-sans block mb-1">
                          STAGE 0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-deep-navy font-heading">
                          {cat.name}
                        </h3>
                      </div>
                      <div className="p-2.5 rounded-xl bg-sky-50 text-royal-blue border border-sky-100">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Small Light Blue Accent Line */}
                    <div className="w-10 h-0.5 bg-royal-blue mb-4" />

                    <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Machine Image */}
                  <div className="h-48 w-full overflow-hidden border-t border-gray-100 relative bg-slate-50">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED MACHINERY */}
      <section className="relative py-24 bg-[#F8FAFC] border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block mb-4">
              HARDWARE ASSETS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Featured Machinery
            </h2>
            <div className="w-12 h-1 bg-royal-blue mx-auto mt-4 rounded-full" />
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
                className="group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-250 transition-all duration-300 text-left"
              >
                {/* Large Machine Image */}
                <div className="h-60 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={mac.image}
                    alt={mac.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                {/* Text details */}
                <div className="p-6 md:p-8 space-y-2">
                  <h3 className="text-lg font-bold text-deep-navy font-heading group-hover:text-royal-blue transition-colors duration-300">
                    {mac.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
                    {mac.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5: KEY CAPABILITIES */}
      <section className="relative py-24 bg-[#f0f7ff] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block mb-4">
              PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Key Capabilities
            </h2>
            <div className="w-12 h-1 bg-royal-blue mx-auto mt-4 rounded-full" />
          </div>

          {/* 4 modern feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white border border-gray-150 rounded-2xl text-left hover:border-gray-300 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-royal-blue border border-sky-100 flex items-center justify-center group-hover:bg-royal-blue group-hover:text-white transition-all duration-350">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy font-heading">
                      {cap.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  {/* Subtle light blue bottom accent decoration */}
                  <div className="w-0 h-[2px] bg-royal-blue mt-6 group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: STATISTICS */}
      <section className="relative py-24 bg-[#F8FAFC] border-y border-gray-200/50 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/15 px-2.5 py-1 rounded-full inline-block mb-4">
              Operation Scale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mt-4 mb-4 leading-tight font-heading">
              High-Capacity Manufacturing Infrastructure
            </h2>
            <p className="text-base text-slate-650 leading-relaxed font-light font-sans">
              Equipped with advanced multi-color offset presses and automated bindery systems, our production lines are engineered to execute high-volume publishing runs with uncompromising precision and speed.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch max-w-7xl mx-auto">
            {[
              { val: 30, suffix: "+", label: "Machines", eyebrow: "MACHINERY", desc: "High-performance prepress, press, and post-press systems.", image: "/Images/infra_machines.png" },
              { val: 8, suffix: " Colour", label: "Printing", eyebrow: "TECHNOLOGY", desc: "High-fidelity double-sided printing in a single pass.", image: "/Images/infra_printing.png" },
              { val: 20, suffix: " Station", label: "Gathering System", eyebrow: "BINDERY", desc: "Synchronized collection of multi-station loops.", image: "/Images/infra_gathering.png" },
              { val: 10000, suffix: "+", label: "Covers Per Hour", eyebrow: "SPEED", desc: "High-speed cover wrapping and laminating execution.", image: "/Images/infra_covers.png" },
              { val: 2, suffix: "M+", label: "Punch Capacity / Day", eyebrow: "VOLUME", desc: "High-capacity dynamic punching and die-cutting output.", image: "/Images/infra_punch.png" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-6 shadow-sm hover:shadow-xl hover:border-royal-blue/30 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px] text-left"
              >
                <div>
                  <span className={`px-2.5 py-0.5 border text-[9px] font-bold uppercase tracking-widest rounded-full w-fit block mb-3 ${
                    idx % 2 === 0
                      ? "border-royal-blue/20 text-royal-blue bg-royal-blue/5"
                      : "border-sky-200 text-sky-600 bg-sky-50"
                  }`}>
                    {stat.eyebrow}
                  </span>
                  <div className="text-4xl font-bold tracking-tight text-deep-navy font-heading mb-1.5">
                    <CountUp to={stat.val} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-1 font-heading leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>

                {/* Bottom Visual Element */}
                <div className="mt-4 pt-3 border-t border-gray-100/80 h-[160px] rounded-b-[20px] overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              </motion.div>
            ))}
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
              className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-royal-blue hover:bg-royal-blue/90 border-none shadow-lg text-white w-full sm:w-auto inline-flex items-center justify-center gap-2"
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
