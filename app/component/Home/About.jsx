
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { WHO_WE_ARE } from '../../constants';
// // import { motion } from 'framer-motion';

// // const About = () => {
// //   const [result, setResult] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const res = await fetch(
// //           "http://127.0.0.1:8000/api/home/about/",
// //           { cache: "no-store" }
// //         );

// //         const json = await res.json();
// //         console.log("API DATA:", json);

// //         setResult(json); // ✅ correct
// //       } catch (err) {
// //         console.error("Error fetching data:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div className="text-white text-center py-24">Loading...</div>;
// //   }
// //   return (
// //     <section id="about" className="py-32 bg-[#0A0A0A]">
// //       <div className="wrapper px-6 ">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-center">

// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <div className="relative ">
// //               <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0A0A0A]/10 rounded-tl-3xl -z-10"></div>
// //               <img
// //                 src={result.image}
// //                 alt="Digital Marketing Team"
// //                 className="rounded-2xl shadow-2xl w-full object-cover aspect-square border border-white/5"
// //               />
// //               <div className="dmsans absolute -bottom-6 -right-6 bg-[#1F1F1F] p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#0A0A0A]">
// //                 <p className="text-4xl font-black text-white mb-1">{result.img_label}</p>
// //                 <p className=" font-bold uppercase tracking-widest text-[10px] text-[#00A74E]">
// //                   {result.img_text}
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h2 className="text-xs font-black text-[#00A74E] uppercase tracking-[0.3em] mb-4 dmsans">
// //               {result.subtitle}
// //             </h2>
// //             <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 leading-tight tracking-tighter outfit">
// //               {result.title}
// //             </h3>
// //             <div
// //               className="space-y-6 text-white leading-relaxed text-lg font-medium dmsans"
// //               dangerouslySetInnerHTML={{ __html: result.description }}
// //             ></div>


// //             <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 dmsans">
// //               {result.stats.map((item, index) => (
// //                 <div key={index}>
// //                   <h4 className="text-3xl font-black text-white">{item.label}</h4>
// //                   <p className="text-xs font-bold text-white uppercase tracking-widest mt-1">
// //                     {item.text}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const [result, setResult] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/home/about/", {
//           cache: "no-store",
//         });
//         const json = await res.json();
//         console.log("API DATA:", json);
//         setResult(json);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center py-24">Loading...</div>;
//   }

//   return (
//     <section id="about" className="py-32 bg-[#0A0A0A]">
//       <div className="wrapper px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative">
//               <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0A0A0A]/10 rounded-tl-3xl -z-10"></div>
//               <img
//                 src={result.image}
//                 alt="Digital Marketing Team"
//                 className="rounded-2xl shadow-2xl w-full object-cover aspect-square border border-white/5"
//               />
//               <div className="dmsans absolute -bottom-6 -right-6 bg-[#1F1F1F] p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#0A0A0A]">
//                 <p className="text-4xl font-black text-white mb-1">
//                   {result.img_label}
//                 </p>
//                 <p className="font-bold uppercase tracking-widest text-[10px] text-[#00A74E]">
//                   {result.img_text}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-xs font-black text-[#00A74E] uppercase tracking-[0.3em] mb-4 dmsans">
//               {result.subtitle}
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 leading-tight tracking-tighter outfit">
//               {result.title}
//             </h3>
//             <div
//               className="space-y-6 text-white leading-relaxed text-lg font-medium dmsans"
//               dangerouslySetInnerHTML={{ __html: result.description || "" }}
//             ></div>

//             <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 dmsans">
//               {result.stats?.map((item, index) => (
//                 <div key={index}>
//                   <h4 className="text-3xl font-black text-white">{item.label}</h4>
//                   <p className="text-xs font-bold text-white uppercase tracking-widest mt-1">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


"use client";

import React from "react";
import { motion } from "framer-motion";


const About = ({ data }) => {
  
  
  if (!data || Object.keys(data).length === 0) {
    return null; 
  }

  return (
    <section id="about" className="py-32 bg-[#0A0A0A]">
      <div className="wrapper px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0A0A0A]/10 rounded-tl-3xl -z-10"></div>
              {/* Use data from props */}
              <img
                src={`http://127.0.0.1:8000${data.image}`}
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square border border-white/5"
              />
              <div className="dmsans absolute -bottom-6 -right-6 bg-[#1F1F1F] p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#0A0A0A]">
                <p className="text-4xl font-black text-white mb-1">
                  {data.img_label}
                </p>
                <p className="font-bold uppercase tracking-widest text-[10px] text-[#00A74E]">
                  {data.img_text}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-black text-[#00A74E] uppercase tracking-[0.3em] mb-4 dmsans">
              {data.subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 leading-tight tracking-tighter outfit">
              {data.title}
            </h3>
            <div
              className="space-y-6 text-white leading-relaxed text-lg font-medium dmsans"
              dangerouslySetInnerHTML={{ __html: data.description || "" }}
            ></div>

            {/* Optional Stats section inside About */}
            {data.stats && data.stats.length > 0 && (
              <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 dmsans">
                {data.stats.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-3xl font-black text-white">{item.label}</h4>
                    <p className="text-xs font-bold text-white uppercase tracking-widest mt-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;