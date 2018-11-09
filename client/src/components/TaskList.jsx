import React from 'react';
import SimpleTask from './SimpleTask';
import PropTypes from "prop-types";


const TaskList = (props) => {
  const tasks = props.tasks.map((task, index) => (
    <li key={index}>
      <SimpleTask task={task} />
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
