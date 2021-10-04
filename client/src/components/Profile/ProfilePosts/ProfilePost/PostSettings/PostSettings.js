import React, { useCallback, useState } from "react";
import s from './PostSettings.module.scss';

const PostSettings = ({postId, removePost, authUser, postUser }) => {

   const [activeMenu, setActiveMenu] = useState(false);

   const toggleActiveMenu = useCallback(
      () => {
         activeMenu ? setActiveMenu(false) : setActiveMenu(true)
      }, [activeMenu]
   );

   const onRemovePost = () => {
      if (authUser.id === postUser._id) {
         removePost(postId);
      }
   }

   return (
      <div className={s.post__settings} onClick={toggleActiveMenu} >
         <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="more_horizontal_24__more_horizontal_24"><path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path><path d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z" id="more_horizontal_24__Mask" fill="currentColor"></path></g></g></svg>

         {activeMenu
            ? 
            <div className={`${s.post__settings_menu} test`}>
               <button onClick={onRemovePost} >Удалить запись</button>
            </div>
            : ''}
      </div>
   );
};

export default PostSettings;