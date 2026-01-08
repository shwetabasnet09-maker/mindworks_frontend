// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // /* ---------------- TIMELINE ITEM ---------------- */
// // const TimelineItem = ({ title, description }) => (
// //   <div className="flex flex-col items-center text-center">
// //     {/* DOT */}
// //     <div className="w-4 h-4 rounded-full bg-black relative z-10" />

// //     {/* TEXT */}
// //     <div className="mt-6 max-w-xs">
// //       <h4 className="font-semibold text-lg">{title}</h4>
// //       <p className="text-sm text-gray-600 mt-2">{description}</p>
// //     </div>
// //   </div>
// // );

// // /* ---------------- PERFECT CONNECTING LINE ---------------- */
// // const AnimatedRowLine = () => (
// //   <motion.div
// //     initial={{ scaleX: 0 }}
// //     whileInView={{ scaleX: 1 }}
// //     transition={{ duration: 1.2, ease: "easeInOut" }}
// //     viewport={{ once: true }}
// //     className="
// //       absolute
// //       top-2
// //       inset-x-0
// //       h-[2px]
// //       bg-gray-300
// //       origin-left
// //     "
// //   />
// // );

// // /* ---------------- PAGE ---------------- */
// // export default function TimelineSection() {
// //   // Define timeline data dynamically
// //   const timelineRows = [
// //     [
// //       { title: "Discovery & App Strategy", description: "We analyze your business, goals, and users." },
// //       { title: "UX/UI Design", description: "User-first, conversion-focused design." },
// //       { title: "Tech Stack & Architecture", description: "Scalable and secure architecture." },
// //     ],
// //     [
// //       { title: "Agile Development", description: "Iterative development with testing." },
// //       { title: "Launch & Deployment", description: "App Store & Play Store launch." },
// //       { title: "Optimization", description: "Continuous performance improvement." },
// //     ],
// //   ];

// //   return (
// //     <div className="wrappermx-auto px-12 py-24 space-y-32">
// //       {timelineRows.map((row, index) => (
// //         <div key={index} className="relative px-2">
// //           <AnimatedRowLine />
// //           <div className="grid grid-cols-3 items-start">
// //             {row.map((item, idx) => (
// //               <TimelineItem
// //                 key={idx}
// //                 title={item.title}
// //                 description={item.description}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// /* ---------------- TIMELINE ITEM ---------------- */
// const TimelineItem = ({ title, description }) => (
//   <div className="flex flex-col items-center text-center">
//     {/* DOT */}
//     <div className="w-4 h-4 rounded-full bg-black relative z-10" />

//     {/* TEXT */}
//     <div className="mt-6 max-w-xs">
//       <h4 className="font-semibold text-lg">{title}</h4>
//       {/* Updated to render HTML safely */}
//       <div 
//         className="text-sm text-gray-600 mt-2"
//         dangerouslySetInnerHTML={{ __html: description }} 
//       />
//     </div>
//   </div>
// );

// /* ---------------- PERFECT CONNECTING LINE ---------------- */
// const AnimatedRowLine = () => (
//   <motion.div
//     initial={{ scaleX: 0 }}
//     whileInView={{ scaleX: 1 }}
//     transition={{ duration: 1.2, ease: "easeInOut" }}
//     viewport={{ once: true }}
//     className="absolute top-2 inset-x-0 h-[2px] bg-gray-300 origin-left"
//   />
// );

// /* ---------------- PAGE ---------------- */
// export default function TimelineSection() {
//   const [timelineRows, setTimelineRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/api/core/services/");
//         const data = await response.json();

//         // Chunking the flat API array into rows of 3
//         const chunkSize = 3;
//         const formattedRows = [];
//         for (let i = 0; i < data.length; i += chunkSize) {
//           formattedRows.push(data.slice(i, i + chunkSize));
//         }

//         setTimelineRows(formattedRows);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) return <div className="text-center py-24">Loading services...</div>;

//   return (
//     <div className="wrapper mx-auto px-12 py-24 space-y-32">
//       {timelineRows.map((row, index) => (
//         <div key={index} className="relative px-2">
//           <AnimatedRowLine />
//           <div className="grid grid-cols-3 items-start">
//             {row.map((item, idx) => (
//               <TimelineItem
//                 key={item.id || idx}
//                 title={item.title}
//                 description={item.short_description}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- TIMELINE ITEM ---------------- */
const TimelineItem = ({ title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-4 h-4 rounded-full bg-black relative z-10" />
    <div className="mt-6 max-w-xs">
      <h4 className="font-semibold text-lg">{title}</h4>
      <div 
        className="text-sm text-gray-600 mt-2"
        dangerouslySetInnerHTML={{ __html: description || "" }} 
      />
    </div>
  </div>
);

/* ---------------- LINE ---------------- */
const AnimatedRowLine = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="absolute top-2 inset-x-0 h-[2px] bg-gray-300 origin-left"
  />
);

export default function TimelineSection() {
  const [timelineRows, setTimelineRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/core/services/");
        if (!response.ok) throw new Error("Failed to fetch");
        
        const data = await response.json();
        
        // CHECK: If data is a list, take the first service. If it's an object, use it directly.
        const service = Array.isArray(data) ? data[0] : data;
        const timelineData = service?.timeline || [];

        // Chunking into rows of 3
        const chunkSize = 3;
        const formattedRows = [];
        for (let i = 0; i < timelineData.length; i += chunkSize) {
          formattedRows.push(timelineData.slice(i, i + chunkSize));
        }

        setTimelineRows(formattedRows);
      } catch (err) {
        setError(err.message);
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  if (loading) return <div className="text-center py-24">Loading steps...</div>;
  if (error) return <div className="text-center py-24 text-red-500">Error: {error}</div>;
  if (timelineRows.length === 0) return <div className="text-center py-24">No timeline data found.</div>;

  return (
    <div className="wrapper mx-auto px-12 py-24 space-y-32">
      {timelineRows.map((row, index) => (
        <div key={index} className="relative px-2">
          <AnimatedRowLine />
          <div className="grid grid-cols-3 items-start">
            {row.map((item, idx) => (
              <TimelineItem
                key={idx}
                title={item.title}
                description={item.short_description} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}