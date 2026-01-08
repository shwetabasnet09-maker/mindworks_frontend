// import { NextResponse } from "next/server";
// import geoip from "geoip-lite";

// export function middleware(req) {
//   const url = req.nextUrl.clone();

//   // Avoid redirect loops
//   if (url.pathname.startsWith("/ae")) return NextResponse.next();

//   // Detect IP
//   const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip || "127.0.0.1";
//   const geo = geoip.lookup(ip);
//   const country = geo?.country || "NP";

//   if (country === "AE") {
//     url.pathname = `/ae${url.pathname}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// // Apply to main pages
// export const config = {
//   matcher: ["/", "/about/:path*", "/services/:path*", "/projects/:path*", "/blog/:path*"],
// };

// app/middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const ip = req.ip || req.headers.get("x-real-ip") || "NP";

  if (ip.startsWith("AE") && !url.pathname.startsWith("/ae")) {
    url.pathname = `/ae${url.pathname}`;
    return NextResponse.redirect(url);
  }
  if (!ip.startsWith("AE") && url.pathname.startsWith("/ae")) {
    url.pathname = url.pathname.replace("/ae", "");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
