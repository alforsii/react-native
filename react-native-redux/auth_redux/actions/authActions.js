// import axios from "axios";

// const service = axios.create({
//   baseURL: "",
// });
const userDB = { username: "alforsii", password: "asasas" };

export const login = (user) => (dispatch) => {
  if (userDB.username === user.username && userDB.password === user.password) {
    return dispatch({ type: "LOGIN", user });
  } else {
    return dispatch({ type: "ERROR", message: "Wrong username or password" });
  }
};
export const logout = () => (dispatch) => {
  return dispatch({ type: "LOGOUT" });
};
