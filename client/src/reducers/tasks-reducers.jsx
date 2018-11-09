import { ADD_TASK, DELETE_TASK, TASK_LIST, UPDATE_TASK } from '../actions/actions-type';

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
    case UPDATE_TASK:
      newState = state.map(item => (
        item.id === action.payload.id ? action.payload : item
      ));
      return newState;
    case DELETE_TASK:
      console.log(action.payload)
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default taskReducer;
