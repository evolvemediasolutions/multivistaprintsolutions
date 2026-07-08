import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon } from "lucide-react";

const industriesImg = [
  { name: "Education", image: "/Images/MANUFACTURING PATH/EDUCATION.jpg" },
  { name: "STM", image: "/Images/MANUFACTURING PATH/STM.jpg" },
  { name: "Children's Books", image: "/Images/MANUFACTURING PATH/CHILDREN.jpg" },
  { name: "Trade & Coffee Table Books", image: "/Images/MANUFACTURING PATH/TRADE & COFFE TABLE BOOKS.jpg" },
  { name: "Travel Books", image: "/Images/MANUFACTURING PATH/TRAVEL.jpg" },
];

export function MarketsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <div className="w-full relative">
      {/* Carousel */}
      <div 
        ref={scrollRef} 
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {industriesImg.map((ind, i) => (
          <div 
            key={i} 
            className="w-[240px] md:w-[280px] h-[320px] md:h-[380px] relative overflow-hidden snap-center md:snap-start shrink-0 group cursor-pointer bg-navy-900 border-none rounded-2xl shadow-sm"
          >
            <img 
              src={ind.image} 
              alt={ind.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-lg font-medium flex items-center justify-between gap-2">
              <span>{ind.name}</span>
              <ChevronRightIcon className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Controls Overlay */}
      <div className="flex items-center gap-6 mt-4 pr-2">
        <div className="flex-1 h-[2px] bg-gray-200 relative rounded-full overflow-hidden">
           <div 
             className="absolute top-0 left-0 h-full bg-royal-blue transition-all duration-300 origin-left" 
             style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
           />
        </div>
        <div className="flex gap-2 shrink-0">
          <button 
            onClick={() => scrollByAmount(-316)} 
            className="w-10 h-10 flex items-center justify-center bg-deep-navy text-white hover:bg-royal-blue transition-all duration-300 shadow-sm rounded-full cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollByAmount(316)} 
            className="w-10 h-10 flex items-center justify-center bg-deep-navy text-white hover:bg-royal-blue transition-all duration-300 shadow-sm rounded-full cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
