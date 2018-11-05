import React from 'react'

const Task = (props) => {

    return(
        <span>
            {props.task.name}
            {props.task.project}
        </span>
    )
};

export default Task