import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProjectsDropDown extends Component {

  render() {
    const projects = this.props.projects.map((project, index) =>
        <option key={project.id} value={project.id}>{project.name}</option>
    );

    return (
        <select name="project">
            {projects}
        </select>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    projects: store.projectState
  };
};


export default connect(mapStateToProps)(ProjectsDropDown);