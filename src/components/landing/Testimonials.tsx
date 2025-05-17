
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content }: { 
  name: string;
  role: string;
  company: string;
  content: string;
}) => {
  return (
    <Card className="border border-saas-200 h-full reveal">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-saas-accent text-saas-accent" />
          ))}
        </div>
        <blockquote className="text-saas-600 mb-6">"{content}"</blockquote>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-saas-accent to-blue-500 flex items-center justify-center text-white font-medium">
            {name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium text-saas-900">{name}</p>
            <p className="text-sm text-saas-500">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart",
      content: "SaaSly transformed our operations completely. The automation features saved us countless hours and the analytics provided insights we never had access to before."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCo",
      content: "The collaborative features are outstanding. Our team's productivity has increased by 35% since we started using this platform, and onboarding new team members is seamless."
    },
    {
      name: "Jessica Miller",
      role: "Operations Director",
      company: "GrowthWorks",
      content: "The ROI we've seen with SaaSly has exceeded all expectations. Implementation was smooth, and customer support has been exceptional whenever we needed assistance."
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by businesses worldwide
          </h2>
          <p className="text-xl text-saas-500">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <div className="inline-block px-6 py-3 bg-saas-100 rounded-full mb-6">
            <p className="text-saas-accent font-medium">
              Trusted by 10,000+ companies globally
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mt-8">
            {[
              "93% customer satisfaction",
              "4.8/5 average rating",
              "12M+ tasks automated"
            ].map((stat, i) => (
              <div key={i} className="font-medium text-lg">{stat}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
