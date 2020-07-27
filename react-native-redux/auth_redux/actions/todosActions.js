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
export const getPhotos = () => (dispatch) => {
  return service
    .get("/photos?_limit=10")
    .then((photos) => {
      return dispatch({ type: "PHOTOS", photos: photos.data });
    })
    .catch((err) => console.log(err));
};
