const initialState = {
  loading: false,
  error: null,
  success: false,
  chats: [],
  key: 0,
};

const chatReducer = (state = initialState, action) => {
  let chatList = [];
  switch (action.type) {
    case "CHAT_REQUEST":
      return { ...state, loading: true, error: false, success: false };
    case "CHAT_SUCCESS":
      chatList = state.chats;
      chatList.push({
        key: state.key.toString(),
        sender: "you",
        message: action.message,
      });
      return {
        ...state,
        loading: false,
        error: false,
        success: action.payload,
        key: state.key + 1,
        chats: chatList,
      };
    case "CHAT_RECEIVED":
      chatList = state.chats;
      chatList.push({
        key: state.key.toString(),
        sender: "other",
        message: action.message,
      });
      return {
        ...state,
        loading: false,
        error: false,
        success: action.payload,
        key: state.key + 1,
        chats: chatList,
      };
    case "CHAT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case "CHAT_RESET":
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

export default chatReducer;
