import Footer from "./Footer";
import Hero from "./Hero";
import Quote from "./Quote";
import Summary from "./Summary";

const HomePage=()=>{

    return (
        <div className='homepage bg-white w-screen'>
        <Hero/>
        <Summary/>
        <Quote/>
        <Footer/>
        </div>
          );
  }

export default HomePage;