// import React, { useState, useEffect } from 'react';
// import background from "../assets/happy_people.jpg";
import { FaArrowRight } from 'react-icons/fa';


const Summary=()=> {
    return ( 
    <div className="w-full p-10 text-center flex flex-col justify-between  bg-slate-700">
        <h2 className="summarytitle self-center text-center font-serif text-3xl text-white mb-4">Summary Statistics</h2>
       
        <div className='w-full h-3/6 text-center lg:flex  justify-between text-white mb-5 gap-3'  >
            <div className="stat-card h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start shadow-xl ">
                <h1 className="font-normal lg:text-xl text-xl">
                    More than
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif "> 
                17,027,641
                </h1>
                <h1>
                   Registered Voters
                </h1>
                <div className='read-more self-end p-4 border border-1-white rounded-md'><FaArrowRight></FaArrowRight></div>
            </div>
            <div className="stat-card h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start shadow-xl ">
                <h1 className="font-normal lg:text-xl text-xl">
                    Total
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif "> 
                17
                </h1>
                <h1>
                   Political parties
                </h1>
                <div className='read-more self-end p-4 border border-1-white rounded-md'><FaArrowRight></FaArrowRight></div>
            </div>
            <div className="stat-card h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start shadow-xl ">
                <h1 className="font-normal lg:text-xl text-xl">
                    Total
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif "> 
                250
                </h1>
                <h1>
                   Electoral Constituencies
                </h1>
                <div className='read-more self-end p-4 border border-1-white rounded-md flex gap-2'><FaArrowRight></FaArrowRight></div>
            </div>
            
        
        </div>
        
    
    </div>
   );
}

export default Summary;