import React from 'react';
import TaskList from './TaskList';


const TasksForOneDay = (props) => {
  const { day, tasks } = props;
  // const filteredTasks = tasks.filter(task => task.deadline === day);
  return (
    <div>
      <h3>Tasks For {day}</h3>
      <TaskList tasks={tasks} />
    </div>
  );
};


export default TasksForOneDay;
