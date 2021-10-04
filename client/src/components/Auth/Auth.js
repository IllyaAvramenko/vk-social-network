import React from 'react';
import s from './Auth.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';


const Auth = ({ isAuthenticated }) => {

   if (isAuthenticated) {
      return <Redirect to={'/profile'} />
   }

   return (
      <div className={s.auth}>
         <div className={s.auth__left}>
            
         </div>
         <div className={s.auth__right}>
            <Login />
            <Registration />
         </div>
      </div>
   )
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated })

export default connect(mapStateToProps, {})(Auth);