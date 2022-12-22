import Footer from "./Footer";
import Hero from "./Hero";
import Quote from "./Quote";
import Summary from "./Summary";

const HomePage=()=>{

    return (
        <div className='homepage h-auto bg-white w-screen'>
        <Hero/>
        <Quote/>
        <Summary/>
        <Footer/>
        </div>
          );
  }

export default HomePage;