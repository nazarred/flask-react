import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {updateTask, deleteTask} from "../actions";
import {clientDeleteProject} from "../services/ProjectServices";
import ProjectDetail from "./ProjectDetail";
import ProjectAddForm from "./ProjectAddForm";


class SimpleProject extends Component {
  state = {
    showEditForm: false
  };

  handleProjectEditFormShow = (event) => {
    console.log('edit')
    event.preventDefault();
    this.setState({showEditForm: !this.state.showEditForm});
  };

  handleDeleteProject = (event) => {
    event.preventDefault();
    clientDeleteProject(this.props.project.id).then((response) => {
      if (response.status === 200) {
         this.props.onDeleteProject(this.props.project.id)
      }
    });
  };

  render() {
    return(
      <span>
        {!this.state.showEditForm ? <ProjectDetail project={this.props.project} handleEdit={this.handleProjectEditFormShow} handleDelete={this.handleDeleteProject}/> :
          <ProjectAddForm onAddProject={this.props.onUpdateProject} handleProjetcFormShow={this.handleProjectEditFormShow} initialData={this.props.project}/>}
      </span>
      )
  }
}



SimpleProject.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateProject: (project) => {
      dispatch(updateTask(project));
    },
    onDeleteProject: (id) => {
      dispatch(deleteTask(id));
    },

  };
};

export default connect(null, mapDispatchToProps)(SimpleProject);
