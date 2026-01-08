


"use client";

import React from "react";
import ServiceGrid from "../Service/ServiceGrid";




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

          <p className="text-white text-lg max-w-sm">
            Scalable digital strategies engineered for the region's most ambitious premium brands.

          </p>
        </div>

       <ServiceGrid/>
       
      </div>
    </section>
  );
};

export default Services;

