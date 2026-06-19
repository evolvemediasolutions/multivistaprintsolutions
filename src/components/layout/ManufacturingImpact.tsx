import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CountUp } from "@/components/ui/CountUp";

export function ManufacturingImpact() {
  return (
    <section className="relative py-20 bg-[#f0f7ff] overflow-hidden select-text">
      {/* Subtle printing marks/grid paper background */}
      <div className="absolute inset-0 bg-print-grid opacity-70 pointer-events-none"></div>

      {/* Floating Paper Sheets - Parallax Background Elements */}
      <div className="absolute top-12 left-8 md:left-24 opacity-20 pointer-events-none animate-float-slow select-none hidden sm:block">
        <svg width="50" height="65" viewBox="0 0 50 65" fill="none" stroke="#0057B8" strokeWidth="1">
          <rect x="2" y="2" width="46" height="61" rx="3" fill="white" />
          <line x1="8" y1="12" x2="42" y2="12" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="20" x2="42" y2="20" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="28" x2="42" y2="28" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="8" y1="36" x2="30" y2="36" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-8 md:right-28 opacity-15 pointer-events-none animate-float-medium select-none hidden sm:block">
        <svg width="60" height="78" viewBox="0 0 60 78" fill="none" stroke="#D4A437" strokeWidth="1">
          <rect x="2" y="2" width="56" height="74" rx="4" fill="white" />
          <line x1="10" y1="15" x2="50" y2="15" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="25" x2="50" y2="25" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="35" x2="50" y2="35" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="10" y1="45" x2="35" y2="45" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      {/* Grid Alignment Guides / Corner Marks (High-End Publishing Look) */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gray-200 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gray-200 pointer-events-none hidden md:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Global Printing Excellence" align="center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mt-4 mb-4 leading-tight font-heading">
            Five Decades of Manufacturing Scale, Precision & Trust
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-light font-sans">
            From educational publishing to global distribution, our integrated manufacturing ecosystem delivers quality, consistency, and scale trusted by publishers worldwide.
          </p>
        </AnimatedSection>

        {/* Uniform Grid Layout: 4 columns on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: 50+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-6 shadow-sm hover:shadow-xl hover:border-gold-accent/40 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px]"
          >
            <div>
              <span className="px-2.5 py-0.5 border border-gold-accent/40 text-gold-accent text-[9px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5 w-fit block mb-3">
                Since 1976
              </span>
              <div className="text-5xl font-bold tracking-tight text-deep-navy font-heading mb-1.5">
                <CountUp to={50} suffix="+" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-1 font-heading leading-snug">
                Years of Excellence
              </h3>
              <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                Delivering trusted print manufacturing solutions since 1976.
              </p>
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-4 pt-3 border-t border-gray-100/80 h-[160px] rounded-b-[20px] overflow-hidden">
              <img 
                src="/Images/years_excellence.png" 
                alt="Years of Excellence" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

          {/* Card 2: 100% Export-Focused */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-6 shadow-sm hover:shadow-xl hover:border-royal-blue/30 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px]"
          >
            <div>
              <span className="px-2.5 py-0.5 border border-royal-blue/20 text-royal-blue text-[9px] font-bold uppercase tracking-widest rounded-full bg-royal-blue/5 w-fit block mb-3">
                Global Reach
              </span>
              <div className="text-5xl font-bold tracking-tight text-deep-navy font-heading mb-1.5">
                <CountUp to={100} suffix="%" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-1 font-heading leading-snug">
                Export-Focused
              </h3>
              <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                Serving leading publishers across North America, Europe, Australia, and Africa.
              </p>
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-4 pt-3 border-t border-gray-100/80 h-[160px] rounded-b-[20px] overflow-hidden">
              <img 
                src="/Images/global_reach.png" 
                alt="Global Reach" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

          {/* Card 3: 100,000+ Sq. Ft. Facility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-6 shadow-sm hover:shadow-xl hover:border-royal-blue/30 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px]"
          >
            <div>
              <span className="px-2.5 py-0.5 border border-royal-blue/20 text-royal-blue text-[9px] font-bold uppercase tracking-widest rounded-full bg-royal-blue/5 w-fit block mb-3">
                Infrastructure
              </span>
              <div className="text-5xl font-bold tracking-tight text-deep-navy font-heading mb-1.5">
                <CountUp to={100000} suffix="+" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-1 font-heading leading-snug">
                Integrated Facility (Sq. Ft.)
              </h3>
              <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                An end-to-end production ecosystem designed for scale.
              </p>
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-4 pt-3 border-t border-gray-100/80 h-[160px] rounded-b-[20px] overflow-hidden relative">
              <img 
                src="/Images/integrated_facility.png" 
                alt="Integrated Facility" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

          {/* Card 4: 15 Million+ Books */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-light-gray/50 p-6 shadow-sm hover:shadow-xl hover:border-gold-accent/40 hover:-translate-y-1.5 transition-all duration-400 ease-out min-h-[380px]"
          >
            <div>
              <span className="px-2.5 py-0.5 border border-gold-accent/40 text-gold-accent text-[9px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5 w-fit block mb-3">
                Production Capacity
              </span>
              <div className="text-5xl font-bold tracking-tight text-deep-navy font-heading mb-1.5">
                <CountUp to={15} suffix="M+" />
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-1 font-heading leading-snug">
                Books Manufactured / Year
              </h3>
              <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                Continuous high-capacity print lines running 24/7.
              </p>
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-4 pt-3 border-t border-gray-100/80 h-[160px] rounded-b-[20px] overflow-hidden">
              <img 
                src="/Images/books_manufactured.png" 
                alt="Books Manufactured" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
