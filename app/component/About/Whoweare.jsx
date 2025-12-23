import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Whoweare = () => {
  return (
    <div className=' py-20 bg-black '>
        <div className='flex flex-col md:flex-row gap-10 md:gap-20 wrapper '>
            <div>
                <Image src="/about.png" alt="Who we are" width={600} height={400} className='rounded-lg px-6'/>
            </div>
            <div className='justify-center  flex flex-col dmsans px-6'>
                <h3 className='text-sm  text-[#00A74E]'>WHO WE ARE</h3>
                <h2 className='w-[75%]  text-2xl md:text-3xl text-white '>Your Digital Future, Our Expertise: Digimax Delivers Excellence.</h2>
                <p className='text-sm text-white mt-5 '>Pede inceptos dui diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus duis pellentesque ligula aenean taciti eget tincidunt commodo tristique elit</p>
                <Link href="#" className='  bg-[#00A74E] text-white  px-4 py-4 rounded-full  w-[50%] md:w-[20%] mt-10 text-sm'>Learn More</Link>
            </div>

        </div>
        
    </div>
  )
}

export default Whoweare