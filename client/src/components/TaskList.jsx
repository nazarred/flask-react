import React from 'react';
import Task from './TaskDetail';
import PropTypes from "prop-types";


const TaskList = (props) => {
  const tasks = props.tasks.map((task, index) => (
    <li key={index}>
      <Task task={task} />
    </li>
  ));

  return (
    <nav>
      <ul>
        {tasks}
      </ul>
    </nav>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
