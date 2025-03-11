
import React, { useEffect, useRef } from 'react';
import { 
  FileText, 
  Briefcase, 
  Users, 
  Scale, 
  Shield, 
  BarChart, 
  FileCheck, 
  ScrollText, 
  ArrowUpRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const services = [
  {
    title: 'Business Registration',
    description: 'Register your business entity quickly and efficiently with our streamlined process.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: 'Trademark Registration',
    description: 'Protect your brand identity with our comprehensive trademark registration services.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Legal Documentation',
    description: 'Get professionally drafted legal documents tailored to your specific requirements.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: 'Tax Compliance',
    description: 'Ensure your business remains compliant with all tax regulations and requirements.',
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: 'Intellectual Property',
    description: 'Comprehensive IP protection strategies for your business innovations and assets.',
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    title: 'Legal Consultation',
    description: 'Get expert legal advice for your business decisions and strategic planning.',
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: 'Corporate Compliance',
    description: 'Stay compliant with all regulatory requirements with our corporate compliance services.',
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    title: 'HR & Employment',
    description: 'Navigate complex employment laws and create compliant HR policies for your business.',
    icon: <Users className="w-6 h-6" />
  }
];

function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <div 
      className="group relative bg-card hover:bg-primary/5 border border-border rounded-xl p-6 transition-all duration-300 subtle-shadow hover:shadow-md cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
      data-animate
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el) => {
              el.classList.add('animate-slide-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="section-padding bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" data-animate>
          <h2 className="mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive legal and business solutions designed to help your business thrive. We handle the complexities so you can focus on growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
