"use client";
import React from 'react';
import { SERVICES } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#00A74E] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              Domain Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1] tracking-tighter">
              Integrated Growth <br /> <span className="text-gradient-green">Solutions.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xl font-medium max-w-sm">
            Scalable digital strategies engineered for the MENA region's top-tier brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-[40px] h-full flex flex-col hover:bg-white/[0.04] transition-all duration-500 border-white/5 hover:border-[#00A74E]/30">
                <div className="w-16 h-16 bg-[#00A74E]/10 text-[#00A74E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-heading font-black text-white mb-4 leading-tight group-hover:text-[#00A74E] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#00A74E] group-hover:border-[#00A74E] transition-all">
                    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
