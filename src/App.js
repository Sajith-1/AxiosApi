import React, { useState } from "react";
import './App.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Todos from "./Todos";








const  App= () => {

  return (
      <div className="App">
        <Router>
          <Routes>


            <Route path = "/" element = {<Todos />} />
            <Route path ="/todo/:id" element = {<Todo />} />


          </Routes>
        </Router>
      </div>

        );

    }
        
export default App;
