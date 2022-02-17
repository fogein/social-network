import React from 'react';
import cls from './sideBar.module.css';

export const SideBar = () => {
  return (
    <nav className={cls.nav}>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
  );
}