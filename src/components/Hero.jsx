// import React, { useState, useEffect } from 'react';
import imgurl from "../assets/happy_people.jpg";
import bulburl from "../assets/bulb.png";
import statsurl from "../assets/statistics.png";
import helpurl from "../assets/help.png";




const Hero=()=> {
    return ( 
 
    <div className='h-screen w-screen flex flex-col text-centertext-white bg-no-repeat object-cover '  style={{ backgroundImage: "url("+imgurl+")" }}>
        <div className="hero-text flex flex-col">
          
          <p className='text-4xl font-extrabold self-center text-white'>ALL YOU NEED TO KNOW</p>
         
          <div className=" flex justify-center m-3 gap-5 ">
            <div className="flex flex-col">
              <div className="rounded-lg  p-7">
                <h5 className="text-xl font-semibold text-center">Highlights</h5>
                <img src={bulburl} alt="higlights" width="70" height="70"></img> 
              </div>
             
            </div> 
            <div className="flex flex-col">
              <div className="rounded-lg  p-7">
                <h2 className="text-xl font-semibold text-center">Statistics</h2>
                <img src={statsurl} alt="higlights" width="70" height="70"></img> 

              </div>
              
            </div> 
            <div className="flex flex-col">
              <div className="rounded-lg  p-7">
                <h2 className="text-xl font-medium text-center">Help</h2>
                <img src={helpurl} alt="higlights" width="70" height="70"></img> 
              </div>
             
            </div> 
          </div>
        </div>
       
    </div>
    
   );
}

export default Hero;