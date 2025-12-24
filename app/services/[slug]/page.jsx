import Bannermain from "@/app/component/Banner/pagebanner";
import { SERVICES } from "../../constants";

export default async function ServiceDetail({ params }) {
  // Await params in case it's a Promise
  const resolvedParams = await params;
  console.log("params:", resolvedParams);

  const service = SERVICES.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
        <h2 className="text-3xl font-bold">Service not found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white">
      <Bannermain backgroundImg="/banner_img.jpeg" title={service.title} />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A74E]/20 via-transparent to-transparent blur-3xl" />
        <div className="wrapper px-6 py-32 relative z-10">
          <span className="text-[#00A74E] text-xs font-black tracking-[0.3em] uppercase block mb-6">
            Service
          </span>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight capitalize leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-slate-400 max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="wrapper px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2 glass p-10 rounded-[40px] border border-white/10">
            <h2 className="text-2xl font-black mb-6">What We Deliver</h2>

            <p className="text-slate-400 leading-relaxed mb-8">
              Our <span className="text-white font-semibold">{service.title}</span> service
              focuses on performance, scalability, and long-term growth.
              We design solutions that convert users into loyal customers.
            </p>

            <ul className="space-y-4 text-slate-300">
              {[
                "Strategic planning & research",
                "High-performance implementation",
                "Conversion-focused UI/UX",
                "SEO & performance optimization",
                "Ongoing support & scaling",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00A74E] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="glass p-10 rounded-[40px] border border-white/10 h-fit">
            <h3 className="text-xl font-black mb-6">Why Choose Us</h3>

            <div className="space-y-6 text-slate-400">
              <div>
                <p className="font-bold text-white">Proven Expertise</p>
                <p className="text-sm">Results-driven experience across industries.</p>
              </div>
              <div>
                <p className="font-bold text-white">Scalable Solutions</p>
                <p className="text-sm">Built to grow with your business.</p>
              </div>
              <div>
                <p className="font-bold text-white">Dedicated Support</p>
                <p className="text-sm">We partner with you for long-term success.</p>
              </div>
            </div>

            <button className="mt-10 w-full bg-[#00A74E] text-black font-black py-4 rounded-2xl hover:scale-[1.02] transition-transform">
              Request a Quote
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
