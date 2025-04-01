
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-20 pb-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master Software Development <span className="text-blue-600">Skills That Matter</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:pr-8">
              Join thousands of developers who have advanced their careers through our expert-led, practical coding courses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base">
                Explore Courses
              </Button>
              <Button variant="outline" className="text-base font-medium flex items-center gap-2">
                View Free Tutorials <ArrowRight size={16} />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-white font-medium">J</div>
                <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center text-white font-medium">K</div>
                <div className="w-10 h-10 rounded-full bg-sky-300 flex items-center justify-center text-white font-medium">L</div>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">+</div>
              </div>
              <p className="text-gray-600 text-sm">
                Joined by <span className="font-semibold">5,000+</span> developers
              </p>
            </div>
          </div>
          <div className="relative md:h-auto animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer coding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">50+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Courses</h3>
                  <p className="text-sm text-gray-600">All levels covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
