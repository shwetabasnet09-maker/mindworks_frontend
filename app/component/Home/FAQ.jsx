
"use client"; 
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We offer web development, UI/UX design, and digital marketing services." },
    { question: "How can I contact you?", answer: "You can contact us via our contact form or email at contact@example.com." },
    { question: "What is your pricing model?", answer: "We offer project-based and hourly pricing depending on the scope." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">
      
      {/* Left Side - FAQ */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg"
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 text-base md:text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form CTA */}
      <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-3 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
};

export default FAQ;
