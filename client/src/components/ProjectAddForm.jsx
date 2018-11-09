import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProject } from '../actions';
import ProjectColourDropDown from './ProjectColourDropDown';
import { clientAddProject, clientUpdateProject } from '../services/ProjectServices';


class ProjectAddForm extends Component {

  addTask = (data) => {
    clientAddProject(data).then((response) => {
      if (response.status === 200) {
        this.props.onAddProject(response.data);
      }
    });
  };

  updateTask = (data, id) => {
    clientUpdateProject(data, id).then((response) => {
      if (response.status === 200) {
        this.props.onAddProject(response.data);
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
    this.props.handleProjectFormShow(event);
  };

  render() {
    const { initialData } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="name" defaultValue={initialData ? initialData.name : ''}/>
        <ProjectColourDropDown initialData={initialData}/>
        <input type="submit" value="Submit" className="button"/>
        <button className="button cancel" onClick={this.props.handleProjectFormShow}>Cancel</button>
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onAddProject: (project) => {
    dispatch(addProject(project));
  },
});


ProjectAddForm.propTypes = {
  onAddProject: PropTypes.func.isRequired,
  handleProjectFormShow: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProjectAddForm);
