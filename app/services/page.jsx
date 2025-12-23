import React from 'react'
import Bannermain from '../component/Banner/pagebanner'
import Services from '../component/Home/Service'
import Features from '../component/Home/Portfolio'

import ProjectSection from '../component/Service/Project'


const page = () => {
  return (
    <div>
    <Bannermain backgroundImg="/banner_img.jpeg" title="Services" />
      <Services/>
      <Features/>
     <ProjectSection/>

    

    </div>
  )
}

export default page