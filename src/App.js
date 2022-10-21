
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import NewsPage from './components/NewsPage';
import RegisterToVote from './components/RegisterToVote';
import Statistics from './components/Statistics';



import { useState } from 'react';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  
  
  const [index,setIndex]=useState(0);
  var [[xpos,ypos],setPos]=useState([20,200]);

  const handleClick = event => {
    console.log('Mouse hovered on item');
    console.log(`Mouse X position: ${event.clientX}, Mouse Y position: ${event.clientY}`)
   
    console.log(event.target.name);

    setPos([event.clientX,event.clientY])
  };
  
  const onIndexChange=newIndex=>{

    setIndex(newIndex)
}
window.addEventListener('ready', (event) => {
  
  window.location.pathname=paths[index];
  console.log('page is fully loaded');
});

var paths=["home","about-us","register","voting-information","news","Statistics"];

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
  <Statistics/>
]
  return (
    <div onClick={handleClick}>
     <div className='text-white bg-slate-500 p-10 fixed mt-20'>{xpos} ..... {ypos}</div>
     <Navbar onIndexChange={onIndexChange}/>
     <div className='pt-24'>
    { pages[index]}
    </div>
    </div>
   
  );
}

export default App;


