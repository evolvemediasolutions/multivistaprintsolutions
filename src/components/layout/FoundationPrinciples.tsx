import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FoundationPrinciples() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Target the middle-upper part of the viewport for active state highlighting
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveCard(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const principles = [
    {
      index: 0,
      tag: "Integrity First",
      title: "Ethical Manufacturing",
      description:
        "Integrity shapes every decision we make from responsible sourcing and transparent operations to long-term partnerships built on trust.",
      imagePath: "/Images/OUR FOUNDATION/ETHICAL MANUFACTURING.jpg",
    },
    {
      index: 1,
      tag: "Future Focused",
      title: "Sustainability Leadership",
      description:
        "Environmental responsibility isn't an initiative; it's embedded into the way we manufacture. Every process is continuously refined to reduce impact while creating lasting value for customers and communities.",
      imagePath: "/Images/OUR FOUNDATION/SUSTAINABILITY LEADERSHIP.jpg",
    },
    {
      index: 2,
      tag: "Precision Driven",
      title: "Uncompromising Quality",
      description:
        "With advanced technology, integrated manufacturing and rigorous quality systems, every book leaving our facility reflects the precision our global partners expect.",
      imagePath: "/Images/OUR FOUNDATION/UNCOMPROMISING QUALITY.jpg",
    },
    {
      index: 3,
      tag: "Worldwide Reach",
      title: "Global Export Excellence",
      description:
        "Our focus has always been international. We manufacture exclusively for export, serving publishers across the world with dependable production, efficient logistics and consistent delivery.",
      imagePath: "/Images/OUR FOUNDATION/GLOBAL EXPORT EXCELLENCE.jpg",
    },
  ];

  return (
    <section className="relative py-32 bg-[#EEEEEE] select-text">
      {/* Background printing marks overlay */}
      <div className="absolute inset-0 bg-print-grid opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* LEFT CONTENT COLUMN: Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit flex flex-col justify-between py-6">
            {/* Soft blue gradient glow behind left content */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-royal-blue/5 blur-3xl pointer-events-none z-0"></div>

            <div className="relative z-10">
              <SectionHeader title="Our Foundation" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-deep-navy mt-4 mb-6 leading-tight font-heading">
                Built on Four Enduring Principles
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-light font-sans max-w-md">
                For nearly five decades, our growth has been guided by a clear set of values that shape how we manufacture, innovate and serve publishing partners around the world.
              </p>
              
              <a 
                href="/products" 
                className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:text-deep-navy transition-colors mt-8 group font-sans text-base"
              >
                Explore Our Capabilities 
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT COLUMN: Vertically stacked interactive panels */}
          <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 lg:py-6 lg:pb-[20vh]">
            {principles.map((p) => {
              const isActive = activeCard === p.index;
              return (
                <div
                  key={p.index}
                  ref={cardRefs[p.index]}
                  data-index={p.index}
                  className={`scroll-mt-48 transition-all duration-500 rounded-[24px] border p-8 flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center min-h-[260px] lg:min-h-[280px] ${
                    isActive
                      ? "bg-white border-white/80 shadow-2xl opacity-100 scale-100"
                      : "bg-white/35 border-white/30 backdrop-blur-sm opacity-60 scale-[0.97] hover:opacity-85 hover:bg-white/50"
                  }`}
                >
                  {/* Left part of card */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] font-bold tracking-wider font-heading uppercase transition-colors ${
                        isActive ? "text-slate-500" : "text-slate-400"
                      }`}>
                        Principle 0{p.index + 1}
                      </span>
                      <span className={`px-2.5 py-0.5 border text-[9px] font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${
                        isActive
                          ? "border-royal-blue/30 text-royal-blue bg-royal-blue/5"
                          : "border-white/40 text-slate-500 bg-white/20"
                      }`}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-deep-navy font-heading mb-3">
                      {p.title}
                    </h3>
                    <p className="text-slate-650 font-sans text-sm font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Right part of card: Real-time image according to the content */}
                  <div className="shrink-0 w-full sm:w-80 h-52 sm:h-48 rounded-2xl overflow-hidden border border-white/30 transition-transform duration-500 group-hover:scale-105 shadow-sm">
                    <img 
                      src={p.imagePath} 
                      alt={p.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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
