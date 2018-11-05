import { ADD_TASK, DELETE_TASK, TASK_LIST, TASKS_FOR_TODAY, TASKS_BY_PROJECT } from '../actions/actions-type';

const initialState = {
    today: [],
    tomorrow: [],
    day_after_t: [],
    by_project: []
    }
;

const taskReducer = function(state = initialState, action) {

  switch(action.type) {
    case TASK_LIST:
      var new_state = action.payload;
      return new_state;
      case TASKS_FOR_TODAY:
      new_state = {...state, today:action.payload};
      case TASKS_BY_PROJECT:
      new_state = {...state, by_project:action.payload};
      return new_state;
    case ADD_TASK:
      new_state = state.concat([action.payload]);
      return new_state;
    case DELETE_TASK:
      return state.filter(post => post !== action.payload.name);
    default:
      return state;
  }

};

export default taskReducer;