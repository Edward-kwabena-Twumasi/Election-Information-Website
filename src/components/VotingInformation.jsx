import RegionItem from "./RegionItem";
import {  useState} from 'react';
import { regions } from "../data.js/regions";
import MapComponent from "./MapComponent";
import {
    Link, useNavigate
  } from 'react-router-dom';
import { useRef } from "react";

const VotingInformation=()=>{
    const toolTipRef=useRef()
    
    const navigate=useNavigate()
    var [pos,setPos]=useState({x:70,y:70});

    const [searchSuggestions,setSearchSuggestions]=useState([]);
    const [selected,setSelected]=useState({});


    const handleInputChange= event => {
        if (event.target.value.toString().length>0) {
            setSearchSuggestions(regions.filter((region)=>region.name.toLowerCase().includes(event.target.value.toLowerCase())))
        
        } else {
            setSearchSuggestions([])
        }
        
      };
     
    
    const showToolTip = event => {
        
        document.onmousemove=(mevent)=>{
        setPos({x:mevent.clientX,y:mevent.clientY})
        }
        let target= document.querySelector(".tooltip");

        target.classList.add("animate-tooltip")
        target.style.top=pos.x-100 +'px'
        target.style.left=pos.y/3 +'px'
        const id= event.target.id;
        const region=regions.filter(region=>region.id===id)[0]
        setSelected(region)
      };

     const navigateTo=(route)=>{
      navigate(route)
     } 


  
    
    

    return (
        <div className=" bg-white flex flex-col p-20 pl-0">     
                <div className="flex flex-col w-full justify-center bg-white"> 
                    <h1 className="font-bold text-4xl font-serif m-3 mt-8 self-center">Where to vote</h1>         
                    <input onChange={handleInputChange} className="lg:w-2/3 w-3/4 border border-slate-500 rounded-lg h-10 mb-20 mt-2 self-center  " type="text"></input>

               </div>
            <ul className={searchSuggestions.length?"searchsuggestions flex flex-col justify-start self-center w-3/4  m-2 absolute mt-20 z-100 p-10 shadow-2xl rounded-lg":"hidden"}>
                     {searchSuggestions.map((region,index)=>
                     <Link key={index} to={region.id} className=" p-3 " onClick={()=>setSearchSuggestions([])}>{region.name}
                     </Link>)}
            </ul>
            <div className=" m-30 flex flex-col justify-center">
                <h1 className="text-black uppercase font-bold self-center mt-7">Find information specific to your region</h1> 
               
                <div className="self-center p-5 w-[auto]">
                  <h3 className={`bg-red-500 text-white rounded-md absolute tooltip`} ref={toolTipRef}>     
                    {selected.name} 
                  </h3>
                    <MapComponent showToolTip={showToolTip} navigateTo={()=>navigateTo(selected?.id)}/>
                </div>
                
            </div>
           
            <div className=" p-40">
                <div className="grid grid-cols-4 justify-between gap-3 p-5  ">
                 {regions.map((region,index)=><Link key={index} to={region.id}><RegionItem region={region} id={index}/></Link> )}
                </div>
            </div>
        </div>
    );
}

export default VotingInformation;