import React from 'react';
import s from './ProfilePost.module.scss';
import avatar from '../../../../assets/images/catArt.jpg';
import Like from './Like/Like';
import PostComment from './PostComment/PostComment';
import PostSettings from './PostSettings/PostSettings';


const ProfilePost = ({ post: { _id, body, user, createdDate, likes }, ...props }) => {
   return (
      <div className={s.post}>
         <div className={s.post__wrapper}>
            <div className={s.post__top}>

               <div className={s.post__owner}>
                  <div className={s.post__owner_image}>
                     <img src={avatar} alt="post owner post" />
                  </div>
                  <div className={s.post__owner_info}>
                     <a href="/"><p className={s.post__owner_name}> {user.name} </p></a>
                     <p className={s.post__owner_date}> {createdDate} </p>
                  </div>
               </div>

               <PostSettings postId={_id} postUser={user} removePost={props.removePost} authUser={props.authUser} />
            </div>

            <div className={s.post__content}> { body } </div>

            <div className={s.post__footer}>
               <div className={s.post__footer_actions}>
                  <div className={s.action}>
                     <Like postId={_id} createLike={props.createLike} removeLike={props.removeLike} likes={likes} authUser={props.authUser} 
                     isAuthenticated={props.isAuthenticated} />
                  </div>
                  <div className={s.action}>
                     <PostComment  />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default ProfilePost;