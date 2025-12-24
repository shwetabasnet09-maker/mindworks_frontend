"use client";
import React, { useState } from "react";
import Bannermain from "@/app/component/Banner/pagebanner";
import { SERVICES, CONTACT_CARD } from "../../constants";
import { Megaphone, Search, Code2, ShoppingCart, Mail, Layers, Phone, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const ICON_MAP = {
  "digital-marketing": Megaphone,
  "seo-services": Search,
  "web-development": Code2,
  "ecommerce-solutions": ShoppingCart,
  "email-marketing": Mail,
};

export default function FacilitiesPageCard() {
  const [selectedFacility, setSelectedFacility] = useState(SERVICES[0]?.slug || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFacilityClick = (slug) => {
    setSelectedFacility(slug);
    setIsMobileMenuOpen(false);
  };

  const activeFacility = SERVICES.find((s) => s.slug === selectedFacility) || SERVICES[0];

  return (
    <>
      <Bannermain backgroundImg="/banner_img.jpeg" title={activeFacility?.title || "Our Services"} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-gray-50 min-h-screen">
        
        {/* Mobile Menu */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl flex justify-between items-center shadow-lg"
          >
            <span className="text-lg font-semibold">Select Service</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileMenuOpen && (
            <div className="mt-3 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              {SERVICES.map((service, index) => {
                const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
                return (
                  <button
                    key={service.slug}
                    onClick={() => handleFacilityClick(service.slug)}
                    className={`w-full text-left p-4 flex items-center gap-4 transition-colors ${
                      service.slug === selectedFacility ? "bg-green-50 border-l-4 border-green-600" : "hover:bg-gray-50"
                    } ${index !== SERVICES.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className={`p-2 rounded-lg ${service.slug === selectedFacility ? 'bg-green-600' : 'bg-gray-100'}`}>
                      <ServiceIcon className={`w-5 h-5 ${service.slug === selectedFacility ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className={`font-medium ${service.slug === selectedFacility ? 'text-green-700' : 'text-gray-700'}`}>
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop & Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden md:flex md:flex-col md:w-80 flex-shrink-0 gap-6">
            {/* Services List */}
            <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6" /> Our Services
              </h2>

              <div className="space-y-2 mb-8">
                {SERVICES.map((service) => {
                  const ServiceIcon = ICON_MAP[service.slug] || Megaphone;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => handleFacilityClick(service.slug)}
                      className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all ${
                        service.slug === selectedFacility
                          ? "bg-white text-green-700 shadow-lg"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-colors ${service.slug === selectedFacility ? 'bg-green-100' : 'bg-white/10'}`}>
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 font-semibold text-sm">{service.title}</span>
                      <ArrowRight className={`w-5 h-5 transition-transform ${service.slug === selectedFacility ? 'translate-x-1' : ''}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Card */}
            {CONTACT_CARD && (
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-7 h-7 text-yellow-600" />
                </div>
                <p className="text-sm text-yellow-900 mb-2 font-medium">{CONTACT_CARD.subtitle}</p>
                <h3 className="text-white font-bold text-lg mb-4">{CONTACT_CARD.title}</h3>
                <button className="w-full bg-white text-yellow-600 font-semibold py-3 px-4 rounded-lg hover:bg-yellow-50 transition-colors">
                  {CONTACT_CARD.buttonText}
                </button>
              </div>
            )}
          </div>

          {/* Service Content */}
          <div className="flex-1 min-w-0 space-y-6">
            <Image 
              src={activeFacility?.img || "/placeholder-service.jpeg"}
              alt={activeFacility?.title || "Service Image"}
              width={800}
              height={400}
              className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-900">{activeFacility?.title}</h2>
            <p className="text-gray-700">{activeFacility?.description}</p>

            {/* Features */}
            {activeFacility?.features?.length > 0 && (
              <ul className="list-disc list-inside space-y-2">
                {activeFacility.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            )}

            {/* Images */}
            {activeFacility?.images?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {activeFacility.images.map((img, idx) => (
                  <Image                   
                    key={idx}
                    src={img}
                    alt={`${activeFacility.title} ${idx + 1}`}
                    width={800}
                    height={400}
                    className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
