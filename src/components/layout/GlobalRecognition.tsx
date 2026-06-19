import { motion } from "motion/react";
import { Award, ShieldCheck, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GlobalRecognition() {
  const centralLabels = [
    "Sustainability",
    "Compliance",
    "Quality",
    "Workplace Culture",
    "Responsible Sourcing",
  ];

  return (
    <section className="relative py-32 bg-[#f0f7ff] overflow-hidden select-text">
      {/* Subtle background printing alignment grids */}
      <div className="absolute inset-0 bg-print-grid opacity-60 pointer-events-none"></div>
      
      {/* Background radial gradients for luxury lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-blue/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-accent/5 blur-3xl pointer-events-none"></div>

      {/* Floating Paper Sheets */}
      <div className="absolute top-12 left-12 opacity-15 pointer-events-none animate-float-slow hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#0057B8" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-12 opacity-10 pointer-events-none animate-float-medium hidden lg:block">
        <svg width="45" height="58" viewBox="0 0 45 58" fill="none" stroke="#D4A437" strokeWidth="1">
          <rect x="2" y="2" width="41" height="54" rx="2" fill="white" />
          <line x1="8" y1="12" x2="37" y2="12" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="8" y1="20" x2="37" y2="20" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-24">
          <SectionHeader title="Global Recognition" align="center" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
            Recognised for Responsible Manufacturing
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light font-sans">
            Our commitment to ethical manufacturing, sustainability, and operational excellence has earned recognition from globally respected organisations and industry leaders.
          </p>
        </AnimatedSection>

        {/* Trust Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-8 items-stretch relative">
          
          {/* LEFT COLUMN: Featured Award 2023 & Certifications 1, 2, 3 */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Featured Award 1: 2023 Winner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/40 bg-white/70 backdrop-blur-md p-8 shadow-md hover:shadow-2xl hover:border-gold-accent/40 hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              {/* Gold glow circle background behind */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gold-accent/10 blur-2xl group-hover:bg-gold-accent/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 border border-gold-accent/40 text-gold-accent text-[10px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5">
                    Green Printer of the Year
                  </span>
                  <Award className="w-6 h-6 text-gold-accent animate-pulse" />
                </div>
                
                {/* Trophy graphic */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-gold-accent group-hover:scale-105 transition-transform duration-500">
                    <path d="M 30,20 L 70,20 L 70,45 C 70,55 60,65 50,65 C 40,65 30,55 30,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 20,30 C 20,25 30,25 30,30 L 30,40 C 30,45 20,45 20,40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 80,30 C 80,25 70,25 70,30 L 70,40 C 70,45 80,45 80,40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 50,65 L 50,80" stroke="currentColor" strokeWidth="2" />
                    <path d="M 35,80 L 65,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="40" r="8" fill="#D4A437" fillOpacity="0.2" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-deep-navy font-heading mb-2">
                  2023 Winner
                </h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed font-light">
                  Awarded for outstanding carbon footprint reduction efforts, introduction of energy-efficient printing presses, and localized green logistics operations.
                </p>
              </div>
            </motion.div>

            {/* Plaque 1: EcoVadis Sustainability Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-gold-accent">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M 50,23 L 53,30 L 60,30 L 55,34 L 57,41 L 50,37 L 43,41 L 45,34 L 40,30 L 47,30 Z" fill="currentColor" />
                  <text x="50" y="58" textAnchor="middle" className="text-[6.5px] font-bold fill-deep-navy font-sans uppercase tracking-wider">ecovadis</text>
                  <text x="50" y="68" textAnchor="middle" className="text-[7px] font-bold fill-gold-accent font-heading uppercase tracking-widest">Gold Rating</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">EcoVadis Gold Assessment</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Ranking in the top 5% of companies worldwide for environmental responsibility, fair labor, and supply chain ethics.
                </p>
              </div>
            </motion.div>

            {/* Plaque 2: Science Based Targets (SBTi) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-royal-blue">
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
                  <line x1="50" y1="18" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="50" y1="70" x2="50" y2="82" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="18" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="70" y1="50" x2="82" y2="50" stroke="currentColor" strokeWidth="1.5" />
                  <text x="50" y="93" textAnchor="middle" className="text-[7.5px] font-bold fill-deep-navy font-sans tracking-wide">SBTi COMMIT</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">Science Based Targets initiative</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Adopting strict, science-aligned targets to systematically reduce global scope 1, 2, and 3 carbon emissions.
                </p>
              </div>
            </motion.div>

            {/* Plaque 3: UN Global Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-[#418FDE]">
                  <circle cx="50" cy="45" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="50" cy="45" rx="14" ry="28" fill="none" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="50" cy="45" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="22" y1="45" x2="78" y2="45" stroke="currentColor" strokeWidth="1" />
                  <path d="M 20,55 C 15,45 15,35 22,25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 80,55 C 85,45 85,35 78,25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <text x="50" y="88" textAnchor="middle" className="text-[7.5px] font-bold fill-deep-navy font-sans uppercase tracking-widest">UN Compact</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">UN Global Compact Network</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Committed to aligning strategies and operations with universal principles on human rights, labor, environment, and anti-corruption.
                </p>
              </div>
            </motion.div>

          </div>

          {/* CENTER COLUMN: Vertical line / Trust Pillar with Staggered floating badges */}
          <div className="lg:col-span-1 relative min-h-[500px] hidden lg:flex flex-col items-center justify-between py-24 pointer-events-none">
            {/* Draw-down line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2.5px] bg-slate-200 rounded-full">
              <motion.div 
                className="w-full bg-gradient-to-b from-royal-blue via-gold-accent to-royal-blue rounded-full origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
                style={{ height: "100%" }}
              />
            </div>
            
            {/* Staggered Floating labels along the vertical timeline */}
            {centralLabels.map((label, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="flex items-center justify-center relative w-full">
                  {/* Central Node Indicator */}
                  <div className="w-3.5 h-3.5 bg-white border-[3px] border-deep-navy rounded-full z-20 shadow-md"></div>
                  
                  {/* Floating label pill */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: isEven ? -16 : 16 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                    className={`absolute z-30 px-3 py-1 border border-royal-blue/20 bg-white/95 text-deep-navy text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap pointer-events-auto select-text ${
                      isEven 
                        ? "right-1/2 -translate-x-4 flex-row-reverse" 
                        : "left-1/2 translate-x-4"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-gold-accent rounded-full"></div>
                    {label}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Featured Award 2024 (Mirrored) & Certifications 4, 5, 6 */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Featured Award 2: 2024 Winner (Mirrored layout) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/40 bg-white/70 backdrop-blur-md p-8 shadow-md hover:shadow-2xl hover:border-gold-accent/40 hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              {/* Gold glow circle background behind */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold-accent/10 blur-2xl group-hover:bg-gold-accent/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex justify-between items-start mb-6 flex-row-reverse">
                  <span className="px-3 py-1 border border-gold-accent/40 text-gold-accent text-[10px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5">
                    Green Printer of the Year
                  </span>
                  <Award className="w-6 h-6 text-gold-accent animate-pulse" />
                </div>
                
                {/* Trophy graphic (right-aligned on desktop for symmetry) */}
                <div className="mb-6 flex justify-center lg:justify-end">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-gold-accent group-hover:scale-105 transition-transform duration-500">
                    <path d="M 30,20 L 70,20 L 70,45 C 70,55 60,65 50,65 C 40,65 30,55 30,45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 20,30 C 20,25 30,25 30,30 L 30,40 C 30,45 20,45 20,40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 80,30 C 80,25 70,25 70,30 L 70,40 C 70,45 80,45 80,40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 50,65 L 50,80" stroke="currentColor" strokeWidth="2" />
                    <path d="M 35,80 L 65,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="40" r="8" fill="#D4A437" fillOpacity="0.2" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-deep-navy font-heading mb-2 lg:text-right">
                  2024 Winner
                </h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed font-light lg:text-right">
                  Retained our global title for our waste-to-energy conversion systems and eco-friendly FSC book manufacturing lines which recycle 100% of scrap paper.
                </p>
              </div>
            </motion.div>

            {/* Plaque 4: Great Place to Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-[#D81E05]">
                  <rect x="15" y="15" width="70" height="70" rx="8" fill="currentColor" />
                  <text x="50" y="42" textAnchor="middle" className="text-[12px] font-bold fill-white font-heading tracking-tight">Great</text>
                  <text x="50" y="56" textAnchor="middle" className="text-[10px] font-bold fill-white font-sans tracking-tight">Place</text>
                  <text x="50" y="70" textAnchor="middle" className="text-[9px] font-semibold fill-white font-sans tracking-wider">To Work</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">Great Place to Work®</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Certified for our supportive workplace culture, employee development programs, and gender-inclusive safety systems.
                </p>
              </div>
            </motion.div>

            {/* Plaque 5: FSC Certified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-emerald-700">
                  <path d="M 45,75 L 45,55 L 35,45 L 25,50 L 45,75" fill="currentColor" />
                  <path d="M 45,55 C 45,55 52,40 55,30 C 58,40 65,55 65,55 L 55,50 Z" fill="currentColor" />
                  <path d="M 25,50 C 25,50 35,35 40,25 C 45,35 55,50 55,50 L 40,42 Z" fill="currentColor" />
                  <text x="50" y="90" textAnchor="middle" className="text-[12px] font-bold fill-current font-sans tracking-widest">FSC</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">FSC® Chain of Custody</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Fully certified to track and source paper from responsibly managed forests that provide environmental, social, and economic benefits.
                </p>
              </div>
            </motion.div>

            {/* Plaque 6: PEFC Certified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[20px] border border-gray-100/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-royal-blue/20 transition-all duration-300"
            >
              <div className="shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-emerald-600">
                  <circle cx="50" cy="45" r="30" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M 42,60 C 42,40 50,30 52,25 C 54,30 62,40 62,60 L 52,55 Z" fill="currentColor" />
                  <path d="M 32,58 C 32,45 38,38 40,34 C 42,38 48,45 48,58 L 40,54 Z" fill="currentColor" opacity="0.85" />
                  <text x="50" y="90" textAnchor="middle" className="text-[11px] font-bold fill-current font-sans tracking-widest">PEFC</text>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-deep-navy font-heading text-sm mb-1">PEFC Certified Sourcing</h4>
                <p className="text-slate-600 font-sans text-xs font-light leading-relaxed">
                  Confirming that our print operations adhere to the highest global standards for sustainable forest management.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
