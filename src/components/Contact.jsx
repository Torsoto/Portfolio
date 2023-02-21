import React from 'react'
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:p-8 p-4 bg-[#242424] max-w-[1600px] grid grid-row-3'>
        <h1 className='font-bold text-white lg:text-5xl md:text-4xl text-3xl'>CONTACT</h1>
        <div className='grid grid-col-3 text-white'>
            <div className='lg:w-[50%] md:w-[40%] sm:[80%]'>
            <p className='text-white lg:text-xl md:text-xl sm:text-[16px] font-mono pt-6 lg:whitespace-nowrap md:whitespace-nowrap'>Write me a message and i will get in touch with you as soon as i can 👍</p>
                <ul className='grid gap-2 pt-4'>
                    <p >Name</p>
                    <li><input required  type="text" name='name' placeholder='Name'className='text-white w-full leading-tight h-[50px] text-xl p-2 appearance-none border rounded focus:bg-[#151515] focus:outline-none' /></li>
                    <p >Email</p>
                    <li><input required type="email" name='email' placeholder='Email' className='text-white w-full leading-tight h-[50px] text-xl p-2 appearance-none border rounded focus:bg-[#151515] focus:outline-none' /></li>
                    <p >Subject</p>
                    <li><input required type="text" name='Subject' placeholder='Subject' className='text-white w-full h-[50px] text-xl p-2 appearance-none border rounded focus:bg-[#151515] focus:outline-none'/></li>
                    <p >Message</p>
                    <li><input required type="text" name='Subject'  className='text-white w-full leading-tight h-[150px] text-xl p-2 appearance-none border rounded focus:bg-[#151515] focus:outline-none' /></li>
                </ul>
                <button className='pl-1 p-3 mt-4 lg:w-52 bg-[#B9E2F4] hover:scale-105 transition-all ease-in-out duration-200 text-black rounded-[8px] w-40 text-2xl font-bold'>SEND</button>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Contact