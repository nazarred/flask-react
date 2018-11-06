import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TasksByDays from './TasksByDays';
import TasksByProjects from './TasksByProjects';


const Content = () => (
  <main>
    <Switch>
      <Route path="/tasks/:day" component={TasksByDays} />
      <Route path="/projects/:project_id" component={TasksByProjects} />
    </Switch>
  </main>
);

export default Content;
