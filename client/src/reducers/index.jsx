import { combineReducers } from 'redux';

// Reducers
import projectReducer from './project-reducer';
import taskReducer from './tasks-reducers';


// Combine Reducers
var reducers = combineReducers({
    projectState: projectReducer,
    taskState: taskReducer
});

export default reducers;