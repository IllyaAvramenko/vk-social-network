import React from "react";
import s from  './Header.module.scss';
// import avatar from '../../assets/images/catArt.jpg';
import mainLogo from '../../assets/images/mainLogo.png';
import searchIcon from '../../assets/icons/search.svg';
import DropdownContainer from "../common/Dropdown/DropdownContainer";

const Header = ({ isAuthenticated }) => {
   
   const searchStyle = { backgroundImage: `url(${searchIcon})`};

   return (
      <header className={s.header}>
         <div className={s.headerContainer}>
            <div className={s.logo}>
               <img src={mainLogo} alt="main-logo" />
            </div>

            <div className={s.search}>
               <form>
                  <input placeholder={'Поиск'} style={ searchStyle }/>
               </form>
            </div>

            <div className={s.header__end}>
               {isAuthenticated 
                  ? <DropdownContainer />
                  : <button>Зарегестрироваться</button>
                  }
            </div>

         </div>
      </header>
   )
}

export default Header;