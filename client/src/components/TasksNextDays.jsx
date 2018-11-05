import React from 'react';
import TaskList from "./TaskList";


const TasksNextDays = (props) => {
    return (
      <div>
          <div>
              <h3>Tasks For Tomorrow</h3>
              <TaskList tasks={props.tasks.tomorrow}/>
          </div>
          <div>
              <h3>Tasks For Day After Tomorrow</h3>
              <TaskList tasks={props.tasks.day_after_t}/>
          </div>
      </div>
    );
};


export default TasksNextDays;