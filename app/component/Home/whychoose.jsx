import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    /* Removed overflow-hidden from here so the card can hang out */
    <section className="relative bg-[#06061e] py-20  ">
      
      {/* Background Shapes Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a2a] rotate-[15deg] scale-150 origin-top-left"></div>
      </div>

      <div className="relative z-10 wrapper grid grid-cols-1 lg:grid-cols-[60%_40%] gap-2 items-start px-6">
        
        {/* LEFT CONTENT */}
        <div className="text-white pt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 dmsans">Why Choose Us</span>
            <div className="h-[2px] w-8 bg-[#faac52]"></div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-12 outfit">
            Recognized As One <br /> 
            Of The Leading <br /> 
            Company!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 mb-20 lg:mb-0 dmsans">
            <div className="flex items-center gap-4">
              <div className="bg-[#faac52] p-4 rounded-full text-black">
                <Phone size={24} fill="currentColor" />
              </div>
              <div className="text-sm font-medium text-gray-400">
                <p>company@gmail.com</p>
                <p>+00 (2200) - 2222</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#fbb034] p-4 rounded-full text-black">
                <MapPin size={24} fill="currentColor" />
              </div>
              <div className="text-sm font-medium text-gray-400">
                <p>90 Washington, mg</p>
                <p>Manchester, Kentucky USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - FORM */}
        {/* translate-y-24 makes it overlap the bottom edge */}
         <div className="relative z-20 transform lg:translate-y-40">
          
          {/* RECTANGLE CARD */}
          <div className="bg-white rounded-4xl p-8 md:py-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
            
            {/* Heading */}
            <div className="mb-10">
              <p className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-tighter">
                Contact us
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Get in Touch
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#f7f7f7] p-4 text-sm outline-none focus:ring-1 focus:ring-orange-400 text-black"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#f7f7f7] p-4 text-sm outline-none focus:ring-1 focus:ring-orange-400 text-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full bg-[#f7f7f7] p-4 text-sm outline-none focus:ring-1 focus:ring-orange-400 text-black"
                />
                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="w-full bg-[#f7f7f7] p-4 text-sm outline-none focus:ring-1 focus:ring-orange-400 text-black"
                />
              </div>

              <textarea
                placeholder="Write a Message"
                rows={5}
                className="w-full bg-[#f7f7f7] p-4 text-sm outline-none focus:ring-1 focus:ring-orange-400 resize-none text-black"
              />

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#fbb034] hover:bg-orange-500 text-white font-bold py-4 px-12 text-[11px] tracking-[0.15em] uppercase transition-all"
                >
                  Send a Message
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;