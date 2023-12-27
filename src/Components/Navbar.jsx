import React from "react";
import img1 from './Images/img1.jpg';

export default function Navbar(){
    return(<>
        <div className="nav">
            <img src={img1} alt="Profile Pic"/>
            <h1>Mohammad Sharif</h1>
            <div className="nav-item">
                <ul >
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./Profile">Profile</a></li>
                    <li><a href="/Project">Project</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </>)
}