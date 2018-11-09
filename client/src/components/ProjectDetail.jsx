import React from 'react';
import PropTypes from "prop-types";
import EditDropDown from './EditDropDown'

const ProjectDetail = props => (
  <div className="task-detail">
    <span>{props.project.name}</span>
    <EditDropDown handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
  </div>
);

ProjectDetail.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,

};

export default ProjectDetail;
