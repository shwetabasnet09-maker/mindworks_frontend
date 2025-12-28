


"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "../../constants";
import { motion } from "framer-motion";

const cardStyles = [
  "bg-black text-white border border-white hover:border-white",
  "bg-[#00A74E] text-white border border-white/15 hover:border-[#00A74E]/50",
  "bg-[#E6E6E8] text-black border border-black hover:border-black",
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#0A0A0A]">
      <div className="wrapper px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#00A74E] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-7xl font-black text-white leading-tight">
              Integrated Growth <br />
              <span className="text-[#00A74E]">Solutions.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-lg max-w-sm">
            Scalable digital strategies engineered for premium brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div
                    className={`${style} rounded-[28px] p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2`}
                  >

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center mb-6">
                      <service.icon
                        size={22}
                        className={
                          style.includes("text-black")
                            ? "text-black"
                            : "text-white"
                        }
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed ${
                        style.includes("text-black")
                          ? "text-black/70"
                          : "text-white/70"
                      }`}
                    >
                      {service.description}
                    </p>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

