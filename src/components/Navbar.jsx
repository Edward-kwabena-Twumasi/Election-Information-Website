import React,{useState} from "react";
import {
    Link
  } from 'react-router-dom';
//import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar=({onIndexChange})=>{

    const [nav,setNav]=useState(true);
    const handleNav=()=>{
        setNav(!nav)
    }

    return (
        <div className="nav justify-between items-center h-18  px-4 text-white bg-white shadow-lg fixed z-20 w-screen flex">
            <h1 className=' text-xl font-semibold text-black font-serif' onClick={event => onIndexChange(0)}> 
            <Link to="/" >Election Hub</Link>
            </h1>
           <ul className="links font-bold gap-5 p-4 lg:flex hidden mx-7">
                <li className="font-thin text-black" onClick={event => onIndexChange(1)}>
                  <Link to="/about"> About Us</Link>
                </li>
                <li className="font-thin text-black" onClick={event => onIndexChange(2)}>
                  <Link to="/register">Register</Link>
                </li>
                <li className="font-thin text-black" onClick={event => onIndexChange(3)}>
                  <Link to="/voting-information">Voting Information</Link>
                </li>
                <li className="font-thin text-black" onClick={event => onIndexChange(4)}>
                  <Link to="/media-center"> Media Center</Link>
                </li>
                <li className="font-thin text-black" onClick={event => onIndexChange(5)}>
                  <Link to="/statistics">Statistics</Link>
                </li>
           </ul>
           <div onClick={handleNav} className="block md:hidden lg:hidden">
            {nav? <h2>Menu</h2>:<h2>Close</h2>}
            </div>
           {/* <div className={nav?"fixed left-0 top-0 w-[60%] bg-[#000300] border-r border-r-gray-900 h-full ease-in-out duration-500 lg:hidden":"fixed left-[-100%]"}>
                <ul className="font-bold m-4">
                    <li className="p-4 border-b border-gray-600">About Us</li>
                    <li className="p-4 border-b border-gray-600">Register To Vote</li>
                    <li className="p-4 border-b border-gray-600">Voting Information </li>
                    <li className="p-4 border-gray-600">Media Center </li>
                    <li className="p-4">Statistics</li>
                </ul>
           </div> */}
        </div>

    );
};

export default Navbar