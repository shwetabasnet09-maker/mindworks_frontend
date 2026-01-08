

// "use client";

// import React, { useState, useEffect } from "react";
// import { ArrowUpRight, Target, Globe, Layers, Database } from "lucide-react";

// /* ---------------- ICON MAPPER ---------------- */
// const iconMap = {
//   Audit: Target,
//   Strategy: Globe,
//   Execute: Layers,
//   Scale: Database,
// };

// export default function Process() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           "http://127.0.0.1:8000/api/home/blueprint/",
//           { cache: "no-store" }
//         );
//         const json = await res.json();
//         console.log("API DATA:", json);
//         setData(json[0]); // 👈 API returns an array
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

//   if (!data) return null;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="py-20 wrapper mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

//           {/* LEFT SIDE */}
//           <div className="lg:sticky lg:top-32 lg:h-fit py-12 lg:py-20 space-y-8">
//             <div className="text-2xl uppercase text-[#00A74E] dmsans">
//               {data.title}
//             </div>

//             <h2 className="text-4xl lg:text-5xl font-light leading-tight outfit">
//               {data.subtitle}
//             </h2>

//             <p className="dmsans text-[20px]">
//               {data.description}
//             </p>

//             <div className="pt-6">
//               <button className="group flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 dmsans">
//                 <span className="text-lg">More About</span>
//                 <div className="w-10 h-10 flex items-center justify-center bg-[#00A74E] rounded-full group-hover:rotate-45 transition-transform duration-300">
//                   <ArrowUpRight className="w-5 h-5 text-black" />
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE — LOOPED */}
//           <div className="py-12 lg:py-20 space-y-12">
//             {data.process.map((item, index) => {
//               const Icon = iconMap[item.title] || Target;

//               return (
//                 <div
//                   key={item.id}
//                   className={`space-y-4 pb-8 ${
//                     index !== data.process.length - 1
//                       ? "border-b border-gray-800"
//                       : ""
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-400 rounded-lg flex-shrink-0">
//                       <Icon className="w-6 h-6 text-lime-400" />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className="text-2xl font-light mb-3">
//                         {item.number}. {item.title}
//                       </h3>
//                       <p className="text-white leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { ArrowUpRight, Target, Globe, Layers, Database } from "lucide-react";

/* ---------------- ICON MAPPER ---------------- */
const iconMap = {
  Audit: Target,
  Strategy: Globe,
  Execute: Layers,
  Scale: Database,
};

export default function Process({ data }) {
  // If no data exists for this region, hide the section
  if (!data) return null;

  // If your API returns an array, take the first item. 
  // If you already pass homepageData.blueprint[0] from page.js, remove the [0] here.
  const content = Array.isArray(data) ? data[0] : data;

  if (!content) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="py-20 wrapper mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT SIDE — STICKY */}
          <div className="lg:sticky lg:top-32 lg:h-fit py-12 lg:py-20 space-y-8">
            <div className="text-2xl uppercase text-[#00A74E] dmsans">
              {content.title}
            </div>

            <h2 className="text-4xl lg:text-5xl font-light leading-tight outfit">
              {content.subtitle}
            </h2>

            <p className="dmsans text-[20px] text-white/70">
              {content.description}
            </p>

            <div className="pt-6">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 dmsans">
                <span className="text-lg">More About</span>
                <div className="w-10 h-10 flex items-center justify-center bg-[#00A74E] rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — SCROLLABLE PROCESS */}
          <div className="py-12 lg:py-20 space-y-12">
            {content.process?.map((item, index) => {
              // Get icon from title (e.g., "Audit" -> Target icon)
              const Icon = iconMap[item.title] || Target;

              return (
                <div
                  key={item.id || index}
                  className={`space-y-4 pb-8 ${
                    index !== content.process.length - 1
                      ? "border-b border-gray-800"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-[#00A74E]/40 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00A74E]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-light mb-3 outfit">
                        {item.number ? `${item.number}. ` : ""}{item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed dmsans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}