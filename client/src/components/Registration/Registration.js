import React from 'react';
import s from './Registration.module.scss';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { register } from '../../redux/authReducer';
import { TextField, ServerErrorMessage, ServerSuccessMessage } from '../common/FormControls/FromControls';

const RegistrationForm = ({ register, regError, regSuccess, isLoading }) => {

   const initialValues = {
      name: '',
      email: '',
      password: ''
   };

   const DisplayingErrorMessagesSchema = Yup.object().shape({
      name: Yup.string().min(2, 'Name is too short!').max(25, 'Name is too Long!').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Password is too short!').max(25, 'Password is too Long!').required('Required')
   });

   const onSubmit = (values, actions) => {
      register(values);
      actions.resetForm();
   };

   return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} 
               validationSchema={DisplayingErrorMessagesSchema}>
         <Form>
            <TextField name="name" placeholder="Имя" type="text" />
            <TextField name="email" placeholder="Email" type="email" />
            <TextField name="password" placeholder="Пароль" type="password" />
            {regError ? <ServerErrorMessage message={regError} /> : ''}
            {regSuccess ? <ServerSuccessMessage message={regSuccess} /> : ''}

            <button type="submit" disabled={isLoading}>Зарегестрироваться</button>
         </Form>
      </Formik>
   );
};

const Registration = (props) => {

   return (
      <div className={s.registration}>
         <div className={s.registration__wrapper}>
            <div className={s.registration__form}>
               <RegistrationForm register={props.register} isLoading={props.isLoading}
               regError={props.regError} regSuccess={props.regSuccess} />
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return ({
      regError: state.auth.registrationFormError,
      regSuccess: state.auth.registrationFormSuccess,
      isLoading: state.auth.isLoading
   });
};

export default connect(mapStateToProps, { register })(Registration) ;