"use client";
import React from "react";
import Bannermain from "@/app/component/Banner/pagebanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectPosts = [
  {
    title: "Web Development Essentials Every Business",
    slug: "web-development-essentials",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
    ],
    content: `Web development is the backbone of every modern business. 
From creating responsive websites to implementing advanced functionality, 
businesses need to ensure their online presence is fast, secure, and user-friendly.

In this article, we cover the essential elements of web development, 
including responsive design, performance optimization, SEO best practices, 
and user experience strategies. Following these guidelines ensures your website 
not only attracts visitors but also converts them into loyal customers.

Modern web development also involves choosing the right tech stack, 
integrating APIs, and ensuring scalability for future growth. 
Continuous testing, monitoring, and updates are key to maintaining a robust web presence.

Remember, a well-developed website reflects your brand's professionalism 
and credibility, making it an indispensable tool for business success.`
  },
  {
    title: "How AI is Revolutionizing Web Development",
    slug: "ai-revolution-web-development",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-38a66f8c20d2?w=1200&h=600&fit=crop"
    ],
    content: `Artificial Intelligence (AI) is transforming web development in unprecedented ways. 
From automating repetitive tasks to enhancing user experience through personalization, 
AI tools help developers build smarter websites faster.

AI-powered chatbots improve customer service by offering real-time assistance. 
Predictive analytics allow businesses to understand user behavior, optimize content, 
and drive engagement. Machine learning algorithms can automatically test code 
and suggest improvements, reducing development time and errors.

Moreover, AI is enabling the creation of dynamic, adaptive websites that respond 
intelligently to user interactions. This revolution in web development is opening 
new possibilities for creativity, efficiency, and growth in the digital landscape.`
  }
];

export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const project = ProjectPosts.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
        <h2 className="text-3xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Banner */}
     <Bannermain backgroundImg="/banner_img.jpeg" title={project.title} />
      {/* Blog Content */}
      <div className="wrapper px-6 py-20 max-w-5xl mx-auto space-y-10">
        {/* Manual Image Slider */}
        
        {/* Blog Text */}
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          {project.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <Swiper
  spaceBetween={20}
  slidesPerView={3}
  modules={[Autoplay]}
  autoplay={{
    delay: 3000, // 3 seconds per slide
    disableOnInteraction: false, // keeps autoplay even after user interacts
  }}
  className="rounded-2xl overflow-hidden"
>
  {project.images.map((img, idx) => (
    <SwiperSlide key={idx}>
      <img
        src={img}
        alt={`${project.title} ${idx + 1}`}
        className="w-full h-80 md:h-[500px] object-cover rounded-2xl"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
