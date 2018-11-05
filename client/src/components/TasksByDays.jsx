import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TaskList from "./TaskList";
import TasksForToday from './TasksForToday'
import TasksNextDays from './TasksNextDays'
import { tasksList } from "../actions"
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'


class TasksByDays extends Component {

  state = {
    showTaskAddForm: false,
    url: 'http://0.0.0.0:5000/api/tasks/by-days/',
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  componentDidMount() {
    const url = this.state.url;
    axios.get(url).then(response => {
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
          { day == 'next-days' ? <TasksNextDays tasks={this.props.tasks} /> : null }
        { this.state.showTaskAddForm ?
              <TaskAddForm handleTaskFormShow={this.handleTaskFormShow} url={this.state.url} dispatchToStore={this.props.onGetTasks}/> :
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksByDays);
