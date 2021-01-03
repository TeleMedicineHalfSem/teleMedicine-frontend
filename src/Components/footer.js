import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>EasyCare</h4>
            <h1 className="list-unstyled">
              <li>A telemedicine solution</li>
              <li>Application for virtual doctor consultancy</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Why Us</h4>
            <ui className="list-unstyled">
              <li>Cost efficient</li>
              <li>24*7 services available</li>
              <li>Virtual Consultancy</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Terms and Conditions</h4>
            <ui className="list-unstyled">
            <li>All information received by us from your registration on business-standard.com</li>
            <li>or other digital products of Business Standard will be used</li>
            <li>by Business Standard in accordance with our Privacy Policy. </li>
            <li>Kindly read the below mentioned details.</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EasyCare | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;