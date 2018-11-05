import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import MainLayot from "./components/MainLayot";

export default (
  <BrowserRouter>
      <div className='p-5'>
          <Route path="/" component={MainLayot} />
      </div>
  </BrowserRouter>
);