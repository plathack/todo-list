import React, { useEffect, useState } from "react";
import './MainContent.css'
import Props from "../PostItems";
import AddTask from "../AddTask/AddTask";
import Modal from "../Modal/Modal";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const MainContent = () => {

    const [taskData, setTaskData] = useState([
        { id: 1, taskText: 'Покрасить стены' },
        { id: 2, taskText: 'Поклеить обои' },
        { id: 3, taskText: 'Покрасить стены' },
        { id: 4, taskText: 'Купить чайник' },
        { id: 5, taskText: 'Купить подарок на новый год' }]);

    const deleteTask = (task, setChecked) => {
        setTaskData(taskData.filter(t => t.id !== task.id));
        setChecked(t => t = 'post__text');
    }

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            taskText
        }
        setTaskData([...taskData, newTask]);
        setModalActive(false);
    }

    const [modalActive, setModalActive] = useState(false);

    const [taskText, setTaskText] = useState('');



    return (
        <div className='main-content'>
            <div className="container__content">
                <header className="header">
                    <div className="my-day">
                        <div className="my-day__title">
                            Мой день
                        </div>
                        <div className="my-day__date">
                            Пятница
                        </div>
                    </div>
                </header>
                <div className="post">
                    <ul className="post-list">
                        <Props taskData={taskData} deleteTask={deleteTask} />
                    </ul>
                    <AddTask onClick={() => setModalActive(true)} />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}> <span className="p-float-label">
                <InputText className='modal__input' value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                <label>Напшите задачу</label>
            </span>
                <Button onClick={addTask} label="Добавить задачу" /></Modal>
        </div>
    );
}


export default MainContent;