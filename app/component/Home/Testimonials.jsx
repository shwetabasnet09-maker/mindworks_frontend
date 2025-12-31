

"use client";
import React, { useState } from "react";
import { Star, Play } from "lucide-react";
import { TESTIMONIALS } from "../../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#00A74E]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A74E] dmsans text-sm md:text-base font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Proven Performance
            </span>
            <h2 className="text-3xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter outfit">
              The Clients Who Trusted <br />{" "}
              <span className="text-[#00A74E]">Our Process</span>
            </h2>
            <p className="text-xl text-white font-medium leading-relaxed dmsans">
              Real partnerships are built on results, not promises. Here’s what our clients say after trusting MindWorks to deliver serious growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dmsans">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[600px] rounded-[40px] overflow-hidden border border-white/5 cursor-pointer"
            >
              {/* Video iframe */}
              {playingVideo === t.videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={t.author}
                  className="absolute inset-0 w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 w-full h-full bg-black/40 flex items-center justify-center"
                  onClick={() => setPlayingVideo(t.videoId)}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-125 transition-transform duration-500 shadow-2xl relative">
                    <Play className="text-white fill-white w-8 h-8 ml-1" />
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
                  </div>
                </div>
              )}

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#00A74E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Tags */}
              

              {/* Author & rating */}
              <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                <div className="mb-4">
                  <h3 className="text-3xl font-heading font-black text-white">{t.author}</h3>
                  <p className="text-white text-sm font-bold mt-1 uppercase tracking-widest">
                    {t.position}, {t.company}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-white fill-white" />
                  ))}
                </div>
              </div>

              
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 glass border-[#00A74E]/20 text-[#00A74E] font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-[#00A74E] hover:text-white transition-all shadow-2xl">
            View All 20+ Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
