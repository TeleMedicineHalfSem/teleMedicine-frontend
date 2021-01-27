import React from "react";
import Button from "../button/Button";
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
    </div>
  );
};

export default ChatRequest;
