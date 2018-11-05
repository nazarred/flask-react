import React from 'react';
import { connect } from 'react-redux';


const ProjectsDropDown = (props) => {

    const projects = props.projects.map((project, index) =>
        <option key={project.id} value={project.id}>{project.name}</option>
    );

    return (
        <select name="project">
            {projects}
        </select>
    );
};

const mapStateToProps = function(store) {
  return {
    projects: store.projectState
  };
};


export default connect(mapStateToProps)(ProjectsDropDown);