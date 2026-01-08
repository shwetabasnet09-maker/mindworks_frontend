

// import React from 'react';
// import HeroSection from '../component/Home/Herosection';
// import Scrollbar from '../component/Home/About';
// import Service from '../component/Home/Service';
// import WhyChoose from '../component/Home/Portfolio';
// import OurTeam from '../component/Home/Blueprint';
// import ClientsShowcase from '../component/Home/Testimonials';
// import Partners from '../component/Home/Partner';
// import ContactSection from '../component/gobalcomponent/contact_form';
// import BlogSection from '../component/Home/Blog';
// import Banner from '../component/Home/banner';

// // In App Router, 'params' contains the [region] from the URL
// export default async function Home({ params, searchParams }) {
//   // If the URL is /ae, params.region is "ae". 
//   // If no param (root path), fall back to searchParams or "global"
//   const region = params?.region || searchParams?.region || "global";

//   // Fetch data based on the detected region
//   const res = await fetch(`http://127.0.0.1:8000/api/home/home/?region=${region}`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         <p>Failed to load data for region: {region}</p>
//       </div>
//     );
//   }

//   const homepageData = await res.json();

//   return (
//     <main>
//       <HeroSection data={homepageData.hero} region={region} />
//       <Banner data={homepageData.banner_stats} region={region} />
//       <Scrollbar data={homepageData.about} region={region} />
//       <Service />
      
//       <WhyChoose data={homepageData.why_choose_us} region={region} />
//       <OurTeam data={homepageData.blueprint} region={region} />
//       <ClientsShowcase data={homepageData.testimonials} region={region} />
//       <Partners />
//       <ContactSection />
//       <BlogSection />
//     </main>
//   );
// }

import React from 'react';
import HeroSection from '../component/Home/Herosection';
import Scrollbar from '../component/Home/About';
import Service from '../component/Home/Service';
import WhyChoose from '../component/Home/Portfolio';
import OurTeam from '../component/Home/Blueprint';
import ClientsShowcase from '../component/Home/Testimonials';
import Partners from '../component/Home/Partner';
import ContactSection from '../component/gobalcomponent/contact_form';
import BlogSection from '../component/Home/Blog';
import Banner from '../component/Home/banner';

export default async function Home({ params, searchParams }) {
  // Await params if using Next.js 15+ 
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const region = resolvedParams?.region || resolvedSearchParams?.region || "global";

  // Fetch data
  const res = await fetch(`http://127.0.0.1:8000/api/home/home/?region=${region}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Failed to load data for region: {region}</p>
      </div>
    );
  }

  const homepageData = await res.json();

  return (
    <main>
     
      {homepageData.hero && (
        <HeroSection data={homepageData.hero} region={region} />
      )}

      
      {homepageData.banner_stats?.length > 0 && (
        <Banner data={homepageData.banner_stats} region={region} />
      )}

      {homepageData.about && Object.keys(homepageData.about).length > 0 && (
        <Scrollbar data={homepageData.about} region={region} />
      )}

      <Service />

      
      {homepageData.why_choose_us && (
  <WhyChoose 
    whyChooseData={homepageData.why_choose_us} 
    featuresData={homepageData.features} 
    region={region} 
  />
)}
      
      {homepageData.blueprint && (
        <OurTeam data={homepageData.blueprint} region={region} />
      )}

      {homepageData.testimonials?.length > 0 && (
        <ClientsShowcase data={homepageData.testimonials} region={region} />
      )}

      <Partners />
      <ContactSection />
      <BlogSection />
    </main>
  );
}