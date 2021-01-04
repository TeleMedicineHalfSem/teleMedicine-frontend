import React from "react";
import "./FrontPage.css";
import CustomButton from "../../components/button/CustomButton";
import CustomLink from "../../components/link/CustomLink";
import CardComponent from "../../components/cardComponent/CardComponent";
import CarouselReview from "../../components/carouselReview/CarouselReview";
import reviews from "../../utils/reviews";
import Footer from "../../components/footer/Footer";

function FrontPage() {
  // Sign in button clicked...
  const onClickSignIn = () => {
    console.log("Sign in clicked...");
    // TODO: fill this function...
  };

  // Sign up button clicked...
  const onClickSignUp = () => {
    console.log("Sign up clicked...");
    // TODO: fill this function...
  };

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
            <h1>
              <b>EasyCare</b>
            </h1>
          </div>
          <div className="front-page-header-right">
            <div style={{ display: "flex", float: "right" }}>
              <CustomLink onClick={onClickSignIn}>Sign in</CustomLink>
              <CustomButton onClick={onClickSignUp}>Sign up</CustomButton>
            </div>
          </div>
        </div>
        <div className="front-page-body">
          <div>
            <div className="front-page-body-text">
              Protecting you and your family
            </div>
            <h5>Now consult with a doctor from anywhere anytime...</h5>
            <br />
            <br />
            <CustomButton onClick={onClickSignIn} size="large">
              Ask a doctor now
            </CustomButton>
          </div>
        </div>
        <div className="front-page-content">
          <div className="front-page-feature-text">
            <div className="front-page-feature-text-1">Why EasyCare</div>
            <div className="front-page-feature-text-2">
              Comprehensive . Convenient . Caring
            </div>
          </div>
          <div className="front-page-feature-cards">
            <CardComponent
              img="/images/card-img1.jpg"
              alt=""
              text="Virtual Consultancy"
            />
            <CardComponent
              img="/images/card-img2.jpg"
              alt=""
              text="Cost Efficient"
            />
            <CardComponent
              img="/images/card-img3.jpg"
              alt=""
              text="24/7 Service"
            />
          </div>
          <div className="front-page-reviews">
            <CarouselReview reviews={reviews} />
          </div>
        </div>
        <div className="front-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
