"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../Component/Banner/pagebanner";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const servicesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/services`);

        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await res.json();
        setServices(data || []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Pagination
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = services.slice(indexOfFirst, indexOfLast);

  const goToNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const goToPrevPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section
        className="h-[400px] md:h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url(/Garden.webp)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Banner title="Our Services" subTitle="Home > Services" />
        </div>
      </section>

      <div className="container mx-auto py-20 px-4">
        {/* Title */}
        <h2 className="md:text-[35px] text-2xl font-bold mb-6 text-center">
          All Services
        </h2>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            <p className="font-semibold">Error loading services</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Service Cards */}
        {!loading && !error && (
          <>
            {currentServices.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No services found.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    {/* IMAGE FIXED */}
                    <div className="h-48 relative">
                      <Image
                        src={
                          service.image
                            ? service.image
                            : "/images/placeholder.jpg"
                        }
                        alt={service.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-gray-800 hover:text-green-700"
                        >
                          {service.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.short_description ||
                          "No description available."}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-block px-4 py-2 bg-black text-white hover:bg-[#FAB128] hover:text-black rounded text-[16px] transition"
                      >
                        View Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-4 flex-wrap">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded border transition ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 border rounded transition ${
                        page === currentPage
                          ? "bg-black text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded border transition ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
