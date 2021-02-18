import React, { useEffect } from "react";
import "./ChatPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ChatInput } from "../../components/input/inputs";
import ChatMessage from "../../components/chatMessage/ChatMessage";
import { animateScroll } from "react-scroll";
import { connectSocket } from "../../actions/socketActions";
import { connect } from "react-redux";

function ChatRoom({ connectSocket }) {
  // const ENDPOINT = "http://192.168.29.112:2500";

  // // Connect to socket...
  // useEffect(() => {
  //   connectSocket({ ENDPOINT });
  // }, [ENDPOINT, connectSocket]);

  // Function to scroll down...
  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chat-page-box",
      duration: 500,
    });
  };

  // scrolling down...
  useEffect(() => {
    scrollToBottom();
  }, []);

  // Sample chat messages...
  const chatList = [
    { key: "1", message: "hii", sender: "you" },
    { key: "2", message: "Hello", sender: "anugya" },
    {
      key: "3",
      message:
        "My name is Sawarni Swaroop. I live in Bihar. This is a project for part sem.",
      sender: "you",
    },
    { key: "4", message: "Ooohh.... Nice one..", sender: "anugya" },
    {
      key: "5",
      message:
        "Thank you... Please tell me about yourself too. So that we can know each other more.",
      sender: "you",
    },
    { key: "6", message: "Ok...", sender: "anugya" },
    {
      key: "7",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      sender: "anugya",
    },
    {
      key: "8",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      sender: "you",
    },
    { key: "9", message: "Nice to meet you...", sender: "anugya" },
    { key: "10", message: "Yeah.. me too", sender: "you" },
    { key: "11", message: "Ok bye bye...", sender: "anugya" },
    { key: "12", message: "Yes.. Bye bye", sender: "you" },
  ];

  // Showing chat messages...
  const chatMessageView = chatList.map((data) => (
    <ChatMessage key={data.key} message={data.message} sender={data.sender} />
  ));

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
              <img src="/images/video-call.png" alt="" height="25px" />
              <img src="/images/cross.png" alt="" height="25px" />
            </div>
          </div>
          <div id="chat-page-box" className="chat-page-box-body">
            {chatMessageView}
          </div>
          <div className="chat-page-box-input">
            <ChatInput placeholder="Type a message..." />
          </div>
        </div>
      </div>
      <div className="chat-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default connect(null, { connectSocket })(ChatRoom);
