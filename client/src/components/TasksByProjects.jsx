import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TaskList from "./TaskList";
import {tasksByProject} from "../actions"
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'



class TasksByProjects extends Component {

  state = {
    showTaskAddForm: false,
    url: ''
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  componentDidMount() {
    const id = this.props.match.params.project_id;
    const url = 'http://0.0.0.0:5000/api/projects/' + id + '/tasks/';
    axios.get(url).then(response => {
        this.props.onGetTasks(response.data)
    });
    this.setState({url: url});
  }

  render() {
    return (
      <div>
          <TaskList tasks={this.props.tasks}/>
          { this.state.showTaskAddForm ?
              <TaskAddForm handleTaskFormShow={this.handleTaskFormShow} url={this.state.url} dispatchToStore={this.props.onGetTasks}/> :
              <FormShowLink handleTaskFormShow={this.handleTaskFormShow}/> }
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.taskState.by_project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: tasks => {
      dispatch(tasksByProject(tasks));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksByProjects);