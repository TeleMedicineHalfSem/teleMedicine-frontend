import React from "react";
import "./ChatPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function ChatRoom() {
  return (
    <div className="chat-page">
      <div className="chat-page-header">
        <Navbar />
      </div>
      <div className="chat-page-body">
        <div className="chat-page-box">
          <div className="chat-page-box-header">
            <div className="chat-page-box-header-left">Dr. Mayur</div>
            <div className="chat-page-box-header-right">
              <img src="/images/video-call.png" alt="" height="30px" />
            </div>
          </div>
          <div className="chat-page-box-body"></div>
          <div className="chat-page-box-input"></div>
        </div>
      </div>
      <div className="chat-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default ChatRoom;
