import React from "react";
import './AddTask.css';


const AddTask = ({ ...props }) => {
    return (
        <div {...props} className="add-task">
            <i className="pi pi-plus"></i>
            <span className='add-task__text'>
                Добавить задачу
            </span>
        </div>
    );
}

export default AddTask;