import React, { useState } from "react";
import './App.css';
import { Route, Routes, Link} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";






const  App= () => {

  return (
      <div className="App">
       <button><Link to="/about" style={{ textDecoration: "none" }}>About Us</Link></button>
       <button><Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link></button>
       <button><Link to="/" style={{textDecoration: "none"}}>Home Page</Link></button>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>

        );

    }
        
export default App;
