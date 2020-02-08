import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://medien-bildung.ch/wp-content/uploads/2015/06/logo-256-transp.png" />

      <div className={s.loginBlock}>
        {props.isAuth ? 
        <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
          <NavLink to={'/login'}>
            login
        </NavLink>
        }
      </div>
    </header>
  );

}

export default Header;
