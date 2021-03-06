import React from "react";
import "./ChatInput.css";

function ChatInput({ placeholder, value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="chat-input">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div onClick={onSubmit}>
        <img src="/images/send.png" alt="" height="20px" />
      </div>
    </form>
  );
}

export default ChatInput;
