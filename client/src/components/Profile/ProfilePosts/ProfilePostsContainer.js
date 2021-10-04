import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfilePosts from './ProfilePosts';
import { getAllPosts, createLike, removeLike, removePost } from '../../../redux/postsReducer';

const ProfilePostsContainer = (props) => {

   useEffect(() => {
      props.getAllPosts();
    }, []);

   return <ProfilePosts {...props} />
};

const mapStateToProps = (state) => {
   return {
      allPosts: state.posts.posts,
      authUser: state.auth.user,
      isAuthenticated: state.auth.isAuthenticated
   }
};

export default connect(mapStateToProps, { getAllPosts, createLike, removeLike, removePost })(ProfilePostsContainer);