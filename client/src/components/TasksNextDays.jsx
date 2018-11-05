import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TaskList from "./TaskList";
import TasksForToday from './TasksForToday'
import { tasksList } from "../actions"


class TasksNextDays extends Component {

  componentDidMount() {
    const url = 'http://0.0.0.0:5000/api/tasks/by-days';
    axios.get(url).then(response => {
        this.props.onGetTasks(response.data)
    });
  }

  render() {
    return (
      <div>
        <TasksForToday/>
        <div>
          <h3>Tasks For Tomorrow</h3>
          <TaskList tasks={this.props.tasks.tomorrow}/>
        </div>
        <div>
          <h3>Tasks For Day After Tomorrow</h3>
          <TaskList tasks={this.props.tasks.day_after_t}/>
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

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: tasks => {
      dispatch(tasksList(tasks));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksNextDays);
