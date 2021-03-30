import React, { useEffect, useState } from "react";
import "./ChatPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ChatInput } from "../../components/input/inputs";
import ChatMessage from "../../components/chatMessage/ChatMessage";
import { animateScroll } from "react-scroll";
import { connect } from "react-redux";
import { joinRoom, leaveRoom } from "../../actions/roomActions";
import { getProfile } from "../../actions/authActions";
import { useLocation, useHistory } from "react-router-dom";
import { sendMsg } from "../../actions/chatActions";
import { doctorReset } from "../../actions/doctorActions";

function ChatRoom({
  socketData,
  joinRoom,
  profile,
  sendMsg,
  chatData,
  leaveRoom,
  doctorReset,
}) {
  const [chatInput, setChatInput] = useState("");
  const socket = socketData.socket;
  const location = useLocation();
  let roomName, doctorEmail, chatName;
  let history = useHistory();
  const userEmail = profile.email;
  const chatList = chatData.chats;

  // Checking if socket is connected...
  if (!socket) {
    history.push("/signin");
  }

  if (location.state) {
    roomName = location.state.patientEmail;
    doctorEmail = location.state.doctorEmail;
  }

  if (profile.isDoctor) {
    chatName = roomName;
  } else {
    chatName = doctorEmail;
  }

  // Joining room...
  useEffect(() => {
    doctorReset();
    if (typeof socket === "object") {
      joinRoom(socket, { room: roomName, name: userEmail });
    }
  }, [socket, joinRoom, roomName, userEmail, doctorReset]);

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

  // Sending message...
  const sendMessage = (e) => {
    e.preventDefault();
    sendMsg(socket, { msg: chatInput, room: roomName });
    setChatInput("");
  };

  // On clicking close chat..
  const onClickCloseChat = () => {
    leaveRoom(socket, { name: userEmail });
    if (profile.isDoctor) {
      history.push("/doctorReport");
    } else {
      history.push("/patient");
    }
  };

  // On Leaving the room...
  if (socket === "LEFT_ROOM") {
    if (profile.isDoctor) {
      history.push("/doctorReport");
    } else {
      history.push("/patient");
    }
  }

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
            <div className="chat-page-box-header-left">{chatName}</div>
            <div className="chat-page-box-header-right">
              <img src="/images/video-call.png" alt="" height="25px" />
              <img
                onClick={onClickCloseChat}
                src="/images/cross.png"
                alt=""
                height="25px"
              />
            </div>
          </div>
          <div id="chat-page-box" className="chat-page-box-body">
            {chatMessageView}
          </div>
          <div className="chat-page-box-input">
            <ChatInput
              onChange={(e) => setChatInput(e.target.value)}
              value={chatInput}
              placeholder="Type a message..."
              onSubmit={sendMessage}
            />
          </div>
        </div>
      </div>
      <div className="chat-page-footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    socketData: state.socketData,
    profile: state.firebase.profile,
    chatData: state.chatData,
  };
};

export default connect(mapStateToProps, {
  joinRoom,
  getProfile,
  sendMsg,
  leaveRoom,
  doctorReset,
})(ChatRoom);
