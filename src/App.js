
import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import VotingFaqs from './components/VotingFaqs';
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
import HowToVote from './components/VoteInRegion';
import Find from './components/find';
// import background from "./assets/artificialintelligence.jpg";

                     
function App() {
  
  
  const [index,setIndex]=useState(0);
  
  const onIndexChange=newIndex=>{
    setIndex(newIndex)
   }
   
   


  return (
    <div className='App'>     
      <Router> 
        <Navbar onIndexChange={onIndexChange}/> 
         <div className='lg:pt-21'>
          <Routes>
           {/* <Route exact path={paths[index]} element={pages[index]}></Route> */}
           <Route exact path="/" element={<HomePage/>}></Route>           
           <Route exact path="/about" element={<AboutUs/>}></Route>
           <Route exact path="/voting-information" element={<VotingInformation/>}></Route>
           <Route path="/voting-information/:id" element={<HowToVote/>}></Route>
           <Route path="/voting-information/:id/find" element={<Find/>}></Route>
           <Route exact path="/voting-faqs" element={<VotingFaqs/>}></Route>
           <Route exact path="/media-center" element={<MediaCenter/>}></Route>
           <Route exact path="/Statistics" element={<Statistics/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>  
  );
}

export default App;


