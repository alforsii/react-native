import axios from "axios";

const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodos = () => (dispatch) => {
  return service
    .get("/todos?_limit=10")
    .then((todos) => {
      console.log("getTodos -> todos", todos);
      dispatch({ type: "TODOS", todos: todos.data });
    })
    .catch((err) => console.log(err));
};
