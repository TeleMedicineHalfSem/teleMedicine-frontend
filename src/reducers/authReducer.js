const initialState = {
  loading: false,
  error: null,
  success: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return { ...state, loading: true };
    case "AUTH_SUCCESS":
      return { ...state, loading: false, error: null, success: true };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default authReducer;
