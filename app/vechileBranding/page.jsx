import React from 'react'
import Bannermain from '../component/Banner/pagebanner'

const Pages = () => {
  return (
    <div>
      <Bannermain backgroundImg="/contact.png" title=" VEHICLE BRANDING IN DUBAI" />
      
      <div className="  py-20">
        <div className='wrapper '>
        <h2 className='outfit text-[35px] font-bold  text-center mb-4'>
          BRANDING SERVICES IN DUBAI - WHAT WE CAN DO FOR YOU
        </h2>
        
        <p className='dmsans text-[20px]  mb-12 '>
          <span className=' font-semibold'>Printzone Advertising LLC</span> is your trusted partner for vehicle branding services in Dubai. We specialize in transforming your vehicles into dynamic marketing tools that enhance brand visibility. Our team creates customized graphics tailored to your brand identity, ensuring that your vehicles stand out on the road. We handle the entire installation process with precision, using high-quality materials for durability and a professional finish.
          <br /><br />
          Additionally, we manage all necessary government approvals from the DED, Dubai Municipality, and RTA, simplifying the process for you. With over 13 years of experience, we are committed to exceptional customer service and oversee every phase of your project, from design to installation. Let us help you elevate your branding with Printzone Advertising LLC!
        </p>

        {/* Vehicle Branding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Vehicle Branding Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden group">
              <img 
                src="/car.webp"  
                alt="Vehicle Branding - Professional van with custom graphics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="outfit text-2xl font-bold text-gray-800 mb-3">
                VEHICLE BRANDING
              </h3>
              <p className="dmsans text-gray-600 text-base">
                Boost your business visibility with professional vehicle branding. Custom designs that turn heads and drive sales.
              </p>
            </div>
          </div>

          {/* Car Branding Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden group">
              <img 
                src="/car.webp" 
                alt="Car Branding - Branded SUV in mountain setting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="outfit text-2xl font-bold text-gray-800 mb-3">
                Car Branding
              </h3>
              <p className="dmsans text-gray-600 text-base">
                Transform your car into a mobile billboard with eye-catching branding. Attract customers wherever you go.
              </p>
            </div>
          </div>

          {/* Entertainment Van Branding Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden group">
              <img 
                src="/car.webp" 
                alt="Entertainment van with purple and black branding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="outfit text-2xl font-bold text-gray-800 mb-3">
                Entertainment Van Branding
              </h3>
              <p className="dmsans text-gray-600 text-base">
                Stand out with custom entertainment van branding featuring modern designs and eye-catching graphics.
              </p>
            </div>
          </div>

          {/* Truck Branding Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden group">
              <img 
                src="/car.webp" 
                alt="Large truck with green branding wrap"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="outfit text-2xl font-bold text-gray-800 mb-3">
                Truck Branding
              </h3>
              <p className="dmsans text-gray-600 text-base">
                Make a bold statement with large-format truck branding that maximizes visibility and brand impact on the road.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Other Services Section */}
        <div className="">
          <div className="bg-gray-700   px-4">
            <h2 className="outfit text-[35px] font-bold text-white text-center mb-12">
              OTHER SERVICES WE OFFERED
            </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* RTA Permit Card */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/rta.jpg" 
                    alt="RTA Roads & Transport Authority Logo"
                    className="h-32 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <h3 className="outfit text-2xl font-bold text-white mb-4">
                  RTA PERMIT AND APPROVAL
                </h3>
                <p className="dmsans text-black text-base max-w-md mx-auto">
                  Secure your RTA permit and approval quickly and easily. Ensure compliance for smooth vehicle operations in your region.
                </p>
              </div>

              {/* CID Approval Card */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/police.jpg" 
                    alt="Dubai Police CID Logo"
                    className="h-32 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <h3 className="outfit text-2xl font-bold text-white mb-4">
                  CID Approval
                </h3>
                <p className="dmsans  text-base max-w-md mx-auto">
                  Obtain CID approval for vehicle color changes seamlessly. Stay compliant and transform your vehicle's look hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
   
  )
}

export default Pages