import React from 'react';

const Task = props => (
  <span>
    {props.task.name}
    {props.task.project}
  </span>
);

export default Task;
