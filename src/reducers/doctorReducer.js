const initialState = {
  loading: false,
  error: null,
  success: false,
  data: false,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOCTOR_REQUEST":
      return { ...state, loading: true, error: false };
    case "DOCTOR_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
        success: action.success,
      };
    case "DOCTOR_MESSAGE":
      return {
        ...state,
        success: action.success,
      };
    case "DOCTOR_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        data: false,
      };
    case "DOCTOR_RESET":
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

export default doctorReducer;
