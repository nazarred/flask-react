import React from 'react';
import TaskList from './TaskList';


const TasksNextDays = (props) => {
  const { tasks } = props;
  const tasksForToday = tasks.filter(task => task.deadline === 'today');
  const tasksForTomorrow = tasks.filter(task => task.deadline === 'tomorrow');
  const tasksForDayAfterTomorrow = tasks.filter(task => task.deadline === 'day_after_t');

  return (
    <div>
      <div>
        <h3>Tasks For Today</h3>
        <TaskList tasks={tasksForToday} />
      </div>
      <div>
        <h3>Tasks For Tomorrow</h3>
        <TaskList tasks={tasksForTomorrow} />
      </div>
      <div>
        <h3>Tasks For Day After Tomorrow</h3>
        <TaskList tasks={tasksForDayAfterTomorrow} />
      </div>
    </div>
  );
};

export default TasksNextDays;
