// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const About = () => {
//   return (
//     <section className="py-20 sm:py-16 ">
//       <div className="wrapper 
//  ">
//         {/* Heading */}
//         <h2 className=" text-3xl md:text-4xl font-bold  mb-8 sm:mb-12 outfit ">
//           Your trusted partner in digital innovation
//         </h2>

//         {/* Content */}
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-4  items-center">
//           {/* Image */}
//           <div className="w-full flex ">
//             <Image
//               src="/about.png"
//               alt="About Sherpa"
//               width={500}
//               height={400}
//               className="w-[550px]  h-auto rounded-xl object-contain"
//             />
//           </div>

//           {/* Text */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 dmsans">
//               Empower your business with human-centric technology
//             </h3>

//             <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed dmsans">
//               At Sherpa, we don’t just implement technology — we ensure it
//               strengthens your team and aligns with your business goals. Our
//               human-centric approach and independent vision make us the ideal
//               partner for your digital journey.
//             </p>

//             <Link
//               href="#"
//               className="dmsans inline-block bg-[#f5a623] text-white px-5 sm:px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#e0961f] transition"
//             >
//               Read more about our mission
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


"use client"; 

import React from 'react';
import { STATS } from '../../constants';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-[#1F1F1F]">
      <div className="container mx-auto px-6">
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
                <span className="text-6xl md:text-8xl font-heading font-black text-white group-hover:text-[#00A74E] transition-colors tracking-tighter">
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

export default Stats;
