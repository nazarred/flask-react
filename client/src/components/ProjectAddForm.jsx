import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProject } from '../actions';
import ProjectColourDropDown from './ProjectColourDropDown';
import { clientAddProject } from '../services/ProjectServices';


const ProjectAddForm = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clientAddProject(data.get('name'), data.get('colour')).then((response) => {
      if (response.status === 200) {
        props.onAddProject(response.data);
      }
    });
    props.handleProjectFormShow(event);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" />
      <ProjectColourDropDown />
      <input type="submit" value="Submit" className="button" />
      <button className="button cancel">Cancel</button>
    </form>
  );
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
