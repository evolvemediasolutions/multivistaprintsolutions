import { Link } from "react-router-dom";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Sustainability", href: "/sustainability" },
  ],
  products: [
    { name: "Softcover Books", href: "/products#softcover" },
    { name: "Hardcover Books", href: "/products#hardcover" },
    { name: "Children's Books", href: "/products#childrens" },
    { name: "Educational Publishing", href: "/products#educational" },
    { name: "Commercial Printing", href: "/products#commercial" },
  ],
  markets: [
    { name: "Education", href: "/markets#educational" },
    { name: "STM", href: "/markets#academic" },
    { name: "Children's Books", href: "/markets#stm" },
    { name: "Trade & Coffee Table Books", href: "/markets#childrens" },
    { name: "Travel Books", href: "/markets#custom" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0057B8] via-[#007cdb] to-[#0EA5E9] border-t border-white/10 overflow-hidden" aria-labelledby="footer-heading">
      {/* Subtle printing marks/grid paper background (inverted white lines for vibrant blue background) */}
      <div className="absolute inset-0 bg-print-grid opacity-15 invert pointer-events-none"></div>

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-white">
              <Logo invertText={true} />
            </Link>
            <p className="text-sm leading-6 text-blue-50/90 max-w-sm font-sans font-light">
              From children's books and educational publishing to premium print production,
              delivering quality print manufacturing built on consistency and responsible sourcing.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/company/multivista-global-print-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-blue-100 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-blue-100 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Markets</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.markets.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-blue-100 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm leading-6 text-blue-100">
                    <MapPin className="h-5 w-5 shrink-0 text-cyan-200" />
                    <span>43, Vandalur Kelambakkam Road,<br/>Pudupakkam, Chennai - 603 103, India</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-blue-100">
                    <Mail className="h-5 w-5 shrink-0 text-cyan-200" />
                    <div className="flex flex-col">
                      <a href="mailto:csepress@multivistaglobal.com" className="hover:text-white transition-colors">csepress@multivistaglobal.com</a>
                      <span className="text-[10px] text-blue-200/80">Customer Service (K Saranya)</span>
                    </div>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-blue-100">
                    <Mail className="h-5 w-5 shrink-0 text-cyan-200" />
                    <div className="flex flex-col">
                      <a href="mailto:pnkrishna@multivistaglobal.com" className="hover:text-white transition-colors">pnkrishna@multivistaglobal.com</a>
                      <span className="text-[10px] text-blue-200/80">Sales & Sustainability (P N Krishna Moorthy)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-blue-100/70">
            &copy; {new Date().getFullYear()} Multivista Printers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
