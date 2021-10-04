import React from 'react';
import { useField } from 'formik';
import s from './FormControls.module.scss';

export const TextField = ({label, ...props}) => {
   const [field, meta] = useField(props);
   return (
      <>
         {meta.touched && meta.error && <div className={s.inputTextError}>{meta.error}</div>}
         <input 
            className={`${s.textField} ${meta.touched && meta.error && s.inputError}`}
            {...field} {...props}
         />
      </>
   );
};

export const ServerErrorMessage = ({message}) => {
   return (
      <span className={s.errorText}>{message}</span>
   );
};

export const ServerSuccessMessage = ({message}) => {
   return (
      <span className={s.successText}>{message}</span>
   );
};