import React,{useState} from "react";
import {
    Link
  } from 'react-router-dom';
//import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar=({onIndexChange})=>{

    const [nav,setNav]=useState(true);
    const [selected,setselected]=useState(0);

    const handleNav=()=>{
        setNav(!nav)
    }
   const updateSelected=(i)=>{
    setselected(i);
   }

    return (
        <div className="nav justify-between items-center p-4 pl-0  px-4 text-white bg-white shadow-lg fixed z-20 w-screen flex">
            <h1 className={'text-black text-xl font-semibold  font-serif'} onClick={event => setselected(0)}> 
            <Link to="/" className="ml-7">Election Hub</Link>
            </h1>
           <ul className="links font-bold gap-5 p-4 lg:flex hidden mx-7">
                <li className={selected===1? "font-semibold text-slate-900":'font-thin text-black' } onClick={event => updateSelected(1)}>
                  <Link to="/about"> About Us</Link>
                </li>
                <li className={selected===2? "font-semibold text-slate-900":'font-thin text-black' } onClick={event => updateSelected(2)}>
                  <Link to="/register">Register</Link>
                </li>
                <li className={selected===3? "font-semibold text-slate-900":'font-thin text-black' } onClick={event => updateSelected(3)}>
                  <Link to="/voting-information">Voting FAQs</Link>
                </li>
                <li className={selected===4? "font-semibold text-slate-900":'font-thin text-black' } onClick={event => updateSelected(4)}>
                  <Link to="/media-center"> Media Center</Link>
                </li>
                <li className={selected===5? "font-semibold text-slate-900":'font-thin text-black' } onClick={event => updateSelected(5)}>
                  <Link to="/statistics">Statistics</Link>
                </li>
           </ul>
           <div onClick={handleNav} className=" lg:hidden text-black">
            {nav? <h2>Menu</h2>:<h2>Close</h2>}
            </div>
           <div className={!nav?"absolute z-30  bg-white border-r w-full border-r-gray-900 h-[300px] ease-in-out duration-500 lg:hidden mt-[350px]":"absolute z-30  h-[0px] duration-500 fadeOut"}>
                <ul className="font-bold text-slate-600">
                    <li className="p-4 border-b border-gray-600" onClick={handleNav} >About Us</li>
                    <li className="p-4 border-b border-gray-600" onClick={handleNav} >Register To Vote</li>
                    <li className="p-4 border-b border-gray-600" onClick={handleNav} >Voting Information </li>
                    <li className="p-4 border-gray-600" onClick={handleNav} >Media Center </li>
                    <li className="p-4" onClick={handleNav} >Statistics</li>
                </ul>
           </div>
        </div>

    );
};

export default Navbar