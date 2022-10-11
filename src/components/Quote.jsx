
import background from "../assets/happy_people.jpg";

const Quote=(props)=>{

    return(
        
        <div className={"quote self-center m-8   text-[#4095d2] flex justify-center"+props.extrastyle}>
          <blockquote className="font-extrabold text-4xl w-5/6 m-2 font-serif">" We are a privately ownded and managed  platform, 
            set to provide quality information about elections to Ghanains "</blockquote>
           <div className="w-2/6">
           <img src={background} alt='happy people voters' className="h-30 w-30  bg-no-repeat bg-center bg-cover rounded-full"/>
           <h4 className="font-bold font-mono m-3">Doctor Gift Dumedah, CEO</h4>
           </div>
           
        </div>
        
    );
}

export default Quote;