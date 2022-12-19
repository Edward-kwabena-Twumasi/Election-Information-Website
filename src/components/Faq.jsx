
export default function Faq(props){
    return (
        <div className="question flex flex-col w-screen mt-5" style={{height:"40px"}}>
            <div className="flex flex-col w-3/4">
              <div className="h-[50px] rounded-md bg-white shadow-xl w-full flex justify-between px-3">
                  <h1 className="text-xl mt-3">{props.title}</h1>
                  <button className="text-5xl font-light"> + </button>
               </div>
               <div className="h-[auto] rounded-bl-lg rounded-br-lg shadow-lg bg-black text-white p-5">
               <p>
              { props.body}
               </p>
              </div>
            </div>
          </div>
    )
}