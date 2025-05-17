import { useState } from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import ScrollToTop from '@/components/ScrollToTop';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "Thanks for reaching out! We'll get back to you shortly."
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Connect With Us Today
            </h1>
            <p className="text-xl text-saas-500">
              Have questions or need a demo? We'd love to hear from you. Reach out to our team and discover how BillersNet can transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6 md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md border border-saas-100">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-saas-accent mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-saas-500">info@billersnet.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-saas-100">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-saas-accent mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-saas-500">+1-646-814-8226</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-saas-100">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-saas-accent mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-saas-500">447 Broadway, 2nd Floor #815, New York, NY 10013, USA</p>
                  </div>
                </div>
              </div>
              
              
            </div>

            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md border border-saas-100">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-saas-200 rounded-md focus:outline-none focus:ring-2 focus:ring-saas-accent" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-saas-200 rounded-md focus:outline-none focus:ring-2 focus:ring-saas-accent" required />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block font-medium mb-1">Organization Name</label>
                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full px-4 py-2 border border-saas-200 rounded-md focus:outline-none focus:ring-2 focus:ring-saas-accent" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-medium mb-1">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-saas-200 rounded-md focus:outline-none focus:ring-2 focus:ring-saas-accent" required></textarea>
                  </div>
                  
                  <Button type="submit" className="bg-saas-accent hover:bg-saas-accent/90 text-white w-full py-6" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>;
};
export default Contact;