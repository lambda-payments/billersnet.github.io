
import { useEffect } from 'react';
import { CheckCircle, Globe, Lock, Shield, Sparkles, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const benefits = [
    {
      icon: Sparkles,
      title: "Centralized Solution",
      description: "Manage all APIs from a single, unified platform."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Integrate with billers across industries and geographies."
    },
    {
      icon: CheckCircle,
      title: "Seamless Scalability",
      description: "Easily onboard new services and partners."
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Protect data and transactions with state-of-the-art security measures."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated support to ensure your operations run smoothly."
    },
    {
      icon: Lock,
      title: "Safe Transactions",
      description: "Industry-leading encryption and security for every transaction."
    }
  ];

  return (
    <section className="py-20 bg-saas-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Partner in Billing Integration
          </h2>
          <p className="text-xl text-saas-500">
            Why businesses around the world choose BillersNet for their global API needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex bg-white p-6 rounded-xl shadow-sm border border-saas-200 reveal">
              <div className="mr-4 text-saas-accent">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-saas-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto reveal">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-saas-accent text-center">
            <h3 className="font-semibold text-lg mb-2">Simple Onboarding</h3>
            <p className="text-saas-500">Get set up and running with our platform in days, not months, with our streamlined integration process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-saas-accent text-center">
            <h3 className="font-semibold text-lg mb-2">Best Pricing</h3>
            <p className="text-saas-500">Competitive rates with transparent pricing models designed to maximize your ROI and minimize overhead.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-saas-accent text-center">
            <h3 className="font-semibold text-lg mb-2">Enterprise Ready</h3>
            <p className="text-saas-500">Built for businesses of all sizes with the scalability and security features that enterprise clients demand.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
