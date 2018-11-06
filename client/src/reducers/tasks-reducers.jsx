import { ADD_TASK, DELETE_TASK, TASK_LIST } from '../actions/actions-type';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case TASK_LIST:
      newState = action.payload;
      return newState;
    case ADD_TASK:
      newState = state.concat([action.payload]);
      return newState;
    case DELETE_TASK:
      return state.filter(post => post !== action.payload.name);
    default:
      return state;
  }
};

export default taskReducer;
