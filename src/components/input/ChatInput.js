import React from "react";
import "./ChatInput.css";

function ChatInput({ placeholder, value, onChange, onSubmit }) {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div onClick={onSubmit}>
        <img src="/images/send.png" alt="" height="20px" />
      </div>
    </div>
  );
}

export default ChatInput;
