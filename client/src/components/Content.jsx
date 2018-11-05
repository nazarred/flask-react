import React from 'react';

import {Route, Switch} from "react-router-dom";
import TasksForToday from "./TasksForToday";
import TasksNextDays from "./TasksNextDays";
import TasksByProjects from "./TasksByProjects"


const Content = () => (
  <main>
    <Switch>
      <Route path='/tasks/today' component={TasksForToday}/>
      <Route path='/tasks/next-days' component={TasksNextDays}/>
      <Route path='/projects/:project_id' component={TasksByProjects}/>
    </Switch>
  </main>
);

export default Content