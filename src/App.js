
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  return (
    <div>
   <div className=''>
   <Navbar/>
   <Hero/>
   
   </div>
   <Summary/>
   <Footer/>
   </div>
   
  );
}

export default App;


