import React from 'react'
import HeroSection from '../component/Home/Herosection'
import About from '../component/Home/Aboout'
import Scrollbar from '../component/Home/scrollbar'
import Service from '../component/Home/Service'
import WhyChoose from '../component/Home/Portfolio'
import OurTeam from '../component/Home/OurTeam'
import ClientsShowcase from '../component/Home/ClientsShowcase'
import FAQ from '../component/Home/FAQ'
import Partners from '../component/Home/Partner'
import AuditCTA from '../component/Home/AuditCTA'



const Home
 = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Scrollbar/>
      <Service/>
      
      <WhyChoose/>
      <OurTeam/>
      <ClientsShowcase/>
      <Partners/>
      <AuditCTA/>
      {/* <FAQ/> */}
    </div>
  )
}

export default Home
