export const initialState = [
    {
      task: "",
      id: "",
      completed: ""
    }
  ];

export const todoReducer = (state, action) => {

  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_COMPLETE":
      return state.map(todo => {
          if (todo.id === action.payload) {
             return {...todo, completed: !todo.completed };
          }
          return todo;
      });
    case "REMOVE_TODO":
      return state.filter((todo) => {
          return !todo.completed;
        });
    default:
      return state;
  }
};
