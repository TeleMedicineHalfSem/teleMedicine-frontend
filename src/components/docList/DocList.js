import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import  "../../App.css"; 
import  "../docList/DocList.css";
import Button from "../button/Button";
import Divider from "../divider/Divider"

function docDetail({name,imageurl,specialization,experience}) {
    return (
        <div>
            <Container>
                <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                    <Row>
                        <Col xs="4">
                                <img  
                                className="img-style"
                                src={imageurl}
                                alt="image"
                            />
                        </Col>
                        <Col xs="4">
                            <span className="detail-font-1">{name}</span><br/>
                            <span className="detail-font-2">{specialization}</span>
                            <p>Experience :  {experience}</p>
                        </Col>
                        <Col xs="4">
                            <Button color={"secondary"}>
                                Chat
                            </Button>
                        </Col>
                    </Row>
                    <Divider/>
                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default docDetail;
