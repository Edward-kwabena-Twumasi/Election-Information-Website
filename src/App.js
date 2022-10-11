
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import { useState } from 'react';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  
  const [index,setIndex]=useState(0);

  const onIndexChange=newIndex=>{
    setIndex(newIndex)
}

 var pages=[<div>
  <div className=''>
  <Hero/>
  </div>
  <Summary/>
  <Footer/>
  </div>,
  <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'> About Us</h1>
  </div>,
    <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'> Register to vote</h1>
  </div>,
    <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'> Voting information</h1>
  </div>,
    <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'> Media Center</h1>
  </div>,
    <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'>Donate</h1>
  </div>
]
  return (
    <>
     <Navbar onIndexChange={onIndexChange}/>
    { pages[index]}
    </>
   
  );
}

export default App;


