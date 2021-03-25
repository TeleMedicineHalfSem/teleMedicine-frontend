const chatRequest = () => {
  return {
    type: "CHAT_REQUEST",
  };
};
const chatSuccess = (data, { msg }) => {
  return {
    type: "CHAT_SUCCESS",
    payload: data,
    message: msg,
  };
};
const chatFailure = (error) => {
  return {
    type: "CHAT_FAIL",
    payload: error,
  };
};
export const chatReceived = (data, { msg }) => {
  return {
    type: "CHAT_RECEIVED",
    payload: data,
    message: msg,
  };
};

export const sendMsg = (socket, { msg, room }) => {
  return (dispatch, getState) => {
    dispatch(chatRequest());
    socket.emit("SEND_MSG", { msg, room }, (data) => {
      if (data.success) {
        dispatch(chatSuccess(data.success, { msg }));
      } else {
        dispatch(chatFailure(data.error));
      }
    });
  };
};
