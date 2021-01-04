import React from "react";
//import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';
import "./CardComponent.css";

const CardStruct = ({ img, alt, text }) => {
  return (
    <div className="card-row">
      <div className="card-column">
        <div className="card">
          <img src={img} alt={alt} className="card-responsive" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStruct;
