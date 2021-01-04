import React from "react";
import "./FrontPage.css";
import CustomButton from "../../components/button/CustomButton";
import CustomLink from "../../components/link/CustomLink";
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
          <div className="front-page-header-left">
            <h2>
              <b>EasyCare</b>
            </h2>
          </div>
          <div className="front-page-header-right">
            <div style={{ display: "flex", float: "right" }}>
              <CustomLink>Sign in</CustomLink>
              <CustomButton>Sign up</CustomButton>
            </div>
          </div>
        </div>
        <div className="front-page-body">
          <div>
            <div className="front-page-body-text-1">
              Protecting you and your family
            </div>
            <h5>Now consult with a doctor from anywhere anytime...</h5>
            <br />
            <br />
            <CustomButton size="large">Ask a doctor now</CustomButton>
          </div>
        </div>
        <div className="front-page-content"></div>
        <div className="front-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
