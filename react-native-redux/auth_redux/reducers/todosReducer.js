const initialState = {
  todos: [],
  photos: [],
  loading: false,
};

export const todosReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "TODOS":
      return {
        ...state,
        todos: action.todos,
        loading: false,
      };
    case "PHOTOS":
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
