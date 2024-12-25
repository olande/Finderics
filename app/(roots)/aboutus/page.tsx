import React from 'react'
import Content3 from '@/app/components/Content3'
import {Button} from "@/components/ui/button";
import About from '@/app/components/elements/About'

function page() {
  return (
    <>
      <Content3 />
      <div className="max-w-7xl mx-auto px-6 pt-4 py-20 bg-white-500 rounded-lg mt-[-3rem]">
      
        <div className=" flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            {/* Image */}
            <img src="/images/banner.jpg" alt="Your description" className="w-full h-auto rounded-lg"/>
          </div>
          <div className="flex-1">

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-yellow-400">
          Our Mission
        </h2>
            {/* Description */}
            <p className="text-black text-lg">
            At Finders International Consultancy, we believe that language is the key to unlocking new opportunities, broadening horizons, and connecting with people from diverse cultures.
             Our mission is to increasingly globalized world.
            </p>

            <Button className='bg-yellow-500 text-center text-semibold' > Learn More</Button>
          </div>
        </div>
      </div>

      <About/>


    </>
  )
}

export default page
