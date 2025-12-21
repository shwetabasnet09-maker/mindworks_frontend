import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const Footer = () => {
  const services = [
    'Business Setup & Licensing',
    'Professional Licensing',
    'Corporate Services',
    'Visa & PRO Services',
    'Banking Assistance',
    'Mainland Company Formation',
    'Free Zone Company Setup',
    'Offshore Company Registration'
  ];

  const industries = [
    'Real Estate',
    'Tourism',
    'Healthcare',
    'E-commerce',
    'Construction',
    'Hotel',
    'Logistics',
    'Software'
  ];

  const about = [
    'Home',
    'About Us',
    'Blog',
    'Services',
    'Contact Us',
    'Privacy Policy',
    'Cookie Policy',
    'Terms & Conditions'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Location Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo_mindworks.webp" 
                alt="Retyn Logo" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              422-7, The Offices 3, One Central, World Trade Center,<br />
              Sheikh Zayed Road, PO Box 9573, Dubai, UAE
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300 text-sm mb-1">+971 506392848</p>
            <p className="text-gray-300 text-sm">contact@retyn.ai</p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Retyn Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Retyn</h3>
            <ul className="space-y-2">
              {about.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaXTwitter className="w-5 h-5 text-gray-900" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaLinkedinIn className="w-5 h-5 text-gray-900" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaFacebookF className="w-5 h-5 text-gray-900" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaYoutube className="w-5 h-5 text-gray-900" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaInstagram className="w-5 h-5 text-gray-900" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © Retyn 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;