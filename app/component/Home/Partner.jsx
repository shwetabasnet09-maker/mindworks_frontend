"use client"
import React from 'react';
import { PARTNER_LOGOS } from '../../constants';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className="py-20 bg-[#1F1F1F] relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <h4 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#00A74E] dmsans text-sm md:text-base">
          Our Partners 
        </h4>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-24 items-center  py-4"
        >
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="w-60 h-12 flex items-center justify-center "
            >
              <img src={logo} alt={`Partner ${idx}`} className="w-[300px]  object-contain" />
            </div>
          ))}
        </motion.div>

      </div>

    
    </section>
  );
};

export default Partners;
