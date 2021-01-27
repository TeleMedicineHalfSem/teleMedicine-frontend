import React from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import "./ChatRequestCard.css";

const requestAccepted = () => {
  console.log("Connected");
};

const ChatRequest = ({ patientName }) => {
  return (
    <div className="chat-req">
      <div className="chat-req-block">
        <span className="chat-req-pName">{patientName}</span>
        <Button color="secondary" size="small" onClick={requestAccepted}>
          Accept
        </Button>
      </div>
      <Divider
        margin={{
          top: "10px",
          bottom: "20px",
          left: "10px",
          right: "10px",
        }}
      />
    </div>
  );
};

export default ChatRequest;
