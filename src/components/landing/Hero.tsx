import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
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
  return <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden py-[50px]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-saas-accent/10 rounded-full">
              <p className="text-sm font-bold text-saas-900">
                The World's Premier API Aggregator
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight reveal">
              Unify Global Billing with{" "}
              <span className="text-saas-accent">
                BillersNet
              </span>
            </h1>
            
            <p className="text-xl text-saas-700 max-w-2xl mx-auto reveal font-medium">
              Streamline integrations with a single API that connects you to global billing services, digital subscriptions, and utility providers.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 reveal">
              <Button size="lg" className="bg-saas-accent hover:bg-saas-accent/90 text-black font-semibold px-8 py-6 text-lg">Request a Demo</Button>
              
            </div>
          </div>
          
          <div className="w-full max-w-5xl mx-auto mt-16 relative reveal">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-saas-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-saas-accent/10 rounded-full blur-3xl"></div>
            
            <div className="bg-white rounded-xl shadow-2xl border border-saas-200 overflow-hidden relative z-10">
              <div className="h-14 bg-saas-50 border-b border-saas-200 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="aspect-[16/9] bg-saas-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-saas-800 mb-4">One API, Hundreds of Services</h2>
                  <p className="text-saas-700 font-medium">Whether it's Gift cards, Utilities, Telecommunications, or Insurance, we bring diverse billing services under one roof for simplified integration and operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default Hero;