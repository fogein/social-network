import React from 'react';
import { Link } from 'react-router-dom';
import cls from './header.module.css'

export const Header = (props) => {
  return (
    <header className={cls.header}>
      <span>LOGO</span>
      {
        props.isAuth ? props.login : <Link to={'/login'}> Login </Link>
      }
    </header>
  );
}

