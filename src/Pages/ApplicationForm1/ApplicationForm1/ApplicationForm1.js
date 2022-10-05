import React from 'react';
import BecomeModeler from '../../ApplicationForm/BecomeModeler/BecomeModeler';
import Form1 from '../Form1/Form1';
import './ApplicationForm1.css';

const ApplicationForm1 = () => {
    return (
        <div>
            <BecomeModeler heading='APPLICATION FORM' sub_heading='Apply To Become A Modeler' paragraph='(We take this approval process seriously as we want bettors to win long term & top 10 modelers collectively get 50% of the sites revenue each month so you are rewarded for your hard work.)' />
            <Form1 />
        </div>
    )
}

export default ApplicationForm1;
