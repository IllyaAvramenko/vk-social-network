import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = ({ allPosts, ...props }) => {
   return (
      <div>
         {allPosts.map(post => <ProfilePost post={post} {...props} key={post._id} />)}
      </div>
   )
};

export default ProfilePosts;