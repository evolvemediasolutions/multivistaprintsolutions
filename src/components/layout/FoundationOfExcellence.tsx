import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, CheckCircle2, Users, Settings, ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FoundationOfExcellence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const pillars = [
    {
      tag: "Pillar 01",
      badge: "Science-Based",
      badgeStyle: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
      Icon: Leaf,
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
      title: "Sustainability",
      subtitle: "Science-Based Sustainability Commitments",
      description:
        "Driving measurable environmental impact through responsible sourcing, carbon reduction, and internationally recognized sustainability initiatives.",
      imagePath: "/Images/FOUNDATION OF EXCELLENCE/SUSTAINABILITY.jpg",
    },
    {
      tag: "Pillar 02",
      badge: "End-to-End",
      badgeStyle: "border-sky-500/30 text-sky-300 bg-sky-500/10",
      Icon: CheckCircle2,
      iconBg: "bg-sky-500/20",
      iconColor: "text-sky-300",
      title: "Quality",
      subtitle: "Integrated Quality Systems",
      description:
        "From prepress to final dispatch, every stage is monitored to meet the highest global publishing standards for durability and color precision.",
      imagePath: "/Images/FOUNDATION OF EXCELLENCE/QUALITY NEW.jpg",
    },
    {
      tag: "Pillar 03",
      badge: "200+ Experts",
      badgeStyle: "border-amber-500/30 text-amber-300 bg-amber-500/10",
      Icon: Users,
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-300",
      title: "People",
      subtitle: "Skilled Professionals",
      description:
        "Combining decades of industrial craftsmanship with advanced modern printing technologies to manage complex print orders.",
      imagePath: "/Images/FOUNDATION OF EXCELLENCE/PEOPLE.jpeg",
    },
    {
      tag: "Pillar 04",
      badge: "Continuous Investment",
      badgeStyle: "border-sky-500/30 text-sky-300 bg-sky-500/10",
      Icon: Settings,
      iconBg: "bg-sky-500/20",
      iconColor: "text-sky-300",
      title: "Technology",
      subtitle: "Investment in Innovation",
      description:
        "Continuous investments in world-class offset presses, digital binding, and automated workflows ensure consistency and scale.",
      imagePath: "/Images/FOUNDATION OF EXCELLENCE/TECHNOLOGY.jpg",
    },
  ];

  const handleMobileToggle = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
  };

  const activePillar = pillars[activeIndex];

  return (
    <section className="relative py-32 bg-[#0A121E] text-white border-t border-gray-900/50 overflow-hidden select-text">
      {/* Background Image Layer with CSS Parallax (bg-fixed) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: `url('/Images/FOUNDATION OF EXCELLENCE/FOE.JPG')`
        }}
      />

      {/* Overlay Dark Gradients for perfect text contrast & blending */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#0A121E] via-transparent to-[#0A121E] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-[#0A121E]/95 via-[#0A121E]/70 to-transparent pointer-events-none" />

      {/* Background paper dot grid texture */}
      <div className="absolute inset-0 bg-paper-dots opacity-10 pointer-events-none z-10"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-12 opacity-5 pointer-events-none animate-float-slow hidden lg:block z-10">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#ffffff" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" fillOpacity="0.05" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-12 opacity-5 pointer-events-none animate-float-medium hidden lg:block z-10">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#ffffff" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" fillOpacity="0.05" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <SectionHeader title="Our Foundation of Excellence" align="center" className="text-sky-400 border-sky-500/20 bg-sky-500/10" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 mb-6 leading-tight font-heading">
            Built on Responsibility, Quality, Talent & Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-sans">
            Every book we manufacture is backed by sustainable practices, rigorous quality systems, skilled professionals, and continuous technological advancement.
          </p>
        </AnimatedSection>

        {/* Pillars Layout Area */}
        <div className="relative z-10">

          {/* DESKTOP LAYOUT: Split-Panel Tabs Accordion */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch min-h-[480px]">

            {/* Left Tabs Stack */}
            <div className="col-span-5 flex flex-col gap-4 justify-center relative z-10">
              {pillars.map((pillar, index) => {
                const isActive = activeIndex === index;
                const Icon = pillar.Icon;

                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex items-center text-left rounded-[20px] p-5 border transition-all duration-300 ease-out select-none cursor-pointer w-full ${isActive
                      ? "bg-white/[0.07] border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl ring-1 ring-white/10"
                      : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/5"
                      }`}
                  >
                    {/* Left vertical active border indicator */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-full transition-all duration-300 origin-left ${isActive ? "bg-sky-400 scale-y-100" : "bg-transparent scale-y-50 group-hover:bg-white/30"
                        }`}
                    ></div>

                    {/* Content Container */}
                    <div className="flex items-center gap-4 pl-3 w-full">
                      {/* Icon with colored circle backdrop */}
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 shadow-sm ${isActive
                          ? `${pillar.iconBg} ${pillar.iconColor} scale-110 ring-1 ring-white/10`
                          : "bg-white/10 text-slate-300 group-hover:text-white group-hover:bg-white/20"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Labels */}
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold tracking-wider font-heading uppercase mb-0.5 transition-colors duration-300 ${isActive ? 'text-sky-400' : 'text-slate-400 group-hover:text-sky-300'
                          }`}>
                          {pillar.tag}
                        </span>
                        <h3 className={`text-lg font-bold font-heading transition-colors duration-300 ${isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                          }`}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Showcase Card */}
            <div className="col-span-7 flex relative z-10">
              <div className="w-full bg-white/[0.07] backdrop-blur-xl rounded-[28px] border border-white/20 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col justify-between relative overflow-hidden ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      {/* Top Header Row with Pillar Tag and Badge */}
                      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                        <span className="text-xs font-bold text-gray-400 tracking-wider font-heading uppercase">
                          {activePillar.tag} Overview
                        </span>
                        <span
                          className={`px-3 py-1 border text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm ${activePillar.badgeStyle}`}
                        >
                          {activePillar.badge}
                        </span>
                      </div>

                      {/* Main Title & Subtitle styled like user screenshot */}
                      <h3 className="text-3xl md:text-4xl font-extrabold text-sky-400 font-heading mb-1.5">
                        {activePillar.title}
                      </h3>
                      <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-6 font-heading">
                        {activePillar.subtitle}
                      </h4>

                      {/* Very thin divider line like screenshot */}
                      <div className="w-full h-[1px] bg-white/10 mb-6" />

                      {/* Description */}
                      <p className="text-gray-300 font-sans text-sm leading-relaxed font-light">
                        {activePillar.description}
                      </p>
                    </div>

                    {/* Bottom Image Showcase */}
                    <div className="mt-8 h-[200px] rounded-[20px] overflow-hidden border border-white/10 shadow-sm relative group/img">
                      <img
                        src={activePillar.imagePath}
                        alt={activePillar.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-103"
                      />
                      {/* Soft overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* MOBILE & TABLET LAYOUT: Stacked Vertical Accordion */}
          <div className="lg:hidden flex flex-col gap-4 relative z-10">
            {pillars.map((pillar, index) => {
              const isExpanded = mobileExpandedIndex === index;
              const Icon = pillar.Icon;

              return (
                <div
                  key={index}
                  className={`rounded-[20px] border overflow-hidden transition-all duration-300 ${isExpanded
                    ? "bg-white/[0.07] border-white/20 backdrop-blur-xl shadow-lg ring-1 ring-white/10"
                    : "bg-white/5 border-white/5 shadow-sm"
                    }`}
                >
                  {/* Collapsible Header */}
                  <button
                    onClick={() => handleMobileToggle(index)}
                    className="flex justify-between items-center w-full p-5 text-left select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isExpanded ? `${pillar.iconBg} ${pillar.iconColor}` : 'bg-white/5 text-gray-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">
                          {pillar.tag}
                        </span>
                        <h3 className="text-base font-bold text-white font-heading">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 border text-[8px] font-bold uppercase tracking-widest rounded-full ${pillar.badgeStyle}`}>
                        {pillar.badge}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? "transform rotate-180 text-sky-400" : ""
                          }`}
                      />
                    </div>
                  </button>

                  {/* Collapsible Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[500px] border-t border-white/10 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="p-5 flex flex-col gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-3 font-heading">
                          {pillar.subtitle}
                        </h4>
                        <div className="w-full h-[1px] bg-white/10 mb-4" />
                        <p className="text-gray-300 font-sans text-xs leading-relaxed font-light">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="h-[160px] rounded-[16px] overflow-hidden border border-white/10 shadow-sm">
                        <img
                          src={pillar.imagePath}
                          alt={pillar.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
