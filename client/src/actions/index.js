import {
  ADD_PROJECT, ADD_TASK_BY_DAYS, ADD_TASK_BY_PROJECT, DELETE_PROJECT, PROJECTS_LIST, TASK_LIST, TASKS_BY_PROJECT,
} from './actions-type';

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

export const addTaskByDays = data => ({
  type: ADD_TASK_BY_DAYS,
  payload: data,
});

export const addTaskByProject = data => ({
  type: ADD_TASK_BY_PROJECT,
  payload: data,
});

export const tasksByProject = tasks => (dispatch) => {
  dispatch(
    {
      type: TASKS_BY_PROJECT,
      payload: tasks,
    },
  );
};
