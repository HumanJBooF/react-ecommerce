import React from 'react';
// @components
import FormInput from '../Form_input/Form_input.component';
import CustomButton from '../Custom_button/Custom_button.component';
// @firebase
import { signUpAndInController } from '../../firebase/firebase.utils';
// @utils
import showAlert from '../../utils/sweetAlert';
// @styles
import { SignInContainer, ButtonsContainer } from './Signin.styles';
// import './SignIn.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await signUpAndInController.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            showAlert(['Something went wrong!', 'Double check your username and password', 'Try Again'], false)
        }

    }

    handleGoogle = async event => {
        event.preventDefault();
        try {
            await signUpAndInController.signInWithGoogle();
        } catch (err) {
            showAlert(['Something went wrong!', 'Please go ahead and', 'Try Again'], false)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <div>Sign in with your email and password</div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton
                            onClick={this.handleGoogle}
                            isGoogleSignIn
                        >
                            Google Sign In
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;