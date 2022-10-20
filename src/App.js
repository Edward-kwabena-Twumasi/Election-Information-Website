
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import NewsPage from './components/NewsPage';
import RegisterToVote from './components/RegisterToVote';


import { useState } from 'react';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  
  
  const [index,setIndex]=useState(0);

  
  const onIndexChange=newIndex=>{
    //window.location.pathname=paths[newIndex];

    setIndex(newIndex)

}
window.addEventListener('ready', (event) => {
  
  window.location.pathname=paths[index];
  console.log('page is fully loaded');
});

var paths=["home","about-us","register","voting-information","news","donate"];

 var pages=[
  <div>
    <Hero/>
    <Summary/>
    <Footer/>
  </div>,
  <NewsPage/>,
  <RegisterToVote/>,
  <NewsPage/>,
    <NewsPage/>,
    <div className='bg-white text-center h-screen'>
    <h1 className='font-bold font-serif text-4xl'>Donate</h1>
  </div>
]
  return (
    <>
     <Navbar onIndexChange={onIndexChange}/>
     <div className='pt-24'>
    { pages[index]}
    </div>
    </>
   
  );
}

export default App;


