
import { useEffect } from 'react';
import Navbar from '@/components/header/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import HowItWorks from '@/components/landing/HowItWorks';
import CTA from '@/components/landing/CTA';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyChooseUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
