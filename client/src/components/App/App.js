import React, { useEffect } from 'react';
import s from './App.module.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import jwtDecode from 'jwt-decode';

import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logout } from '../../redux/authReducer';

import Header from '../Header/Header';
import Auth from '../Auth/Auth';
import MainBody from '../MainBody/MainBody';


const App = (props) => {
  console.log(props.user);

  useEffect(() => {
    if (localStorage.access_token) {
      const { access_token } = localStorage;
      setAuthToken(access_token);
      const decoded = jwtDecode(access_token);
      props.setCurrentUser(decoded);
      console.log(decoded);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        props.logout();
        window.location.href = '/login';
      }
    }
  }, []);

  

  return (
    <>
      <Header isAuthenticated={props.isAuthenticated} />
      <div className={s.appContainer}>
        
        {props.isAuthenticated
          ? <MainBody />
          : <Redirect to={'/auth'} />
          }
        <Route path='/auth' render={() => <Auth />} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  })
};

export default compose(
  withRouter,
  connect(mapStateToProps, { setCurrentUser, logout })
)(App);
