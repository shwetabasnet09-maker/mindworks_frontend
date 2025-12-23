import React from 'react'
import Bannermain from '../component/Banner/pagebanner'
import Whoweare from '../component/About/Whoweare'
import Partners from '../component/Home/Partner'
import MeetOurTeam from '../component/About/TeamMember'
import Banner from '../component/Home/banner'

const page = () => {
  return (
    <div>
   <Bannermain backgroundImg="/AboutUs-Mountain@2x.webp" title="About-Us" />
   <Whoweare/>
   <Banner/>
   <Partners/>
   <MeetOurTeam/>

    </div>
  )
}

export default page