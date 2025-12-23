

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
      
//       setIsScrolled(window.scrollY > 150);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Pages", href: "/pages" },
//     { name: "Services", href: "/services" },
//     { name: "Projects", href: "/projects" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       {/* --- 1. INITIAL HEADER (Scrolls away with page) --- */}
//       <nav className="dmsans absolute top-[40px] left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-[90%] ">
//         <div className="relative wrapper flex items-center justify-between py-3 px-4 md:px-6 rounded-full border border-white bg-transparent">
//           <div className="md:w-[10%] w-[30%] ">
//             <Link href="/">
//               <Image src="/logo-wide-white.png" alt="Logo" width={200} height={30} className="w-full" priority />
//             </Link>
//           </div>

//           <div className="hidden lg:flex items-center gap-10 text-white font-semibold">
//             {menuItems.map((item, index) => (
//               <Link key={index} href={item.href} className="hover:opacity-80 transition-opacity">
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>

//           <div className="hidden lg:flex">
//             <Link href="/contact" className="bg-[#66B257] text-white px-8 py-2 rounded-[25px]">
//               Call Anytime
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* --- 2. STICKY HEADER (Slides down when scrolled) --- */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-500 transform ${
//           isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="wrapper flex items-center justify-between py-4 px-6 max-w-7xl mx-auto dmsans">
//           <Link href="/">
//             <Image src="/logo.webp" alt="Logo" width={150} height={30} className="w-auto h-8" />
//           </Link>

//           <div className="hidden lg:flex gap-6 text-black font-medium">
//             {menuItems.map((item, index) => (
//               <Link key={index} href={item.href} className="hover:text-[#66B257] transition-colors">
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="hidden lg:flex">
//               <Link href="/contact" className="bg-[#66B257] text-white px-8 py-2 rounded-[25px]">
//                 Call Anytime
//               </Link>
//             </div>
//             <button className="lg:hidden text-black" onClick={() => setIsOpen(true)}>
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- SHARED MOBILE OVERLAY --- */}
//       <div
//         className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <div className="flex flex-col items-center gap-8">
//           {menuItems.map((item, index) => (
//             <Link key={index} href={item.href} className="text-white text-2xl font-bold hover:text-[#66B257]" onClick={() => setIsOpen(false)}>
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Pages",
      children: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "FAQ", href: "/faq" },
      ],
    },
     {
  name: "Services",
  href: "/services",
  // children: [
  //   { name: "Web Development", href: "/services/web" },
  //   { name: "App Development", href: "/services/app" },
  //   { name: "SEO", href: "/services/seo" },
  // ],
},

    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const DesktopMenu = ({ textColor, hoverColor }) => (
    <div className={`hidden lg:flex items-center gap-10 ${textColor} font-semibold`}>
      {menuItems.map((item, index) =>
        item.children ? (
          <div key={index} className="relative group">
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              {item.name}
            </span>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-3 min-w-[180px] bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {item.children.map((child, i) => (
                <Link
                  key={i}
                  href={child.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={index} href={item.href} className="hover:opacity-80 transition-opacity">
            {item.name}
          </Link>
        )
      )}
    </div>
  );

  return (
    <>
      {/* ---------- INITIAL HEADER ---------- */}
      <nav className="dmsans absolute top-[40px] left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-[90%]">
        <div className="relative wrapper flex items-center justify-between py-3 px-4 md:px-6 rounded-full border border-white bg-transparent">
          <div className="md:w-[10%] w-[30%]">
            <Link href="/">
              <Image src="/logo-wide-white.png" alt="Logo" width={200} height={30} className="w-full" priority />
            </Link>
          </div>

          <DesktopMenu textColor="text-white" />

          <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex">
            <Link href="/contact" className="bg-[#66B257] text-white px-8 py-2 rounded-[25px]">
              Call Anytime
            </Link>
          </div>
        </div>
      </nav>

      {/* ---------- STICKY HEADER ---------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-500 transform ${
          isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="wrapper flex items-center justify-between py-4 px-6 max-w-7xl mx-auto dmsans">
          <Link href="/">
            <Image src="/logo.webp" alt="Logo" width={150} height={30} className="w-auto h-8" />
          </Link>

          <DesktopMenu textColor="text-black" />

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex">
              <Link href="/contact" className="bg-[#66B257] text-white px-8 py-2 rounded-[25px]">
                Call Anytime
              </Link>
            </div>
            <button className="lg:hidden text-black" onClick={() => setIsOpen(true)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- MOBILE OVERLAY ---------- */}
      <div
        className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item, index) =>
            item.children ? (
              <div key={index} className="text-center">
                <button
                  onClick={() =>
                    setOpenMobileDropdown(openMobileDropdown === index ? null : index)
                  }
                  className="text-white text-2xl font-bold"
                >
                  {item.name}
                </button>

                {openMobileDropdown === index && (
                  <div className="mt-4 flex flex-col gap-4">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-lg hover:text-[#66B257]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="text-white text-2xl font-bold hover:text-[#66B257]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
