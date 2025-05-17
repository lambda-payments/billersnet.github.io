import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const currentYear = new Date().getFullYear();
  return <footer className="bg-saas-50 pt-20 pb-10 border-t border-saas-200">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 reveal">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold from-saas-accent bg-clip-text text-saas-accent">
                BillersNet
              </span>
            </Link>
            <p className="text-saas-500 mb-6 max-w-md">
              Streamline your global billing integrations with our all-in-one API aggregation platform.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'GitHub'].map(social => <a key={social} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-saas-200 hover:bg-saas-100 transition-colors" aria-label={social}>
                  {social.charAt(0)}
                </a>)}
            </div>
          </div>

          

          

          
        </div>

        <div className="border-t border-saas-200 pt-8 flex flex-col md:flex-row justify-between items-center reveal">
          <p className="text-saas-500 mb-4 md:mb-0">
            &copy; {currentYear} BillersNet. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;