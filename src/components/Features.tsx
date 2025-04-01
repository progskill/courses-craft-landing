
import React from 'react';
import { Code, Users, PlayCircle, BookOpen, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: 'Practical Coding',
    description: 'Real-world projects that teach you how to write production-ready code'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: 'Community Support',
    description: 'Join a community of developers to share ideas and get help'
  },
  {
    icon: <PlayCircle className="w-6 h-6 text-blue-600" />,
    title: 'Video Lessons',
    description: 'High-quality video tutorials that break down complex concepts'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: 'Comprehensive Material',
    description: 'In-depth lessons covering both fundamentals and advanced topics'
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: 'Certification',
    description: 'Earn certificates to showcase your new skills to employers'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'Learn at Your Pace',
    description: 'Access course content 24/7 and learn on your own schedule'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Platform</h2>
          <p className="mt-4 text-lg text-gray-600">
            We've designed our courses to help you gain the skills employers are looking for, with a focus on practical learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
