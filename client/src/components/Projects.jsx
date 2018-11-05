import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {projectsList} from "../actions";
import ProjectAddForm from './ProjectAddForm'
import FormShowLink from "./FormShowLink";


class Projects extends Component {

  state = {
    showProjectAddForm: false,
    url: 'http://0.0.0.0:5000/api/projects/',
  };

  handleProjectFormShow = (event) => {
    event.preventDefault();
    this.setState({showProjectAddForm: !this.state.showProjectAddForm});
  };

  componentDidMount() {
    const url = this.state.url;
    axios.get(url).then(response => {
        this.props.onGetProjects(response.data)
    });
  }

  render() {
    const projects = this.props.projects.map((project, index) =>
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              {project.name}
            </Link>
          </li>
        );

    return (
      <nav>
        <ul>
          {projects}
        </ul>
        { this.state.showProjectAddForm ?
              <ProjectAddForm handleProjectFormShow={this.handleProjectFormShow}/> :
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