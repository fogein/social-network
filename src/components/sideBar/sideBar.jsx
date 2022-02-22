import React from 'react';
import { Link } from 'react-router-dom';
import cls from './sideBar.module.css';

export const SideBar = () => {
    return (
        <nav className={cls.nav} >
            <ul>
                <li>
                    <Link to='/profile' > Profile </Link>
                </li>
                <li>
                    <Link to='/dialogs' > Messages </Link>
                </li>
                <li> News </li>
                <li> Music </li>
                <li> Settings </li>
            </ul>
        </nav>
    );
}