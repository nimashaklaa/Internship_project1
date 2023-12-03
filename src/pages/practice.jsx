import React from "react";
import {Navbar} from '../components/Navbar';
import { LeftColum } from "../components/lefcolumn";
import "./practice.css";

export const ElementHomePage = () => {
  return (
    <div className="element-home-page">
      <div className="div-2">
        <Navbar  />
        <div className ="div-3">
          
          <LeftColum/>

        </div>
        

     
        
      </div>
    </div>
  );
};
