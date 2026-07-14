import React, { useEffect, useState, useRef } from "react";
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
import { cn } from "@/lib/utils";

// Section 2: Infrastructure Categories Data
const categories = [
  {
    name: "Pre Press",
    desc: "Our state-of-the-art prepress facility handles high-volume processing with surgical precision. Through computer-to-plate automation, we translate digital manuscripts into production-ready printing plates with zero detail loss.",
    icon: Cpu,
    image: "/Images/PRODUCTION STAGE/PRE PRESS.jpg",
    equipment: ["Kodak Trendsetter CTP systems", "Processless thermal plate technologies", "Automated pre-flight validation software", "High-fidelity digital proofing units"]
  },
  {
    name: "Press",
    desc: "Featuring industry-leading multi-colour presses, our press floor operates 24/7 to deliver crisp, vibrant, and uniform colour replication. Ideal for fine art books, textbooks, and trade publications.",
    icon: Printer,
    image: "/Images/PRODUCTION STAGE/PRESS.jpg",
    equipment: ["Heidelberg Speedmaster 102 8-Colour Perfector", "RMGT high-efficiency printing presses", "In-line color measurement scan systems", "Environmentally safe soy & vegetable inks"]
  },
  {
    name: "Post Press",
    desc: "Post-print precision begins with computerized folding loops. We offer diverse pagination setups and layouts, preparing printed sheets seamlessly for binding collation.",
    icon: Layers,
    image: "/Images/PRODUCTION STAGE/POST PRESS.jpg",
    equipment: ["Horizon automated folding arrays", "High-speed signatures folding machines", "Rotary suction feed folding platforms", "Continuous feed operations"]
  },
  {
    name: "Binding",
    desc: "From case-bound hardcovers to flexible paperbacks, our high-volume automated bindery preserves structurally resilient books built to stand the test of time.",
    icon: BookOpen,
    image: "/Images/PRODUCTION STAGE/BINDING.jpg",
    equipment: ["Muller Martini perfect binding lines", "Thread-sewing binding hardware", "Automated hardcover case-making equipment", "Three-knife trimming units"]
  },
  {
    name: "Finishing",
    desc: "Add visual depth and tactile luxury to dust jackets and covers. Premium finishes raise customer perception and market impact for prestige publications.",
    icon: Sparkles,
    image: "/Images/PRODUCTION STAGE/FINISHING.jpg",
    equipment: ["Sakurai Spot UV screen coating lines", "Embossing and foil-stamping hardware", "Matte & gloss lamination equipment", "Precision die-cutting capabilities"]
  },
  {
    name: "Packaging",
    desc: "Safe logistics begin inside the factory. Our automated wrapping and packing systems ensure complete protection against environmental factors during shipping.",
    icon: Package,
    image: "/Images/PRODUCTION STAGE/PACKAGING1.png",
    equipment: ["Automated poly-shrink wrapping setups", "Heavy-duty custom pallet strapping", "Moisture-controlled transport packing", "Integrated shipping label scanners"]
  }
];


const machineImages = [
  { path: "/Images/MACHINE/MACHINE 1.jpg", name: "Advanced Offset Press (Unit 1)" },
  { path: "/Images/MACHINE/MACHINE 2.jpg", name: "Precision Plate Processing" },
  { path: "/Images/MACHINE/MACHINE 3.jpg", name: "High-Speed Signature Folder" },
  { path: "/Images/MACHINE/MACHINE 4.jpg", name: "Integrated Binding Line" },
  { path: "/Images/MACHINE/MACHINE 5.jpg", name: "Digital Inspection Station" },
  { path: "/Images/MACHINE/MACHINE 6.jpg", name: "Multi-Color Press System" },
  { path: "/Images/MACHINE/MACHINE 7.jpg", name: "Automated Finishing System" },
  { path: "/Images/MACHINE/MACHINE 8.jpg", name: "Industrial Guillotine Trimmer" },
  { path: "/Images/MACHINE/MACHINE 9.jpg", name: "Heidelberg Speedmaster Press" },
  { path: "/Images/MACHINE/MACHINE 10.jpg", name: "Muller Martini Ventura Sewing" },
  { path: "/Images/MACHINE/MACHINE 11.jpg", name: "Prepress Platesetter Autoloader" },
  { path: "/Images/MACHINE/MACHINE 12.jpg", name: "Automatic Print Inspection Line" },
  { path: "/Images/MACHINE/MACHINE 13.jpg", name: "High-Volume Perfect Binder" },
  { path: "/Images/MACHINE/MACHINE 14.jpg", name: "Environmentally Safe Ink Controls" },
  { path: "/Images/MACHINE/MACHINE 15.jpg", name: "Poly-Shrink Wrap Packaging" },
  { path: "/Images/MACHINE/MACHINE 16.jpg", name: "Pallet Strapping Station" },
  { path: "/Images/MACHINE/MACHINE 17.jpg", name: "Processless Thermal Imaging" },
  { path: "/Images/MACHINE/MACHINE 18.jpg", name: "RMGT 9 Series Offset Press" },
  { path: "/Images/MACHINE/MACHINE 19.jpg", name: "Heavy-Duty Case Making Line" }
];

const awardsList = [
  { path: "/Images/AWARDS/AWARD 9.jpg", title: "National Excellence in Printing", category: "Award Category", desc: "Recognizing outstanding achievement in print precision, color accuracy, and overall execution across national publications.", rotate: false },
  { path: "/Images/AWARDS/AWARD 10.jpg", title: "Best Printer of the Year", category: "Quality Accolade", desc: "Honoring our consistent commitment to manufacturing quality and zero-defect output standards.", rotate: true },
  { path: "/Images/AWARDS/AWARD 3.jpg", title: "Book Production Laurels", category: "Publishing Benchmark", desc: "Awarded for exceptional bookbindery strength, layout fidelity, and publication durability.", rotate: true },
  { path: "/Images/AWARDS/AWARD 4.jpg", title: "Sustainable Printing Award", category: "Eco Champion", desc: "Acknowledging our industry leadership in low-carbon paper sourcing and solar-powered operations.", rotate: true },
  { path: "/Images/AWARDS/AWARD 5.jpg", title: "Outstanding Export Performance", category: "Global Reach", desc: "Commending our supply chain efficiency in delivering print products to international markets.", rotate: true },
  { path: "/Images/AWARDS/AWARD 6.jpg", title: "Quality & Precision Benchmark", category: "Process Excellence", desc: "Celebrating our compliance with ISO standards and rigorous quality assurance protocols.", rotate: true },
  { path: "/Images/AWARDS/AWARD 7.jpg", title: "Green Manufacturing Leadership", category: "ESG Accolade", desc: "Presented for pioneering efforts in waste reduction, water conservation, and green logistics.", rotate: false },
  { path: "/Images/AWARDS/AWARD 8.jpg", title: "Industry Pioneer Recognition", category: "Legacy Achievement", desc: "Honoring nearly five decades of shaping the publishing and printing ecosystem globally.", rotate: false }
];

export function Infrastructure() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const machineScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const scrollMachine = (direction: "left" | "right") => {
    if (machineScrollRef.current) {
      const { scrollLeft, clientWidth } = machineScrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      machineScrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const track = machineScrollRef.current;
    if (!track) return;

    let animationFrameId: number;
    const scrollSpeed = 0.55; // Slow, premium auto-scroll speed
    let currentScroll = track.scrollLeft;

    const scrollStep = () => {
      // Pause animation if user is hovering
      if (track.matches(":hover")) {
        currentScroll = track.scrollLeft;
        animationFrameId = requestAnimationFrame(scrollStep);
        return;
      }

      currentScroll += scrollSpeed;

      const halfWidth = track.scrollWidth / 2;
      if (currentScroll >= halfWidth) {
        currentScroll -= halfWidth;
        track.scrollLeft = currentScroll;
      } else {
        track.scrollLeft = currentScroll;
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen selection:bg-royal-blue selection:text-white font-sans overflow-x-hidden">

      {/* SECTION 1: HERO SECTION (Styled like Sustainability Hero Section) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#0A121E] text-white py-24 md:py-32 border-b border-gray-900 overflow-hidden">

        {/* Layer 1: Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/HERO SECTIONS/INFRASTRUCTURE HERO.jpeg')`
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
              { val: "1,400", label: "Plates Produced Per Day" },
              { val: "15 Million", label: "Books Produced Annually" },
              { val: "18–21 Days", label: "Standard Production Time" },
              { val: "Capacity", label: "Annual Printing / Impressions" }
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

      {/* SECTION: MACHINERY INTERACTIVE CAROUSEL SHOWCASE */}
      <section className="relative py-24 bg-[#EEEEEE] border-b border-slate-200/50 overflow-hidden select-text">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-print-grid opacity-15 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header Row with Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-4 max-w-2xl">
              <span className="text-[9px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/20 px-2.5 py-1.5 rounded-full inline-block">
                Advanced Technology
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight animate-fade-in">
                Our Machine Fleet
              </h2>
              <div className="w-12 h-1 bg-royal-blue mt-4 rounded-full" />
              <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed pt-2">
                Browse our state-of-the-art prepress, press, and postpress machinery that powers high-volume, premium book production.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex gap-3 shrink-0 self-start md:self-end">
              <button
                onClick={() => scrollMachine("left")}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white text-deep-navy hover:text-royal-blue hover:border-royal-blue hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer outline-none shadow-sm"
                aria-label="Previous Machines"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={() => scrollMachine("right")}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white text-deep-navy hover:text-royal-blue hover:border-royal-blue hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer outline-none shadow-sm"
                aria-label="Next Machines"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track Container */}
          <div 
            ref={machineScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-4"
          >
            {[...machineImages, ...machineImages].map((img, index) => (
              <div
                key={index}
                className="flex flex-col shrink-0 w-[290px] sm:w-[480px] group"
              >
                {/* Image Container (Framed Box with Hover Effect) */}
                <div className="relative aspect-[16/10] bg-white border border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center p-3 shadow-sm hover:shadow-xl hover:border-royal-blue/20 hover:-translate-y-1 transition-all duration-355">
                  <img
                    src={img.path}
                    alt={img.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* SECTION 3.5: AWARDS & RECOGNITIONS CAROUSEL */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden font-sans select-text border-b border-white/5">
        {/* Background Image Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-70 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/AWARDS/AWARD 8.jpg')" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-10"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-print-grid opacity-15 pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header Row with Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-4 max-w-2xl">
              <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1.5 rounded-full inline-block">
                Accolades
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
                Awards & Recognitions
              </h2>
              <div className="w-12 h-1 bg-sky-500 mt-4 rounded-full" />
              <p className="text-sm md:text-base text-slate-200 font-sans font-light leading-relaxed">
                For nearly five decades, Multivista has been honored with numerous national and international awards for print quality, design excellence, sustainable manufacturing, and customer service.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex gap-3 shrink-0 self-start md:self-end">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:text-sky-400 hover:border-sky-400 hover:bg-white/15 transition-all duration-300 flex items-center justify-center cursor-pointer outline-none shadow-sm"
                aria-label="Previous Awards"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:text-sky-400 hover:border-sky-400 hover:bg-white/15 transition-all duration-300 flex items-center justify-center cursor-pointer outline-none shadow-sm"
                aria-label="Next Awards"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4"
          >
            {awardsList.map((award, index) => (
              <div
                key={index}
                className="flex flex-col shrink-0 w-[280px] sm:w-[320px] snap-start group"
              >
                {/* Image Container with standard proportions (Glassmorphic Frame) */}
                <div className="relative aspect-[3/4] bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden flex items-center justify-center p-5 shadow-xl hover:shadow-2xl hover:border-sky-500/30 hover:-translate-y-1.5 transition-all duration-350">
                  <div className="absolute inset-0 bg-slate-950/40 pointer-events-none z-0" />
                  <img
                    src={award.path}
                    alt={award.title}
                    className={cn(
                      "max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 z-10",
                      award.rotate ? "rotate-[-90deg] scale-[1.35]" : ""
                    )}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-transparent pointer-events-none z-10" />
                </div>
                
                {/* Description Text */}
                <div className="pt-4 px-2 text-left space-y-1 text-white">
                  <span className="text-[9px] font-bold text-sky-400 tracking-wider uppercase font-heading bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded inline-block">
                    {award.category}
                  </span>
                  <h4 className="text-sm font-bold font-heading leading-snug group-hover:text-sky-400 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-[11px] text-slate-350 font-sans font-light leading-normal line-clamp-2">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3.7: CORPORATE TOUR VIDEO */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden font-sans select-text border-b border-white/5">
        {/* Decorative lighting background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-print-grid opacity-10 pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[9px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-2.5 py-1.5 rounded-full inline-block mb-4">
              Infrastructure Tour
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Experience the Facility in Motion
            </h2>
            <div className="w-12 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
            <p className="text-sm md:text-base text-slate-300 font-sans font-light leading-relaxed mt-4">
              Take a virtual walkthrough of our state-of-the-art print manufacturing plant. Witness the synergy of scale, speed, and precision in our integrated production lines.
            </p>
          </div>

          {/* Video Container (Premium Glassmorphic Frame) */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-slate-950/40 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4 hover:border-sky-500/30 hover:shadow-sky-500/5 transition-all duration-550 group">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/BXPseWa3D80?rel=0"
                  title="Multivista Print Solutions - Infrastructure & Facility Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATED PRODUCTION STAGES */}
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
                      <div className="flex items-center justify-end mb-6">
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

      {/* SECTION 5: CTA */}
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
