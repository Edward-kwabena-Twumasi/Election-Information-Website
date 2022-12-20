import { useState } from "react"

export default function Faq(props){
  const [scale,setScale]=useState("Scale(0.0)");
  
 const handleToggle=()=>{
  // scale==="Scale(0.0)"?setScale("Scale(1.0)"):setScale("Scale(0.0)");
    
  }
    return (
        <div className="question flex flex-col w-3/4 mt-5 self-center ml-2">
            <div className="flex flex-col w-full">
              <div className="h-[50px] rounded-md bg-white shadow-xl w-full flex justify-between px-3">
                  <h1 className="text-xl mt-3" onClick={()=>handleToggle()}>{props.title}</h1>
                  <button className="text-4xl font-light"> + </button>
               </div>
               <div className=" rounded-bl-lg rounded-br-lg shadow-lg bg-black text-white p-5" style={{transform:{scale},transition:"300ms ease-in"}}>
                <p>
                { props.body}
                </p>
              </div>
            </div>
          </div>
    )
}