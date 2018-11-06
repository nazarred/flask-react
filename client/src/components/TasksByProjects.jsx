import React, {Component} from 'react';
import { connect } from 'react-redux';
import TaskList from "./TaskList";
import {addTask, tasksList} from "../actions"
import TaskAddForm from './TaskAddForm'
import FormShowLink from './FormShowLink'
import { clientGetTaskListByProject } from '../services/TaskServices'



class TasksByProjects extends Component {

  state = {
    showTaskAddForm: false,
  };

  handleTaskFormShow = (event) => {
    event.preventDefault();
    this.setState({showTaskAddForm: !this.state.showTaskAddForm});
  };

  componentDidMount() {
    const id = this.props.match.params.project_id;
    clientGetTaskListByProject(id).then(response => {
        this.props.onGetTasks(response.data)
    });
  }

   componentDidUpdate(prevProps) {
     if (prevProps.match.params.project_id !== this.props.match.params.project_id) {
       const id = this.props.match.params.project_id;
       clientGetTaskListByProject(id).then(response => {
          this.props.onGetTasks(response.data)
       });
     }
   }

  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksByProjects);
