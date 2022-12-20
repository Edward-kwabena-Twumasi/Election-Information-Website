import {useRef, useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import { regions } from "../data.js/regions";
import Faq from './Faq';


const HowToVote=()=>{
const [region,setRegion]=useState({});    
const regionId=useParams();

useEffect(()=>{
    let regionWid=regions.filter(region=>region.id===regionId.id)[0];
    
    setRegion(regionWid)
},[regionId.id])

    return(
        <div className='flex flex-col bg-white'>
            <div className='info-section-header flex flex-col justify-center p-20 bg-black h-[300px]'>
                <h2 className='header-text text-4xl font-light font-serif text-white '>How to vote in {region.name}</h2>
            </div>
            <div className='info-section-options flex flex-col  bg-white w-full p-10'>
                <div className='self-center'>
                    <h2 className='header-text text-3xl font-light  font-serif text-center'>Available voting options</h2>
                    <h4 className='  rounded-md m-3 text-center'>In-Person Voting</h4>
                </div>
                
            </div>
            
            <div className='info-section-districts flex flex-col justify-center bg-green-50 w-full lg:p-20 p-5'>
                <h2 className='header-text text-3xl text-center font-serif '>Districts and Constituencies</h2>
                <div className='flex self-center'>
                    <Link className='hover:text-blue-600 hover:font-bold' to={"find"}>
                     <h4 className='  rounded-md m-3'><span className='font-bold font-serif'>{region.seats}</span> Districts & Constituencies</h4>
                    </Link>
                    <h4 className='  rounded-md m-3'><span className='font-bold font-serif'>{region.seats}</span> polling stations</h4>
                </div>
                <h2 className='header-text text-xl m-3 font-semibold'>Districts map</h2>
                <img src={region.img} alt="region" className='dist-map shadow-2xl'></img>
            </div>
            <div className='info-section-faqs flex flex-col justify-center bg-green-50 w-full lg:p-20 p-5'>
                <h2 className='header-text text-3xl text-center font-serif '>Frequently asked questions</h2>
                <Faq title="How do I know my pollen station" body="Refer to our registry"/>
                <Faq title="How do I know my pollen station" body="Refer to our registry"/>
                <Faq title="How do I know my pollen station" body="Refer to our registry"/>


                
            
            </div>


        </div>
    )
}



export default HowToVote
