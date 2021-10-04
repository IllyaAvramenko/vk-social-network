import React, { useState } from 'react';
import avatar from '../../../assets/images/catArt.jpg';
import s from './Dropdown.module.scss';

const Dropdown = ({ userName, logout }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const logoutUser = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={s.dd}>
      <div className={s.dd__header} role="button" onClick={() => toggle(!open)} >

      <div className={s.dd__title}>
            <p>{userName}</p>
      </div>

      <div className={s.dd__image}>
         <img src={avatar} alt="avatar" />
      </div>   

      <div className={s.dd__action}>
        <svg fill="#aeb7c2" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z" fill="currentColor" fillRule="evenodd"></path></svg>
      </div>

      </div>

         <div className={open ? `${s.dd__menu}` : `${s.dd__hidden}`}>
            <div className={s.line}></div>
            <a href="/">Настройки</a>
            <a href="/">Помощь</a>
            <div className={s.line}></div>
            <a  onClick={(e) => logoutUser(e)} href="/">Выйти</a>
         </div>
    </div>
  );
};

export default Dropdown;