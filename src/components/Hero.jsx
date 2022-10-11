// import React, { useState, useEffect } from 'react';
import background from "../assets/happy_people.jpg";


const Hero=()=> {
    return ( 

    <div className='w-full h-full  mx-auto text-center flex flex-col justify-start text-white bg-[#9bbec4]'  style={{ backgroundImage: {background} }}>
    <p className=' font-bold p-2 font-6xl text-[#1a1f26]' style={{fontSize:28,fontWeight:1000}}> MAKE AN INFORMED DECISION</p>
    <h1 className='text-[#4a4b4d] ' style={{fontSize:20,fontWeight:900}}>Providing resources and tools to help voting-eligible citizens register and vote.</h1>
    <img src={background} alt='happy people voters' className="h-30  bg-no-repeat bg-center bg-cover w-full"/>
    {/* <div className='h-30  bg-no-repeat bg-center bg-cover w-full' style={{ backgroundImage: {background} }}>
        hi my image
    </div> */}
    </div>
   );
}

export default Hero;