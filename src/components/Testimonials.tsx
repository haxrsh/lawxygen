
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Innovate Tech',
    content: 'Working with this team has been transformative for our business. Their expert legal guidance helped us navigate complex regulations during our expansion phase.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder',
    company: 'GrowthLabs',
    content: 'We saved countless hours and resources by utilizing their business registration services. The process was smooth, and the team was always available to address our concerns.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Priya Patel',
    position: 'Legal Director',
    company: 'Horizon Partners',
    content: 'Their attention to detail and deep understanding of corporate law has been invaluable for our organization. I highly recommend their services to any growing business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials"
      ref={testimonialsRef}
      className="section-padding overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="mb-4">What Our <span className="text-gradient">Clients</span> Say</h2>
          <p className="text-lg text-muted-foreground">
            We take pride in delivering exceptional services that empower businesses to thrive. Here's what some of our clients have to say.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="absolute top-10 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"
            style={{ transform: 'translateX(-50%)' }}
          ></div>
          <div 
            className="absolute bottom-10 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"
            style={{ transform: 'translateX(50%)' }}
          ></div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out opacity-0 invisible",
                  activeIndex === index && "opacity-100 visible relative"
                )}
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 subtle-shadow">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                          <Quote size={14} />
                        </div>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <blockquote className="text-lg italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-primary hover:text-white" 
              onClick={goToPrev}
              disabled={isAnimating}
            >
              <ChevronLeft size={16} />
            </Button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-primary hover:text-white" 
              onClick={goToNext}
              disabled={isAnimating}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
