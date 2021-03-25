import io from "socket.io-client";
import { chatReceived } from "./chatActions";

const socketRequest = () => {
  return {
    type: "SOCKET_REQUEST",
  };
};
const socketSuccess = (data) => {
  return {
    type: "SOCKET_SUCCESS",
    payload: data,
  };
};

export const connectSocket = ({ ENDPOINT }) => {
  return (dispatch, getState) => {
    dispatch(socketRequest());
    const socket = io.connect(ENDPOINT);
    socket.on("CONNECTION_ACK", () => {
      console.log("CONNECTION_ACK");
      dispatch(socketSuccess(socket));
    });

    socket.on("RCV_MSG", ({ msg }) => {
      dispatch(chatReceived("Chat Received", { msg }));
    });
  };
};
