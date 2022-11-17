// import React, { useState, useEffect } from 'react';
import imgurl from "../assets/happy_people.jpg";



const Hero=()=> {
    return ( 
 
    <div className='h-screen w-screen  text-center  text-white bg-no-repeat object-cover '  style={{ backgroundImage: "url("+imgurl+")" }}>
       <div className="herotext absolute  z-20 flex flex-col">  
        <p className='text-4xl font-extrabold shadow-xl'> GET INFORMED, DECIDE WELL</p>
        <h1 className='font-thin text-white text-xl'>We exist to provide the neccesary voting assistance </h1>
        <div className="self-center flex justify-center m-9 gap-5">
           <div className="w-30 h-30 border border-2-white rounded-full p-7">
             <h2 className="text-2xl font-bold"> 20</h2>
           </div>
           <div className="w-30 h-30 border border-2-white rounded-full p-7">
             <h2 className="text-2xl font-bold"> 30</h2>
           </div>
           <div className="w-30 h-30 border border-2-white rounded-full p-7">
             <h2 className="text-2xl font-bold"> 40</h2>
           </div>
        </div>
      </div>
      <div className="overlay absolute w-full h-full z-10  mt-18"></div>
    </div>
    
   );
}

export default Hero;