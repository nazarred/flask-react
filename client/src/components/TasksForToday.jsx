import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TaskList from "./TaskList";
import {tasksForToday} from "../actions"

class TasksForToday extends Component {

  componentDidMount() {
    const url = 'http://0.0.0.0:5000/api/tasks/day/today/';
    axios.get(url).then(response => {
        this.props.onGetTasks(response.data)
    });
  }

  render() {
    return (
      <div>
          <h3>Tasks For Today</h3>
          <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.taskState.today
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: tasks => {
      dispatch(tasksForToday(tasks));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksForToday);