// "use client";
// import React, { useState, useEffect } from "react";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// const HeroSection = ({ region = "global" }) => {
//   const [hero, setHero] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHero = async () => {
//       try {
//         setLoading(true);
//         // Fetch the entire homepage data by region
//         const res = await fetch(`http://127.0.0.1:8000/api/home/?region=${region}`);
//         const data = await res.json();
//         setHero(data.hero || null);
//       } catch (err) {
//         console.error("Error fetching Hero data:", err);
//         setHero(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHero();
//   }, [region]);

//   if (loading) return <p className="text-center text-white py-20">Loading...</p>;
//   if (!hero) return null; // No content fallback

//   return (
//     <section
//       id="hero"
//       className="relative flex items-center pt-32 pb-20 overflow-hidden bg-grid-modern bg-black"
//     >
//       {/* Decorative Orbs */}
//       <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00A74E]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
//       <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FB5252]/5 rounded-full blur-[100px]"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Top Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-[#00A74E]/20 mb-8"
//           >
//             <Sparkles size={16} className="text-[#00A74E] animate-pulse" />
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 dmsans">
//               {hero.subtitle || "Scale Your Brand"}
//             </span>
//           </motion.div>

//           {/* Main Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-4xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-[1] tracking-tighter outfit"
//           >
//             {hero.main_title || "Scale Your Brand"} <br />
//             <span className="text-[#00A74E]">{hero.title_1 || "Scale Your Brand"}</span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto font-medium leading-relaxed dmsans"
//           >
//             {hero.description || ""}
//           </motion.p>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
//           >
//             <a
//               href={hero.button_link || "#"}
//               className="md:px-10 md:py-4 py-2 px-4 bg-[#00A74E] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,132,79,0.3)] hover:scale-105 transition-transform flex items-center justify-center dmsans"
//             >
//               {hero.button_text || "Get Started"}
//               <ArrowRight className="ml-3 w-6 h-6" />
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Accept 'data' as a prop from the Server Component
const HeroSection = ({ data, region = "global" }) => {
  
  // If no data is passed, don't render or show a fallback
  if (!data) return null; 

  return (
    <section
      id="hero"
      className="relative flex items-center pt-32 pb-20 overflow-hidden bg-grid-modern bg-black"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00A74E]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FB5252]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-[#00A74E]/20 mb-8"
          >
            <Sparkles size={16} className="text-[#00A74E] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 dmsans">
              {data.subtitle || "Scale Your Brand"}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-[1] tracking-tighter outfit"
          >
            {data.main_title} <br />
            <span className="text-[#00A74E]">{data.title_1}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto font-medium leading-relaxed dmsans"
          >
            {data.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <a
              href={data.button_link || "#"}
              className="md:px-10 md:py-4 py-2 px-4 bg-[#00A74E] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,132,79,0.3)] hover:scale-105 transition-transform flex items-center justify-center dmsans"
            >
              {data.button_text || "Get Started"}
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;