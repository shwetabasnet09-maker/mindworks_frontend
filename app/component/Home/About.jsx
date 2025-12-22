
"use client";

import React from 'react';
import { WHO_WE_ARE } from '../../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A]">
      <div className="wrapper ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative ">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0A0A0A]/10 rounded-tl-3xl -z-10"></div>
              <img 
                src="/about.png" 
                alt="Digital Marketing Team" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square border border-white/5"
              />
              <div className="dmsans absolute -bottom-6 -right-6 bg-[#1F1F1F] p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#0A0A0A]">
                <p className="text-4xl font-black text-white mb-1">98%</p>
                <p className=" font-bold uppercase tracking-widest text-[10px] text-[#faac52]">
                  Client Satisfaction Rate in Dubai
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-black text-[#faac52] uppercase tracking-[0.3em] mb-4 dmsans">
              The MindWorks DNA
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 leading-tight tracking-tighter outfit">
              {WHO_WE_ARE.title}
            </h3>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium dmsans">
              {WHO_WE_ARE.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 dmsans">
              <div>
                <h4 className="text-3xl font-black text-white">500+</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Growth Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-white">50+</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Senior Experts</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-white">10y+</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">MENA Mastery</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
