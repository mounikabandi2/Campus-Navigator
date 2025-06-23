import React from 'react';
import Maphead from './maphead';
import Slides from './slides.jsx';
import Footer from './mapfooterjsx';
import HomePage from "./Maphome.jsx";
import { Link, Outlet } from "react-router-dom";

const Map = () => {
  return (
    <>
      <Maphead/>
     
      <Outlet/>

      <Footer/>
      
      
            
      


    </>
  );
};

export default Map;
