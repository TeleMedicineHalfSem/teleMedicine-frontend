import React from "react";
import "./DoctorDetail.css";

const DoctorDetail = ({docName, specilization, email}) => {
    return(
        <div>
            <p className="doctor-detail-heading">Doctor's Details</p>
            <div className="doctor-card">
                <div className="doctor-card-content">
                    <table>
                        <tr>
                            <td><label>Name:</label></td>
                            <td>{docName}</td>
                        </tr>
                        <tr>
                            <td><label>Specialization:</label></td>
                            <td>{specilization}</td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td>{email}</td>
                        </tr>
                        <td><label>Phone:</label></td>
                        <td><input type="number" name="phone" className="doctor-phone" /></td>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default DoctorDetail;