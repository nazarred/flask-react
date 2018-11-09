import React, {Component} from 'react';
import { connect } from 'react-redux';
import TasksForOneDay from './TasksForOneDay'
import TasksNextDays from './TasksNextDays'
import {addTask, tasksList} from "../actions"
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'
import {clientGetTaskListByDay} from '../services/TaskServices'


class TasksByDays extends Component {

  state = {
    showTaskAddForm: false,
    day: 'today'
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  componentDidMount() {
    const day = this.props.match.params.day;
    this.setState({day: day});
    clientGetTaskListByDay(day).then(response => {
        this.props.onGetTasks(response.data)
    });
  }

 componentDidUpdate(prevProps) {
  const day = this.props.match.params.day;
  if (prevProps.match.params.day !== day) {
  this.setState({day: day});
  clientGetTaskListByDay(day).then(response => {
      this.props.onGetTasks(response.data)
    });
   }
 }

  render() {
    const day = this.state.day;
    return (
      <div>
        { day === 'next-days' ? <TasksNextDays tasks={this.props.tasks} day={day} /> : <TasksForOneDay tasks={this.props.tasks} day={day} /> }
        { this.state.showTaskAddForm ?
            <TaskAddForm handleTaskFormShow={this.handleTaskFormShow} onAddTask={this.props.onAddTask}/> :
            <FormShowLink handleFormShow={this.handleTaskFormShow}/> }
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
    },
    onAddTask: (task) => {
      dispatch(addTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksByDays);
