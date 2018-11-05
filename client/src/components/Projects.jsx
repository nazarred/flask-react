import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {projectsList} from "../actions";


class Projects extends Component {

  componentDidMount() {
    const url = 'http://0.0.0.0:5000/api/projects/';
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