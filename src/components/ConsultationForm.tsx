
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const services = [
  "Business Registration",
  "Trademark Registration",
  "Legal Documentation",
  "Tax Compliance",
  "Intellectual Property",
  "Legal Consultation",
  "Corporate Compliance",
  "HR & Employment"
];

export function ConsultationForm() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Consultation request submitted",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Get in Touch
              </div>
              
              <h2 className="text-balance">Book a <span className="text-gradient">Free Consultation</span></h2>
              
              <p className="text-lg text-muted-foreground">
                Schedule a free consultation with our expert legal advisors to discuss your business needs and get tailored solutions.
              </p>
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Expert Legal Advisors</h3>
                    <p className="text-muted-foreground">
                      Our team of experienced legal professionals will provide you with expert guidance tailored to your business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Transparent Process</h3>
                    <p className="text-muted-foreground">
                      We believe in complete transparency throughout the process, with clear timelines and pricing structures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      You'll have a dedicated team supporting you throughout your journey, ensuring a smooth and stress-free experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative z-10 bg-card border border-border rounded-2xl p-6 md:p-8 subtle-shadow">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium mb-2">Request Received!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for contacting us. Our team will get back to you within 24 hours to schedule your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-medium">Request a Consultation</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="bg-card border-input focus:border-primary/50 transition-colors"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="text-sm font-medium block mb-1">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="bg-card border-input focus:border-primary/50 transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium block mb-1">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                            className="bg-card border-input focus:border-primary/50 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="text-sm font-medium block mb-1">
                          Service of Interest
                        </label>
                        <Select
                          value={formState.service}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger
                            id="service"
                            className="bg-card border-input focus:border-primary/50 transition-colors"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="text-sm font-medium block mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements"
                          rows={4}
                          className="bg-card border-input focus:border-primary/50 transition-colors resize-none"
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Submit Request
                          <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
