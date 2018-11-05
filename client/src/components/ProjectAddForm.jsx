import React from 'react'
import { connect } from 'react-redux';
import axios from "axios/index";
import { projectsList } from "../actions";
import ProjectColourDropDown from "./ProjectColourDropDown";


const ProjectAddForm = (props) => {
    const addProject = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      let url = 'http://0.0.0.0:5000/api/project/create/';
      axios.post(url, {
        name: data.get('name'),
        colour: data.get('colour'),
      });
      props.handleProjectFormShow(event);
      url = props.url;
      axios.get(url).then(response => {
        props.onGetProjects(response.data)
    });
    };

    return(
        <form onSubmit={addProject}>
            <input type='text' name='name' />
            <ProjectColourDropDown/>
            <input type="submit" value="Submit" className="button"/>
            <button className="button cancel">Cancel</button>
        </form>
    )
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProjects: tasks => {
      dispatch(projectsList(tasks));
    }
  };
};


export default connect(null, mapDispatchToProps)(ProjectAddForm);
