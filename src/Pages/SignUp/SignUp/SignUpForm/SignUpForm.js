import React from 'react';
import './SignUpForm.css';

// Images
import google from '../../../../Images/google.svg';
import fb from '../../../../Images/fb.svg';
import apple from '../../../../Images/apple.svg';
import twitter from '../../../../Images/twitter.svg';


const SignUpForm = (props) => {
    return (
        <section className='signup-section-os'>
            <div className='container-os'>
                <div className='signup-all-data-os'>
                    <div className='signup-heading-os'>
                        <h1><span>5</span>MM</h1>
                    </div>
                    <div className='signup-data-os'>
                        <h3>Continue with</h3>
                        <div className='singup-accounts-os'>
                            <a href='#/'>
                                <div>
                                    <img src={google} alt='' />
                                </div>
                            </a>
                            <a href='#/'>
                                <div>
                                    <img src={fb} alt='' />
                                </div>
                            </a>
                            <a href='#/'>
                                <div>
                                    <img src={apple} alt='' />
                                </div>
                            </a>
                            <a href='#/'>
                                <div>
                                    <img src={twitter} alt='' />
                                </div>
                            </a>
                        </div>

                        <div className='use-your-email-os'>
                            <div className='horizontal-line-os'></div>
                            <div className='email-text-os'></div>
                            <div className='horizontal-line-os'></div>
                        </div>

                        <div className='signup-input-fields-os'>
                            <div className='signup-label-os'>{props.label1}</div>
                            <input type={props.type1} placeholder={props.placeholder1} required />
                        </div>
                        <div className='signup-input-fields-os'>
                            <div className='signup-label-os'>{props.label2}</div>
                            <input type={props.type2} placeholder={props.placeholder2} required />
                        </div>

                        <div class="signup-checkbox-os">
                            <label class="container_checkbox">Remeber Me
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <a href='#/' className='signup-forget-password-os'>Forgot Password?</a>
                        </div>

                        <div className='signup-continue-btn-os'>
                            <button type='submit'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm;
