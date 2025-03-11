
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Scale, FileText } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = heroRef.current?.querySelectorAll('[data-animate]');
    children?.forEach((child, index) => {
      child.classList.add('opacity-0');
      (child as HTMLElement).style.setProperty('--index', index.toString());
      observer.observe(child);
    });

    return () => {
      children?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center hero-background overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium" data-animate>
              Professional Legal Services
            </div>
            
            <h1 
              className="text-balance"
              data-animate
            >
              <span className="text-gradient">Simplified</span> Legal Solutions for Your Business
            </h1>
            
            <p 
              className="text-lg md:text-xl text-foreground/80 max-w-[600px] leading-relaxed"
              data-animate
            >
              Navigate the complexities of business and legal processes with our expert guidance. We're here to help you succeed with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-animate>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-md group"
                size="lg"
              >
                Book a Consultation
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 text-foreground hover:bg-primary/5"
              >
                Explore Services
              </Button>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-foreground/70 pt-4"
              data-animate
            >
              <div className="flex items-center">
                <Shield size={16} className="mr-2 text-primary" />
                <span>Trusted by 10,000+ businesses</span>
              </div>
              <div className="flex items-center">
                <Scale size={16} className="mr-2 text-primary" />
                <span>Expert legal advisors</span>
              </div>
              <div className="flex items-center">
                <FileText size={16} className="mr-2 text-primary" />
                <span>100% secure & confidential</span>
              </div>
            </div>
          </div>
          
          <div 
            className="relative"
            data-animate
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Scale size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Registration</h3>
                      <p className="text-sm text-muted-foreground">Quick & hassle-free process</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-primary" />
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Trademark Registration</h3>
                      <p className="text-sm text-muted-foreground">Protect your brand identity</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-primary" />
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Legal Consultation</h3>
                      <p className="text-sm text-muted-foreground">Expert advice for your business</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
