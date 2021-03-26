import React from "react";
import "./DoctorDetail.css";
import BoderInput from "../input/BoderInput";

const DoctorDetail = () => {
    return(
        <div>
            <p className="doctor-detail-heading">Doctor's Details</p>
            <div className="doctor-card">
                <div className="doctor-card-content">
                    <table>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><BoderInput type="text" /></td>
                        </tr>
                        <tr>
                            <td><label>Specialization:</label></td>
                            <td><BoderInput type="text" /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><BoderInput type="email" /></td>
                        </tr>
                        <td><label>Phone:</label></td>
                        <td><BoderInput type="number" /></td>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default DoctorDetail;