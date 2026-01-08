

// "use client";
// import React, { useState } from "react";
// import { Star, Play } from "lucide-react";
// import { TESTIMONIALS } from "../../constants";
// import { motion } from "framer-motion";

// const Testimonials = () => {
//   const [playingVideo, setPlayingVideo] = useState(null);

//   return (
//     <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#00A74E]/5 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="container mx-auto px-6">
//         <div className="text-center mb-24 max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-[#00A74E] dmsans text-sm md:text-base font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
//               Proven Performance
//             </span>
//             <h2 className="text-3xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter outfit">
//               The Clients Who Trusted <br />{" "}
//               <span className="text-[#00A74E]">Our Process</span>
//             </h2>
//             <p className="text-xl text-white font-medium leading-relaxed dmsans">
//               Real partnerships are built on results, not promises. Here’s what our clients say after trusting MindWorks to deliver serious growth.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dmsans">
//           {TESTIMONIALS.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative h-[600px] rounded-[40px] overflow-hidden border border-white/5 cursor-pointer"
//             >
//               {/* Video iframe */}
//               {playingVideo === t.videoId ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0&modestbranding=1`}
//                   title={t.author}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <div
//                   className="absolute inset-0 w-full h-full bg-black/40 flex items-center justify-center"
//                   onClick={() => setPlayingVideo(t.videoId)}
//                 >
//                   <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-125 transition-transform duration-500 shadow-2xl relative">
//                     <Play className="text-white fill-white w-8 h-8 ml-1" />
//                     <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
//                   </div>
//                 </div>
//               )}

//               {/* Gradient overlays */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent pointer-events-none"></div>
//               <div className="absolute inset-0 bg-[#00A74E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//               {/* Tags */}
              

//               {/* Author & rating */}
//               <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
//                 <div className="mb-4">
//                   <h3 className="text-3xl font-heading font-black text-white">{t.author}</h3>
//                   <p className="text-white text-sm font-bold mt-1 uppercase tracking-widest">
//                     {t.position}, {t.company}
//                   </p>
//                 </div>
//                 <div className="flex space-x-1">
//                   {[1, 2, 3, 4, 5].map((s) => (
//                     <Star key={s} size={16} className="text-white fill-white" />
//                   ))}
//                 </div>
//               </div>

              
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <button className="px-10 py-4 glass border-[#00A74E]/20 text-[#00A74E] font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-[#00A74E] hover:text-white transition-all shadow-2xl">
//             View All 20+ Testimonials
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// 'use client';

// import { useState } from 'react';

// const testimonials = [
//   {
//     id: 1,
//     company: 'must',
//     logo: '/api/placeholder/150/60',
//     quote: "It was a pleasure to work with UpScale Digital and their team for our new company identity as well as website page. A straight forward and clear communication allowed us to move forward within a perfectly adapted timeline",
//     author: "Youssef Dimaohk",
//     position: "Group General Manager",
//     location: "JEDDAH, SAUDI ARABIA"
//   },
//   {
//     id: 2,
//     company: 'namariq',
//     logo: '/api/placeholder/150/60',
//     quote: "We partnered with Upscale Digital as part of a strategic initiative to re-establish our digital presence in alignment with Namariq's evolving brand vision. Their team brought strong technical capabilities cross design, website development, social media strategy, content creation, and visual production. They remained flexible, responsive, and consistently adaptable to our requirements—committed to delivering to expectations and ensuring our satisfaction. Thanks to their support, we achieved polished, professional outputs that truly reflect who we are and where we're headed. We value their contribution, their dedication, and their ability to align with our needs throughout the journey. Wishing them more success and growth!",
//     author: "Razan Zaiat",
//     position: "Head of Business Excellence",
//     location: "Saudi Arabia"
//   },
//   {
//     id: 3,
//     company: 'rafa',
//     logo: '/api/placeholder/150/60',
//     quote: "Working with Upscale Digital has been a transformative experience characterized by exceptional professionalism and unwavering support. Their team consistently demonstrates a proactive approach, anticipating our needs and providing tailored solutions that enhance our marketing strategies. The level of customer orientation is remarkable; they prioritize our goals and ensure that we are engaged throughout the process, fostering a collaborative environment. This commitment to excellence not only meets but often exceeds our expectations, making them a valuable partner",
//     author: "RAFA",
//     position: "Marketing Team",
//     location: "JEDDAH, SAUDI ARABIA"
//   }
// ];

// export default function TestimonialsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
//           What Our Clients Say
//         </h2>

//         {/* Desktop View - 3 Columns */}
//         <div className="hidden lg:grid lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>

//         {/* Mobile/Tablet View - Carousel */}
//         <div className="lg:hidden">
//           <div className="relative">
//             <TestimonialCard testimonial={testimonials[activeIndex]} />
//           </div>

//           {/* Dots Navigation */}
//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === activeIndex
//                     ? 'w-8 bg-blue-600'
//                     : 'w-2 bg-gray-300'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialCard({ testimonial }) {
//   return (
//     <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
//       {/* Logo */}
//       <div className="mb-8 h-16 flex items-center">
//         <div className="border border-gray-200 rounded-xl px-6 py-3 inline-block">
//           <span className="text-2xl font-bold text-blue-600">
//             {testimonial.company}
//           </span>
//         </div>
//       </div>

//       {/* Quote Icon */}
     

//       {/* Quote Text */}
//       <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
//         {testimonial.quote}
//       </p>

//       {/* Author Info */}
//       <div className="border-l-4 border-blue-600 pl-4">
//         <p className="font-bold text-gray-900 text-lg mb-1">
//           {testimonial.author}
//         </p>
//         <p className="text-gray-600 text-sm mb-1">
//           {testimonial.position}
//         </p>
//         <div className="flex items-center gap-2 text-xs text-gray-500">
//           <span className="text-green-600">🇸🇦</span>
//           <span className="uppercase tracking-wide">
//             {testimonial.location}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientsShowcase({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Check if data exists
  if (!data) return null;

  // 2. Extract the list from INSIDE the data object
  const testimonialsList = data.testimonials || [];

  if (testimonialsList.length === 0) return null;

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A74E] dmsans text-sm font-black uppercase tracking-[0.4em] mb-4 block">
              {data.subtitle}
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 outfit tracking-tighter">
              {data.title} <br />
              <span className="text-[#00A74E]">{data.title_1}</span>
            </h2>
            <p className="text-xl text-white/70 dmsans">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* LIST - Mapping from testimonialsList */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} t={testimonial} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <TestimonialCard t={testimonialsList[activeIndex]} index={0} />
          <div className="flex justify-center gap-3 mt-10">
            {testimonialsList.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-10 bg-[#00A74E]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#161616] rounded-[40px] p-10 border border-white/5 flex flex-col h-full hover:border-[#00A74E]/30 transition-all"
    >
      <div className="mb-8">
        <Quote className="text-[#00A74E] w-8 h-8" />
      </div>

      <p className="text-white/80 dmsans leading-relaxed mb-10 text-lg flex-grow italic">
        "{t.text}"
      </p>

      <div className="pt-8 border-t border-white/5">
        <h3 className="text-xl font-bold text-white outfit">{t.author}</h3>
        <p className="text-[#00A74E] text-xs font-bold uppercase tracking-widest mt-1">
          {t.position} @ {t.company}
        </p>
        <div className="flex space-x-1 mt-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={14} className="text-[#00A74E] fill-[#00A74E]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}