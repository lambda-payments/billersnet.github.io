import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const CTA = () => {
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
  return <section className="py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-saas-800 to-saas-900 rounded-3xl p-8 md:p-12 lg:p-16 relative reveal">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-saas-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-saas-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to revolutionize your billing integrations?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join leading companies already using BillersNet to streamline operations, expand globally, and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-saas-accent hover:bg-saas-accent/90 text-black font-semibold px-8 py-6 text-lg">Request a Demo</Button>
              <Button variant="outline" asChild size="lg" className="border-white/30 text-white hover:bg-white/10 px-6 py-6 text-lg">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;