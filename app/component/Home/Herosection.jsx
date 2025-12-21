// "use client";

// import React from "react";
// import { ChevronRight } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative overflow-hidden 
//       bg-gradient-to-r from-black via-black to-[#f5a623] py-20"
//     >
//       {/* Pattern overlay */}
//       <div className="absolute inset-0 opacity-20" />

//       {/* RIGHT-SIDE BACKGROUND IMAGE */}
//       <div className="absolute bottom-0 right-0 w-[55%] h-[720px] pointer-events-none">
//         <Image
//           src="/banner.png"
//           alt="Hero"
//           fill
//           className="object-contain object-bottom"
//           priority
//         />
//       </div>

//       <div className="relative wrapper mx-auto  py-28 z-10">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
          
//           {/* LEFT CONTENT */}
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-[#f5a623] text-sm md:text-base font-bold tracking-[0.3em] uppercase dmsans ">
//                 Brand Digital Agency
//               </span>
//               <span className="w-10 h-[2px] bg-[#f5a623]" />
//             </div>

//             <h1 className="text-white text-4xl md:text-5xl  font-extrabold leading-tight outfit">
//               Make Your <br />
//               Brand <span className="font-light">Future-Proof.</span>
//             </h1>

//             <p className="text-gray-300 mt-6 max-w-xl leading-relaxed dmsans text-base md:text-lg">
//               Web designing is not just a profession, but a passion that drives
//               our company to deliver powerful digital experiences.
//             </p>

//             <div className="mt-10">
//               <button className="flex items-center gap-3 bg-[#f5a623] text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition dmsans ">
//                 Discover More
//                 <span className="bg-black text-white rounded-full p-1">
//                   <ChevronRight size={16} />
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT FLOATING ELEMENTS */}
//          <div className="relative hidden lg:block h-[200px] w-full">
  
//   {/* Wrapper pushed to bottom */}
//   <div className="absolute -bottom-50 left-0 right-0">

//     {/* Sales trend */}
//     <div className="absolute bottom-0 left-20 bg-white rounded-xl p-5 shadow-4xl animate-float w-[240px] text-sm md:text-base">
//       <p className="text-xs text-gray-500 dmsans">Sales trend</p>
//       <p className="text-3xl font-bold dmsans">68%</p>
//       <div className="h-2 bg-gray-200 rounded-full mt-3">
//         <div className="h-full w-[75%] bg-[#f5a623] rounded-full" />
//       </div>
//     </div>

//     {/* Rating */}
//     <div className="absolute bottom-0 right-0 bg-white rounded-xl px-6 py-4 shadow-5xl animate-float delay-1000 w-[260px] text-sm md:text-base">
//       <p className="text-lg dmsans">⭐⭐⭐⭐⭐</p>
//       <p className="text-sm text-gray-500 mt-1 dmsans">
//         Read our Success Stories
//       </p>
//     </div>

//   </div>
// </div>

//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_CONTENT, TRUST_BADGES } from '../../constants';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-grid-modern bg-black">
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
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              Ranked #1 Growth Agency Dubai 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl xl:text-9xl font-heading font-extrabold text-white mb-8 leading-[1] tracking-tighter"
          >
            Scale Your Brand <br />
            <span className="text-gradient-green">With Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
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
              className="w-full sm:w-auto px-12 py-6 bg-[#00A74E] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,132,79,0.3)] hover:scale-105 transition-transform flex items-center justify-center"
            >
              {HERO_CONTENT.cta}
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
            <div className="flex -space-x-3 items-center">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-12 h-12 rounded-full border-2 border-[#0A0A0A]" />
               ))}
               <div className="pl-6 text-left">
                  <p className="text-white font-bold text-sm">Join 500+ Local Brands</p>
                  <div className="flex items-center space-x-1">
                     {[1,2,3,4,5].map(s => <div key={s} className="w-3 h-3 bg-[#00A74E] rounded-full"></div>)}
                     <span className="text-slate-500 text-[10px] font-black uppercase ml-2">5.0 Agency Rating</span>
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
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
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
