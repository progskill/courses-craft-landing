
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              CoursesCraft
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Log in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 font-medium">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Courses
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full font-medium">
                  Log in
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-medium">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
