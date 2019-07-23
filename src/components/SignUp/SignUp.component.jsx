import React from 'react';
// @components
import FormInput from '../Form_input/Form_input.component';
import CustomButton from '../Custom_button/Custom_button.component';
// @firebase/auth
import { signUpUser } from '../../firebase/firebase.utils';
// @firestore
import firestoreController from '../../firebase/firebase.firestore';
// @swal
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// @styles
import './SignUp.styles.scss';

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
                const { user } = await signUpUser(email, password);
                await firestoreController.createUser(user, { displayName });
                this.setState({ displayName: '', email: '', password: '', confirm: '' });
            } catch (err) {
                console.log(err);
            }
        }
    }


    handleChange = () => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validate = (password, confirm) => {
        if (password !== confirm) {
            this.showAlert(`Passwords don't match`);
            return;
        }
        return true;
    }

    showAlert = message => {
        const Alert = withReactContent(Swal);
        return Alert.fire(message)
    }

    render () {
        const { displayName, email, password, confirm } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
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
            </div>
        )
    }
}
