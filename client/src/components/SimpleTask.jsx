import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import TaskDetail from './TaskDetail'
import TaskAddForm from './TaskAddForm'
import {updateTask, deleteTask} from "../actions";
import {clientDeleteTask} from "../services/TaskServices";

class SimpleTask extends Component {
  state = {
    showEditForm: false
  };

  handleTaskEditFormShow = (event) => {
    event.preventDefault();
    this.setState({showEditForm: !this.state.showEditForm});
  };

  handleDeleteTask = (event) => {
    event.preventDefault();
    clientDeleteTask(this.props.task.id).then((response) => {
      if (response.status === 200) {
         this.props.onDeleteTask(this.props.task.id)
      }
    });
  };

  render() {
    return(
      <span>
        {!this.state.showEditForm ? <TaskDetail task={this.props.task} handleEdit={this.handleTaskEditFormShow} handleDelete={this.handleDeleteTask}/> :
          <TaskAddForm onAddTask={this.props.onUpdateTask} handleTaskFormShow={this.handleTaskEditFormShow} initialData={this.props.task}/>}
      </span>
      )
  }
}



SimpleTask.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTask: (task) => {
      dispatch(updateTask(task));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    },

  };
};

export default connect(null, mapDispatchToProps)(SimpleTask);
