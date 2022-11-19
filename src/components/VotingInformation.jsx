
const VotingInformation=()=>{

    return (
      <div className="h-screen bg-white p-20 overflow-auto">
        <div className="flex flex-col justify-start m-15 pt-5">
          <h1 className="font-light text-4xl ">Frequently Asked Questions</h1>
          <div className="question flex flex-col w-screen mt-5">
            <div className="flex flex-col w-3/4">
              <div className="h-[60px] rounded-md bg-white shadow-xl w-full flex justify-between px-3">
                  <h1 className="text-xl mt-3">When is the next election period?</h1>
                  <button className="text-5xl font-light"> + </button>
               </div>
               <div className="h-[200px] rounded-bl-lg rounded-br-lg shadow-lg bg-slate-300 p-5">
               <p>
                The next election period is in the year 2024
               </p>
              </div>
            </div>
          </div>
          <div className="question flex flex-col w-screen mt-5">
            <div className="flex flex-col w-3/4">
              <div className="h-[60px] rounded-md bg-white shadow-xl w-full flex justify-between px-3">
                  <h1 className="text-xl mt-3">When is the next election period?</h1>
                  <button className="text-5xl font-light"> + </button>
               </div>
               <div className="h-[200px] rounded-bl-lg rounded-br-lg shadow-lg bg-slate-300 p-5">
               <p>
                Who is likely to win the next election?
               </p>
              </div>
            </div>
          </div>
          <div className="question flex flex-col w-screen mt-5">
            <div className="flex flex-col w-3/4">
              <div className="h-[60px] rounded-md bg-white shadow-xl w-full flex justify-between px-3">
                  <h1 className="text-xl mt-3">When is the next election period?</h1>
                  <button className="text-5xl font-light"> + </button>
               </div>
               <div className="h-[200px] rounded-bl-lg rounded-br-lg shadow-lg bg-slate-300 p-5">
               <p>
                Where can I register?
               </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
  }

export default VotingInformation;