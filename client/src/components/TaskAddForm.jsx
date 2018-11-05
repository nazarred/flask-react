import React from 'react'
import { connect } from 'react-redux';
import ProjectsDropDown from './ProjectsDropDown'
import axios from "axios/index";
import {tasksList} from "../actions";

const TaskAddForm = (props) => {
    const addTask = (event) => {
      event.preventDefault();
      console.log(props.params.match.project_id)

      const data = new FormData(event.target);
      let url = 'http://0.0.0.0:5000/api/task/create/';
      axios.post(url, {
        name: data.get('name'),
        deadline: data.get('deadline'),
        priority: data.get('priority'),
        project: data.get('project'),
      });
      props.handleTaskFormShow(event);
      url = 'http://0.0.0.0:5000/api/tasks/by-days';
      axios.get(url).then(response => {
      props.onGetTasks(response.data)
    });
    };

    return(
        <form onSubmit={addTask}>
            <input type='text' name='name' />
            <select name="deadline">
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="day_after_t">Day After Tomorrow</option>
            </select>
            <ProjectsDropDown/>
            <select name="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <input type="submit" value="Submit" className="button"/>
            <button className="button cancel">Cancel</button>

        </form>
    )
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTasks: tasks => {
      dispatch(tasksList(tasks));
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskAddForm)