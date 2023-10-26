import React from 'react'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const router = useNavigate()
  return (
    <div className="shadow-2xl shadow-slate-500  p-2.5 bg-black w-1/5 h-screen text-white text-center">
       <div>
       <img className='rounded-full w-28 m-auto my-5' src="https://lh3.googleusercontent.com/a/ACg8ocIsgCWsDLGarDWel4a0S9-sX9L9wjDrT0Hw57wVOGCnOtJh=s288-c-no" alt="" />

<span className='text-3xl font-bold font-mono'><span className='text-6xl font-bold font-mono'>C</span>hetan</span>
<p>Web Developer</p>
       </div>

       <div className="mt-20 text-center">
        <ul className=" space-y-5 w-full ">
            <li className="border-b pb-2" onClick={()=>router('/')}>About</li>
            <li className="border-b pb-2" onClick={()=>router('/skills')}>Skills</li>
            <li className="border-b pb-2"><a href="https://github.com/Chetanp203" target="_blank">Github</a></li>
            <li className="border-b pb-2" onClick={()=>router('/contact')}>Contact</li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar