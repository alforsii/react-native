import axios from "axios";

const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodos = () => (dispatch) => {
  return service
    .get("/todos?_limit=20")
    .then((todos) => {
      return dispatch({ type: "TODOS", todos: todos.data });
    })
    .catch((err) => console.log(err));
};
export const getPhotos = (page) => (dispatch) => {
  dispatch({ type: "LOADING", loading: true });
  return service
    .get(`/photos?_limit=10&_page=${page}`)
    .then((photos) => {
      return dispatch({ type: "PHOTOS", photos: photos.data });
    })
    .catch((err) => {
      dispatch({ type: "ERROR", loading: false });
      console.log(err);
    });
};
