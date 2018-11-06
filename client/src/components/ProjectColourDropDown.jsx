import React from 'react';
import constants from '../constants';


const ProjectColourDropDown = () => {
  const colours = constants.colours.project.map((colour, index) => <option key={index} value={colour}>{colour}</option>);

  return (
    <select name="colour">
      {colours}
    </select>
  );
};


export default ProjectColourDropDown;
