import React from 'react';
import s from './MainBody.module.scss';

import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

const MainBody = () => {
   return (
      <>
         <div className={s.appNavigation}>
            <Navbar />
         </div>  

         <div className={s.appContent}>
            <Route path='/profile' render={() => <Profile />}/>
         </div>
      </>
   )
};

export default MainBody;