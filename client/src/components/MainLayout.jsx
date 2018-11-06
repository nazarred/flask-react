import React from 'react';
import AsideSchedule from './AsideSchedule';
import Projects from './Projects';
import Content from './Content';
import '../style.css';


const MainLayout = () => {
    return (
      <div className="app">
        <header className="primary-header"><span>TODO</span></header>
        <aside className="primary-aside">
            <AsideSchedule/>
            <Projects/>
        </aside>
        <div className="content">
          <Content/>

        </div>
      </div>
    );
};


export default MainLayout;