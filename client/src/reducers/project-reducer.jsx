import { ADD_PROJECT, DELETE_PROJECT, PROJECTS_LIST } from '../actions/actions-type';

const initialState = [
];

const projectReducer = function (state = initialState, action) {
  let newState;
  switch (action.type) {
    case PROJECTS_LIST:
      newState = action.payload;
      return newState;
    case ADD_PROJECT:
      newState = state.concat([action.payload]);
      return newState;
    case DELETE_PROJECT:
      return state.filter(post => post !== action.payload.name);
    default:
      return state;
  }
};

export default projectReducer;
