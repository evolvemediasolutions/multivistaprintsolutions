import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function TheNextChapter() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-light-gray/40 to-white select-text overflow-hidden border-t border-gray-100">
      {/* Editorial Watermark / Background Texture */}
      <div className="absolute inset-0 bg-print-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-paper-dots opacity-40 pointer-events-none"></div>

      {/* Cinematic radial gradient glows */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gold-accent/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-royal-blue/5 blur-3xl pointer-events-none"></div>

      {/* Swaying decorative paper transitions in background */}
      <div className="absolute right-[5%] top-[10%] w-24 h-32 bg-white/40 border border-gray-200/50 rounded-lg shadow-sm -rotate-12 animate-float-slow pointer-events-none hidden lg:block"></div>
      <div className="absolute right-[22%] bottom-[12%] w-20 h-28 bg-white/30 border border-gray-200/40 rounded-lg shadow-inner rotate-6 animate-float-medium pointer-events-none hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Call to Action (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <span className="text-[10px] font-bold text-royal-blue tracking-widest font-heading uppercase bg-royal-blue/5 border border-royal-blue/10 px-3 py-1 rounded-full inline-block">
                  Partner with Multivista
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold tracking-tight text-deep-navy mt-6 mb-4 leading-tight font-heading max-w-md">
                  Let's Build the Next Chapter Together.
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-sans font-light leading-relaxed max-w-lg">
                  Whether you're seeking a reliable manufacturing partner, a sustainability-focused supply chain, or uncompromising print quality, Multivista is ready to help bring your publications to the world.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full sm:w-auto relative rounded-full shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 group inline-flex items-center justify-center gap-2 px-8 py-4 h-14"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <Button
                  href="/products"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-deep-navy text-deep-navy hover:bg-deep-navy/5 font-semibold font-heading transition-all duration-300 px-8 py-4 h-14"
                >
                  Explore Our Capabilities
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN: Realistic Image according to the content (lg:col-span-7) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <AnimatedSection direction="left" className="w-full max-w-[620px]">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/Images/next_chapter.png" 
                  alt="Multivista Printing Partnership" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* Premium Closing Statement bottom overlay */}
        <AnimatedSection className="border-t border-gray-200 mt-28 pt-10 text-center max-w-4xl mx-auto">
          <p className="font-serif italic text-gray-500 text-base md:text-lg leading-relaxed px-6 font-medium selection:bg-gold-accent/20">
            "For nearly five decades, publishers worldwide have trusted Multivista to transform ideas into beautifully crafted publications."
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
