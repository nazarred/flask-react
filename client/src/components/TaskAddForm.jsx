import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectsDropDown from './ProjectsDropDown';
import { clientAddTask, clientUpdateTask } from "../services/TaskServices";
import {FormErrors} from "./FormErrors";

class TaskAddForm extends Component {
  state = {
    formErrors: {name: ''},
    formValid: true,
    nameValid: true
  };

  addTask = (data) => {
    clientAddTask(data).then((response) => {
      if (response.status === 200) {
        this.props.onAddTask(response.data);
      }
    });
  };

  updateTask = (data, id) => {
    clientUpdateTask(data, id).then((response) => {
      console.log(response.status)
      if (response.status === 200) {
        this.props.onAddTask(response.data);
      }
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!this.props.initialData) {
      this.addTask(data)
    } else {
      this.updateTask(data, this.props.initialData.id)
    }

    this.props.handleTaskFormShow(event);
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.validateField(name, value);
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
  switch(fieldName) {
      case 'name':
        nameValid = value.length < 15;
        fieldValidationErrors.name = nameValid ? '' : ' is to long';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                  }, this.validateForm);
  };

  validateForm = () => {
    this.setState({formValid: this.state.nameValid});
  };

  render () {
    const { initialData } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="name" onChange={this.handleUserInput} required={true} defaultValue={initialData ? initialData.name : ''} />
        <select name="deadline" defaultValue={initialData ? initialData.deadline : 'today'} >
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="day_after_t">Day After Tomorrow</option>
        </select>
        <ProjectsDropDown initialData={initialData}/>
        <select name="priority" defaultValue={initialData ? initialData.priority : 'high'}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <div className="errors">
         <FormErrors formErrors={this.state.formErrors} />
        </div>
        <input type="submit" value="Submit" className="button" disabled={!this.state.formValid} />
        <button className="button cancel" onClick={this.props.handleTaskFormShow}>Cancel</button>
      </form>
    );
  }
}

TaskAddForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  handleTaskFormShow: PropTypes.func.isRequired,
  initialData: PropTypes.instanceOf(Object)
};

export default TaskAddForm;
