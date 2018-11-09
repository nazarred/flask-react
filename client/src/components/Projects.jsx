import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { projectsList } from "../actions";
import ProjectAddForm from './ProjectAddForm'
import FormShowLink from "./FormShowLink";
import { clientGetProjectList } from '../services/ProjectServices'
import SimpleProject from './SimpleProject'


class Projects extends Component {

  state = {
    showProjectAddForm: false,
  };

  handleProjectFormShow = (event) => {
    event.preventDefault();
    this.setState({showProjectAddForm: !this.state.showProjectAddForm});
  };

  componentDidMount() {
    clientGetProjectList().then(response => {
        this.props.onGetProjects(response.data)
    });
  }

  render() {
    const projects = this.props.projects.map((project, index) =>
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <SimpleProject project={project} handleEdit={this.handleProjectFormShow} handleDelete={this.handleProjectFormShow}/>
            </Link>
          </li>
        );

    return (
      <nav>
        <ul>
          {projects}
        </ul>
        { this.state.showProjectAddForm ?
              <ProjectAddForm handleProjectFormShow={this.handleProjectFormShow} /> :
              <FormShowLink handleFormShow={this.handleProjectFormShow}/> }
      </nav>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    projects: store.projectState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProjects: projects => {
      dispatch(projectsList(projects));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);