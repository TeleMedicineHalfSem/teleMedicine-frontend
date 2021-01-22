import React from "react";
import "./FrontPage.css";
import Button from "../../components/button/Button";
import CustomLink from "../../components/link/CustomLink";
import CardComponent from "../../components/cardComponent/CardComponent";
import CarouselReview from "../../components/carouselReview/CarouselReview";
import reviews from "../../utils/reviews";
import Footer from "../../components/footer/Footer";
import Divider from "../../components/divider/Divider";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function FrontPage({ auth }) {
  let history = useHistory();
  let loggedIn = false;

  // Checking if user is signed in or not...
  if (auth !== undefined && auth.uid) {
    loggedIn = true;
  }

  // Sign in button clicked...
  const onClickSignIn = () => {
    history.push("/signin");
  };

  // Sign up button clicked...
  const onClickSignUp = () => {
    history.push("/signup");
  };

  const loginView = (
    <div style={{ display: "flex", float: "right" }}>
      <CustomLink onClick={onClickSignIn}>Sign in</CustomLink>
      <Button b_style="custom" onClick={onClickSignUp}>
        Sign up
      </Button>
    </div>
  );

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
            {!loggedIn ? loginView : null}
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
            <Button onClick={onClickSignIn} b_style="custom" size="large">
              Ask a doctor now
            </Button>
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
          <Divider
            margin={{
              top: "100px",
              bottom: "30px",
              left: "70px",
              right: "70px",
            }}
          />
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(FrontPage);
