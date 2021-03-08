import * as ActionTypes from "./ActionTypes";

export const addTask = (id, title, description) => ({
  type: ActionTypes.ADD_TASK,
  payload: {
    id: id,
    title: title,
    description: description
  }
});

export const incrementCounter = counter => ({
  type: ActionTypes.INCREMENT_COUNTER,
  payload: {
    counter: counter
  }
});
