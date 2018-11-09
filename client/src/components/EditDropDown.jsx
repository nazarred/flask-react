import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


const EditDropDown = props => (
  <div className="edit">
    <div className="edit-menu">
      <span><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
      <ul className="submenu">
        <li><a href="/" onClick={props.handleEdit}>Edit</a></li>
        <li><a href="/" onClick={props.handleDelete}>Delete</a></li>
      </ul>
    </div>
  </div>
);

EditDropDown.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default EditDropDown;
