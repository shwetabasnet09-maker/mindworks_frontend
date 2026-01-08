

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home, Settings } from "lucide-react"; 

const cardStyles = [
  "bg-black text-white border border-white hover:border-white",
  "bg-[#00A74E] text-white border border-white/15 hover:border-[#00A74E]/50",
  "bg-[#E6E6E8] text-black border border-black hover:border-black",
];

// Map icon strings to actual components
const ICONS = {
  Search: Search,
  Home: Home,
  Settings: Settings,
};

const ServiceGrid = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/core/services/", {
          cache: "no-store",
        });
        const json = await res.json();
        console.log("API DATA:", json);

        setResult(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-24">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {result.map((service, index) => {
        const style = cardStyles[index % cardStyles.length];
        const IconComponent = ICONS[service.icon] || Search; // fallback to Search

        // Convert HTML features string to array of plain text
        const featuresArray = service.features
          ? service.features
              .split("</p>") // split by closing paragraph tag
              .map((f) => f.replace(/<[^>]+>/g, "").trim()) // remove HTML tags
              .filter((f) => f.length > 0) // remove empty strings
          : [];

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
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <IconComponent
                    size={40}
                    className={style.includes("text-black") ? "text-black" : "text-white"}
                  />
                </div>

                {/* Title */}
                <h3 className="md:text-[25px] text-[20px] font-bold mb-3 leading-snug outfit">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed dmsans ${
                    style.includes("text-black") ? "text-black/70" : "text-white"
                  }`}
                  dangerouslySetInnerHTML={{ __html: service.short_description }}
                />

                {/* Features */}
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  {featuresArray.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
