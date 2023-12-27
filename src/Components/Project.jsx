import React from "react";
import food from "./Images/food.jpg";
import fitness from "./Images/fitness.jpg";
import animated from "./Images/animated.jpg";
import weather from "./Images/weather.jpg";

export default function Project(){
    return(<>
        <div className="project">
            <div className="website">
                <h4>Food Delivery Website</h4>
                <img src={food} alt="" />
            </div>
            <div className="website">
                <h4>Fitness Club Website</h4>
                <img src={fitness} alt="" />
            </div>
            <div className="website">
                <h4>Fully Animated Website</h4>
                <img src={animated} alt="" />
            </div>
            <div className="website">
                <h4>Weather Check Website</h4>
                <img src={weather} alt="" />
            </div>
        </div>
    </>);
}