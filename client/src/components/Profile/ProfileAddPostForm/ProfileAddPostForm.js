import React, {useState} from "react";
import s from './ProfileAddPostForm.module.scss';
import { Formik, Form, Field } from 'formik';
import avatar from '../../../assets/images/catArt.jpg';

const ProfileAddPostForm = ({ createPost }) => {

   const [inputActive, setInputActive] = useState(false);
   const toggleInputActive = () => setInputActive(!inputActive);

   const initialValues = { addPostInput: '' };

   const onSubmit = (values, actions) => {
      createPost({ body: values.addPostInput });
      actions.resetForm();
   };

   return (
      <div className={s.addPost__block} >
         <div className={s.block__wrapper} >

            <Formik initialValues={initialValues} onSubmit={onSubmit} >
               <Form className={s.addPost__form} >

                  <div className={s.addPost__input}>
                     <div className={s.addPost__avatar}>
                        <img src={avatar} alt="user avatar" />
                     </div>

                     <Field name="addPostInput" 
                           placeholder="Что у вас нового?"
                           type="text"
                           onClick={() => toggleInputActive()}/>
                  </div>

                  {inputActive && 
                  <div className={s.addPost__btn}>
                     <button type='submit' >Опубликовать</button>
                  </div>}

               </Form>
            </Formik>

         </div> 
      </div>
   )
};

export default ProfileAddPostForm;