// import React, { useState, useEffect } from 'react';
import imgurl from "../assets/happy_people.jpg";



const Hero=()=> {
    return ( 
 
    <div className='h-screen w-screen  text-center  text-white bg-no-repeat object-cover '  style={{ backgroundImage: "url("+imgurl+")" }}>
       <div className="herotext absolute  z-20 flex flex-col">  
        <p className='text-4xl font-extrabold'> GET INFORMED, DECIDE WELL</p>
        <div className="self-center flex justify-center gap-5">
         <h1 className="text-6xl font-extrabold text-red-700">.</h1>
         <h1 className="text-6xl font-extrabold text-yellow-700 translate-y-9">.</h1>
         <h1 className="text-6xl font-extrabold text-green-700">.</h1>
         </div>
        <h1 className='font-normal text-white text-3xl mt-10  p-4 font-serif'>Election 2024 countdown</h1>
        <div className="self-center lg:flex grid grid-cols-2 justify-center m-3 gap-5">
          <div className="flex flex-col">
            <div className="w-[90px] h-[90px]  border-4  rounded-full p-7">
              <h2 className="text-4xl font-semibold text-center"> 2</h2>
            </div>
            <h1 className="m-2">Years</h1>
          </div> 
          <div className="flex flex-col">
            <div className="w-[90px] h-[90px] border-2 rounded-full p-7">
              <h2 className="text-3xl font-semibold text-center"> 1</h2>
            </div>
            <h1 className="m-2">Months</h1>
          </div> 
          <div className="flex flex-col">
            <div className="w-[90px] h-[90px]  border rounded-full p-7">
              <h2 className="text-2xl font-medium text-center"> 10</h2>
            </div>
            <h1 className="m-2">Days</h1>
          </div> 
        </div>
      </div>
      <div className="overlay absolute w-full h-full z-10  mt-18"></div>
    </div>
    
   );
}

export default Hero;