import { ADD_TASK_BY_PROJECT, ADD_TASK_BY_DAYS, DELETE_TASK, TASK_LIST, TASKS_BY_PROJECT } from '../actions/actions-type';

const initialState = {
  by_days: {
    today: [],
    tomorrow: [],
    day_after_t: [],
  },
  by_project: [],
};

const taskReducer = (state = initialState, action) => {
  let newState;
  let day;
  let newList;
  switch (action.type) {
    case TASK_LIST:
      newState = { ...state, by_days: action.payload };
      return newState;
    case TASKS_BY_PROJECT:
      newState = { ...state, by_project: action.payload };
      return newState;
    case ADD_TASK_BY_DAYS:
      day = action.payload.deadline;
      newState = { ...state };
      newState.by_days[day] = newState.by_days[day].concat([action.payload]);
      console.log(newState);
      return newState;
    case ADD_TASK_BY_PROJECT:
      newList = state.by_project.concat([action.payload]);
      newState = { ...state, by_project: newList };
      return newState;
    case DELETE_TASK:
      return state.filter(post => post !== action.payload.name);
    default:
      return state;
  }
};

export default taskReducer;
