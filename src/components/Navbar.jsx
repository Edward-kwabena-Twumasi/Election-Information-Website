import React,{useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar=()=>{
    const [nav,setNav]=useState(true);
    
    const handleNav=()=>{
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#9bbec4]">
           <h1 className=' text-3xl font-bold text-[#1a1f26]'>VoteInform</h1>
           <ul className="flex font-bold ">
            <li className="p-4">About Us</li>
            <li className="p-4">Register To Vote</li>
            <li className="p-4">Voting Information </li>
            <li className="p-4">Media Center </li>
            <li className="p-4">Donate</li>
           </ul>
           {/* <div onClick={handleNav} className="block md:hidden">
            {nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
            </div>
           <div className={nav?"fixed left-0 top-0 w-[60%] bg-[#000300] border-r border-r-gray-900 h-full ease-in-out duration-500":"fixed left-[-100%]"}>
           <h1 className='w-full text-3xl m-4 font-bold text-[#00df9a]'>VoteInform</h1>
           <ul className="uppercase m-4">
            <li className="p-4 border-b border-gray-600">About Us</li>
            <li className="p-4 border-b border-gray-600">Register To Vote</li>
            <li className="p-4 border-b border-gray-600">Voting Information </li>
            <li className="p-4">Media Center </li>
            <li className="p-4">Donate</li>
           </ul>
           </div> */}
        </div>

    );
};

export default Navbar