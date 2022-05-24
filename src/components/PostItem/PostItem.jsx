import React, { useEffect } from "react";
import './PostItem.css';
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";


const PostItem = ({ taskData, deleteTask }) => {
    const [checked, setChecked] = useState();

    const [doneTask, setDoneTask] = useState('post__text');

    const isDoneTask = () => {
        (checked === true)
            ? setDoneTask(t => t = 'post__textDone')
            : setDoneTask(t => t = 'post__text')
    }


    useEffect(() => {
        isDoneTask();
    })

    return (
        <li className="post__item">
            <div className="post__elements">
                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                <span className={doneTask}>
                    {taskData.taskText}
                </span>
            </div>
            <div className="post__icon">
                <i className="pi pi-times-circle" onClick={() => { deleteTask(taskData, setChecked) }} ></i>
            </div>
        </li>
    );
}

export default PostItem;