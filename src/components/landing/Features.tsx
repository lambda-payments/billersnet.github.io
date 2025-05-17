
import { CheckCircle, Code, LayoutDashboard, Lock, RefreshCcw, Users } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-saas-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal">
      <div className="inline-flex items-center justify-center p-3 bg-saas-50 rounded-lg mb-5">
        <Icon className="h-6 w-6 text-saas-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-saas-500">{description}</p>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      title: 'Centralized Management',
      description: 'Manage all biller APIs from a single, unified dashboard for streamlined operations.',
      icon: LayoutDashboard
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible architecture that grows with your business needs and expands to global markets.',
      icon: Users
    },
    {
      title: 'Advanced Reconciliation',
      description: 'Powerful tools for transaction reconciliation, refunds, and dispute resolution across platforms.',
      icon: RefreshCcw
    },
    {
      title: 'Real-time Analytics',
      description: 'Make data-driven decisions with comprehensive insights into transaction trends and customer behavior.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Solutions for Global Billing Integration
          </h2>
          <p className="text-xl text-saas-500">
            Our platform combines all the tools you need for seamless API management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-saas-accent/10 to-blue-500/10 p-8 md:p-12 rounded-2xl reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Global API Aggregation</h3>
              <p className="text-saas-600 mb-6">
                Aggregate APIs for services like Netflix, app store cards, utilities, telecommunications, and more with single-point access for managing diverse billing needs.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Customizable API solutions for specific requirements',
                  'Built-in commission calculation and revenue sharing',
                  'Effortless transaction reconciliation across platforms',
                  'Role-based access for secure operations'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-saas-accent shrink-0 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button size="lg" asChild className="bg-saas-accent hover:bg-saas-accent/90 text-white">
                  <Link to="/contact">Request API Integration</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-saas-200">
              <div className="space-y-4">
                <div className="h-12 bg-saas-50 rounded flex items-center px-4">
                  <Code className="h-5 w-5 text-saas-accent mr-3" />
                  <span className="font-mono text-sm">BillersNet API Integration</span>
                </div>
                <div className="bg-saas-800 text-white font-mono text-sm p-4 rounded">
                  <pre className="whitespace-pre-wrap">
{`// Sample Request
{
    "token": "<Token>",
    "reference": "Unique-Reference",
    "amount": "<amount>",
    "number": "<Mobile-Number>"
}

// Sample Response
{
    "status": true,
    "state": "Success",
    "message": "Successfully Completed Transaction",
    "extra_data": {},
    "detail": "Transaction successful",
    "credits_consumed": 100,
    "credits_available": 1111,
    "id": 1
}
`}
                  </pre>
                </div>
                <div className="h-12 bg-green-50 text-green-700 rounded flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Transaction Successful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
