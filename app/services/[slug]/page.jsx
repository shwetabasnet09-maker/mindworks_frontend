

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Bannermain from "@/app/component/Banner/pagebanner";
// import { SERVICES, CONTACT_CARD } from "../../constants";
// import {
//   Megaphone,
//   Search,
//   Code2,
//   ShoppingCart,
//   Mail,
//   Layers,
//   Phone,
//   ArrowRight,
//   ChevronDown,
// } from "lucide-react";
// import TimelineSection from "@/app/component/Service/animation";

// /* ---------------- ICON MAP ---------------- */
// const ICON_MAP = {
//   "digital-marketing": Megaphone,
//   "seo-services": Search,
//   "web-development": Code2,
//   "ecommerce-solutions": ShoppingCart,
//   "email-marketing": Mail,
// };




// /* ---------------- MAIN PAGE ---------------- */
// export default function ServicesPage() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentSlug = pathname.split("/").pop();

//   const [selectedFacility, setSelectedFacility] = useState(
//     currentSlug || SERVICES[0]?.slug
//   );
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     if (currentSlug && SERVICES.some((s) => s.slug === currentSlug)) {
//       setSelectedFacility(currentSlug);
//     } else {
//       setSelectedFacility(SERVICES[0]?.slug);
//     }
//   }, [currentSlug]);

//   const handleFacilityClick = (service) => {
//     setSelectedFacility(service.slug);
//     setIsMobileMenuOpen(false);
//     router.push(`/services/${service.slug}`);
//   };

//   const activeFacility =
//     SERVICES.find((s) => s.slug === selectedFacility) || SERVICES[0];
// const [result, setResult] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/core/services/", {
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
//     <>
//       {/* ---------------- BANNER ---------------- */}
//       <Bannermain
//         backgroundImg="/banner_img.jpeg"
//         title={activeFacility?.title || "Our Services"}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
//         {/* ---------------- MOBILE SERVICE SELECT ---------------- */}
//         <div className="md:hidden mb-6">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl flex justify-between items-center shadow-lg"
//           >
//             <span className="text-lg font-semibold">Select Service</span>
//             <ChevronDown
//               className={`w-5 h-5 transition-transform ${
//                 isMobileMenuOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {isMobileMenuOpen && (
//             <div className="mt-3 bg-white rounded-xl shadow border overflow-hidden">
//               {SERVICES.map((service) => {
//                 const Icon = ICON_MAP[service.slug] || Megaphone;
//                 return (
//                   <button
//                     key={service.slug}
//                     onClick={() => handleFacilityClick(service)}
//                     className={`w-full p-4 flex items-center gap-4 text-left ${
//                       service.slug === selectedFacility
//                         ? "bg-green-50 border-l-4 border-green-600"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5 text-gray-700" />
//                     <span>{service.title}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* ---------------- DESKTOP LAYOUT ---------------- */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* SIDEBAR */}
//           <aside className="hidden md:flex md:w-80 flex-col gap-6">
//             <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-6 shadow-xl">
//               <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
//                 <Layers /> Our Services
//               </h2>

//               {SERVICES.map((service) => {
//                 const Icon = ICON_MAP[service.slug] || Megaphone;
//                 return (
//                   <button
//                     key={service.slug}
//                     onClick={() => handleFacilityClick(service)}
//                     className={`w-full flex items-center gap-3 p-4 rounded-xl mb-2 ${
//                       service.slug === selectedFacility
//                         ? "bg-white text-green-700 shadow"
//                         : "text-white hover:bg-white/10"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="flex-1 font-semibold text-sm">
//                       {service.title}
//                     </span>
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 );
//               })}
//             </div>

//             {CONTACT_CARD && (
//               <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
//                 <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Phone className="text-yellow-600" />
//                 </div>
//                 <p className="text-sm">{CONTACT_CARD.subtitle}</p>
//                 <h3 className="text-white font-bold mb-4">
//                   {CONTACT_CARD.title}
//                 </h3>
//                 <button className="w-full bg-white text-yellow-600 font-semibold py-3 rounded-lg">
//                   {CONTACT_CARD.buttonText}
//                 </button>
//               </div>
//             )}
//           </aside>

//           {/* ---------------- CONTENT ---------------- */}
//           <main className="flex-1 space-y-12">
//             <Image
//               src={activeFacility?.img || "/placeholder-service.jpeg"}
//               alt={activeFacility?.title}
//               width={900}
//               height={450}
//               className="w-full h-72 object-cover rounded-xl shadow"
//             />

//             <h2 className="text-2xl font-bold">{activeFacility?.title}</h2>
//             <p className="text-gray-700">{activeFacility?.description}</p>

           
//             <TimelineSection/>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Bannermain from "@/app/component/Banner/pagebanner";
import { CONTACT_CARD } from "../../constants";
import {
  Megaphone,
  Search,
  Code2,
  ShoppingCart,
  Mail,
  Layers,
  Phone,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import TimelineSection from "@/app/component/Service/animation";

/* ---------------- ICON MAP ---------------- */
const ICON_MAP = {
  "digital-marketing": Megaphone,
  "seo-services": Search,
  "web-development": Code2,
  "ecommerce-solutions": ShoppingCart,
  "email-marketing": Mail,
};

/* ---------------- MAIN PAGE ---------------- */
export default function ServicesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/core/services/", {
          cache: "no-store",
        });
        const data = await res.json();
        setServices(data);

        // Set the selected service based on slug or default to first
        const initialService =
          data.find((s) => s.slug === currentSlug) || data[0];
        setSelectedService(initialService);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [currentSlug]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsMobileMenuOpen(false);
    router.push(`/services/${service.slug}`);
  };

  if (loading) {
    return <div className="text-white text-center py-24">Loading...</div>;
  }

  if (!selectedService) {
    return <div className="text-white text-center py-24">No services found.</div>;
  }

  return (
    <>
      {/* ---------------- BANNER ---------------- */}
      <Bannermain
        backgroundImg={selectedService.img || "/banner_img.jpeg"}
        title={selectedService.title || "Our Services"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
        {/* ---------------- MOBILE SERVICE SELECT ---------------- */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl flex justify-between items-center shadow-lg"
          >
            <span className="text-lg font-semibold">Select Service</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isMobileMenuOpen && (
            <div className="mt-3 bg-white rounded-xl shadow border overflow-hidden">
              {services.map((service) => {
                const Icon = ICON_MAP[service.slug] || Megaphone;
                return (
                  <button
                    key={service.slug}
                    onClick={() => handleServiceClick(service)}
                    className={`w-full p-4 flex items-center gap-4 text-left ${
                      service.slug === selectedService.slug
                        ? "bg-green-50 border-l-4 border-green-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ---------------- DESKTOP LAYOUT ---------------- */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR */}
          <aside className="hidden md:flex md:w-80 flex-col gap-6">
            <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-6 shadow-xl">
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <Layers /> Our Services
              </h2>

              {services.map((service) => {
                const Icon = ICON_MAP[service.slug] || Megaphone;
                return (
                  <button
                    key={service.slug}
                    onClick={() => handleServiceClick(service)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl mb-2 ${
                      service.slug === selectedService.slug
                        ? "bg-white text-green-700 shadow"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 font-semibold text-sm">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            {CONTACT_CARD && (
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-yellow-600" />
                </div>
                <p className="text-sm">{CONTACT_CARD.subtitle}</p>
                <h3 className="text-white font-bold mb-4">
                  {CONTACT_CARD.title}
                </h3>
                <button className="w-full bg-white text-yellow-600 font-semibold py-3 rounded-lg">
                  {CONTACT_CARD.buttonText}
                </button>
              </div>
            )}
          </aside>

          {/* ---------------- CONTENT ---------------- */}
          <main className="flex-1 space-y-12">
            <Image
              src={selectedService.img || "/placeholder-service.jpeg"}
              alt={selectedService.title}
              width={900}
              height={450}
              className="w-full h-72 object-cover rounded-xl shadow"
            />

            <h2 className="text-2xl font-bold">{selectedService.title}</h2>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: selectedService.long_description}}
            />

            {/* Features */}
            {selectedService.features && (
              <ul className="list-disc pl-6 text-gray-700">
                {selectedService.features
                  .split(/<\/?p>/)
                  .filter((f) => f.trim())
                  .map((feature, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
                  ))}
              </ul>
            )}

            <TimelineSection />
          </main>
        </div>
      </div>
    </>
  );
}
