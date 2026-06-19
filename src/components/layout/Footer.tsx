import { Link } from "react-router-dom";
import { Printer, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

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
    { name: "Educational Publishers", href: "/markets#educational" },
    { name: "Trade Publishers", href: "/markets#trade" },
    { name: "Children's Publishing", href: "/markets#childrens" },
    { name: "Independent Authors", href: "/markets#independent" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-white">
              <img src="/Logo/Logo.png" alt="Multivista Printers Logo" className="h-8 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-sm">
              From children's books and educational publishing to premium print production,
              delivering quality print manufacturing built on consistency and responsible sourcing.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
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
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
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
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
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
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 shrink-0 text-brand-blue" />
                    <span>123 Print House Avenue,<br/>Publishing District, 10001</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 shrink-0 text-brand-blue" />
                    <span>+1 (234) 567-8900</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 shrink-0 text-brand-blue" />
                    <span>info@multivista.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Multivista Printers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
