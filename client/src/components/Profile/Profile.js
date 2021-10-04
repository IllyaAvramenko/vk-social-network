import React from "react";
import s from './Profile.module.scss';
import ProfileUserBlock from './ProfileUserBlock/ProfileUserBlock';
import ProfileUserInfoContainer from './ProfileUserInfo/ProfileUserInfoContainer';
import ProfileAddPostFormContainer from './ProfileAddPostForm/ProfileAddPostFormContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = () => {
   return (
      <div className={s.profile}>
         <div className={s.left}>
            <ProfileUserBlock />
         </div>
         <div className={s.right}>
            <ProfileUserInfoContainer />
            <ProfileAddPostFormContainer />
            <ProfilePostsContainer />
         </div>
      </div>
   )
};

export default Profile;