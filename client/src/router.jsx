import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import MainLayot from "./components/MainLayot";
import TaskList from "./components/TaskList"

export default (
  <BrowserRouter>
      <div className='p-5'>
          <Route path="/" component={MainLayot} />
          {/*<Route path="tasks/:slug" component={TaskList} />*/}
              {/*<Route path="/projects/:slug/tasks" component={TaskList} />*/}
      </div>
  </BrowserRouter>
);