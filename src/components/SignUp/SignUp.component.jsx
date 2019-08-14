import React from 'react';
// @components
import FormInput from '../Form_input/Form_input.component';
import CustomButton from '../Custom_button/Custom_button.component';
// @firebase/auth
import { signUpAndInController } from '../../firebase/firebase.utils';
// @firestore
import firestoreController from '../../firebase/firebase.firestore';
// @utils
import showAlert from '../../utils/sweetAlert';
// @styles
import { SignUpContainer, TitleContainer } from './SignUp.styles';

class SignUp extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirm: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirm } = this.state;
        if (this.validate(password, confirm)) {
            try {
                const { user } = await signUpAndInController.signUpEmailAndPassword(email, password);
                await firestoreController.createUser(user, { displayName });
                this.setState({ displayName: '', email: '', password: '', confirm: '' });
            } catch (err) {
                console.log(err);
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validate = (password, confirm) => {
        if (password !== confirm) {
            showAlert([`Woops`, `Passwords don't match / Must be at least 6 characters long`, 'Try again'], false)
            return;
        }
        return true;
    }

    render () {
        const { displayName, email, password, confirm } = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <div>Sign up with your email and password</div>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='User Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirm'
                        value={confirm}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;