// "use client";
// import React from 'react';
// import { PROCESS } from '../../constants';
// import { motion } from 'framer-motion';

// const Process = () => {
//   return (
//     <section id="process" className="py-32 bg-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gray-800/20"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="text-[#00A74E] font-black uppercase tracking-widest text-xs mb-4 block">Our Methodology</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight outfit">Our Blueprint for <span className="text-[#00A74E]">Success</span></h2>
//           <p className="text-gray-400 text-lg font-medium dmsans">A standardized engineering methodology that produces non-standard results.</p>
//         </div>

//         <div className="relative">
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5 md:-translate-x-1/2"></div>

//           <div className="space-y-12 md:space-y-20">
//             {PROCESS.map((step, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//               >
//                 <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-2 border-white/10 flex items-center justify-center z-20 shadow-xl">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>

//                 <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
//                   <div className="dmsans bg-gray-800/30  rounded-3xl hover:border-green-500/20 border border-transparent transition-all shadow-sm relative">
                    
//                     <h3 className="text-2xl md:text-3xl font-extrabold text-white ">{step.title}</h3>
//                     <p className="text-gray-400 text-lg leading-relaxed font-medium">{step.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default Process;

"use client";

import React from "react";
import { ArrowUpRight, Target, Globe, Layers, Database } from "lucide-react";

export default function Process() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      

      {/* Main Content */}
      <div className="py-20 wrapper  mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT SIDE — NOW STICKY */}
          <div className="lg:sticky lg:top-32 lg:h-fit py-12 lg:py-20 space-y-8">
            <div className="flex items-center gap-2 text-lime-400">
              <div className="text-2xl UPPERCASE text-[#00A74E] dmsans">OUR METHODOLOGY</div>
              
            </div>

            <h2 className="text-4xl lg:text-5xl  font-light leading-tight outfit">
              Our Blueprint for {''}
              <span className=" font-normal text-[#00A74E]">Success</span>
              
            </h2>

            <div className="pt-6">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 dmsans">
                <span className="text-lg">More About</span>
                <div className="w-10 h-10 flex items-center justify-center bg-[#00A74E] rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — NOW SCROLLABLE */}
          <div className="py-12 lg:py-20 space-y-12">

            {/* Feature 1 */}
            <div className="space-y-4 pb-8 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-400 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                  
                  <h3 className="text-2xl font-light mb-3">Audit</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Deep dive into your data silos and competitor gaps.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 pb-8 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-400 rounded-lg flex-shrink-0">
                  <Globe className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                 
                  <h3 className="text-2xl font-light mb-3">Strategy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Architecting your unique 90-day growth blueprint.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 pb-8 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-400 rounded-lg flex-shrink-0">
                  <Layers className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                  
                  <h3 className="text-2xl font-light mb-3">Execute</h3>
                  <p className="text-gray-400 leading-relaxed">
                   Agile implementation with weekly performance sprints.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-400 rounded-lg flex-shrink-0">
                  <Database className="w-6 h-6 text-lime-400" />
                </div>
                <div className="flex-1">
                 
                  <h3 className="text-2xl font-light mb-3">Scale</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Aggressive reinvestment in winning channels.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
