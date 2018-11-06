import {
  ADD_PROJECT, ADD_TASK, DELETE_PROJECT, PROJECTS_LIST, TASK_LIST } from './actions-type';

export const addProject = data => ({
  type: ADD_PROJECT,
  payload: data,
});

export const deleteProject = name => ({
  type: DELETE_PROJECT,
  payload: {
    name,
  },
});

export const projectsList = projects => (dispatch) => {
  dispatch(
    {
      type: PROJECTS_LIST,
      payload: projects,
    },
  );
};

export const tasksList = tasks => (dispatch) => {
  dispatch(
    {
      type: TASK_LIST,
      payload: tasks,
    },
  );
};

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});
