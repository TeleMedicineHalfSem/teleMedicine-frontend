const initialState = {
  loading: false,
  data: null,
  error: null,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOCTOR_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DOCTOR_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "DOCTOR_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default doctorReducer;
