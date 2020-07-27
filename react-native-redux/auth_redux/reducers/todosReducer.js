const initialState = {
  todos: [],
  photos: [],
};

export const todosReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "TODOS":
      return {
        ...state,
        todos: action.todos,
      };
    case "PHOTOS":
      return {
        ...state,
        photos: action.photos,
      };
    default:
      return state;
  }
};
