import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import "../doctorDetails/doctorDetails.css";
import  "../../App.css"; 
import doctorDetails from "../../utils/detail";
import Button from "../button/Button";
import Divider from "../../components/divider/Divider"
const details = doctorDetails.map((item) => {
    return(
        <div>           
            <Row>
                <Col xs="4">
                    <img  src={item.Image} width="100px" height="100px"></img>
                </Col>
                <Col xs="4">
                    <span className="detail-font-1">{item.Name}</span><br/>
                    <span className="detail-font-2">{item.Specialization}</span>
                    <p>Experience :  {item.Experience}</p>
                </Col>
                <Col xs="4">
                    <Button color={"secondary"}>
                        Chat
                    </Button>
                </Col>
            </Row>
            <Divider/>
        </div>
    );
}); 

function docDetail() {
    return (
        <div>
            <Container>
                <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                    {details}
                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default docDetail
