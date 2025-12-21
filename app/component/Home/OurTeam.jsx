"use client";
import React from 'react';
import { PROCESS } from '../../constants';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section id="process" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-800/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-green-500 font-black uppercase tracking-widest text-xs mb-4 block">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Blueprint for <span className="text-green-500">Success</span></h2>
          <p className="text-gray-400 text-lg font-medium">A standardized engineering methodology that produces non-standard results.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-32">
            {PROCESS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-2 border-white/10 flex items-center justify-center z-20 shadow-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                  <div className="bg-gray-800/30 p-8 md:p-12 rounded-3xl hover:border-green-500/20 border border-transparent transition-all shadow-sm relative">
                    <span className="text-6xl font-extrabold text-white/10 absolute top-4 right-8 select-none pointer-events-none">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block p-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl overflow-hidden group shadow-lg"
          >
            <div className="bg-gray-800 px-12 py-10 rounded-xl group-hover:bg-gray-900 transition-colors">
              <h3 className="text-2xl font-extrabold text-white mb-2">Ready to kick off?</h3>
              <p className="text-gray-400 mb-8 font-medium">Start your high-performance intelligence audit today.</p>
              <a href="#audit" className="inline-block bg-green-500 text-white px-12 py-5 rounded-2xl font-extrabold shadow-lg shadow-green-500/20 hover:scale-105 transition-all">
                Book Discovery Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
