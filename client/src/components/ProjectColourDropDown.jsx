import React from 'react';
import { connect } from 'react-redux';


const ProjectColourDropDown = (props) => {

    const colours = props.colours.map((colour, index) =>
        <option key={index} value={colour}>{colour}</option>
    );

    return (
        <select name="project">
            {colours}
        </select>
    );
};

const mapStateToProps = function(store) {
  return {
    colours: store.colourState.project
  };
};


export default connect(mapStateToProps)(ProjectColourDropDown);