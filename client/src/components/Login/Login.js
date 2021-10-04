import React from 'react';
import s from './Login.module.scss';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { login } from '../../redux/authReducer';
import { TextField, ServerErrorMessage } from '../common/FormControls/FromControls';
 
const LoginForm = ({ login, logError }) => {
   
   const initialValues = {
      email: '',
      password: ''
   };

   const DisplayingErrorMessagesSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
   });

   const onSubmit = (values, actions) => {
      login(values);
      actions.resetForm();
   };

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}
            validationSchema={DisplayingErrorMessagesSchema}>
         <Form>
         <TextField name="email" placeholder="Email" type="email" />
         <TextField name="password" placeholder="Пароль" type="password" />
         {logError ? <ServerErrorMessage message={logError} /> : ''}
         <button type="submit">Войти</button>
         </Form>
      </Formik>
   );
};

const Login = (props) => {

   return (
      <div className={s.login}>
         <div className={s.login__wrapper}>
            <div className={s.login__form}>
               <LoginForm login={props.login} logError={props.logError} />
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return ({
      logError: state.auth.loginFormError
   });
};

export default connect(mapStateToProps, { login })(Login);