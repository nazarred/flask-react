import { ADD_PROJECT, DELETE_PROJECT, PROJECTS_LIST } from '../actions/actions-type';

const initialState = [
];

const projectReducer = function(state = initialState, action) {

  switch(action.type) {
    case PROJECTS_LIST:
      var new_state = action.payload;
      return new_state;
    case ADD_PROJECT:
      new_state = state.concat([action.payload]);
      return new_state;
    case DELETE_PROJECT:
      return state.filter(post => post !== action.payload.name);
    default:
      return state;
  }

};

export default projectReducer;