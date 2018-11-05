import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TaskList from "./TaskList";
import {tasksByProject} from "../actions"


class TasksByProjects extends Component {

  componentDidMount() {
    const id = this.props.match.params.project_id;
    const url = 'http://0.0.0.0:5000/api/projects/' + id + '/tasks/';
    axios.get(url).then(response => {
        this.props.onGetTasks(response.data)
    });
  }

  render() {
    return (
      <div>
          <TaskList tasks={this.props.tasks}/>
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