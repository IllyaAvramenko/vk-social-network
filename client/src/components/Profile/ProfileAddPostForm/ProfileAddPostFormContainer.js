import React from "react";
import { connect } from "react-redux";
import { createPost } from '../../../redux/postsReducer';
import ProfileAddPostForm from './ProfileAddPostForm';

const ProfileAddPostFormContainer = (props) => {

   return <ProfileAddPostForm {...props} />
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { createPost })(ProfileAddPostFormContainer);