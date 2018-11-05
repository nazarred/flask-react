import {ADD_PROJECT, DELETE_PROJECT, PROJECTS_LIST, TASK_LIST, TASKS_FOR_TODAY, TASKS_BY_PROJECT} from './actions-type';

export const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: {
    name: data.get('name'),
    id: data.get('id'),
    colour: data.get('colour')
  }
});

export const deleteProject = name => ({
  type: DELETE_PROJECT,
  payload: {
    name
  }
});

export const projectsList = (projects) => dispatch => {
  dispatch(
    {
      type: PROJECTS_LIST,
      payload: projects
    }
  )
};

export const tasksList = (tasks) => dispatch => {
  dispatch(
    {
      type: TASK_LIST,
      payload: tasks
    }
  )
};

export const tasksForToday = (tasks) => dispatch => {
  dispatch(
    {
      type: TASKS_FOR_TODAY,
      payload: tasks
    }
  )
};

export const tasksByProject = (tasks) => dispatch => {
  dispatch(
    {
      type: TASKS_BY_PROJECT,
      payload: tasks
    }
  )
};