import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  Users,
  Leaf,
  Award,
  Compass,
  Heart,
  Globe,
  Sparkles,
  Zap,
  TrendingDown,
  Layers,
  Star,
  ShieldCheck,
  Briefcase,
  Upload,
  BookOpen,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  X,
  GraduationCap,
  Hammer
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Job Details Interface
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  requirements: string[];
}

// Open Positions Data
const openJobs: Job[] = [
  {
    id: "prod-sup",
    title: "Production Supervisor",
    department: "Manufacturing Operations",
    location: "Chennai Factory",
    experience: "3–5 years",
    type: "Full-Time",
    description: "Supervise daily printing production shifts, lead operator teams, monitor machine performance, and ensure alignment with quality benchmarks.",
    requirements: [
      "Diploma or Degree in Printing Technology or related field",
      "3+ years of experience supervising offset or post-press operators",
      "Familiarity with Heidelberg/Komori press workflows and safety protocols",
      "Strong team leadership and conflict resolution skills"
    ]
  },
  {
    id: "prod-plan",
    title: "Production Planner",
    department: "Planning & Scheduling",
    location: "Chennai HQ",
    experience: "2–4 years",
    type: "Full-Time",
    description: "Coordinate raw materials, schedule print queues, calculate plate & ink estimations, and align publisher shipping deadlines with factory outputs.",
    requirements: [
      "Degree in Business Administration, Logistics, or Printing Technology",
      "Proven track record in production planning/scheduling inside a manufacturing environment",
      "Excellent numerical proficiency and advanced Excel/ERP planning skills",
      "Detail-oriented mindset to reduce job changeover and machine idle times"
    ]
  }
];

// Culture Pillars
const culturePillars = [
  {
    num: "01",
    title: "Integrity",
    desc: "We act with honesty, accountability and transparency in everything we do.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
    icon: ShieldCheck,
    tags: ["Transparency", "Accountability", "Ethical Auditing"]
  },
  {
    num: "02",
    title: "Excellence",
    desc: "We continuously strive to raise the standards of quality and performance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    icon: Star,
    tags: ["Quality Audits", "Fidelity Testing", "Zero Defect Target"]
  },
  {
    num: "03",
    title: "Innovation",
    desc: "We encourage curiosity, learning and new ways of thinking.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    icon: Zap,
    tags: ["CTP Automation", "Robotic Logistics", "Process Improvements"]
  },
  {
    num: "04",
    title: "Sustainability",
    desc: "We believe responsible business practices create long-term value for everyone.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    icon: Leaf,
    tags: ["Solar Power Grid", "Soy Ink Usage", "Zero Waste to Landfill"]
  },
  {
    num: "05",
    title: "Collaboration",
    desc: "We succeed together by supporting one another and working toward shared goals.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    icon: Users,
    tags: ["Cross-Functional Teams", "Orientation Buddies", "Open Communication"]
  }
];

// Pinterest Gallery
const galleryItems = [
  { theme: "Training Programs", desc: "Fully funded technical courses and mentoring for press operations.", size: "h-[300px]", image: "/Images/CAREER/TRAINING.png", icon: GraduationCap },
  { theme: "Employee Celebrations", desc: "Recognizing milestones, cultural festivals, and team achievements.", size: "h-[380px]", image: "/Images/CAREER/EMPLOYEE CELEBRATIONS.png", icon: Sparkles },
  { theme: "Team Collaboration", desc: "Cross-functional groups mapping solutions across pre-press and logistics.", size: "h-[320px]", image: "/Images/CAREER/TEAM COLLABORATION.png", icon: Users },
  { theme: "Safety Initiatives", desc: "Strict health audits, zero-accident protocols, and safety briefings.", size: "h-[390px]", image: "/Images/CAREER/SAFETY INITATIVES.png", icon: ShieldCheck },
  { theme: "Community Engagement", desc: "Sponsoring print loops and green learnings in neighboring schools.", size: "h-[300px]", image: "/Images/CAREER/COMMUNITY ENGAGEMENT.png", icon: Heart },
  { theme: "Recognition Programs", desc: "Monthly spot awards honoring accuracy, waste reduction, and leadership.", size: "h-[340px]", image: "/Images/CAREER/RECOGNITION PROGRAMS.png", icon: Award }
];


// Workplace Responsibility
const responsibilityCards = [
  { title: "Safe Working Environment", desc: "Zero-accident plant targets backed by strict safety drills, equipment checks, and protective gear.", icon: ShieldCheck },
  { title: "Employee Wellbeing", desc: "Onsite health checks, medical packages, balanced shift schedules, and team wellness audits.", icon: Heart },
  { title: "Continuous Learning", desc: "Fully subsidized courses, engineering workshops, and regular printing technology seminars.", icon: GraduationCap },
  { title: "Inclusive Culture", desc: "Fair employment loops across genders, ages, and backgrounds, ensuring diversity is respected.", icon: Users },
  { title: "Ethical Practices", desc: "100% adherence to legal labor guidelines, fair baseline pay structures, and workplace standards.", icon: Award },
  { title: "Recognition & Rewards", desc: "Active spot bonuses, performance rewards, and long-service celebrations acknowledging loyalty.", icon: Sparkles }
];

// Safe Image Fallback Component
function SafeImage({ src, alt, className, fallbackIcon: FallbackIcon = Users }: { src: string; alt: string; className?: string; fallbackIcon?: React.ComponentType<{ className?: string }> }) {
  const [imageError, setImageError] = useState(false);

  return !imageError ? (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={className}
    />
  ) : (
    <div className={cn("bg-gradient-to-br from-indigo-500/10 to-blue-500/5 flex items-center justify-center relative w-full h-full", className)}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-5" />
      <FallbackIcon className="w-8 h-8 text-indigo-500/30 animate-pulse" />
    </div>
  );
}

export function Careers() {
  // Parallax States
  const [heroScroll, setHeroScroll] = useState(0);
  const [whyScroll, setWhyScroll] = useState(0);

  // Culture Scroll Spy states & refs
  const [activeCultureIndex, setActiveCultureIndex] = useState(0);
  const isCultureScrollingRef = useRef(false);
  const cultureScrollTimeoutRef = useRef<number | null>(null);



  // Job selection and application form
  const [activeJobId, setActiveJobId] = useState<string>("prod-sup");
  const [selectedApplyJob, setSelectedApplyJob] = useState<Job | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // Hero scroll
      if (scrolled < window.innerHeight) {
        setHeroScroll(scrolled);
      }

      // Why section scroll
      const whyEl = document.getElementById("why-section");
      if (whyEl) {
        const rect = whyEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setWhyScroll(window.innerHeight - rect.top);
        }
      }



      // Dynamic Active Culture Value Scroll Spy
      if (!isCultureScrollingRef.current) {
        const targetOffset = window.innerHeight * 0.35; // 35% from top of viewport
        let closestIdx = 0;
        let minDistance = Infinity;

        // Check if we have scrolled to the bottom of the page
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;

        if (isAtBottom) {
          closestIdx = culturePillars.length - 1;
        } else {
          culturePillars.forEach((_, idx) => {
            const el = document.getElementById(`culture-section-${idx}`);
            if (el) {
              const rect = el.getBoundingClientRect();
              const distance = Math.abs(rect.top - targetOffset);
              if (distance < minDistance) {
                minDistance = distance;
                closestIdx = idx;
              }
            }
          });
        }
        setActiveCultureIndex(closestIdx);
      }


    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToCulture = (idx: number) => {
    isCultureScrollingRef.current = true;
    setActiveCultureIndex(idx);

    const el = document.getElementById(`culture-section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (cultureScrollTimeoutRef.current) {
      window.clearTimeout(cultureScrollTimeoutRef.current);
    }

    cultureScrollTimeoutRef.current = window.setTimeout(() => {
      isCultureScrollingRef.current = false;
    }, 800);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedApplyJob(job);
    setIsSuccess(false);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormMessage("");
    setResumeName(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    }
  };

  const activeJob = openJobs.find(job => job.id === activeJobId) || openJobs[0];

  return (
    <div className="bg-white relative select-text overflow-x-clip">

      {/* Dynamic Keyframe styles */}
      <style>
        {`
          @keyframes draw-timeline-line {
            to { stroke-dashoffset: 0; }
          }
          .animate-line-draw {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-timeline-line 3s linear forwards;
          }
          @keyframes border-wave {
            0% { border-color: rgba(0, 87, 184, 0.2); }
            50% { border-color: rgba(0, 87, 184, 0.6); }
            100% { border-color: rgba(0, 87, 184, 0.2); }
          }
          .animate-border-pulsate {
            animation: border-wave 3s infinite;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A121E] text-white">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${heroScroll * 0.4}px) scale(1.05)`,
            backgroundImage: `url('/Images/HERO SECTIONS/CAREER HERO.jpg')`
          }}
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A121E]/30 via-[#0A121E]/80 to-[#0A121E]" />

        {/* Floating background grids */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-5 pointer-events-none z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8 mt-12">
          <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
            CAREERS AT MULTIVISTA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-tight max-w-4xl mx-auto text-white">
            Build the Future of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">Publishing With Us</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto space-y-4">
            <span>For nearly five decades, Multivista has helped publishers around the world bring knowledge, creativity and ideas to life. </span>
            <span className="hidden md:inline">Behind every book we manufacture is a team of passionate professionals committed to quality, innovation, sustainability and continuous improvement. </span>
            <span className="block pt-2">If you're looking to build a meaningful career in an environment that values people, responsibility and growth, we'd love to hear from you.</span>
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="#open-openings" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider shadow-md w-full sm:w-auto">
              Explore Opportunities
            </Button>
            <Button href="#life-at-multivista" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider border-white/20 text-white hover:bg-white/10 w-full sm:w-auto shadow-sm">
              Watch Life at Multivista
            </Button>
          </div>
        </div>

        {/* Scroll indicator & Visual effect line representing manuscript to book */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Join Our Team</span>
          <div className="w-[120px] h-[3px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: [-120, 120] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-[40px] bg-sky-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 02: WHY MULTIVISTA */}
      <section id="why-section" className="relative py-28 md:py-36 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Image with Parallax scroll */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 border border-dashed border-slate-200 rounded-3xl pointer-events-none z-0" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[1.33/1] bg-slate-50 z-10">
                <div
                  className="w-full h-[120%] -absolute -top-10 transition-transform duration-100 ease-out"
                  style={{ transform: `translateY(${whyScroll * 0.05}px)` }}
                >
                  <SafeImage
                    src="/Images/CSR/WHY MULTIVISTA.jpg"
                    alt="Why Multivista"
                    className="w-full h-full object-cover"
                    fallbackIcon={Users}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-md inline-block">
                WHY MULTIVISTA
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
                More Than a Workplace
              </h2>
              <div className="h-[2px] w-16 bg-sky-500 my-4" />
              <p className="text-base md:text-lg text-gray-650 font-sans font-light leading-relaxed space-y-4">
                <span className="block">At Multivista, we believe our success begins with our people.</span>
                <span className="block">We foster a culture built on trust, respect and shared purpose where every individual has the opportunity to learn, contribute and grow.</span>
                <span className="block text-sm text-gray-500 border-l-2 border-sky-500 pl-4 py-1">Whether on the manufacturing floor, within our quality teams or across leadership and support functions, every employee plays a vital role in delivering excellence to publishers worldwide.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02.5: COMMUNITY & SOCIAL IMPACT */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden font-sans select-text">
        {/* Background Image Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/CSR/CSR.jpg')" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none z-10"></div>
        {/* Background print grid */}
        <div className="absolute inset-0 bg-print-grid opacity-15 pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
              Social Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Community & Social Impact
            </h2>
            <div className="h-[2px] w-16 bg-sky-500 mx-auto my-4" />
            <p className="text-sm md:text-base text-slate-200 font-sans font-light leading-relaxed">
              We believe in creating shared value and driving positive change. Our CSR initiatives focus on lifting local communities, fostering learning, and ensuring environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
            {[
              {
                title: "Community Development",
                desc: "Supporting local communities through meaningful partnerships, outreach programs, and social development initiatives.",
                icon: Users,
                color: "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-sky-500/30 shadow-xl",
                iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20"
              },
              {
                title: "Education Support",
                desc: "Contributing to education by supporting schools, learning initiatives, and access to quality educational resources.",
                icon: BookOpen,
                color: "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-emerald-500/30 shadow-xl",
                iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              },
              {
                title: "Healthcare Initiatives",
                desc: "Promoting health and wellbeing through medical camps, health awareness programs, and community healthcare support.",
                icon: Heart,
                color: "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-rose-500/30 shadow-xl",
                iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
              },
              {
                title: "Employee Volunteering",
                desc: "Encouraging employees to actively participate in community service and social impact initiatives.",
                icon: Sparkles,
                color: "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-amber-500/30 shadow-xl",
                iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
              },
              {
                title: "Environmental Responsibility",
                desc: "Driving positive environmental impact through sustainable manufacturing, resource conservation, and responsible business practices.",
                icon: Leaf,
                color: "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-teal-500/30 shadow-xl",
                iconColor: "text-teal-400 bg-teal-500/10 border-teal-500/20"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    "p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 backdrop-blur-md text-white",
                    item.color
                  )}
                >
                  <div className="space-y-4">
                    <div className={cn("p-3 rounded-xl border self-start inline-block", item.iconColor)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 02.7: DIVERSITY & INCLUSION */}
      <section className="relative py-28 bg-white border-b border-slate-200/50 overflow-hidden font-sans select-text">
        {/* Background print grid */}
        <div className="absolute inset-0 bg-print-grid opacity-[0.04] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content with Image */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block">
                Our Workplace
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
                Diversity & Inclusion
              </h2>
              <div className="h-[2px] w-16 bg-sky-500 my-4" />
              <p className="text-base text-gray-650 font-sans font-light leading-relaxed">
                We believe diverse perspectives strengthen our business. We are committed to creating an inclusive workplace where every individual is respected, valued, and given equal opportunities to learn, grow, and succeed across our global operations.
              </p>
              
              <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-50 border border-slate-100 mt-8">
                <img
                  src="/Images/FOUNDATION OF EXCELLENCE/PEOPLE.jpeg"
                  alt="Diversity and Inclusion in the Workplace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {[
                {
                  title: "Equal Opportunities",
                  desc: "We provide fair and equal opportunities for all employees based on skills, talent, and performance.",
                  icon: User,
                  color: "border-sky-500/10 bg-slate-50/50 hover:border-sky-500/30 hover:bg-sky-500/[0.02]",
                  iconColor: "text-sky-500 bg-sky-500/10 border-sky-500/20"
                },
                {
                  title: "Inclusive Workplace",
                  desc: "We foster a respectful workplace where every voice is heard and collaboration is encouraged.",
                  icon: Users,
                  color: "border-emerald-500/10 bg-slate-50/50 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]",
                  iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                },
                {
                  title: "Global Workforce",
                  desc: "With teams and partnerships across multiple countries, we embrace diverse cultures, experiences, and perspectives.",
                  icon: Globe,
                  color: "border-amber-500/10 bg-slate-50/50 hover:border-amber-500/30 hover:bg-amber-500/[0.02]",
                  iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
                },
                {
                  title: "Respect & Belonging",
                  desc: "We cultivate an environment where people feel valued, supported, and empowered to contribute their best.",
                  icon: Heart,
                  color: "border-purple-500/10 bg-slate-50/50 hover:border-purple-500/30 hover:bg-purple-500/[0.02]",
                  iconColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between text-left shadow-sm group hover:-translate-y-1",
                      item.color
                    )}
                  >
                    <div className="space-y-4">
                      <div className={cn("p-3 rounded-xl border self-start inline-block", item.iconColor)}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-deep-navy font-heading">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 font-sans font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03: OUR CULTURE (Sticky split scroll spy layout) */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-x-clip scroll-mt-24">
        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/COE1.jpg')" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Column: Sticky Pillar Navigation List */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-36 space-y-8">
                <div className="space-y-4">
                  <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
                    OUR VALUES
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading font-bold">
                    A Culture of Excellence & Care
                  </h2>
                  <p className="text-sm md:text-base text-slate-300 font-sans font-light leading-relaxed">
                    We foster an environment of growth, trust, and shared purpose built on five core organizational values. Click any value to explore.
                  </p>
                </div>

                {/* Vertical Timeline Card Track */}
                <div className="relative mt-8">
                  {/* Vertical Progress Line */}
                  <div className="absolute left-[18px] top-[36px] bottom-[36px] w-[2px] pointer-events-none">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                    <div
                      className="absolute top-0 left-0 w-full bg-sky-500 rounded-full transition-all duration-500 ease-out"
                      style={{
                        height: `${(activeCultureIndex / (culturePillars.length - 1)) * 100}%`
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    {culturePillars.map((item, idx) => {
                      const isActive = activeCultureIndex === idx;
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="relative flex items-center min-h-[72px]">
                          {/* Timeline dot */}
                          <button
                            type="button"
                            onClick={() => scrollToCulture(idx)}
                            className={cn(
                              "absolute left-[18px] -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center z-20 outline-none",
                              isActive
                                ? "border-sky-500 bg-sky-500 scale-110 ring-4 ring-sky-500/15 shadow-sm"
                                : "border-white/10 bg-slate-900/60 hover:border-white/30"
                            )}
                            aria-label={`Go to ${item.title}`}
                          >
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                          </button>

                          {/* Button card */}
                          <button
                            type="button"
                            onClick={() => scrollToCulture(idx)}
                            className={cn(
                              "w-full text-left ml-9 p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer backdrop-blur-sm",
                              isActive
                                ? "bg-slate-900/60 border-sky-500/40 shadow-xl shadow-sky-500/5 text-white"
                                : "bg-slate-900/20 border-white/5 hover:bg-slate-900/40 hover:border-white/10 text-slate-400"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300",
                                isActive
                                  ? "bg-sky-500/10 border-sky-500/20 text-sky-400"
                                  : "bg-slate-900/60 border-white/5 text-slate-500"
                              )}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <span className={cn(
                                  "text-[9px] font-bold font-heading tracking-widest uppercase block transition-colors duration-300",
                                  isActive ? "text-sky-400" : "text-slate-500"
                                )}>
                                  Pillar {item.num}
                                </span>
                                <h4 className={cn(
                                  "text-sm font-bold font-heading transition-colors duration-300",
                                  isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                                )}>
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            <ChevronRight className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              isActive ? "text-sky-400 translate-x-1" : "text-slate-500 group-hover:translate-x-0.5"
                            )} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Scrolling Cards */}
            <div className="lg:col-span-7 space-y-24 lg:space-y-36">
              {culturePillars.map((item, idx) => {
                const isActive = activeCultureIndex === idx;
                return (
                  <div
                    key={item.title}
                    id={`culture-section-${idx}`}
                    className={cn(
                      "scroll-mt-36 transition-all duration-700 ease-out origin-center",
                      isActive ? "opacity-100 scale-100 filter-none" : "opacity-40 scale-95 blur-[0.5px]"
                    )}
                  >
                    <div className={cn(
                      "relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border bg-slate-950/60 mb-6 transition-all duration-700",
                      isActive ? "border-sky-500/30 shadow-sky-500/5 shadow-2xl" : "border-white/5 shadow-md"
                    )}>
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-1000 ease-out",
                          isActive ? "scale-105" : "scale-100"
                        )}
                        fallbackIcon={item.icon}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className={cn(
                      "space-y-3 p-6 rounded-3xl text-left border backdrop-blur-md transition-all duration-700 mt-6",
                      isActive
                        ? "bg-slate-900/40 border-white/10 shadow-xl"
                        : "bg-slate-900/10 border-white/5 opacity-50"
                    )}>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className={cn(
                              "text-[10px] font-semibold px-2.5 py-1 rounded-md border transition-all duration-500",
                              isActive
                                ? "text-sky-400 bg-sky-500/10 border-sky-500/20"
                                : "text-slate-500 bg-slate-900/40 border-white/5"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={cn(
                        "text-2xl font-bold font-heading leading-tight transition-colors duration-500",
                        isActive ? "text-white" : "text-slate-400"
                      )}>
                        {item.title}
                      </h3>
                      <p className={cn(
                        "text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500",
                        isActive ? "text-slate-300" : "text-slate-500"
                      )}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04: LIFE AT MULTIVISTA (Pinterest-style Gallery) */}
      <section id="life-at-multivista" className="relative py-28 md:py-36 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block">
              LIFE AT MULTIVISTA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Where People Grow and Thrive
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-sans font-light leading-relaxed">
              Our commitment to our employees goes beyond the workplace. We invest in professional development, workplace wellbeing and creating an environment where people feel empowered to build meaningful careers.
            </p>
          </div>

          {/* Standard Aligned Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.theme}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col justify-end"
                >
                  <div className="relative w-full overflow-hidden h-[340px]">
                    <SafeImage
                      src={g.image}
                      alt={g.theme}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                      fallbackIcon={Icon}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-300 z-10" />
                  </div>

                  {/* Floating Overlay content always readable */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-white text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-sky-400 tracking-widest uppercase font-heading">
                        GALLERY THEME
                      </span>
                      <Icon className="w-4 h-4 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white leading-snug">
                      {g.theme}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-sans font-light leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>




      {/* SECTION 07: WORKPLACE RESPONSIBILITY */}
      <section className="relative py-28 bg-slate-950 overflow-x-clip">
        {/* Background Parallax Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80 z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Images/SIR1.jpg')" }}
        />
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[9px] font-bold text-sky-300 tracking-widest font-heading uppercase bg-slate-950/90 border border-sky-500/30 px-3.5 py-1.5 rounded-full inline-block shadow-md">
              OUR STANDARDS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              A Safe, Inclusive and Responsible Workplace
            </h2>
            <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
              Creating a positive workplace is central to our success. We are committed to maintaining high standards of health, safety, diversity, inclusion and employee wellbeing while fostering a culture where every voice is valued.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {responsibilityCards.map((rc) => {
              const Icon = rc.icon;
              return (
                <div
                  key={rc.title}
                  className="bg-slate-900/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md hover:bg-slate-900/60 shadow-xl hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 self-start inline-block">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {rc.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {rc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 09: OPEN OPPORTUNITIES PORTAL */}
      <section id="open-openings" className="relative py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[9px] font-bold text-sky-600 tracking-widest font-heading uppercase bg-sky-500/5 border border-sky-500/10 px-2.5 py-1 rounded-full inline-block">
              JOIN OUR TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-deep-navy font-heading leading-tight">
              Open Opportunities
            </h2>
            <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
              We're always looking for passionate individuals who share our commitment to quality, innovation and continuous improvement. Explore current opportunities below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Left: Positions List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-deep-navy font-heading text-left mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-600" />
                <span>Current Openings</span>
              </h3>
              <div className="space-y-3">
                {openJobs.map((job) => {
                  const isActive = activeJobId === job.id;
                  return (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setActiveJobId(job.id)}
                      className={cn(
                        "w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer",
                        isActive
                          ? "bg-sky-500/[0.02] border-sky-500/30 shadow-md shadow-sky-500/5"
                          : "bg-white border-slate-150 hover:border-slate-200"
                      )}
                    >
                      <div className="space-y-1">
                        <span className={cn(
                          "text-[9px] font-bold tracking-widest font-heading uppercase transition-colors",
                          isActive ? "text-sky-600" : "text-gray-400"
                        )}>
                          {job.department}
                        </span>
                        <h4 className="text-base font-bold text-deep-navy font-heading">
                          {job.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 inline-block mt-1">
                          {job.location} • {job.type}
                        </span>
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 transition-transform",
                        isActive ? "text-sky-500 translate-x-1" : "text-gray-300 group-hover:translate-x-0.5"
                      )} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Job Details panel */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl border border-slate-150 bg-gradient-to-br from-slate-50/50 to-white shadow-sm text-left h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex flex-wrap justify-between items-start gap-4 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest font-heading">
                        {activeJob.department}
                      </span>
                      <h3 className="text-2xl font-bold text-deep-navy font-heading mt-1 leading-tight">
                        {activeJob.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs text-gray-500 bg-white border border-slate-200/50 px-2.5 py-0.5 rounded-md font-sans">
                          📍 {activeJob.location}
                        </span>
                        <span className="text-xs text-gray-500 bg-white border border-slate-200/50 px-2.5 py-0.5 rounded-md font-sans">
                          ⏳ {activeJob.experience} Experience
                        </span>
                        <span className="text-xs text-sky-600 bg-sky-500/10 border border-sky-100/50 px-2.5 py-0.5 rounded-md font-semibold font-sans">
                          {activeJob.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">
                      {activeJob.description}
                    </p>
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold text-deep-navy uppercase tracking-widest font-heading">
                        Key Requirements
                      </h4>
                      <ul className="space-y-2">
                        {activeJob.requirements.map((req, idx) => (
                          <li key={idx} className="text-xs text-gray-500 flex items-start gap-2.5 leading-relaxed font-sans font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-xs text-gray-400 font-sans font-light">
                    Submit your details and attachments to get reviewed by our people team.
                  </span>
                  <button
                    type="button"
                    onClick={() => handleApplyClick(activeJob)}
                    className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer text-center outline-none border-none"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="relative py-28 bg-gradient-to-br from-deep-navy via-navy-900 to-[#0A121E] text-white overflow-hidden">
        {/* Graphic Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,150 C 200,50 400,250 600,150 C 800,50 1000,250 1200,150" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 100,180 C 300,80 500,280 700,180 C 900,80 1100,280 1300,180" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] font-bold text-sky-400 tracking-widest font-heading uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
            START YOUR STORY
          </span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight font-heading">
            The Next Chapter Starts Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Every great book begins with a blank page. Every great career begins with an opportunity. Join a team where your ideas matter, your growth is supported and your work contributes to something meaningful. Together, let's build the future of responsible manufacturing.
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-sky-500 via-indigo-300 to-sky-500 mx-auto" />

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="#open-openings" variant="primary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider w-full sm:w-auto shadow-md">
              Start Your Journey
            </Button>
            <Button href="/sustainability" variant="secondary" className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-wider border-white/20 text-white hover:bg-white/10 w-full sm:w-auto shadow-sm">
              Explore Sustainability
            </Button>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM MODAL */}
      <AnimatePresence>
        {selectedApplyJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplyJob(null)}
              className="absolute inset-0 bg-[#0A121E]/85 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 text-left flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedApplyJob(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-150 transition-all z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                {!isSuccess ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest font-heading">
                        APPLYING FOR
                      </span>
                      <h3 className="text-xl font-bold text-deep-navy font-heading leading-tight">
                        {selectedApplyJob.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-sans font-light">
                        {selectedApplyJob.department} • {selectedApplyJob.location}
                      </p>
                    </div>

                    <div className="space-y-4 pt-3">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="appl-name" className="text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                          Full Name *
                        </label>
                        <input
                          id="appl-name"
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full text-sm border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 transition-colors bg-slate-50/50"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="appl-email" className="text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                          Email Address *
                        </label>
                        <input
                          id="appl-email"
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="e.g. john@example.com"
                          className="w-full text-sm border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 transition-colors bg-slate-50/50"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="appl-phone" className="text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                          Phone Number
                        </label>
                        <input
                          id="appl-phone"
                          type="tel"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full text-sm border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 transition-colors bg-slate-50/50"
                        />
                      </div>

                      {/* Cover Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="appl-msg" className="text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                          Cover Message
                        </label>
                        <textarea
                          id="appl-msg"
                          rows={3}
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          placeholder="Tell us why you want to build your future at Multivista..."
                          className="w-full text-sm border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 transition-colors bg-slate-50/50 resize-none"
                        />
                      </div>

                      {/* Resume Upload Box */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-deep-navy uppercase tracking-wider font-heading">
                          Attach Resume (PDF/Doc) *
                        </span>
                        <label
                          htmlFor="appl-resume"
                          className="w-full border-2 border-dashed border-slate-200 hover:border-sky-500/50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 group"
                        >
                          <input
                            id="appl-resume"
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <Upload className="w-5 h-5 text-gray-400 group-hover:text-sky-500 transition-colors mb-1.5" />
                          <span className="text-xs text-gray-500 font-semibold truncate max-w-xs block">
                            {resumeName ? resumeName : "Click to select or drag file"}
                          </span>
                          <span className="text-[10px] text-gray-400 font-light mt-0.5">
                            Max size 5MB
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 outline-none border-none mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-5 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-deep-navy font-heading">
                        Application Sent!
                      </h3>
                      <p className="text-sm text-gray-505 font-sans font-light leading-relaxed max-w-sm">
                        Thank you for applying, <strong>{formName}</strong>. Our people operations team will review your application for the <strong>{selectedApplyJob.title}</strong> role and contact you shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedApplyJob(null)}
                      className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer inline-block mt-4"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
