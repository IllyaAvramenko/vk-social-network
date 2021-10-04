import React from "react";
import { connect } from "react-redux";
import ProfileUserInfo from "./ProfileUserInfo";

const ProfileUserInfoContainer = (props) => {
   return <ProfileUserInfo {...props} />
};

const mapStateToProps = (state) => ({ userName: state.auth.user.name });

export default connect(mapStateToProps, {})(ProfileUserInfoContainer);