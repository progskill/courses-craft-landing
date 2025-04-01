
import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: 'Modern React Development',
    description: 'Learn to build modern web applications with React, Redux, and TypeScript',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 2453,
    hours: 42,
    level: 'Intermediate',
    price: '$89.99'
  },
  {
    id: 2,
    title: 'Full-Stack JavaScript',
    description: 'Become a full-stack developer with Node.js, Express, and MongoDB',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
    instructor: 'Michael Chen',
    rating: 4.8,
    students: 1897,
    hours: 56,
    level: 'Advanced',
    price: '$99.99'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Master Python and essential libraries for data analysis and visualization',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    instructor: 'David Miller',
    rating: 4.7,
    students: 3218,
    hours: 38,
    level: 'Beginner',
    price: '$79.99'
  }
];

const PopularCourses = () => {
  return (
    <section className="section-padding bg-gray-50" id="courses">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Most Popular Courses</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Explore our highest-rated and most enrolled courses
            </p>
          </div>
          <Button variant="link" className="mt-4 md:mt-0 text-blue-600 font-medium">
            View All Courses →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs font-medium">{course.instructor.charAt(0)}</span>
                  </div>
                  <span className="text-sm text-gray-700">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{course.hours} hours</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xl font-bold text-gray-900">{course.price}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
