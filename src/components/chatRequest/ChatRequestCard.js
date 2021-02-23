import React from "react";
import Button from "../button/Button";
import "./ChatRequestCard.css";
import { useHistory } from "react-router-dom";

const ChatRequest = ({ patientName }) => {
  const history = useHistory();
  const requestAccepted = () => {
    history.push("/chat", { patientEmail: patientName });
  };
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
