import React from 'react';
import './SignUp.css';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {
    return (
        <div className='signup-page-os'>
            <SignUpForm label1='Email address' label2='Password' type1='email' type2='password' placeholder1='' placeholder2='' />
        </div>
    )
}

export default SignUp;
