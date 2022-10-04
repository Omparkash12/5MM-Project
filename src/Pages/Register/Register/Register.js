import React from 'react'
import BecomeModeler from '../BecomeModeler/BecomeModeler';
import RegisterForm from '../RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <BecomeModeler heading='APPLICATION FORM' sub_heading='Apply To Become A Modeler' paragraph='(We take this approval process seriously as we want bettors to win long term & top 10 modelers collectively get 50% of the sites revenue each month so you are rewarded for your hard work.)' />
      <RegisterForm />
    </div>
  )
}

export default Register;
