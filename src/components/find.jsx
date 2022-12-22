
import { Constituencies } from "../data.js/constituencies";

const Find=()=>{
    return(
        <div className="h-screen bg-white w-screen flex flex-col justify-start p-5 pt-20 ">
          <p className="font-normal text-center text-3xl m-5">Find your constitency and polling station</p>
          <div className="h-full bg-black flex">
            <div className="w-1/4 bg-white h-full flex flex-col">
              <h5 className="font-semibold text-2xl">Constituencies</h5>
              <input type="text" className="w-9/10 m-1 h-[60px] rounded-lg border border-slate-500 focus:border-slate-500" placeholder="Filter constitu..."></input>
              <ul className="m-2">
                {Constituencies.map(constituent=>{
                return <li className="p-4 w-full shadow-md hover:shadow-xl" key={constituent.constit_id}>{constituent.name}</li>
                })}
              </ul>
             
            </div>
            <div className="w-3/4 h-full bg-white p-4 overflow-auto">
             <h5 className="font-semibold text-2xl ">Electoral Areas</h5>
                {Constituencies.map(constituent=>{
                  return <div className="p-4 w-full flex flex-col" key={constituent.constit_id}>
                    <h5 className="text-3xl self-center font-serif">Areas in {constituent.name}</h5>
                   
                    {constituent.areas.map((area,idx)=>{
                      return <div className="shadow-md hover:shadow-xl flex flex-col mb-8 p-3"  key={idx}>
                        <div className="area-title flex gap-10 font-semibold font-sans text-2xl">
                          <h3 >{area.name} </h3>
                          <h1><span className="font-normal text-sm"> Polling stations {area.stations.length}</span>  </h1>
                        </div>
                        <div>
                          
                          <div className="flex gap-7 mt-3 font-bold" >
                            <h4> Station name </h4>
                            <h4> Station code</h4>
                            <h4> Total Voters</h4>
                           
                           </div>
                          {area.stations.map((station,idx)=>{
                           return <div className="flex gap-7 m-2" key={idx}>
                            <h4> {station.name} </h4>
                            <h4> {station.code}</h4>
                           
                           </div>
                          })}
                        </div>

                       
                       
                        </div>
                    })
                    }
                 
                  
                  </div>
                })}
            </div>
          </div>
        </div>
    )
}

export default Find