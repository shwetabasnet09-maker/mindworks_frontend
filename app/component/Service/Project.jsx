


// "use client";
// import React from "react";
// import Link from "next/link";

// const ProjectCard = ({ title, image, slug }) => (
//   <div className="bg-transparent rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
//     {/* Image */}
//     <div className="relative h-64 md:h-72">
//       <img 
//         src={image} 
//         alt={title}
//         className="w-full h-full object-cover rounded-2xl"
//       />
//     </div>

//     {/* Title */}
//     <div className="p-6 flex flex-col flex-1 justify-between">
//       <h3 className="text-xl md:text-lg font-semibold text-white mb-4 leading-snug">
//         {title}
//       </h3>

//       <Link
//         href={`/projects/${slug}`}
//         className="mt-auto inline-flex items-center gap-2 text-[#00A74E] font-bold uppercase hover:underline"
//       >
//         Read More
//       </Link>
//     </div>
//   </div>
// );

// export default function ProjectSection() {
//   const ProjectPosts = [
//     {
//       title: "Web Development Essentials Every Business",
//       slug: "web-development-essentials",
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
//     },
//     {
//       title: "How AI is Revolutionizing Web Development",
//       slug: "ai-revolution-web-development",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
//     },
//     {
//       title: "Effective Hashtag Strategies to Increase Reach",
//       slug: "effective-hashtag-strategies",
//       image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
//     }
//   ];

//   return (
//     <div className="bg-black py-40">
//       <div className="wrapper px-6">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="text-[#00A74E] font-semibold uppercase tracking-wider text-sm">
//               From The Project
//             </span>
//             <div className="w-12 h-0.5 bg-[#00A74E]"></div>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             New Project Updates
//           </h2>
//         </div>

//         {/* Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {ProjectPosts.map((post, index) => (
//             <ProjectCard key={index} {...post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// ---------------- Project Card Component ----------------
const ProjectCard = ({ title, image, slug }) => (
  <div className="bg-transparent rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
    {/* Image */}
    <div className="relative h-64 md:h-72">
      <img
        src={image || "/placeholder.png"} // fallback if image is null
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* Title */}
    <div className="p-6 flex flex-col flex-1 justify-between">
      <h3 className="text-xl md:text-lg font-semibold text-white mb-4 leading-snug">
        {title}
      </h3>

      <Link
        href={`/projects/${slug}`}
        className="mt-auto inline-flex items-center gap-2 text-[#00A74E] font-bold uppercase hover:underline"
      >
        Read More
      </Link>
    </div>
  </div>
);

// ---------------- Project Section Component ----------------
export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/core/project-posts/", {
          cache: "no-store",
        });
        const json = await res.json();
        console.log("API DATA:", json);

        // Map API data to expected structure for ProjectCard
        const mappedProjects = json.map((item) => ({
          title: item.title,
          slug: item.slug,
          // Use feature_img first, fallback to banner_img, else null
          image: item.feature_img || item.banner_img || "/placeholder.png",
        }));

        setProjects(mappedProjects);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-24">Loading...</div>;
  }

  return (
    <div className="bg-black py-40">
      <div className="wrapper px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#00A74E] font-semibold uppercase tracking-wider text-sm">
              From The Project
            </span>
            <div className="w-12 h-0.5 bg-[#00A74E]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            New Project Updates
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((post, index) => (
            <ProjectCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
