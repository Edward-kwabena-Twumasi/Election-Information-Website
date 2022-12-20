
import background from "../assets/happy_people.jpg";
import { SocialIcon } from 'react-social-icons';
import {
  Link
} from 'react-router-dom';


const Footer=(props)=>{

    return(
        <div className="Footer bg-white">
        <div className={" w-full  text-black  bg-white lg:flex justify-center "+props.extrastyle}>
          <ul className="p-12 lg:w-1/3 w-screen">
            <li className="font-bold text-xl">About Us</li>
            <li className="text-start mb-2">
             Center for Voter Information is a non-profit,
             non-partisan partner organization to Voter Participation Center,
              both founded to provide resources and tools to help voting-eligible 
              citizens register and vote in upcoming elections.

            </li>
            <li>
            <Link to="/about" className="mt-3 text-blue-900">Learn more {'>'}</Link>
            </li>
            
          </ul>
          <ul className="p-12 lg:w-1/3 w-screen">
            <li className="font-bold text-xl">Voting FAQs</li>
            <li className="text-start mb-2">
            Can I vote early? Can I vote absentee? Do I need ID? When is the election?

            </li>
            <li>
            <Link to="/voting-information" className="mt-3 text-blue-900">Learn more {'>'}</Link>
            </li>
            
          </ul>
          <ul className="p-12 lg:w-1/3 w-screen">
            <li className="font-bold text-xl">Contact Us</li>
            <li className="flex gap-2">
                <h1> createdliving1000@gmail.com</h1>
            </li>
            <li className="flex gap-2">
                <h1> +233 552489602</h1>
            </li>
          </ul>
           
        </div>
        <div className="ml-8 flex gap-5">
            <SocialIcon url="https://twitter.com/jaketrent"/>
            <SocialIcon url="https://facebook.com/"/>
            <SocialIcon url="https://instagram.com/"/>
        </div>
        </div>
    );
}

export default Footer;