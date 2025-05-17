import { useEffect } from 'react';
const HowItWorks = () => {
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
  return <section className="py-20 bg-saas-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How BillersNet Works
          </h2>
          <p className="text-xl text-saas-700 font-medium">
            A simple, three-step approach to managing complex global billing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-saas-100 text-center reveal">
            <div className="w-16 h-16 bg-saas-accent rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6">1</div>
            <h3 className="text-xl font-semibold mb-3">Connect</h3>
            <p className="text-saas-700 font-medium">Integrate with our unified API to access hundreds of global billers across various sectors</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-saas-100 text-center reveal">
            <div className="w-16 h-16 bg-saas-accent rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6">2</div>
            <h3 className="text-xl font-semibold mb-3">Manage</h3>
            <p className="text-saas-700 font-medium">Control all your billing services from a single dashboard with powerful management tools</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-saas-100 text-center reveal">
            <div className="w-16 h-16 bg-saas-accent rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6">3</div>
            <h3 className="text-xl font-semibold mb-3">Scale</h3>
            <p className="text-saas-700 font-medium">Easily expand your service offerings and enter new markets with flexible, scalable solutions</p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-saas-200 max-w-5xl mx-auto reveal">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Our Platform Visualization</h3>
            <p className="text-saas-700 font-medium">See how BillersNet connects all your services</p>
          </div>
          
          <div className="bg-saas-50 rounded-lg p-8 flex flex-col items-center">
            
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
              {["Entertainment", "Utilities", "Telecom", "Insurance", "App Stores", "More Services"].map(service => <div key={service} className="bg-white p-4 rounded-md shadow border border-saas-200 text-center">
                  <p className="font-medium text-saas-700">{service}</p>
                </div>)}
            </div>
            
            <div className="mt-8 w-full">
              <div className="h-16 bg-saas-100 rounded-lg flex items-center justify-center">
                <p className="font-medium text-saas-700">Your Business Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;