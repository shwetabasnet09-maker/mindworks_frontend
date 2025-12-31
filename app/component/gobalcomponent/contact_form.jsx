"use client";
import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-black py-16 text-white">
    <div className="wrapper mx-auto px-4 py-16">
     <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div className="space-y-12">
                <div>
                  <p className="text-[#00A74E] font-semibold mb-4 tracking-wider">GET IN TOUCH</p>
                  <h1 className="text-5xl font-bold mb-6 leading-tight">
                    Seamless Communication,<br />Global Impact.
                  </h1>
                  <p className="text-white text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
    
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Head Office */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#00A74E] flex items-center justify-center">
                        <MapPin className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">HEAD OFFICE</h3>
                      <p className="text-white">Jln Cempaka Wangi No 22</p>
                      <p className="text-white">Jakarta - Indonesia</p>
                    </div>
                  </div>
    
                  {/* Email Support */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#00A74E] flex items-center justify-center">
                        <Mail className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">EMAIL SUPPORT</h3>
                      <p className="text-white">support@yourdomain.tld</p>
                      <p className="text-white">hello@yourdomain.tld</p>
                    </div>
                  </div>
    
                  {/* Let's Talk */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#00A74E] flex items-center justify-center">
                        <Phone className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">LET'S TALK</h3>
                      <p className="text-white">Phone : +6221 2002 2012</p>
                      <p className="text-white">Fax : +6221 2002 2013</p>
                    </div>
                  </div>
    
                  {/* Working Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#00A74E] flex items-center justify-center">
                        <Clock className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">WORKING HOURS</h3>
                      <p className="text-white">Monday - Friday</p>
                      <p className="text-white">07am - 09pm</p>
                    </div>
                  </div>
                </div>
    
                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Follow our social media</h3>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#00A74E] hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" fill="currentColor" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#00A74E] hover:text-white transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#00A74E] hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#00A74E] hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" fill="currentColor" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-[#00A74E] hover:text-white transition-colors">
                      <Youtube className="w-5 h-5" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
    
              {/* Right Section - Contact Form */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-white mb-8">
                  Please feel free to send us any questions, feedback or suggestions you might have.
                </p>
    
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all"
                      />
                    </div>
                  </div>
    
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all"
                      />
                    </div>
                  </div>
    
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all"
                    />
                  </div>
    
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-[#00A74E] focus:outline-none focus:ring-2 focus:ring-[#00A74E]/50 transition-all resize-none"
                    ></textarea>
                  </div>
    
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full bg-[#00A74E] font-semibold text-lg hover:shadow-lg border border-1 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
    </div>
    </div>
  );
};

export default ContactForm;
