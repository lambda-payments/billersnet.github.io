
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="">
                <img src="/billers-logo.png" alt="BillersNet Logo" className="w-13 h-12" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-saas-700 font-medium hover:text-saas-accent transition-colors">
              Home
            </Link>
            <a href="#features" className="text-saas-700 font-medium hover:text-saas-accent transition-colors">
              Features & Services
            </a>
            <Link to="/contact" className="text-saas-700 font-medium hover:text-saas-accent transition-colors">
              Contact Us
            </Link>
            <a href="#faq" className="text-saas-700 font-medium hover:text-saas-accent transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            
            
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-saas-700 font-medium hover:text-saas-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <a href="#features" className="px-4 py-2 text-saas-700 font-medium hover:text-saas-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Features & Services
              </a>
              <Link to="/contact" className="px-4 py-2 text-saas-700 font-medium hover:text-saas-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <a href="#faq" className="px-4 py-2 text-saas-700 font-medium hover:text-saas-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
              <div className="pt-4 px-4 flex flex-col space-y-3">
                <Button variant="outline" className="border-saas-accent text-saas-accent w-full font-medium">
                  Log in
                </Button>
                <Button className="bg-saas-accent hover:bg-saas-accent/90 text-black w-full font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
