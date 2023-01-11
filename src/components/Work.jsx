import React from 'react'
import workImg from '../assets/projects/workimg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import {Sampler_JUCE} from '../assets'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const Work = () => {
  return (
    <div name ='work' className='w-full md:h-screen color-text color-background'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-primary color-Heading'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item */}
                <Card className={`h-80 `}>
                    <CardHeader color="gray" className="relative h-56 cursor-pointer transform transition-all hover:-translate-y-4">
                    <img
                        src={Sampler_JUCE}
                        alt="img-blur-shadow"
                        className="h-full w-full "
                    />
                    </CardHeader>
                    <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2 font-poppins">
                        JUCE Sampler Plug-in
                    </Typography>
                    <Typography className="font-poppins" >
                        Audio VST created using C++ and the JUCE framework 
                    </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography className="font-poppins" variant="small">C++, JUCE</Typography>
                    <Typography variant="small" color="gray" className="flex gap-1 font-poppins">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        Personal project
                    </Typography>
                    </CardFooter> 
                </Card>

                {/* grid item */}
                <Card className={`h-80 `}>
                    <CardHeader color="gray" className="relative h-56 cursor-pointer transform transition-all hover:-translate-y-4">
                    <img
                        src={Sampler_JUCE}
                        alt="img-blur-shadow"
                        className="h-full w-full "
                    />
                    </CardHeader>
                    <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        JUCE Sampler Plug-in
                    </Typography>
                    <Typography>
                        Audio Sampler VST created using C++ and the JUCE framework 
                    </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">C++, JUCE</Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        Personal project
                    </Typography>
                    </CardFooter> 
                </Card>

                {/* grid item */}
                <Card className={`h-80 content-div2 `}>
                    <CardHeader color="gray" className="relative h-56 cursor-pointer transform transition-all hover:-translate-y-4">
                    <img
                        src={Sampler_JUCE}
                        alt="img-blur-shadow"
                        className="h-full w-full "
                    />
                    </CardHeader>
                    <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        JUCE Sampler Plug-in
                    </Typography>
                    <Typography>
                        Audio Sampler VST created using C++ and the JUCE framework 
                    </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">C++, JUCE</Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        Personal project
                    </Typography>
                    </CardFooter> 
                </Card>
                
                {/* grid item */}
                <div style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${workImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* grid item */}
                <div style={{backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                  
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work