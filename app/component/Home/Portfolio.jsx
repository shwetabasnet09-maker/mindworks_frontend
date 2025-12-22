"use client";
import React from 'react';
import { WHY_CHOOSE_US_CONTENT, FEATURES } from '../../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Features = () => {
  return (
    <section id="why-choose-us" className="py-32 relative overflow-hidden bg-[#1F1F1F]">
      <div className="wrapper mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#faac52] font-black uppercase tracking-[0.3em] text-[10px] block mb-4 dmsans">
                Competitive Edge
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 leading-tight tracking-tighter outfit">
                {WHY_CHOOSE_US_CONTENT.title}
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium dmsans">
                {WHY_CHOOSE_US_CONTENT.subtitle}
              </p>

              <div className="space-y-6 mb-12">
                {WHY_CHOOSE_US_CONTENT.points.map((point, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#00A74E]/20 flex items-center justify-center group-hover:bg-[#00A74E]/40 transition-colors">
                      <CheckCircle2 size={18} className="text-[#00A74E]" />
                    </div>
                    <span className="text-white font-bold text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-8 p-8 rounded-[32px] glass border-[#00A74E]/20">
                <div className="bg-[[#00A74E]]/10 p-4 rounded-2xl">
                  <ShieldCheck size={40} className="text-[#00A74E]" />
                </div>
                <div>
                  <p className="text-white font-black text-xl dmsans">Privacy & IP Secured</p>
                  <p className="text-slate-400 text-sm font-medium">
                    All strategies are proprietary and strictly confidential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A74E]/5 blur-3xl rounded-full -z-10"></div>

            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[40px] group hover:border-[#00A74E]/50 transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#00A74E] group-hover:bg-[#00A74E] group-hover:text-white transition-all duration-500">
                    <feature.icon size={32} />
                  </div>
                  <div className='dmsans'>
                    <h3 className="text-2xl font-heading font-black text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
