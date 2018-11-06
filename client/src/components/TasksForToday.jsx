import React from 'react';
import TaskList from './TaskList';


const TasksForToday = props => (
  <div>
    <h3>Tasks For Today</h3>
    <TaskList tasks={props.tasks} />
  </div>
);


export default TasksForToday;
