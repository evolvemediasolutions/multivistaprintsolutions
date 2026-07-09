import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Leaf, BookOpen, Layers, MonitorPlay, Printer } from "lucide-react";
import { MarketsCarousel } from "@/components/ui/MarketsCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ManufacturingImpact } from "@/components/layout/ManufacturingImpact";
import { FoundationOfExcellence } from "@/components/layout/FoundationOfExcellence";
import { Certifications } from "@/components/layout/Certifications";
import { SustainabilityCommitment } from "@/components/layout/SustainabilityCommitment";
// import { PublishingEcosystem } from "@/components/layout/PublishingEcosystem";
import { TheNextChapter } from "@/components/layout/TheNextChapter";
import { SplashCursor } from "@/components/ui/SplashCursor";

export function Home() {
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[80vh] lg:min-h-[100dvh] flex items-center justify-center bg-[#0A121E] text-white py-20 px-4 md:py-32 selection:bg-brand-blue selection:text-white border-b border-gray-900 overflow-hidden">
        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('/Images/FOUNDATION OF EXCELLENCE/PEOPLE.jpeg')`
          }}
        />

        {/* Layer 2: Dual Overlays for perfect text contrast & clear background image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A121E] via-transparent to-[#0A121E] opacity-80 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(10,18,30,0.85)_0%,rgba(10,18,30,0.15)_80%)] pointer-events-none" />

        {/* Glow lights */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none z-0" />

        <div className="absolute inset-0 w-full h-full pointer-events-none z-[12] overflow-hidden">
          <SplashCursor
            SIM_RESOLUTION={128}
            DYE_RESOLUTION={1440}
            DENSITY_DISSIPATION={2.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.3}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-12 md:mt-20">
          <AnimatedSection direction="up" className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-5 py-1.5 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest rounded-full bg-sky-950/40 backdrop-blur-sm mb-8">
              Times change, Values Remain
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Manufacturing Knowledge. Delivering Sustainability.
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed font-light">
              For nearly five decades, Multivista has been the trusted manufacturing partner for leading publishers across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/products" size="lg" className="w-full sm:w-auto rounded-full">
                Explore Our Capabilities
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-white/30 text-white hover:bg-white/10">
                Partner With Us
              </Button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 flex flex-row items-center justify-center gap-8 select-none"
            >
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/Logo/MVGL-Logo.png" 
                  alt="EcoVadis Certified" 
                  loading="lazy"
                  className="h-16 w-auto object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300 pointer-events-none" 
                />
                <span className="text-[10px] text-blue-200/50 uppercase tracking-widest font-bold font-sans">
                  EcoVadis Certified
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/Logo/GPTW.png" 
                  alt="Great Place to Work" 
                  loading="lazy"
                  className="h-16 w-auto object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300 pointer-events-none" 
                />
                <span className="text-[10px] text-blue-200/50 uppercase tracking-widest font-bold font-sans">
                  Great Place to Work
                </span>
              </div>
            </motion.div>


          </AnimatedSection>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Discover Our Ecosystem</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION - MANUFACTURING IMPACT STATISTICS */}
      <ManufacturingImpact />

      {/* SECTION - FOUNDATION OF EXCELLENCE */}
      <FoundationOfExcellence />

      {/* SECTION - ACCREDITATIONS & CERTIFICATIONS */}
      <Certifications />

      {/* SECTION - SUSTAINABILITY COMMITMENT */}
      <SustainabilityCommitment />

      {/* SECTION - PUBLISHING ECOSYSTEM */}
      {/* <PublishingEcosystem /> */}







      {/* SECTION 7 - PREMIUM CLOSING CTA */}
      <TheNextChapter />
    </div>
  );
}
