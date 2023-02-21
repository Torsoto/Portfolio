import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full p-8 pl-20 bg-[#242424] max-w-[1600px] grid grid-row-3'>
        <h1 className='text-5xl font-bold text-white'>CONTACT</h1>
        <div className='grid grid-row-3 text-white'>
            <p className='text-white text-xl font-mono pt-6 pl-1'>Write me a message👍</p>
            <input type="text"/>
            <div>
                <ul className='grid grid-row-3 gap-2'>
                    <li><input required  type="text" name='name' placeholder='Name'className='text-white w-[50%] h-[50px] text-xl p-2' /></li>
                    <li><input required type="email" name='email' placeholder='Email' className='text-white w-[50%] h-[50px] text-xl p-2' /></li>
                    <li><input required type="text" name='Subject' placeholder='Subject' className='text-white w-[50%] h-[50px] text-xl p-2'/></li>
                    <li><input required type="text" name='Subject' placeholder='Message' className='text-white w-[50%] h-[150px] text-xl p-2' /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact