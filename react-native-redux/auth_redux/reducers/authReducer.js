const initialState = {
  user: null,
  message: false,
  loggedIn: false,
  processing: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        user: action.data.user,
        processing: false,
        loggedIn: true,
        message: action.data.message,
      };
    case "LOGIN":
      // console.log("LOGIN", { state, action });
      return {
        ...state,
        user: action.user,
        processing: false,
        loggedIn: true,
      };
    case "LOGOUT":
      // console.log("LOGIN", { state, action });
      return {
        ...state,
        user: null,
        processing: false,
        loggedIn: false,
      };
    case "ERROR":
      return {
        ...state,
        message: action.message,
        processing: false,
      };
    default:
      return state;
  }
};
