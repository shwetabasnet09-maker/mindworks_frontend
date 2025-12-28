"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---------------- TIMELINE ITEM ---------------- */
const TimelineItem = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* DOT */}
      <div className="w-4 h-4 rounded-full bg-black relative z-10" />

      {/* TEXT */}
      <div className="mt-6 max-w-xs">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

/* ---------------- PERFECT CONNECTING LINE ---------------- */
const AnimatedRowLine = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="
      absolute
      top-2
      inset-x-0
      h-[2px]
      bg-gray-300
      origin-left
    "
  />
);

/* ---------------- PAGE ---------------- */
export default function TimelineSection() {
  return (
    <div className="max-w-7xl mx-auto px-12 py-24 space-y-32">

      {/* ROW 1 */}
      <div className="relative px-2">
        <AnimatedRowLine />

        <div className="grid grid-cols-3 items-start">
          <TimelineItem
            title="Discovery & App Strategy"
            description="We analyze your business, goals, and users."
          />
          <TimelineItem
            title="UX/UI Design"
            description="User-first, conversion-focused design."
          />
          <TimelineItem
            title="Tech Stack & Architecture"
            description="Scalable and secure architecture."
          />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="relative px-2">
        <AnimatedRowLine />

        <div className="grid grid-cols-3 items-start">
          <TimelineItem
            title="Agile Development"
            description="Iterative development with testing."
          />
          <TimelineItem
            title="Launch & Deployment"
            description="App Store & Play Store launch."
          />
          <TimelineItem
            title="Optimization"
            description="Continuous performance improvement."
          />
        </div>
      </div>

    </div>
  );
}
