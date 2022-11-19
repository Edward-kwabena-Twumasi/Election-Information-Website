
import * as React from 'react';
import imgurl from "../assets/happy_people.jpg";


import {
  useLocation
} from 'react-router-dom';

const AboutUs=()=>{

    let location = useLocation();
    React.useEffect(() => {
        // Google Analytics
        console.log(location.pathname);
      }, [location]);
      
    return (
          <div className='bg-white lg:p-20 p-7 '>
        <div className="flex flex-col justify-start   h-full  ">
          <h1 className="font-bold text-2xl font-serif mt-10 ml-5">Abou Us</h1>
          <p className='p-5 max-w-2xl'>
            This is a project undertaken by a team of GIS experts from the Geography department of the KWAME NKRUMAH UNIVERSITY OF SCEIENCE AND TECHNOLOGY
            led by Dr Gift Dumedah. We are on a mission to intelligent gather, assemble and disseminate information about elections in Ghana.
          </p>

          <h1 className="font-bold text-2xl font-serif mt-5 ml-5">People</h1>
          <div className='people m-5 grid grid-cols-3 gap-2'>
            <div className='flex bg-slate-800 rounded-lg text-white'>
              <div className='flex flex-col p-5  shadow-2xl   '>
                <div className='p-10 w-[170px] h-[170px] rounded-full bg-no-repeat object-cover bg-center ' style={{ backgroundImage: "url(" + imgurl + ")" }}>
                </div>
                <h3 className='font-normal text-xl m-3'>Dr Gift Dumedah</h3>
              </div>
              <p className='m-3 mt-6'>
                Dr Gift Dumedah is a senior Lecturer at Geography department
              </p>
            </div>
            <div className='flex bg-slate-800 rounded-lg text-white'>
            <div className='flex flex-col p-5 bg-slate-800 rounded-lg shadow-2xl text-white '>
                <div className='p-10 w-[170px] h-[170px] rounded-full bg-center' style={{ backgroundImage: "url(" + imgurl + ")" }}>
                </div>
                <h3 className='font-normal text-xl m-3'>Edward Kwabena Twumasi</h3>
               </div>
               <p className='m-3 mt-6'>
                Dr Gift Dumedah is a senior Lecturer at Geography department
              </p>
            </div>
            <div className='flex bg-slate-800 rounded-lg text-white'>
            <div className='flex flex-col p-5 bg-slate-800 rounded-lg shadow-2xl text-white '>
              <div className='p-10 w-[170px] h-[170px] rounded-full bg-center' style={{ backgroundImage: "url(" + imgurl + ")" }}>
              </div>
              <h3 className='font-normal text-xl m-3'>Jephthah Boateng</h3>
              </div>
              <p className='m-3 mt-6'>
                Dr Gift Dumedah is a senior Lecturer at Geography department
              </p>
            </div>
            <div className='flex bg-slate-800 rounded-lg text-white'>
            <div className='flex flex-col p-5 bg-slate-800 rounded-lg shadow-2xl text-white '>
              <div className='p-10 w-[170px] h-[170px] rounded-full bg-center' style={{ backgroundImage: "url(" + imgurl + ")" }}>
              </div>
              <h3 className='font-normal text-xl m-3'>Binche Noah</h3>
              </div>
              <p className='m-3 mt-6'>
                Dr Gift Dumedah is a senior Lecturer at Geography department
              </p>
            </div>
          </div>
        </div> 
        </div>
      
          );
  }

export default AboutUs;