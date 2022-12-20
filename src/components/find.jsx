
const Find=()=>{
    return(
        <div className="h-screen bg-white w-screen flex flex-col justify-start p-5 pt-20">
          <p className="font-bold text-center text-4xl m-5">Find your constitency and polling station</p>
          <div className="h-full bg-black flex">
            <div className="w-1/4 bg-white h-full">
                <h5>Contitency</h5>
            </div>
            <div className="w-3/4 full">
            <h5 className="text-white">Polling stations</h5>
            </div>
          </div>
        </div>
    )
}

export default Find