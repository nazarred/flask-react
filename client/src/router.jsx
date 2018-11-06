import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import MainLayout from "./components/MainLayout";

export default (
  <BrowserRouter>
      <div>
          <Route path="/" component={MainLayout} />
      </div>
  </BrowserRouter>
);