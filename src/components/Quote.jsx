

const Quote=(props)=>{

    return(
        <div className="lg:flex  w-full gap-5 p-10 justify-between">
            <div className={"quote self-center lg:w-1/2 shadow-lg bg-slate-800 text-white  flex flex-col   justify-center rounded-lg p-10"}>
            <h1 className="font-bold text-xl text-start">Mission</h1>
            <p className="w-full text-start text-sm font-semibold">Our mission is simple. We realized there is more work to be done about 
            informing the general ghanaian about elections. This is the gap we want to fill</p>
            
            </div>
            <div className={"quote self-center  lg:w-1/2 shadow-lg bg-slate-800 text-white  flex flex-col   justify-center rounded-lg p-10"}>
            <h1 className="font-bold text-xl text-start">Vision</h1>
            <p className="w-full text-start text-sm font-semibold">Our mission is simple. We realized there is more work to be done about 
            informing the general ghanaian about elections. This is the gap we want to fill</p>
            
            </div>
        </div>
    );
}

export default Quote;