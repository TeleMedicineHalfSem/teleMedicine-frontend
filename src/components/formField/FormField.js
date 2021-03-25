import React from "react";
import "./FormField.css";

function FormField({label1,label2,label3,label4,content1,content2,content3,content4}){
    return(
        <div className="form">
            <div className="row">
                <div className="col-1">
                    <p className="label">{label1}</p>
                    <p>{content1}</p>
                </div>
                <div className="col-2">
                    <p className="label">{label2}</p>
                    <p>{content2}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <p className="label">{label3}</p>
                    <p>{content3}</p>
                </div>
                <div className="col-2">
                    <p className="label">{label4}</p>
                    <p>{content4}</p>
                </div>
            </div>
        </div>
    );
}

export default FormField;