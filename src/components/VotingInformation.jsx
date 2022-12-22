import RegionItem from "./RegionItem";
import {  useState} from 'react';
import { regions } from "../data.js/regions";
import MapComponent from "./MapComponent";
import {
    Link, useNavigate
  } from 'react-router-dom';
import { Tooltip as ChartjsTooltip} from "chart.js";
import { useEffect } from "react";

const VotingInformation=()=>{
    
    const navigate=useNavigate()
    var [pos,setPos]=useState({x:70,y:200});

    const [searchSuggestions,setSearchSuggestions]=useState([]);
    const [selected,setSelected]=useState({});


    const handleInputChange= event => {
        if (event.target.value.toString().length>0) {
            setSearchSuggestions(regions.filter((region)=>region.name.toLowerCase().includes(event.target.value.toLowerCase())))
        
        } else {
            setSearchSuggestions([])
        }
        
      };
      useEffect(()=>{
        Tooltip(pos.x,pos.y)
      })
    
    const showToolTip = event => {

        const id= event.target.id;
        const region=regions.filter(region=>region.id===id)[0]
        setSelected(region)
        setPos([event.offsetX+50,event.offsetY+50])
        Tooltip(pos.x,pos.y)
      };

     const navigateTo=(route)=>{
      navigate(route)
     } 


     let Tooltip=(x,y)=>{
      return  <h3 className={`bg-red-500 text-white rounded-md `} style={{position:"absolute",marginBottom:`${y}px`,marginLeft:`${x}px`,zIndex:"100"}}>     
      {selected.name} 
  </h3>
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
                    <Tooltip></Tooltip>
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