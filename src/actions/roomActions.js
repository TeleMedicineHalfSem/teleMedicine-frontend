const roomRequest = () => {
  return {
    type: "ROOM_REQUEST",
  };
};
const roomSuccess = (data) => {
  return {
    type: "ROOM_SUCCESS",
    payload: data,
  };
};
const roomFailure = (error) => {
  return {
    type: "ROOM_FAIL",
    payload: error,
  };
};
export const roomReset = () => {
  return {
    type: "ROOM_RESET",
  };
};

export const joinRoom = (socket, { name, room }) => {
  return (dispatch, getState) => {
    dispatch(roomRequest());
    if (socket) {
      socket.emit("JOIN_ROOM", { name, room }, (data) => {
        dispatch(roomSuccess(data));
        console.log(data);
      });
    } else {
      dispatch(roomFailure("No socket"));
    }
  };
};

export const leaveRoom = (socket, { name }) => {
  return (dispatch, getState) => {
    dispatch(roomRequest());
    if (socket) {
      socket.emit("LEAVE_ROOM", { name }, (data) => {
        dispatch(roomSuccess());
        console.log(data);
      });
    } else {
      dispatch(roomFailure("No socket"));
    }
  };
};
