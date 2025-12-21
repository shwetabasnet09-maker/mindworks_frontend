
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const menuRef = useRef(null);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleDropdown = (id, e) => {
//     e.stopPropagation();
//     setOpenDropdown(openDropdown === id ? null : id);
//   };

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     {
//       name: "Services",
//       hasDropdown: true,
//       dropdownId: "services",
//       dropdownItems: [
//         { name: "Web Development", href: "/services/web" },
//         { name: "App Development", href: "/services/app" },
//         { name: "UI / UX Design", href: "/services/ui-ux" },
//       ],
//     },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed ${
//         isScrolled ? " shadow-md" : ""
//       } md:top-[30px] top-[5px] left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] rounded-full transition-all duration-500 border border-1 border-white`}
//     >
//       <div className="relative wrapper flex items-center justify-between py-3 px-4 md:px-6 w-[97%]">
        
//         {/* Logo */}
//         <div className="md:w-[10%] w-[30%]">
//           <Link href="/">
//             <Image
//               src="/logo-wide-white.png"
//               alt="Logo"
//               width={200}
//               height={30}
//               className="w-full"
//             />
//           </Link>
//         </div>

//         {/* Hamburger */}
//         <button
//           className="lg:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={
//                 isOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16M4 18h16"
//               }
//             />
//           </svg>
//         </button>

//         {/* Menu */}
//         <div
//           ref={menuRef}
//           className={`lg:flex items-center gap-10 text-white ${
//             isOpen
//               ? "fixed inset-0 bg-white z-40 flex flex-col pt-24"
//               : "hidden"
//           } lg:static lg:flex-row lg:bg-transparent`}
//         >
//           {menuItems.map((item, index) => (
//             <div key={index} className="relative">
//               {item.hasDropdown ? (
//                 <>
//                   <button
//                     onClick={(e) => toggleDropdown(item.dropdownId, e)}
//                     className="py-4 font-semibold"
//                   >
//                     {item.name} ▾
//                   </button>

//                   {openDropdown === item.dropdownId && (
//                     <div className="absolute top-full left-0 bg-white shadow-md rounded-md w-48 z-50">
//                       {item.dropdownItems.map((sub, i) => (
//                         <Link
//                           key={i}
//                           href={sub.href}
//                           className="block px-4 py-2 hover:bg-gray-100 text-white"
//                           onClick={() => {
//                             setIsOpen(false);
//                             setOpenDropdown(null);
//                           }}
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href={item.href}
//                   className="block py-4 font-semibold"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="hidden lg:flex">
//           <Link
//             href="/enroll-now"
//             className="bg-[#66B257] text-white px-8 py-2 rounded-[25px]"
//           >
//             Call Anytime
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      hasDropdown: true,
      dropdownId: "services",
      dropdownItems: [
        { name: "Web Development", href: "/services/web" },
        { name: "App Development", href: "/services/app" },
        { name: "UI / UX Design", href: "/services/ui-ux" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "top-0 bg-white text-black shadow-md w-full px-6 py-3"
          : "top-[50px] left-1/2 -translate-x-1/2 bg-transparent text-white w-[95%] md:w-[90%] rounded-full px-4 py-3 border border-1 border-white"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="md:w-[10%] w-[30%]">
          <Link href="/">
            <Image
              src={isScrolled ? "/logo.webp" : "/logo-wide-white.png"}
              alt="Logo"
              width={200}
              height={30}
              className="w-full"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div className="group relative">
                  <span className="py-4 font-semibold cursor-pointer">
                    {item.name} ▾
                  </span>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-md rounded-md w-48">
                    {item.dropdownItems.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.href} className="py-4 font-semibold">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/enroll-now"
            className={`px-8 py-2 rounded-[25px] ${
              isScrolled ? "bg-[#66B257] text-white" : "bg-white text-black"
            }`}
          >
            Call Anytime
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
