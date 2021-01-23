const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  
  const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DOCTOR_REQUEST":
        return { ...state, loading: true, error: false, success: false };
      case "DOCTOR_SUCCESS":
        return {
          ...state,
          loading: false,
          error: false,
          success: action.payload,
        };
      case "DOCTOR_FAIL":
        return {
          ...state,
          loading: false,
          error: action.payload,
          success: false,
        };
        case "DOCTOR_RESET":
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
  
  export default doctorReducer;
  