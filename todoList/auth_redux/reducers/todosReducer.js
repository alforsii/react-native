const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "TODOS":
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};
