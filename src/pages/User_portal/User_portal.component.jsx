import React from 'react';
// @components
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';
// @styles
import { SignInAndUpContainer } from './User_portal.styles';

const UserPortal = () => (
    <SignInAndUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndUpContainer>
);

export default UserPortal;