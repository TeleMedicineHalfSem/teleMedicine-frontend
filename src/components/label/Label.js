import React from "react";
import "./Label.css";

function Label({labelName}){
    return(
        <div className="label">
            <div className="small-section"></div>
            <div className="large-section">
                <p className="label-heading">{labelName}</p>
            </div>
        </div>
    );
}

export default Label;