
import './App.css';
import React, { useEffect } from 'react';

import Navbar from "./component/Navbar"
import VideoCover from './component/VideoCover';
import ProjectSection from './component/ProjectSection';
import AboutSection from './component/AboutSection'
import Contact from './component/Contact'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from '@material-ui/icons';





const App = () =>{

  useEffect(()=>{
    document.title = "Robbie's profolio";
  })
  
  return (
    <Router>
    <div className="App">

     <Navbar />
     <VideoCover />
     <ProjectSection />

     <AboutSection />
     

    </div>

    </Router>
  );
}

export default App;
