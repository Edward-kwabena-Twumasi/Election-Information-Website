// import React, { useState, useEffect } from 'react';
// import background from "../assets/happy_people.jpg";


const Summary=()=> {
    return ( 
    <div className="w-full p-10 text-center flex flex-col justify-between text-white ">

        <div className='w-full h-3/6 text-center lg:flex  justify-between text-slate-700 mb-5 gap-3'  >
            <div className="h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start  ">
                <h1 className="font-normal lg:text-xl text-xl">
                    More than
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif border border-1-black"> 
                17,027,641
                </h1>
                <h1>
                   Registered Voters
                </h1>
            </div>
            <div className="h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start ">
            <h1 className="font-normal lg:text-xl text-xl">
                   Total of
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif border border-1-black">
                   200 Electoral 
                </h1>
                <h1>
                constitencies accross the country
                </h1>
            </div>
            <div className="h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start  border border-l-2 border-l-white">
            <h1 className="font-normal lg:text-xl text-xl">
                   Total of
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif border border-1-black">
                   17 Political 
                </h1>
                <h1>
               Parties
                </h1>
            </div>
            <div className="h-full  lg:w-1/3 w-full flex flex-col justify-start gap-2 rounded-md p-10 text-start ">
            <h1 className="font-normal lg:text-xl text-xl">
                    Over
                </h1>
                <h1 className="font-bold lg:text-4xl text-2xl font-serif border border-1-black">
                33,367 
                </h1>
                <h1>
                Polling stations for Voters
                </h1>
            </div>
        </div>
        
    
    </div>
   );
}

export default Summary;