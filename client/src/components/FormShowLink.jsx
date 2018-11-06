import React from 'react';
import PropTypes from "prop-types";

const FormShowLink = props => (
  <a href="/" onClick={props.handleFormShow}>+ Add a new one</a>
);

FormShowLink.propTypes = {
  handleFormShow: PropTypes.func.isRequired,
};


export default FormShowLink;
