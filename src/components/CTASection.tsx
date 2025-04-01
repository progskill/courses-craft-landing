
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Coding Skills to the Next Level?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join over 10,000 developers who have transformed their careers with our expert-led courses.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-blue-200 mr-3 mt-1 flex-shrink-0" />
                <p>Access to all 50+ professionally crafted courses</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-200 mr-3 mt-1 flex-shrink-0" />
                <p>Join our active community of developers</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-200 mr-3 mt-1 flex-shrink-0" />
                <p>Receive a certificate upon completion of each course</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-200 mr-3 mt-1 flex-shrink-0" />
                <p>30-day money-back guarantee, no questions asked</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 text-base font-medium">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-base font-medium">
                View Pricing Plans
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Sign Up for Our Newsletter</h3>
            <p className="text-blue-100 mb-6">
              Get weekly coding tips, tutorials, and exclusive course discounts straight to your inbox.
            </p>
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 text-base font-medium">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
