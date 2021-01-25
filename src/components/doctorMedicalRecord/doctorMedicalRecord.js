import React from "react";

const doctorRecord = ({patientName, patientProblem}) => {
    return(        
        <div>
            <div className="card-heading">
                <h2>Recent Medical Cases</h2>
            </div>
            <div className="card-body">
                <div className="card-body-heading">
                    <span>{patientName}</span>
                </div>
                <div className="card-body-description">
                    <p>{patientProblem}</p>
                </div>
                <hr />
            </div>
           
        </div>
    );
};

export default doctorRecord;