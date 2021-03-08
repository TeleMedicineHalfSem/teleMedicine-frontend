import React from "react";
import "./Banner.css";

function Banner(){
    return(
        <div className="banner">
            <div className="heading">
                <p className="heading-left">Easy Care</p>
                <p className="heading-right">Medical Record</p>
            </div>
            <p className="sub-heading">Online Consultancy Service</p>
            <p className="date">14 November 2020</p>    
        </div>
    );
}

export default Banner;