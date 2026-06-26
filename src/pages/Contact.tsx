import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink, 
  Building, Users, ChevronDown, Send, Check
} from "lucide-react";

export function Contact() {
  const [activePathway, setActivePathway] = useState<number | null>(null);
  const [activeSegment, setActiveSegment] = useState("Educational");
  const [activeRequirement, setActiveRequirement] = useState("Hardcover");
  const [activeVolume, setActiveVolume] = useState("10k-50k");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", country: "", phone: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  const pathways = [
    {
      title: "Publishing Manufacturing",
      description: "Learn how we support high-volume book production with automated offset presses and computerized plate systems.",
      detail: "Our facility is optimized for long-run school textbook contracts, trade book orders, and academic publications.",
      link: "/products"
    },
    {
      title: "Request a Quote",
      description: "Submit print specifications for paper weight, pagination, binding method, and production timelines.",
      detail: "Our estimators provide customized global freight estimates and comprehensive pricing break-downs within 48 hours.",
      onClick: () => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      title: "Sustainability Questions",
      description: "Ask about our FSC® paper certification options, eco-friendly inks, and carbon-reduced logistics routing.",
      detail: "Review how we align your supply chain with global ESG benchmarks and environmental auditing frameworks.",
      link: "/sustainability"
    },
    {
      title: "Export & Logistics Support",
      description: "Enquire about sea-freight containers, customs clearing support, packaging standards, and port dispatch times.",
      detail: "We serve ports across North America, UK, Europe, Australia, and Africa with reliable export support services.",
      onClick: () => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      title: "Career Opportunities",
      description: "Explore printing engineering, quality control, operations management, or client advisory roles.",
      detail: "Join our expert team of print professionals committed to delivering publishing excellence.",
      link: "/careers"
    },
    {
      title: "General Enquiries",
      description: "Connect with our administration division for corporate partnerships, corporate social responsibility, and press requests.",
      detail: "Our corporate headquarters provides centralized administrative and strategic collaboration pathways.",
      onClick: () => document.getElementById("info-hub")?.scrollIntoView({ behavior: "smooth" })
    }
  ];

  return (
    <div className="bg-white select-text">
            {/* SECTION 01: CONTACT HERO - Styled like Sustainability Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0A121E] text-white border-b border-gray-900 overflow-hidden">

        {/* Layer 1: Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
          style={{
            backgroundImage: `url('/Images/contact_hero_bg.png')`
          }}
        />

        {/* Layer 2: Overlay Dark Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0A121E]/75 to-[#0A121E] pointer-events-none" />

        {/* Radial graphic lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-royal-blue/[0.05] blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-12">
          <AnimatedSection direction="up" className="max-w-3xl mx-auto">
            <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full inline-block mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-heading leading-tight">
              Let's Build the Next Chapter Together.
            </h1>
            <p className="text-base md:text-lg text-gray-305 mb-10 leading-relaxed font-light font-sans max-w-2xl mx-auto">
              Whether you're seeking a trusted manufacturing partner, sustainability-focused production solutions or world-class print quality, our team is ready to help bring your publishing vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 bg-royal-blue hover:bg-royal-blue-hover text-white font-semibold font-heading rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Start a Conversation
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Manuscript to Publication</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ x: [-120, 120] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 02: WHY CONNECT WITH MULTIVISTA */}
      <section className="relative py-28 bg-[#f8fafc] border-b border-slate-100">
        <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader title="Why Connect" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy leading-tight font-heading">
                A Manufacturing Partner You Can Trust
              </h2>
              <p className="text-slate-700 font-sans text-base md:text-lg leading-relaxed font-light">
                For nearly five decades, publishers across the world have trusted Multivista to deliver exceptional quality, reliable production and long-term partnership.
              </p>
              <div className="h-[1px] bg-slate-200/80 my-4" />
              <p className="text-slate-650 font-sans text-sm leading-relaxed font-light">
                Every conversation begins with understanding your goals, timelines and publishing requirements. We treat every title as a unique work, matching paper specifications and binding assemblies to its artistic and market purpose.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100/50 transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="/Images/contact_connect.png" 
                  alt="Publisher Consultation & Production Planning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03: CONTACT EXPERIENCE (GLASSMORPHISM FORM) */}
      <section id="inquiry-form" className="relative py-28 bg-white overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 -right-12 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side introductory text */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <SectionHeader title="Project Scope" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy leading-tight font-heading">
                Tell Us About Your Project
              </h2>
              <p className="text-slate-700 font-sans text-base leading-relaxed font-light">
                Whether you're planning a new title, evaluating manufacturing partners or exploring sustainable publishing solutions, we'd love to learn more.
              </p>
              
              <div className="space-y-6 pt-6 font-sans">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-royal-blue/5 text-royal-blue flex items-center justify-center font-bold text-xs shrink-0 border border-royal-blue/10">1</div>
                  <div>
                    <h4 className="font-bold text-deep-navy text-sm">Specification Advisory</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Our experts review paper selections, ink types, and layouts before pricing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-royal-blue/5 text-royal-blue flex items-center justify-center font-bold text-xs shrink-0 border border-royal-blue/10">2</div>
                  <div>
                    <h4 className="font-bold text-deep-navy text-sm">Production Commitment</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Scheduled runs are optimized to ensure safe container loading and on-time dispatch.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Glassmorphic Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/50 backdrop-blur-md border border-slate-150 shadow-xl rounded-[32px] p-8 md:p-10 relative">
                {/* Form header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-deep-navy font-heading">Start the Partnership</h3>
                  <p className="text-xs text-slate-500 mt-1 font-sans">We respect your privacy. Standard NDAs can be executed upon request.</p>
                </div>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-6">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-deep-navy font-heading mb-2">Inquiry Submitted Successfully</h4>
                      <p className="text-sm text-slate-500 font-sans max-w-sm">
                        Thank you for sharing your project specifications. A Multivista senior consultant will review details and contact you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form className="space-y-6 font-sans text-sm" onSubmit={handleFormSubmit}>
                      
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block font-semibold text-deep-navy mb-2">Full Name</label>
                          <input 
                            required
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Johnathan Doe" 
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" 
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block font-semibold text-deep-navy mb-2">Company / Publisher</label>
                          <input 
                            required
                            type="text" 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="e.g. Heritage Publishing" 
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" 
                          />
                        </div>
                      </div>

                      {/* Email, Phone & Country */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <label htmlFor="email" className="block font-semibold text-deep-navy mb-2">Email Address</label>
                          <input 
                            required
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@publisher.com" 
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" 
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="phone" className="block font-semibold text-deep-navy mb-2">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (234) 567-8900" 
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" 
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label htmlFor="country" className="block font-semibold text-deep-navy mb-2">Country</label>
                          <input 
                            required
                            type="text" 
                            id="country" 
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="e.g. United Kingdom" 
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all" 
                          />
                        </div>
                      </div>

                      {/* Publishing Segment Select Buttons */}
                      <div>
                        <label className="block font-semibold text-deep-navy mb-3">Publishing Segment</label>
                        <div className="flex flex-wrap gap-2">
                          {["Educational", "Trade Books", "Academic", "Special Editions", "Commercial"].map((seg) => (
                            <button
                              type="button"
                              key={seg}
                              onClick={() => setActiveSegment(seg)}
                              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                                activeSegment === seg 
                                  ? "bg-royal-blue text-white border-royal-blue shadow-sm"
                                  : "bg-white text-slate-650 border-slate-200 hover:border-royal-blue/30"
                              }`}
                            >
                              {seg}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Requirements Select Buttons */}
                      <div>
                        <label className="block font-semibold text-deep-navy mb-3">Project Requirement</label>
                        <div className="flex flex-wrap gap-2">
                          {["Hardcover", "Softcover", "Lay-Flat Book", "Multi-Format Run", "Special Print"].map((req) => (
                            <button
                              type="button"
                              key={req}
                              onClick={() => setActiveRequirement(req)}
                              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                                activeRequirement === req 
                                  ? "bg-royal-blue text-white border-royal-blue shadow-sm"
                                  : "bg-white text-slate-650 border-slate-200 hover:border-royal-blue/30"
                              }`}
                            >
                              {req}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Volume Requirements Select Buttons */}
                      <div>
                        <label className="block font-semibold text-deep-navy mb-3">Estimated Volume (Units)</label>
                        <div className="flex flex-wrap gap-2">
                          {["Under 5,000", "5k - 20k", "20k - 100k", "100k+"].map((vol) => (
                            <button
                              type="button"
                              key={vol}
                              onClick={() => setActiveVolume(vol)}
                              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                                activeVolume === vol 
                                  ? "bg-royal-blue text-white border-royal-blue shadow-sm"
                                  : "bg-white text-slate-650 border-slate-200 hover:border-royal-blue/30"
                              }`}
                            >
                              {vol}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message area */}
                      <div>
                        <label htmlFor="message" className="block font-semibold text-deep-navy mb-2">Project Brief / Message</label>
                        <textarea 
                          required
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4} 
                          placeholder="Describe paper specifications, binding requests, and container delivery targets..." 
                          className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue/30 focus:border-royal-blue transition-all"
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-royal-blue hover:bg-royal-blue-hover text-white font-semibold font-heading rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 06: CONTACT INFORMATION */}
      <section id="info-hub" className="relative py-28 bg-slate-950 overflow-x-clip border-b border-white/5">
        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/contact_info_dark_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeader title="Corporate Coordinates" align="center" className="text-sky-400 border-sky-500/20 bg-sky-500/10" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-5 leading-tight font-heading">
              Premium Information Hub
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-light font-sans">
              Direct access channels to our corporate executives, plant managers, logistics coordinators, and customer representatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Panel 1: Office */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Corporate Office</h4>
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <p className="text-slate-300 font-sans text-sm leading-relaxed font-light">
                  Multivista Global Ltd.<br />
                  43, Vandalur Kelambakkam Road,<br />
                  Pudupakkam, Chennai - 603 103,<br />
                  Tamil Nadu, India.
                </p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 mt-6 hover:text-white transition-colors font-sans"
              >
                <span>Google Maps Direction</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Panel 2: Facility */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Manufacturing Plant</h4>
                  <Building className="w-5 h-5 text-sky-400" />
                </div>
                <p className="text-slate-300 font-sans text-sm leading-relaxed font-light">
                  43, Vandalur Kelambakkam Road,<br />
                  Pudupakkam, Chennai - 603 103,<br />
                  Tamil Nadu, India.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-6 font-sans">
                FSC®-C123456 Licensed Site
              </span>
            </div>

            {/* Panel 3: Operating Hours */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Operating Hours</h4>
                  <Clock className="w-5 h-5 text-sky-400" />
                </div>
                <p className="text-slate-300 font-sans text-sm leading-relaxed font-light">
                  Monday – Friday: 08:30 – 18:00 (IST)<br />
                  Saturday (Logistics Support): 09:00 – 13:00 (IST)<br />
                  Production pressroom operates 24/7.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-6 font-sans">
                Time Zone: GMT+5:30 (IST)
              </span>
            </div>

            {/* Panel 4: Customer Service Contact */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Customer Service</h4>
                  <Users className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-white text-sm font-sans">K Saranya</h5>
                  <p className="text-slate-400 font-sans text-xs font-light">Senior Executive – Customer Service</p>
                </div>
                <p className="text-slate-300 font-sans text-sm font-light">
                  Email: <a href="mailto:csepress@multivistaglobal.com" className="text-sky-400 hover:text-white hover:underline font-medium">csepress@multivistaglobal.com</a>
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-6 font-sans">
                Dedicated post-press order tracking.
              </span>
            </div>

            {/* Panel 5: Sales & Sustainability Contact */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Sales & Sustainability</h4>
                  <Users className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-white text-sm font-sans">P N Krishna Moorthy</h5>
                  <p className="text-slate-400 font-sans text-xs font-light">Head of Sales & Sustainability</p>
                </div>
                <p className="text-slate-300 font-sans text-sm font-light">
                  Email: <a href="mailto:pnkrishna@multivistaglobal.com" className="text-sky-400 hover:text-white hover:underline font-medium">pnkrishna@multivistaglobal.com</a>
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-6 font-sans">
                Global contracts & ESG alignment.
              </span>
            </div>

            {/* Panel 6: Email Directory */}
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg group hover:border-sky-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-bold text-white text-lg">Email Directory</h4>
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <p className="text-slate-300 font-sans text-xs leading-relaxed font-light">
                  General Info: <a href="mailto:info@multivista.in" className="text-sky-400 hover:text-white hover:underline font-medium">info@multivista.in</a><br />
                  Export & Sales: <a href="mailto:sales@multivista.in" className="text-sky-400 hover:text-white hover:underline font-medium">sales@multivista.in</a><br />
                  Logistics: <a href="mailto:shipping@multivista.in" className="text-sky-400 hover:text-white hover:underline font-medium">shipping@multivista.in</a><br />
                  Careers Desk: <a href="mailto:careers@multivista.in" className="text-sky-400 hover:text-white hover:underline font-medium">careers@multivista.in</a>
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-6 font-sans">
                Centralized general inquiries.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 07: QUICK PATHWAYS */}
      <section className="relative py-28 bg-[#f8fafc] border-b border-slate-100 font-sans">
        <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader title="Quick Navigation" align="center" />
            <h2 className="text-3xl font-bold tracking-tight text-deep-navy mt-4 mb-4 leading-tight font-heading">
              How Can We Help?
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-xl mx-auto">
              Select a specialized pathway below to review details, navigate, or trigger target scrolls instantly.
            </p>
          </div>

          <div className="space-y-4 border border-slate-100 rounded-3xl bg-white p-6 shadow-sm overflow-hidden">
            {pathways.map((path, idx) => {
              const isOpen = activePathway === idx;
              return (
                <div 
                  key={path.title}
                  className={`border-b border-slate-100 last:border-0 pb-4 last:pb-0 pt-4 first:pt-0 transition-all duration-300 ${
                    isOpen ? "bg-slate-50/50 px-4 -mx-4 rounded-xl" : ""
                  }`}
                >
                  <button
                    onClick={() => setActivePathway(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between font-heading font-bold text-deep-navy text-base text-left"
                  >
                    <span>{path.title}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-royal-blue" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 space-y-4 text-sm text-slate-600 font-light leading-relaxed">
                          <p>{path.description}</p>
                          <p className="text-xs text-slate-450">{path.detail}</p>
                          
                          {path.link ? (
                            <a 
                              href={path.link} 
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-blue hover:text-deep-navy transition-colors"
                            >
                              <span>Explore Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <button 
                              onClick={path.onClick}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-blue hover:text-deep-navy transition-colors"
                            >
                              <span>Trigger Action</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* SECTION 09: LEADERSHIP ACCESS */}
      <section className="relative py-28 bg-[#f8fafc]">
        <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-xl border border-slate-100/50 transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="/Images/contact_leadership.png" 
                  alt="Multivista Leadership engagement portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader title="Leadership Access" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-navy leading-tight font-heading">
                Let's Start the Conversation
              </h2>
              <p className="text-slate-700 font-sans text-base md:text-lg leading-relaxed font-light">
                Every successful partnership begins with a conversation. Our executive team is committed to understanding your publishing goals and providing solutions tailored to your needs.
              </p>
              <div className="h-[1px] bg-slate-200/80 my-4" />
              <p className="text-slate-605 font-sans text-sm leading-relaxed font-light">
                Whether you need advice on high-speed web offset production, sustainable material sourcing plans, or global distribution container scheduling, our directors and senior engineers are directly accessible.
              </p>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
