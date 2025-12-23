


"use client"; 

import React from 'react';
import { MapPin, Mail, Phone, Send, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white dmsans">
      {/* CTA Banner */}
      <div className="wrapper px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-[#00A74E] to-yellow-300 rounded-3xl p-8 flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-6">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" 
              alt="Consultant" 
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Looking For Professional<br />Business Consultant?
              </h2>
              <div className="flex items-center gap-2">
                <svg className="w-16 h-8" viewBox="0 0 80 40" fill="none">
                  <path d="M5 20 Q 20 5, 40 20 T 75 20" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M70 15 L75 20 L70 25" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
              alt="Business meeting" 
              className="w-48 h-32 object-cover rounded-lg"
            />
          </div>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            GET STARTED FREE
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo_mindworks.webp" alt="MindWorks Logo" width={120} height={40} className="object-contain" />
            </div>
            <p className="text-gray-400 mb-8">
              At vero eos et accusamus iusto odio dignissimos ducimus blanditiis
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-[#00A74E] p-3 rounded-lg hover:bg-yellow-500 transition-colors">
                <Send className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team Member</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Latest News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#00A74E] flex-shrink-0 mt-1" />
                <span className="text-gray-400">55 Main Street, 2nd block<br />Melbourne, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#00A74E] flex-shrink-0" />
                <a href="mailto:Support@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Support@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#00A74E] flex-shrink-0" />
                <a href="tel:+00012344555" className="text-gray-400 hover:text-white transition-colors">
                  +000 (123) 44 55
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
     

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">

  {/* CENTER BUTTON */}
  <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-10">
    <div className="bg-black p-1 rounded-xl">
      <button
        onClick={scrollToTop}
        className="bg-[#00A74E] p-4 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg"
      >
        <ArrowUp className="w-6 h-6 text-gray-900" />
      </button>
    </div>
  </div>

  {/* EXISTING CONTENT (UNCHANGED) */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm">
        © Copyright 2025 by kodesolution.com
      </p>
      <ul className="flex flex-wrap gap-6 text-sm">
        <li>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Pricing Plan
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Best Program
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Press Kit
          </a>
        </li>
      </ul>
    </div>
  </div>

</div>

    </footer>
  );
}
