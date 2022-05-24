import React, { useState } from "react";
import './Sidebar.css';
import { InputText } from 'primereact/inputtext';


const Sidebar = () => {
    const [value, setValue] = useState();
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="input-search">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
                    </span>
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu__item"><i className="pi pi-sun"></i>Мой день</li>
                        <li className="menu__item"><i className="pi pi-star"></i>Важно</li>
                        <li className="menu__item"><i className="pi pi-calendar"></i>Назначенные вам</li>
                        <li className="menu__item"><i className="pi pi-check-square"></i>Задачи</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;