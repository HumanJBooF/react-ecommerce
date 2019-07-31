import React from 'react';
// @components
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';
// @styles
import './User_portal.styles.scss';

const UserPortal = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default UserPortal;