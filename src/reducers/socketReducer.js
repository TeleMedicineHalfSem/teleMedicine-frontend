const initialState = {
  loading: false,
  error: null,
  socket: false,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOCKET_REQUEST":
      return { ...state, loading: true, error: false, socket: false };
    case "SOCKET_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default socketReducer;
