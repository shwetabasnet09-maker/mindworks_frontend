"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, ArrowRight } from 'lucide-react';

const AuditCTA = () => {
  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="relative glass rounded-[60px] p-10 md:p-24 overflow-hidden border-[#00A74E]/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A74E]/10 rounded-full blur-[160px] animate-pulse"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-3 bg-[#00A74E]/10 text-[#00A74E] px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-10">
                <Sparkles size={14} />
                <span>Zero Cost. Infinite Value.</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-[1] tracking-tighter">
                Get Your Free <br /> <span className="text-gradient-green">Growth Audit.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium leading-relaxed max-w-2xl">
                We'll spend 30 minutes tearing down your current digital ecosystem and provide a custom roadmap to outperform your competitors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   "Competitor Market Gap Analysis",
                   "Conversion Funnel UX Teardown",
                   "Technical SEO Health Score",
                   "Untapped Revenue Opportunities"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-xl bg-[#00A74E]/20 flex items-center justify-center flex-shrink-0">
                         <Zap size={16} className="text-[#00A74E]" />
                      </div>
                      <span className="text-white font-bold text-lg">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0A]/40 backdrop-blur-3xl rounded-[40px] p-10 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-heading font-black text-white">Reserved Slot</h3>
                   <div className="px-3 py-1 bg-[#FB5252]/10 text-[#FB5252] rounded-lg text-[10px] font-black uppercase">Only 3 Slots Left</div>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                    <input type="text" placeholder="e.g. Abdullah bin Zayed" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00A74E] outline-none transition-all font-bold placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Work Email</label>
                    <input type="email" placeholder="name@company.ae" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00A74E] outline-none transition-all font-bold placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Website URL</label>
                    <input type="text" placeholder="https://yourbrand.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00A74E] outline-none transition-all font-bold placeholder:text-slate-600" />
                  </div>
                  
                  <button className="group w-full bg-[#00A74E] text-white font-black py-6 rounded-2xl shadow-[0_15px_30px_rgba(0,132,79,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center text-xl mt-6">
                    Claim Free Audit
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-slate-500 mt-6">
                    <Shield size={14} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">End-to-End Encryption & Privacy Secured</span>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditCTA;
