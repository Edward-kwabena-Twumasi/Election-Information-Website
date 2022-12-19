import RegionItem from "./RegionItem";
import {useRef, useState} from 'react';
import { regions } from "../data.js/regions";
import MapComponent from "./MapComponent";
import {
    Link
  } from 'react-router-dom';

const VotingInformation=()=>{
    
    
    var [[xpos,ypos],setPos]=useState([50,200]);
    const [searchSuggestions,setSearchSuggestions]=useState([]);
    var [selected,setSelected]=useState("");

    const handleInputChange= event => {
 if (event.target.value.toString().length>0) {
    setSearchSuggestions(regions.filter((region)=>region.name.toLowerCase().includes(event.target.value.toLowerCase())))
   
 } else {
    setSearchSuggestions([])
 }
        
      };
    
    // const handleToolTip = event => {
    
    //     const id= event.target.id;
    //     console.log(id)
    //     const region=regions.filter(region=>region.id===id)[0]
    //     console.log(region)
    //     setSelected(region.name)

    //     setPos([event.clientX,event.clientY])
    //   };
    //  const navigateTo=()=>{

    //  } 
    
    

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
                <h3 className={`p-4 bg-white  rounded-md absolute z-50 tooltip`}>     
                    {selected}
                </h3>
                <MapComponent/>
            </div>
           
            <div className=" p-40">
                <div className="grid grid-cols-4 justify-between gap-3 p-5  ">
                 {regions.map((region,index)=><Link to={region.id}><RegionItem region={region} key={index}/></Link> )}
                </div>
            </div>
        </div>
    );
}

export default VotingInformation;