import React from "react";
import "./PatientDetail.css";
import BoderInput from "../input/BoderInput";
import RadioInput from "../input/RadioInput";

const PatientDetail = ({pName, gender, dob, age}) => {
    return(
        <div>
            <p className="patient-detail-heading">Patient's Details</p>
            <div className="patient-card">
                <div className="patient-card-content">
                    <table>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><BoderInput type="text" size="medium" /></td>
                        </tr>
                        <tr>
                            <td><label>Gender:</label></td>
                            <td>
                                <RadioInput type="radio" value="male">Male</RadioInput>
                                <RadioInput type="radio" value="female">Female</RadioInput>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Date of birth:</label></td>
                            <td>
                                <BoderInput type="date" value="dob" />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Age:</label></td>
                            <td><BoderInput type="number" size="small" /></td>
                        </tr>
                        <tr>
                            <td><label>Disease:</label></td>
                            <td><BoderInput type="text" size="large" /></td>
                        </tr>
                        <tr>
                            <td><label>Medication:</label></td>
                            <td>
                                <textarea name="medication" className="doctor-text"></textarea> 
                            </td>
                        </tr>
                        <tr>
                            <td><label>Extra points:</label></td>
                            <td>
                                <textarea name="extra-pts" className="doctor-text"></textarea> 
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default PatientDetail;