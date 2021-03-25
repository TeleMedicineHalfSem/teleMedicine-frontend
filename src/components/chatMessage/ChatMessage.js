import React from "react";
import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  const className = sender === "you" ? "chat-msg-snd" : "chat-msg-rcv";
  return (
    <div className="chat-msg">
      <div className={className}>{message}</div>
    </div>
  );
}

export default ChatMessage;
