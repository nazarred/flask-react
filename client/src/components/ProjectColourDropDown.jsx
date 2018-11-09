import React from 'react';
import constants from '../constants';


const ProjectColourDropDown = (props) => {
  const colours = constants.colours.project.map((colour, index) => <option key={index} value={colour}>{colour}</option>);

  return (
    <select name="colour" defaultValue={props.initialData ? props.initialData.colour: '#FF0000'}>
      {colours}
    </select>
  );
};


export default ProjectColourDropDown;
