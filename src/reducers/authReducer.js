const initialState = {
  loading: false,
  error: null,
  success: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return { ...state, loading: true, error: false, success: false };
    case "AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: action.payload,
      };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
      case "AUTH_RESET":
        return{
          ...state,
          loading: false,
          error: null,
          success: false,
        }
    default:
      return state;
  }
};

export default authReducer;
