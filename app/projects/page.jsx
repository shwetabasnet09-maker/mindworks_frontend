import React from 'react'
import Bannermain from '../component/Banner/pagebanner'

import ProjectSection from '../component/Service/Project'
import Testimonials from '../component/Home/Testimonials'

const page
 = () => {
  return (
    <div>
        <Bannermain backgroundImg="/banner_img.jpeg" title="Projects" />
        <ProjectSection/>
        <Testimonials/>


    </div>
  )
}

export default page
