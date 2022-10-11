
import background from "../assets/happy_people.jpg";

const Footer=(props)=>{

    return(
        
        <div className={"Footer w-full  mx-auto self-center text-black  bg-[#4095d2] flex justify-center"+props.extrastyle}>
          <ul className="p-12">
            <li>About Us</li>
            
          </ul>
          <ul className="p-12">
            <li>Voting Information</li>
            
          </ul>
           
        </div>
        
    );
}

export default Footer;