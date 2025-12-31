import React from 'react'
import HeroSection from '../component/Home/Herosection'
import About from '../component/Home/banner'
import Scrollbar from '../component/Home/About'
import Service from '../component/Home/Service'
import WhyChoose from '../component/Home/Portfolio'
import OurTeam from '../component/Home/Blueprint'
import ClientsShowcase from '../component/Home/Testimonials'
import FAQ from '../component/Home/Blog'
import Partners from '../component/Home/Partner'

import ContactSection from '../component/gobalcomponent/contact_form'
import BlogSection from '../component/Home/Blog'
import Banner from '../component/Home/banner'



const Home
 = () => {
  return (
    <div>
      <HeroSection/>
      <Banner/>
      <Scrollbar/>
      <Service/>
      
      <WhyChoose/>
      <OurTeam/>
      <ClientsShowcase/>
      <Partners/>
      <ContactSection/>
      <BlogSection/>
    </div>
  )
}

export default Home
