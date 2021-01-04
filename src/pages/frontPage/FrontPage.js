import React from "react";
import "./FrontPage.css";
import Footer from "../../components/footer/Footer";

function FrontPage() {
  return (
    <div className="front-page">
      <img
        className="front-page-background"
        src="/images/Home page.png"
        alt=""
      />
      <div className="front-page-view">
        <div className="front-page-header">
          <div>hello</div>
        </div>
        <div className="front-page-body"></div>
        <div className="front-page-content"></div>
        <div className="front-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
