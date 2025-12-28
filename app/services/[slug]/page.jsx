

// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Bannermain from "@/app/component/Banner/pagebanner";
// // import { SERVICES, CONTACT_CARD } from "../../constants";
// // import {
// //   Megaphone,
// //   Search,
// //   Code2,
// //   ShoppingCart,
// //   Mail,
// //   Layers,
// //   Phone,
// //   ArrowRight,
// //   ChevronDown,
// // } from "lucide-react";
// // import Image from "next/image";


// // /* ---------------- ICON MAP ---------------- */
// // const ICON_MAP = {
// //   "digital-marketing": Megaphone,
// //   "seo-services": Search,
// //   "web-development": Code2,
// //   "ecommerce-solutions": ShoppingCart,
// //   "email-marketing": Mail,
// // };

// // /* ---------------- TIMELINE ITEM ---------------- */
// // function TimelineItem({ title, description }) {
// //   return (
// //     <div className="text-center lg:text-left relative">
// //       <div className="hidden lg:block absolute -top-6 left-0 w-4 h-4 rounded-full border-2 border-black bg-white"></div>
// //       <h3 className="text-xl font-bold mb-3">{title}</h3>
// //       <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
// //     </div>
// //   );
// // }

// // /* ---------------- MAIN COMPONENT ---------------- */
// // export default function FacilitiesPageCard() {
// //   const router = useRouter(); // added for navigation
// //   const [selectedFacility, setSelectedFacility] = useState(
// //     SERVICES[0]?.slug || ""
// //   );
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   // Updated handler to open link if exists
// //   const handleFacilityClick = (service) => {
// //     setSelectedFacility(service.slug);
// //     setIsMobileMenuOpen(false);

// //     if (service.link) {
// //       router.push(service.link); // navigate to the link
// //     }
// //   };

// //   const activeFacility =
// //     SERVICES.find((s) => s.slug === selectedFacility) || SERVICES[0];

// //   return (
// //     <>
// //       <Bannermain
// //         backgroundImg="/banner_img.jpeg"
// //         title={activeFacility?.title || "Our Services"}
// //       />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-gray-50 min-h-screen">
// //         {/* Mobile Menu */}
// //         <div className="md:hidden mb-6">
// //           <button
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl flex justify-between items-center shadow-lg"
// //           >
// //             <span className="text-lg font-semibold">Select Service</span>
// //             <ChevronDown
// //               className={`w-5 h-5 transition-transform ${
// //                 isMobileMenuOpen ? "rotate-180" : ""
// //               }`}
// //             />
// //           </button>

// //           {isMobileMenuOpen && (
// //             <div className="mt-3 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
// //               {SERVICES.map((service, index) => {
// //                 const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
// //                 return (
// //                   <button
// //                     key={service.slug}
// //                     onClick={() => handleFacilityClick(service)} // pass full service object
// //                     className={`w-full text-left p-4 flex items-center gap-4 transition-colors ${
// //                       service.slug === selectedFacility
// //                         ? "bg-green-50 border-l-4 border-green-600"
// //                         : "hover:bg-gray-50"
// //                     } ${
// //                       index !== SERVICES.length - 1
// //                         ? "border-b border-gray-100"
// //                         : ""
// //                     }`}
// //                   >
// //                     <div
// //                       className={`p-2 rounded-lg ${
// //                         service.slug === selectedFacility
// //                           ? "bg-green-600"
// //                           : "bg-gray-100"
// //                       }`}
// //                     >
// //                       <ServiceIcon
// //                         className={`w-5 h-5 ${
// //                           service.slug === selectedFacility
// //                             ? "text-white"
// //                             : "text-gray-600"
// //                         }`}
// //                       />
// //                     </div>
// //                     <span
// //                       className={`font-medium ${
// //                         service.slug === selectedFacility
// //                           ? "text-green-700"
// //                           : "text-gray-700"
// //                       }`}
// //                     >
// //                       {service.title}
// //                     </span>
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           )}
// //         </div>

// //         {/* Desktop Layout */}
// //         <div className="flex flex-col md:flex-row gap-8">
// //           {/* Sidebar */}
// //           <div className="hidden md:flex md:flex-col md:w-80 gap-6">
// //             <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
// //               <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
// //                 <Layers className="w-6 h-6" /> Our Services
// //               </h2>

// //               <div className="space-y-2">
// //                 {SERVICES.map((service) => {
// //                   const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
// //                   return (
// //                     <button
// //                       key={service.slug}
// //                       onClick={() => handleFacilityClick(service)} // pass full service object
// //                       className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all ${
// //                         service.slug === selectedFacility
// //                           ? "bg-white text-green-700 shadow-lg"
// //                           : "text-white hover:bg-white/10"
// //                       }`}
// //                     >
// //                       <div
// //                         className={`p-2 rounded-lg ${
// //                           service.slug === selectedFacility
// //                             ? "bg-green-100"
// //                             : "bg-white/10"
// //                         }`}
// //                       >
// //                         <ServiceIcon className="w-5 h-5" />
// //                       </div>
// //                       <span className="flex-1 font-semibold text-sm">
// //                         {service.title}
// //                       </span>
// //                       <ArrowRight className="w-5 h-5" />
// //                     </button>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {CONTACT_CARD && (
// //               <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
// //                 <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
// //                   <Phone className="w-7 h-7 text-yellow-600" />
// //                 </div>
// //                 <p className="text-sm text-yellow-900 mb-2 font-medium">
// //                   {CONTACT_CARD.subtitle}
// //                 </p>
// //                 <h3 className="text-white font-bold text-lg mb-4">
// //                   {CONTACT_CARD.title}
// //                 </h3>
// //                 <button className="w-full bg-white text-yellow-600 font-semibold py-3 rounded-lg">
// //                   {CONTACT_CARD.buttonText}
// //                 </button>
// //               </div>
// //             )}
// //           </div>

// //           {/* Service Content */}
// //           <div className="flex-1 space-y-6">
// //             <Image
// //               src={activeFacility?.img || "/placeholder-service.jpeg"}
// //               alt={activeFacility?.title}
// //               width={800}
// //               height={400}
// //               className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
// //             />

// //             <h2 className="text-2xl font-bold text-gray-900">
// //               {activeFacility?.title}
// //             </h2>
// //             <p className="text-gray-700">{activeFacility?.description}</p>
// //              <div className="py-5 relative overflow-hidden">
// //         <div className="absolute inset-0 "></div>

// //         <div className="relative px-6">
// //           <div className="text-center mb-20">
// //             <h2 className="text-4xl md:text-[35px] font-bold mb-4 outfit">
// //               HOW WE BUILD YOUR STRATEGY
// //             </h2>
// //             <p className="text-lg font-semibold text-gray-800">
// //               Tailored smart planning and expert execution:
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
// //             <div className="space-y-16">
// //               <TimelineItem title="Discovery & Goal Mapping" description="First, we understand your business, market, customers, and challenges." />
// //               <TimelineItem title="Funnel Planning" description="We design your entire marketing funnel from awareness to conversion." />
// //             </div>

// //             <div className="space-y-16">
// //               <TimelineItem title="Market & Competitor Research (SWOT)" description="We analyze competitors and uncover real growth opportunities." />
// //               <TimelineItem title="Tactical Roadmap" description="A complete marketing blueprint with timelines, KPIs, and optimization." />
// //             </div>

// //             <div className="space-y-16">
// //               <TimelineItem title="Channel Analysis" description="We identify what works, what wastes money, and what’s missing." />
// //               <TimelineItem title="Continuous Optimization" description="Ongoing improvements based on real-time data and trends." />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import Image from "next/image";

// /* ---------------- ICON MAP ---------------- */
// const ICON_MAP = {
//   "digital-marketing": Megaphone,
//   "seo-services": Search,
//   "web-development": Code2,
//   "ecommerce-solutions": ShoppingCart,
//   "email-marketing": Mail,
// };

// /* ---------------- TIMELINE ITEM ---------------- */
// function TimelineItem({ title, description }) {
//   return (
//     <div className="text-center lg:text-left relative">
//       <div className="hidden lg:block absolute -top-6 left-0 w-4 h-4 rounded-full border-2 border-black bg-white"></div>
//       <h3 className="text-xl font-bold mb-3">{title}</h3>
//       <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
//     </div>
//   );
// }

// /* ---------------- MAIN COMPONENT ---------------- */
// export default function FacilitiesPageCard() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [selectedFacility, setSelectedFacility] = useState(SERVICES[0]?.slug || "");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const tabFromUrl = searchParams.get("tab");
//     if (tabFromUrl && SERVICES.some((s) => s.slug === tabFromUrl)) {
//       setSelectedFacility(tabFromUrl);
//     } else if (SERVICES.length > 0 && !tabFromUrl) {
//       setSelectedFacility(SERVICES[0].slug);
//     }
//   }, [searchParams]);

//   const handleFacilityClick = (service) => {
//     setSelectedFacility(service.slug);
//     setIsMobileMenuOpen(false);

//     if (service.link) {
//       router.push(service.link);
//     } else {
//       router.push(`/facilities?tab=${service.slug}`, { scroll: false });
//     }
//   };

//   const activeFacility = SERVICES.find((s) => s.slug === selectedFacility) || SERVICES[0];

//   return (
//     <>
//       <Bannermain
//         backgroundImg="/banner_img.jpeg"
//         title={activeFacility?.title || "Our Services"}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-gray-50 min-h-screen">
//         {/* Mobile Menu */}
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
//             <div className="mt-3 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
//               {SERVICES.map((service, index) => {
//                 const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
//                 return (
//                   <button
//                     key={service.slug}
//                     onClick={() => handleFacilityClick(service)}
//                     className={`w-full text-left p-4 flex items-center gap-4 transition-colors ${
//                       service.slug === selectedFacility
//                         ? "bg-green-50 border-l-4 border-green-600"
//                         : "hover:bg-gray-50"
//                     } ${index !== SERVICES.length - 1 ? "border-b border-gray-100" : ""}`}
//                   >
//                     <div
//                       className={`p-2 rounded-lg ${
//                         service.slug === selectedFacility ? "bg-green-600" : "bg-gray-100"
//                       }`}
//                     >
//                       <ServiceIcon
//                         className={`w-5 h-5 ${
//                           service.slug === selectedFacility ? "text-white" : "text-gray-600"
//                         }`}
//                       />
//                     </div>
//                     <span
//                       className={`font-medium ${
//                         service.slug === selectedFacility ? "text-green-700" : "text-gray-700"
//                       }`}
//                     >
//                       {service.title}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Desktop Layout */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="hidden md:flex md:flex-col md:w-80 gap-6">
//             <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
//               <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
//                 <Layers className="w-6 h-6" /> Our Services
//               </h2>

//               <div className="space-y-2">
//                 {SERVICES.map((service) => {
//                   const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
//                   return (
//                     <button
//                       key={service.slug}
//                       onClick={() => handleFacilityClick(service)}
//                       className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all ${
//                         service.slug === selectedFacility
//                           ? "bg-white text-green-700 shadow-lg"
//                           : "text-white hover:bg-white/10"
//                       }`}
//                     >
//                       <div
//                         className={`p-2 rounded-lg ${
//                           service.slug === selectedFacility ? "bg-green-100" : "bg-white/10"
//                         }`}
//                       >
//                         <ServiceIcon className="w-5 h-5" />
//                       </div>
//                       <span className="flex-1 font-semibold text-sm">{service.title}</span>
//                       <ArrowRight className="w-5 h-5" />
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {CONTACT_CARD && (
//               <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
//                 <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
//                   <Phone className="w-7 h-7 text-yellow-600" />
//                 </div>
//                 <p className="text-sm text-yellow-900 mb-2 font-medium">{CONTACT_CARD.subtitle}</p>
//                 <h3 className="text-white font-bold text-lg mb-4">{CONTACT_CARD.title}</h3>
//                 <button className="w-full bg-white text-yellow-600 font-semibold py-3 rounded-lg">
//                   {CONTACT_CARD.buttonText}
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Service Content */}
//           <div className="flex-1 space-y-6">
//             <Image
//               src={activeFacility?.img || "/placeholder-service.jpeg"}
//               alt={activeFacility?.title}
//               width={800}
//               height={400}
//               className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
//             />

//             <h2 className="text-2xl font-bold text-gray-900">{activeFacility?.title}</h2>
//             <p className="text-gray-700">{activeFacility?.description}</p>

//             {/* Strategy Timeline */}
//             <div className="py-5 relative overflow-hidden">
//               <div className="absolute inset-0"></div>
//               <div className="relative px-6">
//                 <div className="text-center mb-20">
//                   <h2 className="text-4xl md:text-[35px] font-bold mb-4 outfit">
//                     HOW WE BUILD YOUR STRATEGY
//                   </h2>
//                   <p className="text-lg font-semibold text-gray-800">
//                     Tailored smart planning and expert execution:
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//                   <div className="space-y-16">
//                     <TimelineItem
//                       title="Discovery & Goal Mapping"
//                       description="First, we understand your business, market, customers, and challenges."
//                     />
//                     <TimelineItem
//                       title="Funnel Planning"
//                       description="We design your entire marketing funnel from awareness to conversion."
//                     />
//                   </div>
//                   <div className="space-y-16">
//                     <TimelineItem
//                       title="Market & Competitor Research (SWOT)"
//                       description="We analyze competitors and uncover real growth opportunities."
//                     />
//                     <TimelineItem
//                       title="Tactical Roadmap"
//                       description="A complete marketing blueprint with timelines, KPIs, and optimization."
//                     />
//                   </div>
//                   <div className="space-y-16">
//                     <TimelineItem
//                       title="Channel Analysis"
//                       description="We identify what works, what wastes money, and what’s missing."
//                     />
//                     <TimelineItem
//                       title="Continuous Optimization"
//                       description="Ongoing improvements based on real-time data and trends."
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Bannermain from "@/app/component/Banner/pagebanner";
import { SERVICES, CONTACT_CARD } from "../../constants";     
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
import Image from "next/image";

/* ---------------- ICON MAP ---------------- */
const ICON_MAP = {
  "digital-marketing": Megaphone,
  "seo-services": Search,
  "web-development": Code2,
  "ecommerce-solutions": ShoppingCart,
  "email-marketing": Mail,
};

/* ---------------- TIMELINE ITEM ---------------- */
function TimelineItem({ title, description }) {
  return (
    <div className="text-center lg:text-left relative">
      <div className="hidden lg:block absolute -top-6 left-0 w-4 h-4 rounded-full border-2 border-black bg-white"></div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function ServicesPage() {
  const router = useRouter();
  const pathname = usePathname();

  const currentSlug = pathname.split("/").pop(); // get last part of URL

  const [selectedFacility, setSelectedFacility] = useState(
    currentSlug || SERVICES[0]?.slug
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update selectedFacility if URL changes
  useEffect(() => {
    if (currentSlug && SERVICES.some((s) => s.slug === currentSlug)) {
      setSelectedFacility(currentSlug);
    } else {
      setSelectedFacility(SERVICES[0]?.slug);
    }
  }, [currentSlug]);

  const handleFacilityClick = (service) => {
    setSelectedFacility(service.slug);
    setIsMobileMenuOpen(false);

    // Navigate to /services/[slug]
    router.push(`/services/${service.slug}`);
  };

  const activeFacility = SERVICES.find((s) => s.slug === selectedFacility) || SERVICES[0];

  return (
    <>
      <Bannermain
        backgroundImg="/banner_img.jpeg"
        title={activeFacility?.title || "Our Services"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-gray-50 min-h-screen">
        {/* Mobile Menu */}
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
            <div className="mt-3 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              {SERVICES.map((service, index) => {
                const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
                return (
                  <button
                    key={service.slug}
                    onClick={() => handleFacilityClick(service)}
                    className={`w-full text-left p-4 flex items-center gap-4 transition-colors ${
                      service.slug === selectedFacility
                        ? "bg-green-50 border-l-4 border-green-600"
                        : "hover:bg-gray-50"
                    } ${index !== SERVICES.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        service.slug === selectedFacility ? "bg-green-600" : "bg-gray-100"
                      }`}
                    >
                      <ServiceIcon
                        className={`w-5 h-5 ${
                          service.slug === selectedFacility ? "text-white" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-medium ${
                        service.slug === selectedFacility ? "text-green-700" : "text-gray-700"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden md:flex md:flex-col md:w-80 gap-6">
            <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6" /> Our Services
              </h2>

              <div className="space-y-2">
                {SERVICES.map((service) => {
                  const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => handleFacilityClick(service)}
                      className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all ${
                        service.slug === selectedFacility
                          ? "bg-white text-green-700 shadow-lg"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          service.slug === selectedFacility ? "bg-green-100" : "bg-white/10"
                        }`}
                      >
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 font-semibold text-sm">{service.title}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {CONTACT_CARD && (
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-7 h-7 text-yellow-600" />
                </div>
                <p className="text-sm text-yellow-900 mb-2 font-medium">{CONTACT_CARD.subtitle}</p>
                <h3 className="text-white font-bold text-lg mb-4">{CONTACT_CARD.title}</h3>
                <button className="w-full bg-white text-yellow-600 font-semibold py-3 rounded-lg">
                  {CONTACT_CARD.buttonText}
                </button>
              </div>
            )}
          </div>

          {/* Service Content */}
          <div className="flex-1 space-y-6">
            <Image
              src={activeFacility?.img || "/placeholder-service.jpeg"}
              alt={activeFacility?.title}
              width={800}
              height={400}
              className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
            />

            <h2 className="text-2xl font-bold text-gray-900">{activeFacility?.title}</h2>
            <p className="text-gray-700">{activeFacility?.description}</p>

            {/* Strategy Timeline */}
            <div className="py-5 relative overflow-hidden">
              <div className="absolute inset-0"></div>
              <div className="relative px-6">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-[35px] font-bold mb-4 outfit">
                    HOW WE BUILD YOUR STRATEGY
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    Tailored smart planning and expert execution:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="space-y-16">
                    <TimelineItem
                      title="Discovery & Goal Mapping"
                      description="First, we understand your business, market, customers, and challenges."
                    />
                    <TimelineItem
                      title="Funnel Planning"
                      description="We design your entire marketing funnel from awareness to conversion."
                    />
                  </div>
                  <div className="space-y-16">
                    <TimelineItem
                      title="Market & Competitor Research (SWOT)"
                      description="We analyze competitors and uncover real growth opportunities."
                    />
                    <TimelineItem
                      title="Tactical Roadmap"
                      description="A complete marketing blueprint with timelines, KPIs, and optimization."
                    />
                  </div>
                  <div className="space-y-16">
                    <TimelineItem
                      title="Channel Analysis"
                      description="We identify what works, what wastes money, and what’s missing."
                    />
                    <TimelineItem
                      title="Continuous Optimization"
                      description="Ongoing improvements based on real-time data and trends."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
