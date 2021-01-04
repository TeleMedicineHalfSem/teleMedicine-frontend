import React from 'react';
//import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';
import "./CardComponent.css";

const CardStruct = ({img, alt, text}) => {
    return(
        <div className="row">
  <div className="column">
    <div className="card">
    <img src={img} alt={alt}  className="responsive"/>
      <p>{text}</p>
    </div>
  </div>
  </div>
    );

};


     
export default CardStruct; 