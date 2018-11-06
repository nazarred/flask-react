import React from 'react';

import { Link } from 'react-router-dom';

const AsideSchedule = () => (
  <nav>
    <ul>
      <li>
        <Link to="/tasks/today">
          Today
        </Link>
      </li>
      <li>
        <Link to="/tasks/next-days/">
          Next Days
        </Link>
      </li>
    </ul>
  </nav>
);

export default AsideSchedule;
