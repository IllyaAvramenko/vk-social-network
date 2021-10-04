import React from 'react';
import s from './User.module.scss';
// import { connect } from 'react-redux';
 
export const UserAvatar = ({ side }) => {

   const style = {
      width: `${side}px`,
      height: `${side}px`
    };

   return (
      <div className={s.avatar} style={style}>
         <img src="" alt="" />
      </div>
   );
};


// const mapStateToProps = (state) => {
//    return ({
//    });
// };

// export default connect(mapStateToProps, {})(Login);