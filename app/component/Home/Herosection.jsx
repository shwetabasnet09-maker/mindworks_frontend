

"use client";
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_CONTENT, TRUST_BADGES } from '../../constants';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative  flex items-center pt-32 pb-20 overflow-hidden bg-grid-modern bg-black">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00A74E]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FB5252]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-[#00A74E]/20 mb-8"
          >
            <Sparkles size={16} className="text-[#00A74E] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 dmsans ">
              Ranked #1 Growth Agency Dubai 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className=" text-4xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-[1] tracking-tighter outfit"
          >
            Scale Your Brand <br />
            <span className="text-[#faac52]">With Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed dmsans  "
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <a 
              href="#audit" 
              className=" md:px-10 md:py-4 py-2 px-4 bg-[#faac52] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,132,79,0.3)] hover:scale-105 transition-transform flex items-center justify-center dmsans"
            >
              {HERO_CONTENT.cta}
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
            <div className="flex -space-x-3 items-center">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-12 h-12 rounded-full border-2 border-[#0A0A0A]" />
               ))}
               <div className="pl-6 text-left">
                  <p className="text-white font-semibold text-sm">Join 500+ Local Brands</p>
                  <div className="flex items-center space-x-1">
                     {[1,2,3,4,5].map(s => <div key={s} className="w-3 h-3 bg-[#faac52] rounded-full"></div>)}
                     <span className="text-slate-500 text-[10px] font-black uppercase ml-2 dmsans">5.0 Agency Rating</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Horizontal Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-white/5"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {TRUST_BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-3 group cursor-default">
                  <badge.icon className="w-6 h-6 text-[#00A74E] group-hover:scale-110 transition-transform" />
                  <span className="dmsans text-sm md:text-sm font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
