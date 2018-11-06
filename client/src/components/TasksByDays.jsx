import React, {Component} from 'react';
import { connect } from 'react-redux';
import TasksForToday from './TasksForToday'
import TasksNextDays from './TasksNextDays'
import {addTaskByDays, tasksList} from "../actions"
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'
import { clientGetTaskListByDays } from '../services/TaskServices'


class TasksByDays extends Component {

  state = {
    showTaskAddForm: false,
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  componentDidMount() {
    clientGetTaskListByDays().then(response => {
        this.props.onGetTasks(response.data)
    });
  }

  render() {
    const day = this.props.match.params.day;
    return (
      <div>
        <div>
          <TasksForToday tasks={this.props.tasks.today}/>
        </div>
          { day === 'next-days' ? <TasksNextDays tasks={this.props.tasks} /> : null }
        { this.state.showTaskAddForm ?
            <TaskAddForm handleTaskFormShow={this.handleTaskFormShow} onAddTask={this.props.onAddTask}/> :
            <FormShowLink handleFormShow={this.handleTaskFormShow}/> }
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.taskState.by_days
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: tasks => {
      dispatch(tasksList(tasks));
    },
    onAddTask: (task) => {
      dispatch(addTaskByDays(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksByDays);
