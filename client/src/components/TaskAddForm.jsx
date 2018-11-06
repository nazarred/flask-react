import React from 'react';
import PropTypes from 'prop-types';
import ProjectsDropDown from './ProjectsDropDown';
import { clientAddTask } from "../services/TaskServices";

const TaskAddForm = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clientAddTask(data).then((response) => {
      if (response.status === 200) {
        props.onAddTask(response.data);
      }
    });
    props.handleTaskFormShow(event);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name"/>
      <select name="deadline">
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="day_after_t">Day After Tomorrow</option>
      </select>
      <ProjectsDropDown />
      <select name="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input type="submit" value="Submit" className="button" />
      <button className="button cancel">Cancel</button>
    </form>
  );
};

TaskAddForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  handleTaskFormShow: PropTypes.func.isRequired,
};

export default TaskAddForm;
