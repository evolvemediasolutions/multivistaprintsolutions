import { motion } from "motion/react";
import { Leaf, CheckCircle2, Users, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FoundationOfExcellence() {
  return (
    <section className="relative py-32 bg-gray-50 border-t border-gray-100 overflow-hidden select-text">
      {/* Background paper dot grid texture */}
      <div className="absolute inset-0 bg-paper-dots opacity-60 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-12 opacity-15 pointer-events-none animate-float-slow hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#0057B8" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-12 opacity-10 pointer-events-none animate-float-medium hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#D4A437" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-24">
          <SectionHeader title="Our Foundation of Excellence" align="center" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
            Built on Responsibility, Quality, Talent & Innovation
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light font-sans">
            Every book we manufacture is backed by sustainable practices, rigorous quality systems, skilled professionals, and continuous technological advancement.
          </p>
        </AnimatedSection>

        {/* Pillars Layout Area */}
        <div className="relative">
          
          {/* Desktop Wavy Connector Line (Wavy sine wave connecting centers of the staggered cards) */}
          <svg viewBox="0 0 1000 200" className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 hidden lg:block pointer-events-none z-0">
            <motion.path 
              d="M 125 50 C 250 50, 250 150, 375 150 C 500 150, 500 50, 625 50 C 750 50, 750 150, 875 150"
              fill="none"
              stroke="url(#journey-grad)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            
            <defs>
              <linearGradient id="journey-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0057B8" opacity="0.3" />
                <stop offset="33%" stopColor="#0A2342" opacity="0.5" />
                <stop offset="66%" stopColor="#D4A437" opacity="0.5" />
                <stop offset="100%" stopColor="#0057B8" opacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Vertical Connector Line */}
          <div className="absolute left-10 top-16 bottom-16 w-[2px] border-l-2 border-dashed border-royal-blue/20 lg:hidden pointer-events-none z-0"></div>

          {/* Pillars Cards (Staggered Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-stretch relative z-10">
            
            {/* Pillar 1: Sustainability (Offset Up) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:-translate-y-8 hover:-translate-y-12 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 01
                  </span>
                  <span className="px-2.5 py-0.5 border border-emerald-600/30 text-emerald-600 text-[9px] font-semibold uppercase tracking-widest rounded-full bg-emerald-50">
                    Science-Based
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Sustainability
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Science-Based Sustainability Commitments
                </h4>
                <p className="text-slate-650 font-sans text-xs leading-relaxed font-light">
                  Driving measurable environmental impact through responsible sourcing, carbon reduction, and internationally recognized sustainability initiatives.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[185px] rounded-b-[20px] overflow-hidden">
                <img 
                  src="/Images/pillar_sustainability.png" 
                  alt="Sustainability" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </motion.div>

            {/* Pillar 2: Quality (Offset Down) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:translate-y-8 hover:translate-y-4 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 02
                  </span>
                  <span className="px-2.5 py-0.5 border border-royal-blue/30 text-royal-blue text-[9px] font-semibold uppercase tracking-widest rounded-full bg-royal-blue/5">
                    End-to-End
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-royal-blue/5 text-royal-blue group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Quality
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Integrated Quality Systems
                </h4>
                <p className="text-slate-655 font-sans text-xs leading-relaxed font-light">
                  From prepress to final dispatch, every stage is monitored to meet the highest global publishing standards for durability and color precision.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[185px] rounded-b-[20px] overflow-hidden">
                <img 
                  src="/Images/pillar_quality.png" 
                  alt="Quality" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </motion.div>

            {/* Pillar 3: People (Offset Up) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:-translate-y-8 hover:-translate-y-12 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 03
                  </span>
                  <span className="px-2.5 py-0.5 border border-gold-accent/40 text-gold-accent text-[9px] font-semibold uppercase tracking-widest rounded-full bg-gold-accent/5">
                    200+ Experts
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gold-accent/5 text-gold-accent group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    People
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Skilled Professionals
                </h4>
                <p className="text-slate-655 font-sans text-xs leading-relaxed font-light">
                  Combining decades of industrial craftsmanship with advanced modern printing technologies to manage complex print orders.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[185px] rounded-b-[20px] overflow-hidden">
                <img 
                  src="/Images/pillar_people.png" 
                  alt="People" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </motion.div>

            {/* Pillar 4: Technology (Offset Down) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:border-royal-blue/30 lg:translate-y-8 hover:translate-y-4 transition-all duration-500 ease-out"
            >
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider font-heading uppercase">
                    Pillar 04
                  </span>
                  <span className="px-2.5 py-0.5 border border-royal-blue/30 text-royal-blue text-[9px] font-semibold uppercase tracking-widest rounded-full bg-royal-blue/5">
                    Continuous Investment
                  </span>
                </div>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-royal-blue/5 text-royal-blue group-hover:scale-110 transition-transform">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy font-heading">
                    Technology
                  </h3>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-sm font-semibold text-deep-navy mb-2 font-heading">
                  Investment in Innovation
                </h4>
                <p className="text-slate-655 font-sans text-xs leading-relaxed font-light">
                  Continuous investments in world-class offset presses, digital binding, and automated workflows ensure consistency and scale.
                </p>
              </div>

              {/* Interactive Illustration */}
              <div className="mt-8 pt-4 border-t border-gray-50 h-[185px] rounded-b-[20px] overflow-hidden">
                <img 
                  src="/Images/pillar_technology.png" 
                  alt="Technology" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
