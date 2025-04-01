
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The React course completely transformed my career. I went from struggling with basic JavaScript to building complex applications in just a few months.",
    name: "Emma Thompson",
    role: "Frontend Developer",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "Clear explanations and practical projects helped me grasp Python concepts I had struggled with for years. Now I'm confidently applying data science techniques at work.",
    name: "Jason Martinez",
    role: "Data Analyst",
    company: "DataViz Corp",
    rating: 5
  },
  {
    id: 3,
    content: "The Full-Stack JavaScript course was exactly what I needed to transition from a designer to a developer role. Now I'm building full applications from scratch!",
    name: "Aisha Khan",
    role: "Full-Stack Developer",
    company: "Creative Solutions",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Thousands of developers have advanced their careers with our courses. Here's what they have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-blue-50 p-8 rounded-xl relative card-hover"
            >
              <div className="absolute -top-5 left-8 text-5xl text-blue-200">"</div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
