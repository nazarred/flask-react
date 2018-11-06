import React from 'react';
import PropTypes from "prop-types";

const Task = props => (
  <span>
    {props.task.name}
    {props.task.project}
  </span>
);

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
};

export default Task;
