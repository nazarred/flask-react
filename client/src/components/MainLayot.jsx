import React, { Component } from 'react';
import { connect } from 'react-redux';

import AsideSchedule from './AsideSchedule'
import Projects from './Projects'
import Content from './Content'
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'

import '../style.css'

class Home extends Component {
  state = {
    showTaskAddForm: false,
    showProjectAddForm: false,
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  render() {
    return (
      <div className="app">
        <header className="primary-header"><span>TODO</span></header>
        <aside className="primary-aside">
            <AsideSchedule/>
            <Projects/>
        </aside>
        <div className="content">
          <Content/>
          { this.state.showTaskAddForm ? <TaskAddForm handleTaskFormShow={this.handleTaskFormShow}/> :
              <FormShowLink handleTaskFormShow={this.handleTaskFormShow}/> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.taskState
  };
};

export default connect(mapStateToProps)(Home);