import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Leaf, Recycle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function SustainabilityCommitment() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to the section element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background Parallax: Move background image slower than scroll (from -12% to 12% relative translation)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  // Cards Parallax: Distinct y transforms to make cards float at different rates
  const card1Y = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  // Text Selection and legibility is guaranteed
  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden py-28 bg-deep-navy select-text"
    >
      {/* Background Image Layer with CSS Parallax (bg-fixed) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/Images/Sustainability-Home.png')"
        }}
      />

      {/* Navy Gradient Overlay for Content Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/65 to-transparent z-10 pointer-events-none" />

      {/* Floating Environmental Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-300/10 blur-[1px]"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Grid Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN: Sustainability copy (40% space / lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-white">
            <span className="inline-block px-3.5 py-1.5 border border-gold-accent/20 text-gold-accent text-[10px] font-bold uppercase tracking-widest rounded-full bg-gold-accent/5 mb-4 self-start">
              Sustainability Commitment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1] font-heading">
              Creating Books. <br />
              <span className="text-sky-300">Protecting Tomorrow.</span>
            </h2>
            <div className="space-y-4 text-gray-200 font-sans text-sm md:text-base font-light leading-relaxed">
              <p>
                We believe the future of manufacturing depends on balancing business growth with environmental stewardship.
              </p>
              <p>
                From responsible material sourcing and carbon footprint reduction to resource-efficient operations and globally recognized sustainability commitments, every step we take reflects our responsibility to future generations.
              </p>
              <p className="font-medium text-white pt-2">
                Because true manufacturing excellence leaves a lasting impact on people, not on the planet.
              </p>
            </div>

            <div className="mt-10 self-start">
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/80 text-white rounded-full font-medium hover:bg-gold-accent hover:border-gold-accent hover:text-deep-navy hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group font-sans text-sm"
              >
                Explore Our Sustainability Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Glass Metrics Cards (60% space / lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 relative min-h-[420px] items-center">

            {/* Card 1: Responsible Sourcing */}
            <motion.div
              style={{ y: card1Y }}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-6 rounded-[20px] md:translate-y-[-24px] transition-all hover:border-sky-300/30 hover:bg-white/15 duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center mb-4 border border-sky-500/20">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading mb-2">
                Responsible Sourcing
              </h3>
              <p className="text-gray-200 font-sans text-xs font-light leading-relaxed">
                Utilizing 100% FSC® and PEFC certified sustainable paper fibers tracking responsible forestry.
              </p>
            </motion.div>

            {/* Card 2: Resource Efficiency */}
            <motion.div
              style={{ y: card2Y }}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-6 rounded-[20px] md:translate-y-[0px] transition-all hover:border-sky-300/30 hover:bg-white/15 duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center mb-4 border border-sky-500/20">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading mb-2">
                Resource Efficiency
              </h3>
              <p className="text-gray-200 font-sans text-xs font-light leading-relaxed">
                Minimizing waste and implementing circular water cooling loops to conserve manufacturing resources.
              </p>
            </motion.div>

            {/* Card 3: Carbon Reduction */}
            <motion.div
              style={{ y: card3Y }}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-6 rounded-[20px] md:translate-y-[24px] transition-all hover:border-sky-300/30 hover:bg-white/15 duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-300 flex items-center justify-center mb-4 border border-sky-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading mb-2">
                Carbon Reduction
              </h3>
              <p className="text-gray-200 font-sans text-xs font-light leading-relaxed">
                Direct investments in scope 1 and scope 2 clean solar energy to operate carbon-neutral print processes.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
