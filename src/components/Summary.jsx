// import React, { useState, useEffect } from 'react';
// import background from "../assets/happy_people.jpg";
import Quote from '../components/Quote';


const Summary=()=> {
    return ( 
    <div className="w-full h-screen text-center flex flex-col justify-between text-white">

        <div className='w-full h-3/6 text-center flex  justify-between text-white '  >
            <div className="h-full bg-[#565a65] w-1/3 flex flex-col justify-start pt-6 gap-2 text-start pl-9">
                <h1 className="font-bold text-3xl">
                    More than
                </h1>
                <h1 className="font-bold text-5xl"> 
                17,027,641
                </h1>
                <h1>
                   Registered Voters
                </h1>
            </div>
            <div className="h-full bg-[#1a1f26] w-1/3 flex flex-col justify-start pt-6 gap-2 text-start pl-9">
            <h1 className="font-bold text-3xl">
                   Total of
                </h1>
                <h1 className="font-bold text-5xl">
                   200 Electoral 
                </h1>
                <h1>
                constitencies accross the country
                </h1>
            </div>
            <div className="h-full bg-[#1a1f26] w-1/3 flex flex-col justify-start pt-6 gap-2 text-start pl-9 border border-l-2 border-l-white">
            <h1 className="font-bold text-3xl">
                   Total of
                </h1>
                <h1 className="font-bold text-5xl">
                   17 Political 
                </h1>
                <h1>
               Parties
                </h1>
            </div>
            <div className="h-full bg-[#4095d2] w-1/3 flex flex-col justify-start pt-6 gap-2 text-start pl-9">
            <h1 className="font-bold text-3xl">
                    Over
                </h1>
                <h1 className="font-bold text-5xl">
                33,367 
                </h1>
                <h1>
                Polling stations for Voters
                </h1>
            </div>
        </div>
        
        <div className="w-full h-3/6 bg-[#e0e4ee] pt-10">
         <Quote/>
        </div>
    </div>
   );
}

export default Summary;