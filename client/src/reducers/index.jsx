import { combineReducers } from 'redux';

// Reducers
import projectReducer from './project-reducer';
import taskReducer from './tasks-reducers';
import colourReducer from './colour-reducers'


// Combine Reducers
var reducers = combineReducers({
    projectState: projectReducer,
    taskState: taskReducer,
    colourState: colourReducer
});

export default reducers;