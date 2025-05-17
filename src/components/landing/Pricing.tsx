
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useEffect } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <Card className={`border transition-all duration-300 h-full flex flex-col ${
      plan.highlighted 
        ? 'border-saas-accent shadow-lg shadow-saas-accent/10 relative overflow-hidden' 
        : 'border-saas-200'
    } reveal`}>
      {plan.highlighted && (
        <div className="absolute top-0 right-0">
          <div className="bg-saas-accent text-white px-4 py-1 text-xs font-medium transform translate-x-[30%] translate-y-[40%] rotate-45">
            Popular
          </div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.price !== 'Custom' && <span className="text-saas-500 ml-2">/month</span>}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-saas-accent shrink-0 mr-3" />
              <span className="text-sm text-saas-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={`w-full ${
            plan.highlighted 
              ? 'bg-saas-accent hover:bg-saas-accent/90 text-white' 
              : 'bg-white hover:bg-saas-50 text-saas-900 border border-saas-200'
          }`}
        >
          {plan.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
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

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams just getting started",
      features: [
        "Up to 5 team members",
        "Basic dashboard access",
        "Standard analytics",
        "Email support",
        "1GB storage"
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced dashboard",
        "Custom reports & analytics",
        "Priority support",
        "10GB storage",
        "API access"
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Enterprise dashboard",
        "Advanced security features",
        "Dedicated account manager",
        "Unlimited storage",
        "Custom integrations",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-saas-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-saas-500">
            Choose the plan that works best for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto reveal">
          <p className="text-saas-500">
            All plans include a 14-day free trial. No credit card required.
            Cancel anytime. Need a custom plan? <a href="#" className="text-saas-accent hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
