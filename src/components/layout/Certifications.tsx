import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Leaf, CheckCircle2, Lock, Shield, Globe, ArrowUpRight, X, ExternalLink } from "lucide-react";

export function Certifications() {
  const [activeCert, setActiveCert] = useState<{ title: string; subtitle: string; pdfPath: string } | null>(null);

  const certifications = [
    {
      title: "FSC® Certified",
      subtitle: "Forest Stewardship Council",
      description: "Verifies that our paper products are sourced from responsibly managed forests and verified recycled origins.",
      pdfPath: "/Certificates/FSC%20Certificate.pdf",
      icon: Leaf,
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100/50",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "Certifies our adherence to rigorous global standards for reducing emissions, waste, and overall carbon footprint.",
      pdfPath: "/Certificates/ISO%20140001.pdf",
      icon: CheckCircle2,
      colorClass: "bg-royal-blue/5 text-royal-blue border-royal-blue/10",
    },
    {
      title: "ISO 27001:2022",
      subtitle: "Information Security",
      description: "Guarantees robust safeguards for intellectual property, customer data, and secure digital manuscript files.",
      pdfPath: "/Certificates/ISO%2027001.pdf",
      icon: Lock,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100/50",
    },
    {
      title: "C-TPAT Certified",
      subtitle: "Customs-Trade Partnership",
      description: "Ensures highest supply chain security standards, facilitating expedited custom clearance for global shipping.",
      pdfPath: "/Certificates/CTPAT%20Certificate.pdf",
      icon: Shield,
      colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100/50",
    },
    {
      title: "UNGC Participant",
      subtitle: "UN Global Compact",
      description: "Demonstrates active alignment with UN universal principles on human rights, labor protection, and fair practice.",
      pdfPath: "/Certificates/UNGC%20Participation%20Certificate%20-%20Multivista.pdf",
      icon: Globe,
      colorClass: "bg-cyan-50 text-cyan-600 border-cyan-100/50",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] overflow-hidden select-text">
      {/* Subtle print grid background (inverted for dark background) */}
      <div className="absolute inset-0 bg-print-grid opacity-20 invert pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Global Accreditations" align="center" className="text-white border-white/30 bg-white/10" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-5 leading-tight font-heading">
            Certified Quality, Safety & Sustainability
          </h2>
          <p className="text-base text-blue-50 leading-relaxed font-light font-sans">
            We operate in alignment with leading international standards, ensuring responsible sourcing, 
            information security compliance, and secure logistics for our global publishing partners.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-royal-blue/30 transition-all duration-500 ease-out min-h-[320px]"
              >
                <div>
                  {/* Icon and tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl border ${cert.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider font-heading uppercase">
                      Certificate 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-deep-navy font-heading mb-1 group-hover:text-royal-blue transition-colors">
                    {cert.title}
                  </h3>
                  <h4 className="text-[11px] font-semibold text-slate-450 mb-3 tracking-wide uppercase font-sans">
                    {cert.subtitle}
                  </h4>
                  <p className="text-slate-600 font-sans text-[13px] leading-relaxed font-light mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* View Certificate Modal Trigger Button */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-slate-100 text-slate-650 font-medium text-xs bg-slate-50 hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 group/btn mt-auto"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
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
                  <a
                    href={activeCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-royal-blue hover:bg-slate-100 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-colors"
                    title="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal PDF iframe */}
              <div className="flex-1 w-full h-full bg-slate-50">
                <iframe
                  src={`${activeCert.pdfPath}#toolbar=1&navpanes=0`}
                  className="w-full h-full border-none"
                  title={activeCert.title}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
