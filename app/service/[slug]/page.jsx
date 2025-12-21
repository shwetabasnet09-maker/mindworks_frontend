

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Banner from "../../Component/Banner/pagebanner";

import Link from "next/link";
import VillaRenovationSection from "@/app/Component/Service/OfficeRenovation";
import VillaRenovationServices from "@/app/Component/Service/VillaRenovationServices";
import ServiceSection from "@/app/Component/Service/ImageGallery";

// Helper to safely parse JSON strings
const safeJsonParse = (data) => {
  if (Array.isArray(data)) return data;
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("JSON Parse Error:", e);
      return [];
    }
  }
  return [];
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchService() {
      try {
        setLoading(true);
        setError(false);

       
        console.log("Fetching for slug:", slug);

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/service/${slug}`);


       
        if (!res.ok) {
          console.error("API Error Status:", res.status);
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        console.log("API Response Data:", data);

        let foundService = null;

        if (Array.isArray(data)) {
         
          console.log("Searching array for:", slug);
          foundService = data.find((item) => item.slug === slug);
        } else {
          
          foundService = data;
        }

        if (foundService) {
          console.log("Service Found:", foundService);
          setService(foundService);
        } else {
          console.error("Service not found in data");
          setError(true);
        }

      } catch (err) {
        console.error("Critical Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchService();
  }, [slug]);

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

 
  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">
          Could not find service with slug: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{slug}</span>
        </p>
        <div className="text-sm text-red-500 mb-6">
          (Check the browser console F12 for details)
        </div>
        <Link
          href="/services"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  // Prepare Data
  const buttonTexts = safeJsonParse(service.button_text);
  const buttonLinks = safeJsonParse(service.button_link);
  
  // Image handling with fallback
  const featureImage = service.feature_img 
    ? `http://localhost:3000/uploads/${service.feature_img}`
    : '/images/placeholder.jpg';

  return (
    <div className="bg-gray-50">
      <section
        className="h-[400px] md:h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${featureImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex items-center justify-center">
          <Banner title={service.title}  />
        </div>
      </section>

     

    

      <ServiceSection/>

      <VillaRenovationSection  />

      <VillaRenovationServices
        
      />
    </div>
  );
}