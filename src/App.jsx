import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes , Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

export default function App(){
    return(<>
        <Navbar/>
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/profile" Component={Profile}/>
            <Route path="/project" Component={Project}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="*" Component={Home}/>
        </Routes>
        <footer>Copyright © www.myPortfolio.com | All rights reserve!</footer>
    </>)
}