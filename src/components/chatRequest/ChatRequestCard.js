import React from "react";
import Button from "../button/Button";
import "./ChatRequestCard.css";

const ChatRequest = ({ patientName, delRequestedDoctor, id, onClick }) => {
  return (
    <div className="chat-req">
      <div className="chat-req-block">
        <span className="chat-req-pName">{patientName}</span>
        <Button id={id} color="secondary" size="small" onClick={onClick}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default ChatRequest;
