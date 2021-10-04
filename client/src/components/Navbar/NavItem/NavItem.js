import React from "react";
import { NavLink } from 'react-router-dom';
import s from './NavItem.module.scss';

const NavItem = (props) => {
   
   return (
      <div className={s.item}>
         <NavLink to={props.link} activeClassName={s.activeLink}>

            <div className={s.itemWrapper}>

               <div className={s.itemIcon}>
                  {props.children}
               </div>

               <div className={s.itemText} >
                  <p>{props.text}</p>
               </div>

            </div>

         </NavLink>
      </div>
   )
}

export default NavItem;