

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { CheckCircle2, ShieldCheck, Star, Zap } from "lucide-react";

// // /* ---------------- ICON MAPPER ---------------- */
// // const iconMap = {
// //   shield: ShieldCheck,
// //   star: Star,
// //   zap: Zap,
// // };

// // /* ---------------- COMPONENT ---------------- */
// // const FeaturesSection = () => {
// //   const [features, setFeatures] = useState([]);
// //   const [choose, setChoose] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const [chooseRes, featureRes] = await Promise.all([
// //         fetch("http://127.0.0.1:8000/api/home/why-choose-us/"),
// //         fetch("http://127.0.0.1:8000/api/home/features/"),
// //       ]);

// //       const chooseData = await chooseRes.json();
// //       const featureData = await featureRes.json();

// //       setChoose(chooseData[0]); // ✅ KEEP ONLY THIS
// //       setFeatures(featureData);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchData();
// // }, []);

// //   if (loading) return <p className="text-white">Loading...</p>;

// //   return (
// //     <section
// //       id="why-choose-us"
// //       className="py-32 relative overflow-hidden bg-[#1F1F1F]"
// //     >
// //       <div className="wrapper mx-auto px-6">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
// //           {/* LEFT CONTENT */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-[#00A74E] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
// //               Competitive Edge
// //             </span>

// //             <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
// //               {choose?.title}
// //             </h2>

// //             <p className="text-xl text-white mb-12">
// //               {choose?.description}
// //             </p>

// //             <div className="space-y-6">
// //               {choose?.points?.map((item) => (
// //                 <div key={item.id} className="flex items-center space-x-4">
// //                   <div className="w-8 h-8 rounded-full bg-[#00A74E]/20 flex items-center justify-center">
// //                     <CheckCircle2 size={18} className="text-[#00A74E]" />
// //                   </div>
// //                   <span className="text-white font-bold text-lg">
// //                     {item.point}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //           </motion.div>

// //           {/* RIGHT FEATURES */}
// //           <div className="grid grid-cols-1 gap-6 relative">
// //             <div className="absolute inset-0 bg-[#00A74E]/5 blur-3xl rounded-full -z-10" />

// //             {features.map((feature, idx) => {
// //               const Icon = iconMap[feature.icon] || ShieldCheck;

// //               return (
// //                 <motion.div
// //                   key={feature.id || idx}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   className="glass md:p-10 rounded-[40px] hover:border-[#00A74E] transition-all"
// //                 >
// //                   <div className="flex items-start space-x-6">
// //                     <div className="w-16 h-16 flex items-center justify-center text-[#00A74E]">
// //                       <Icon size={32} />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-2xl font-black text-white mb-3">
// //                         {feature.title}
// //                       </h3>
// //                       <p className="text-white text-lg">
// //                         {feature.description}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturesSection;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2, ShieldCheck, Star, Zap, BarChart3, Target, Globe } from "lucide-react";

// const iconMap = {
//   shield: ShieldCheck,
//   star: Star,
//   zap: Zap,
//   BarChart3: BarChart3,
//   Target: Target,
//   Globe: Globe, // Added for your "Local Market Mastery" feature
// };

// const FeaturesSection = ({ whyChooseData, featuresData }) => {
  
//   // Safety check: if data hasn't arrived yet, don't crash
//   if (!whyChooseData && (!featuresData || featuresData.length === 0)) {
//     return null;
//   }

//   return (
//     <section id="why-choose-us" className="py-32 bg-[#1F1F1F]">
//       <div className="wrapper mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
//           {/* LEFT: Why Choose Us */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-[#00A74E] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
//               {whyChooseData?.subtitle || "Competitive Edge"}
//             </span>

//             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 outfit tracking-tighter">
//               {whyChooseData?.title}
//             </h2>

//             <p className="text-xl text-white/80 mb-12">
//               {whyChooseData?.description}
//             </p>

//             <div className="space-y-6">
//               {/* FIX: Accessing item.point because points is an array of objects */}
//               {whyChooseData?.points?.map((item) => (
//                 <div key={item.id} className="flex items-center space-x-4">
//                   <div className="w-8 h-8 rounded-full bg-[#00A74E]/20 flex items-center justify-center">
//                     <CheckCircle2 size={18} className="text-[#00A74E]" />
//                   </div>
//                   <span className="text-white font-bold text-lg">
//                     {item.point} 
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT: Features List */}
//           <div className="grid grid-cols-1 gap-6">
//             {featuresData?.map((feature, idx) => {
//               const Icon = iconMap[feature.icon] || ShieldCheck;

//               return (
//                 <motion.div
//                   key={feature.id || idx}
//                   className="glass p-8 md:p-10 rounded-[40px] border border-white/5 hover:border-[#00A74E]/50 transition-all"
//                 >
//                   <div className="flex items-start space-x-6">
//                     <div className="w-16 h-16 flex items-center justify-center text-[#00A74E]">
//                       <Icon size={32} />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-black text-white mb-3 outfit">
//                         {feature.title}
//                       </h3>
//                       <p className="text-white/70 text-lg">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// component/Home/Portfolio.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star, Zap, BarChart3, Target, Globe } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  star: Star,
  zap: Zap,
  BarChart3: BarChart3,
  Target: Target,
  Globe: Globe,
};

// Ensure these prop names MATCH what you send from page.js
export default function WhyChoose({ whyChooseData, featuresData }) {
  
  // LOG THE DATA: This is the best way to see why it's not rendering
  console.log("WhyChoose Data:", whyChooseData);
  console.log("Features Data:", featuresData);

  // If data is null or undefined, the section won't show
  if (!whyChooseData) return null; 

  return (
    <section id="why-choose-us" className="py-32 bg-[#1F1F1F]">
      <div className="wrapper mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <span className="text-[#00A74E] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              {whyChooseData.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              {whyChooseData.title}
            </h2>
            <p className="text-xl text-white/80 mb-12">
              {whyChooseData.description}
            </p>
            <div className="space-y-6">
              {/* IMPORTANT: Check if points is an array and access .point */}
              {whyChooseData.points?.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <CheckCircle2 size={18} className="text-[#00A74E]" />
                  <span className="text-white font-bold text-lg">{item.point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuresData?.map((feature) => {
              const Icon = iconMap[feature.icon] || ShieldCheck;
              return (
                <div key={feature.id} className="glass p-10 rounded-[40px] border border-white/5">
                  <div className="flex items-start space-x-6">
                    <Icon size={32} className="text-[#00A74E]" />
                    <div>
                      <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70 text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}