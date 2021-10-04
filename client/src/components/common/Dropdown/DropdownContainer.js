import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { logout } from '../../../redux/authReducer';


const DropdownContainer = (props) => {
   return <Dropdown {...props} />
};

const mapStateToProps = (state) => ({ userName: state.auth.user.name });

export default connect(mapStateToProps, { logout })(DropdownContainer);