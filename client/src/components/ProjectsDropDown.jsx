import React from 'react';
import { connect } from 'react-redux';


const ProjectsDropDown = (props) => {
  const projects = props.projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>);

  return (
    <select name="project">
      {projects}
    </select>
  );
};

const mapStateToProps = store => ({
  projects: store.projectState,
});


export default connect(mapStateToProps)(ProjectsDropDown);
