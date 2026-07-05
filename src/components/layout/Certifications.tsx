import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export function Certifications() {
  const [activeCert, setActiveCert] = useState<{ title: string; subtitle: string; pdfPath: string; logoPath: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      description: "Demonstrates our commitment to consistent quality standards, customer satisfaction, and continual process improvement.",
      pdfPath: "/Certificates/ISO%209001.pdf",
      logoPath: "/Certificate Logo/ISO_9001_2015.png",
    },
    {
      title: "FSC® Certified",
      subtitle: "Forest Stewardship Council",
      description: "Verifies that our paper products are sourced from responsibly managed forests and verified recycled origins.",
      pdfPath: "/Certificates/FSC%20Certificate.pdf",
      logoPath: "/Certificate Logo/FSC1.jpg",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "Certifies our adherence to rigorous global standards for reducing emissions, waste, and overall carbon footprint.",
      pdfPath: "/Certificates/ISO%20140001.pdf",
      logoPath: "/Certificate Logo/ISO 14001.jpg",
    },
    {
      title: "ISO 27001:2022",
      subtitle: "Information Security",
      description: "Guarantees robust safeguards for intellectual property, customer data, and secure digital manuscript files.",
      pdfPath: "/Certificates/ISO%2027001.pdf",
      logoPath: "/Certificate Logo/ISO 27001.jpg",
    },
    {
      title: "C-TPAT Certified",
      subtitle: "Customs-Trade Partnership",
      description: "Ensures highest supply chain security standards, facilitating expedited custom clearance for global shipping.",
      pdfPath: "/Certificates/CTPAT%20Certificate.pdf",
      logoPath: "/Certificate Logo/CTPAT.jpg",
    },
    {
      title: "SEDEX",
      subtitle: "Ethical Compliance",
      description: "Emphasizes responsible business practices, ethical sourcing, labor standards, health & safety, and environmental responsibility.",
      pdfPath: "#",
      logoPath: "/Certificate Logo/SEDEX.webp",
    },
    {
      title: "UNGC Participant",
      subtitle: "UN Global Compact",
      description: "Demonstrates active alignment with UN universal principles on human rights, labor protection, and fair practice.",
      pdfPath: "/Certificates/UNGC%20Participation%20Certificate%20-%20Multivista.pdf",
      logoPath: "/Certificate Logo/UGC.jpg",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 260; // 236px width + 24px gap
      const scrollTo = dir === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 bg-[#EEEEEE] overflow-hidden select-text">
      {/* Subtle print grid background (dark lines for light background) */}
      <div className="absolute inset-0 bg-print-grid opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Global Accreditations" align="center" className="text-royal-blue border-royal-blue/20 bg-royal-blue/5" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mt-4 mb-5 leading-tight font-heading">
            Certified Quality, Safety & Sustainability
          </h2>
          <p className="text-base text-slate-650 leading-relaxed font-light font-sans">
            We operate in alignment with leading international standards, ensuring responsible sourcing,
            information security compliance, and secure logistics for our global publishing partners.
          </p>
        </div>

        {/* Scrollable Carousel Wrapper */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 group/carousel">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 w-11 h-11 rounded-xl border border-white/85 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 flex items-center justify-center cursor-pointer group/btn"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
          >
            {certifications.map((cert, index) => {
              const isIsoCircle = cert.title.startsWith("ISO 9001") || cert.title.startsWith("ISO 14001");
              const isSedex = cert.title === "SEDEX";
              const paddingClass = isIsoCircle ? "p-3.5" : isSedex ? "p-2" : "p-1";
              
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="w-[236px] shrink-0 snap-start group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/60 bg-gradient-to-br from-white/45 to-white/15 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] hover:shadow-2xl hover:from-white/60 hover:to-white/20 hover:border-white/80 hover:-translate-y-1.5 transition-all duration-500 ease-out min-h-[350px]"
                >
                  <div>
                    {/* Logo and tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-20 h-20 rounded-2xl border border-slate-200/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden ${paddingClass}`}>
                        <img 
                          src={cert.logoPath} 
                          alt={cert.title} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 tracking-wider font-heading uppercase">
                        Certificate 0{index + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-deep-navy font-heading mb-1 group-hover:text-royal-blue transition-colors">
                      {cert.title}
                    </h3>
                    <h4 className="text-[11px] font-semibold text-slate-500 mb-3 tracking-wide uppercase font-sans">
                      {cert.subtitle}
                    </h4>
                    <p className="text-slate-600 font-sans text-[13px] leading-relaxed font-light mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Certificate Modal Trigger Button */}
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-white/30 text-slate-600 font-medium text-xs bg-white/30 backdrop-blur-sm hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 group/btn mt-auto"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-11 h-11 rounded-xl border border-white/85 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 flex items-center justify-center cursor-pointer group/btn"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Modal Popup Preview */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 bg-white w-full max-w-5xl h-[82vh] md:h-[85vh] rounded-[24px] shadow-2xl border border-slate-150 overflow-hidden flex flex-col select-text"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <div>
                  <h3 className="text-lg font-bold text-deep-navy font-heading">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-slate-450 font-sans tracking-wide uppercase font-medium">
                    {activeCert.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {activeCert.pdfPath && activeCert.pdfPath !== "#" && (
                    <a
                      href={activeCert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-royal-blue hover:bg-slate-100 transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-colors"
                    title="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal PDF iframe or Image fallback */}
              <div className="flex-grow w-full h-full bg-slate-50 flex items-center justify-center p-6 overflow-hidden">
                {activeCert.pdfPath && activeCert.pdfPath !== "#" ? (
                  <iframe
                    src={`${activeCert.pdfPath}#toolbar=1&navpanes=0`}
                    className="w-full h-full border-none"
                    title={activeCert.title}
                  />
                ) : (
                  <img
                    src={activeCert.logoPath}
                    alt={activeCert.title}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-lg bg-white p-4"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
