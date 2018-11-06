import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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

ProjectsDropDown.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ProjectsDropDown);
