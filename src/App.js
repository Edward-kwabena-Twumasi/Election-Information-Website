
import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import RegisterToVote from './components/RegisterToVote';
import Statistics from './components/Statistics';
import VotingInformation from './components/VotingInformation';
import AboutUs from './components/AboutUs';
import MediaCenter from './components/NewsPage';
import * as React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Developer from './developercomponents/developer';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  
  
  const [index,setIndex]=useState(0);
  
  const onIndexChange=newIndex=>{
    setIndex(newIndex)
   }
   
   
  var paths = [
    "/",
    "/about",
    "/register",
    "/voting-information",
    "/media-center",
    "/Statistics"
              ];
  var pages = [
    <HomePage/>,
    <AboutUs/>,
    <RegisterToVote/>,
    <VotingInformation/>,
    <MediaCenter/>,  
    <Statistics/>
              ]

  return (
    <>     
      <Router> 
        <Navbar onIndexChange={onIndexChange}/> 
         <div className='pt-24'>
          <Routes>
           {/* <Route exact path={paths[index]} element={pages[index]}></Route> */}
           <Route exact path="/" element={<HomePage/>}></Route>           
           <Route exact path="/about" element={<AboutUs/>}></Route>
           <Route exact path="/register" element={<RegisterToVote/>}></Route>
           <Route exact path="/voting-information" element={<VotingInformation/>}></Route>
           <Route exact path="/media-center" element={<MediaCenter/>}></Route>
           <Route exact path="/Statistics" element={<Statistics/>}></Route>
           <Route exact path="/developer" element={<Developer/>}></Route>
          </Routes>
        </div>
      </Router>
    </>  
  );
}

export default App;


