import React from 'react';
import PropTypes from "prop-types";
import EditDropDown from './EditDropDown'

const Task = props => (
  <div className="task-detail">
    <span>{props.task.name}</span><span>{props.task.project}</span>
    <EditDropDown handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
  </div>
);

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
};

export default Task;