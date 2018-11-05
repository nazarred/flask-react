import React from 'react';

import Task from './TaskDetail'


const TaskList = (props) => {
    const tasks = props.tasks.map((task, index) =>
          <li key={index}>
            <Task task={task}/>
          </li>
        );

    return (
      <nav>
        <ul>
          {tasks}
        </ul>
      </nav>
    );
};


export default TaskList;