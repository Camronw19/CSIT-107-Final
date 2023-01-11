import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen color-background'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className=' text-[#98D7C2]'> 
            Hi, my name is 
            </p>

            <h1 className='text-4xl sm:text-7xl font-bold color-Heading'>
                Camron Walsh
            </h1>

            <h2 className='text-4xl sm:text-7xl font-bold text-[#d3d3d3]'>
                I'm a computer science student.
            </h2>

            <p className='color-Heading py-4 max-w[700px]'> 
                i'm a computer science student at SUNY Fredonia with a passion for audio applications. 
                Currently, I'm working on building audio vst's
            </p>
            <div>
              <button className='fixed z-10 hover:translate-x-5 duration-300 text-white border-2 px-6 py-3 my-2 flex 
              items-center hover:bg-[#98D7C2] hover:border-[#98D7C2]'>
                View Work
                <span className='duration-300'>
                     <HiArrowNarrowRight className='ml-3'/> 
                </span>      
            </button>  
            </div>
            <div className="absolute z-[0] w-[30%] h-[20%] top-0 right-0 blue__gradient" />  
            <div className="absolute z-[0] w-[50%] h-[40%] top-0 right-40 pink__gradient" />  
        </div>
    </div>
    
  )
}

export default Home