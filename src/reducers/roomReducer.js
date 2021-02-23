const initialState = {
  loading: false,
  error: null,
  success: false,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROOM_REQUEST":
      return { ...state, loading: true, error: false, success: false };
    case "ROOM_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: action.payload,
      };
    case "ROOM_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case "ROOM_RESET":
      return {
        ...state,
        loading: false,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

export default roomReducer;
