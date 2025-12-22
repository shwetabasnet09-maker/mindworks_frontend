


"use client"; 

import React from 'react';
import { STATS } from '../../constants';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-[#1F1F1F]">
      <div className="wrapper px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left group"
            >
              <div className="mb-4">
                <span className="text-3xl md:text-5xl outfit font-heading font-black text-white group-hover:text-[#00A74E] transition-colors tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-3xl font-black text-[#00A74E]">{stat.suffix}</span>
              </div>
              <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">{stat.label}</p>
              <div className="h-0.5 w-12 bg-[#00A74E]/20 group-hover:w-20 group-hover:bg-[#00A74E] mt-6 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
