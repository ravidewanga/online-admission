import * as ActionTypes from "./ActionTypes";

const tasksData = [
  {
    id: 1,
    title: "ToDo",
    description: "Make Coffee"
  },
  {
    id: 2,
    title: "ToDo 2",
    description: "Finish Assignment"
  }
];
export const initialState = {
  tasks: tasksData,
  app: {
    language: "en",
    theme: "dark"
  },
  cartCount: 8
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      console.log("ADD_TASK", action.payload);

      const newState = {
        ...state,
        tasks: state.tasks.concat(action.payload)
      };

      return newState;

    case "INCREMENT_COUNTER":
      return {
        ...state,
        cartCount: state.cartCount + action.payload.counter
      };

    default:
      return state;
  }
};
