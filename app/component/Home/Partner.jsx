"use client"
import React from 'react';
import { PARTNER_LOGOS } from '../../constants';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className="py-24 bg-[#1F1F1F] relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <h4 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          Our Partners & Certifications
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
          className="flex space-x-24 items-center whitespace-nowrap py-4"
        >
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="w-48 h-12 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1F1F1F] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1F1F1F] to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40">
        <div className="font-black text-2xl text-white tracking-tighter">klaviyo<span className="text-[#00A74E]">.</span></div>
        <div className="font-black text-2xl text-white tracking-tighter">shopify<span className="text-[#00A74E]">.</span></div>
        <div className="font-black text-2xl text-white tracking-tighter uppercase italic">clutch</div>
        <div className="font-black text-2xl text-white tracking-tighter">BIGCOMMERCE</div>
        <div className="font-black text-2xl text-white tracking-tighter">magento</div>
      </div>
    </section>
  );
};

export default Partners;
