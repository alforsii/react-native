const initialState = {
  user: null,
  users: null,
  progress: 0,
  message: false,
  loggedIn: false,
  isLoading: true,
  processing: false,
  errMessage: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        user: action.data.user,
        // isLoading: false,
        processing: false,
        loggedIn: true,
        message: action.data.message,
        errMessage: false,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.data.user,
        // isLoading: false,
        processing: false,
        loggedIn: true,
        message: action.data.message,
        errMessage: false,
      };
    default:
      return state;
  }
};
