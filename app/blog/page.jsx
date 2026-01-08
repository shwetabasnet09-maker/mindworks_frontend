// import Link from "next/link";
// import Image from "next/image";
// import Bannermain from "../component/Banner/pagebanner";


// // 🔒 STATIC DATA
// const categories = [
//   { id: 1, name: "Web Design", count: 6 },
//   { id: 2, name: "Development", count: 8 },
//   { id: 3, name: "SEO", count: 4 },
//   { id: 4, name: "Digital Marketing", count: 5 },
// ];

// const posts = [
//   {
//     id: 1,
//     title: "Why Every Business Needs a Strong Digital Presence",
//     excerpt:
//       "A strong digital presence helps businesses build trust, reach more customers, and grow faster in today’s competitive market.",
//     date: "August 12, 2025",
//     image: "/image.png",
//     link: "/blog/digital-presence",
//   },
//   {
//     id: 2,
//     title: "Top Web Design Trends for Modern Brands",
//     excerpt:
//       "Minimal UI, bold typography, and smooth animations are shaping how brands connect with users online.",
//     date: "August 08, 2025",
//     image: "/image.png",
//     link: "/blog/web-design-trends",
//   },
//   {
//     id: 3,
//     title: "SEO Strategies That Actually Work in 2025",
//     excerpt:
//       "From content optimization to performance improvements, learn SEO techniques that deliver long-term results.",
//     date: "August 05, 2025",
//     image: "/image.png",
//     link: "/blog/seo-strategies",
//   },
//   {
//     id: 4,
//     title: "How Digital Marketing Boosts Brand Growth",
//     excerpt:
//       "Effective digital marketing increases visibility, engagement, and conversions across all platforms.",
//     date: "July 30, 2025",
//     image: "/image.png",
//     link: "/blog/digital-marketing-growth",
//   },
// ];

// const recentPosts = posts.slice(0, 3);

// export default function BlogPage() {
//   return (
//     <div className=" bg-gray-50">
     
//       <Bannermain backgroundImg="/banner_img.jpeg" title="Blog" />

//       {/* CONTENT */}
//       <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-8">
//         {/* BLOG POSTS */}
//         <main className="lg:w-3/4">
//           <h2 className="text-3xl font-bold mb-8 outfit">Latest Blog</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 dmsans">
//             {posts.map((post) => (
//               <article
//                 key={post.id}
//                 className="bg-white rounded-2xl shadow hover:shadow-xl transition"
//               >
//                 <div className="h-52 relative">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3">
//                     <Link href={post.link} className="hover:text-green-700">
//                       {post.title}
//                     </Link>
//                   </h3>

//                   <p className="text-sm text-gray-500 mb-3">{post.date}</p>

//                   <p className="text-gray-600 mb-4 line-clamp-3">
//                     {post.excerpt}
//                   </p>

//                   <Link
//                     href={post.link}
//                     className="inline-flex items-center text-green-700 font-medium"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </main>

//         {/* SIDEBAR */}
//         <aside className="lg:w-1/4 space-y-6 dmsans">
//           {/* Categories */}
//           <div className="bg-white rounded-2xl p-6 shadow">
//             <h3 className="text-lg font-semibold mb-4">Categories</h3>
//             <ul className="space-y-2">
//               {categories.map((cat) => (
//                 <li
//                   key={cat.id}
//                   className="flex justify-between text-gray-600 hover:text-green-700 cursor-pointer"
//                 >
//                   <span>{cat.name}</span>
//                   <span>({cat.count})</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Recent Posts */}
//           <div className="bg-white rounded-2xl p-6 shadow">
//             <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
//             <ul className="space-y-4">
//               {recentPosts.map((post) => (
//                 <li key={post.id}>
//                   <Link
//                     href={post.link}
//                     className="text-sm text-gray-700 hover:text-green-700"
//                   >
//                     {post.title}
//                   </Link>
//                   <p className="text-xs text-gray-500">{post.date}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bannermain from "../component/Banner/pagebanner";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH BLOGS ---------------- */
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/core/blogs/");
        const data = await res.json();

        setPosts(data);

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

  if (loading) {
    return <p className="text-center py-20">Loading blogs...</p>;
  }

  const recentPosts = posts.slice(0, 3);

  return (
    <div className="bg-gray-50">
      <Bannermain backgroundImg="/banner_img.jpeg" title="Blog" />

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-8">
        {/* BLOG POSTS */}
        <main className="lg:w-3/4">
          <h2 className="text-3xl font-bold mb-8 outfit">Latest Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 dmsans">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="h-52 relative">
                  <Image
                    src={post.image || "/image.png"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-green-700"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>

                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="lg:w-1/4 space-y-6 dmsans">
          {/* Categories */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  className="flex justify-between text-gray-600"
                >
                  <span>{cat.name}</span>
                  <span>({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-gray-700 hover:text-green-700"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
