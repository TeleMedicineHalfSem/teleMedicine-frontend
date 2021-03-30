const initialState = {
  loading: false,
  error: null,
  success: false,
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECORD_REQUEST":
      return { ...state, loading: true, error: false, success: false };
    case "RECORD_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: action.payload,
      };
    case "RECORD_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case "RECORD_RESET":
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

export default recordReducer;
