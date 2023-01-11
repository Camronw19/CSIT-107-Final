import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen color-background flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/aab51011-afac-4e72-898e-2be9900df0cb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-primary color-Heading'>
                    Contact
                </p>
                <p className='color-text py-4'>
                    // Submit the form below or email me at - camronwalsh@gmail.com
                </p>
            </div>
            <input className='bg-[#e8edfa] caret-[#41729F] rounded-sm p-2 placeholder:italic' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e8edfa] placeholder:text-gray-500 caret-[#41729F] rounded-sm placeholder:italic' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e8edfa] placeholder:text-gray-500 p-2 caret-[#41729F] rounded-sm placeholder:italic' placeholder='Message' name='message' rows="10" ></textarea>
            <button className='text-white border-2 hover:bg-[#7aa1c5]
             hover:border-[#7aa1c5] px-4 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-500'>
                Let's Collaborate
            </button>

        </form>
    </div>
  )
}

export default Contact