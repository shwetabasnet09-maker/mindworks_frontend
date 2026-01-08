


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Bannermain from "@/app/component/Banner/pagebanner";

// /** STATIC DATA */
// const categories = [
//   { id: 1, name: "Web Design", count: 6, slug: "web-design" },
//   { id: 2, name: "Development", count: 8, slug: "development" },
//   { id: 3, name: "SEO", count: 4, slug: "seo" },
//   { id: 4, name: "Digital Marketing", count: 5, slug: "digital-marketing" },
// ];

// const posts = [
//   {
//     id: 1,
//     title: "Why Every Business Needs a Strong Digital Presence",
//     content:
//       "<p>A strong digital presence helps businesses build trust, reach more customers, and grow faster in today’s competitive market.</p>",
//     date: "August 12, 2025",
//     image: "/image.png",
//     slug: "digital-presence",
//     category: "digital-marketing",
//   },
//   {
//     id: 2,
//     title: "Top Web Design Trends for Modern Brands",
//     content:
//       "<p>Minimal UI, bold typography, and smooth animations are shaping how brands connect with users online.</p>",
//     date: "August 08, 2025",
//     image: "/image.png",
//     slug: "web-design-trends",
//     category: "web-design",
//   },
// ];

// /** SIDEBAR COMPONENT */
// const Sidebar = ({ onSelectPost, onSelectCategory }) => (
//   <aside className="lg:w-1/4 mb-8 lg:mb-0 flex-shrink-0">
//     {/* Categories */}
//     <div className="bg-green-50 rounded-lg border border-green-100 p-6 mb-6">
//       <h2 className="text-xl font-semibold mb-4 text-gray-700">Categories</h2>
//       <ul className="space-y-2">
//         {categories.map((category) => (
//           <li key={category.id}>
//             <button
//               onClick={() => onSelectCategory(category.slug)}
//               className="flex justify-between w-full text-left py-2 px-2 border-b border-gray-200 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <span>{category.name}</span>
//               <span className="text-gray-500">({category.count})</span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Recent Posts */}
//     <div className="bg-white rounded-lg border border-gray-200 p-6">
//       <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Posts</h2>
//       <div className="space-y-4">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100 rounded-md p-1 transition-colors"
//             onClick={() => onSelectPost(post.slug)}
//           >
//             <div className="w-16 h-16 flex-shrink-0 relative rounded-md overflow-hidden">
//               <Image src={post.image} alt={post.title} fill className="object-cover" />
//             </div>
//             <div>
//               <span className="text-gray-800 font-medium text-sm line-clamp-2">{post.title}</span>
//               <p className="text-xs text-gray-500 mt-1">{post.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </aside>
// );

// /** MAIN PAGE COMPONENT */
// export default function PostPage() {
//   const [currentPostSlug, setCurrentPostSlug] = useState(posts[0].slug);

//   const handleSelectPost = (slug) => {
//     setCurrentPostSlug(slug);
//   };

//   const handleSelectCategory = (categorySlug) => {
//     const post = posts.find((p) => p.category === categorySlug);
//     if (post) setCurrentPostSlug(post.slug);
//   };

//   const post = posts.find((p) => p.slug === currentPostSlug);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section
//         className="h-[670px] bg-cover bg-center"
//         style={{ backgroundImage: "url(/Garden.webp)" }}
//       >
//         <div className="text-center">
//           <Bannermain image="/blogbanner.png" title="Blog Details" />
//         </div>
//       </section>

//       <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6 py-20 dmsans">
//         <Sidebar onSelectPost={handleSelectPost} onSelectCategory={handleSelectCategory} />

//         <main className="lg:w-3/4 bg-white p-8 rounded-lg shadow-sm">
//           <h2 className="text-3xl font-bold mb-4 outfit">{post.title}</h2>
//           <p className="text-gray-600 mb-6">{post.date}</p>

//           {post.image && (
//             <div className="mb-8">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 className="w-[400px] h-[300px] rounded-lg"
//                 width={400}
//                 height={300}
//                 priority
//               />
//             </div>
//           )}

//           <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bannermain from "@/app/component/Banner/pagebanner";

/* ---------------- SIDEBAR ---------------- */
const Sidebar = ({ categories, posts, onSelectPost, onSelectCategory }) => (
  <aside className="lg:w-1/4 mb-8 lg:mb-0 flex-shrink-0">

    {/* Categories */}
    <div className="bg-green-50 rounded-lg border border-green-100 p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onSelectCategory(cat.name)}
              className="flex justify-between w-full py-2 border-b text-gray-700 hover:text-blue-600"
            >
              <span>{cat.name}</span>
              <span>({cat.count})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Posts */}
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post.slug)}
            className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <div className="w-16 h-16 relative">
              <Image
                src={post.image || "/image.png"}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <p className="text-sm font-medium line-clamp-2">{post.title}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

/* ---------------- MAIN PAGE ---------------- */
export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPostSlug, setCurrentPostSlug] = useState(null);
  const [loading, setLoading] = useState(true);

  /* FETCH BLOG DATA */
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/core/blogs/");
        const data = await res.json();

        setPosts(data);
        setCurrentPostSlug(data[0]?.slug);

        // extract unique categories
        const uniqueCategories = Object.values(
          data.reduce((acc, blog) => {
            acc[blog.category.id] = blog.category;
            return acc;
          }, {})
        );

        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  const post = posts.find((p) => p.slug === currentPostSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="h-[670px] bg-cover bg-center">
        <Bannermain image="/blogbanner.png" title="Blog Details" />
      </section>

      <div className="container mx-auto px-4 flex gap-6 py-20">
        <Sidebar
          posts={posts}
          categories={categories}
          onSelectPost={setCurrentPostSlug}
          onSelectCategory={(cat) =>
            setCurrentPostSlug(posts.find(p => p.category.name === cat)?.slug)
          }
        />

        <main className="lg:w-3/4 bg-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-500 mb-4">{post.date}</p>

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={350}
              className="rounded mb-6"
            />
          )}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </div>
    </div>
  );
}
