import React from 'react';
import InputField from '../../Shared/InputField/InputField';
// import MainButton from '../../Shared/MainButton/MainButton';
import './RegisterForm.css';

// Images
// import registerIcon from '../../../Images/register-btn-icon.svg';

const RegisterForm = () => {
    // const buttonStyle = {
    //     maxWidth: '245px',
    //     width: '100%',
    //     height: '63px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: '12px',
    //     fontFamily: 'Roboto',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     fontSize: '24px',
    //     lineHeight: '28px',
    //     color: '#FAFEFE',
    //     background: '#1F2A5B',
    //     boxShadow: '0px 1px 9px rgb(31 42 91 / 41%)',
    //     borderRadius: '8px',
    //     textDecoration: 'none',
    //     justifyContent: 'center',
    //     margin: '0 auto',

    // }


    return (
        <section className='registerForm-section-os'>
            <div className='container-os'>
                <form className='registerForm-all-data-os'>
                    <div className='registerForm-data-os'>
                        <div>
                            <InputField inputTitle='Name' inputRequired='*' inputType='text' />
                        </div>
                        <div>
                            <InputField inputTitle='Types of Model' inputRequired='*' inputType='text' />
                        </div>
                        <div>
                            <InputField inputTitle='Email' inputRequired='*' inputType='email' />
                        </div>
                        <div>
                            <InputField inputTitle='Which sport does your model have the biggest edge in' inputRequired='*' inputType='text' />
                        </div>
                        <div>
                            <InputField inputTitle='Phone Number' inputRequired='*' inputType='number' />
                        </div>
                        <div>
                            <InputField inputTitle='Years of experience creating betting models' inputRequired='*' inputType='text' />
                        </div>
                        <div>
                            <InputField inputTitle='Sports You Have Created A Model For' inputRequired='*' inputType='text' />
                        </div>
                        <div>
                            <InputField inputTitle='Do you use Python, R, and/or Excel to create models?' inputRequired='*' inputType='text' />
                        </div>
                    </div>
                    <div className='register-button-os'>
                        {/* <MainButton linkAddress='#/' ButtonStyle={buttonStyle} leftIcon={registerIcon} buttonImageStyle='' buttonTitle='Register' /> */}
                        <button type=''>
                            <span>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4148 12.3658H5.45505C2.44714 12.3658 0 14.8812 0 17.973V21.2123H19.87V17.973C19.8699 14.8812 17.4227 12.3658 14.4148 12.3658ZM18.686 19.9954H1.18379V17.9731C1.18379 15.5523 3.09985 13.5828 5.45497 13.5828H14.4148C16.7699 13.5828 18.6859 15.5523 18.6859 17.9731L18.686 19.9954Z" fill="#FEFFFF" />
                                    <path d="M9.9345 11.7898C13.0967 11.7898 15.6694 9.14528 15.6694 5.89488C15.6694 2.64447 13.0968 0 9.9345 0C6.77222 0 4.19958 2.64439 4.19958 5.89488C4.19958 9.14536 6.7723 11.7898 9.9345 11.7898ZM9.9345 1.21689C12.444 1.21689 14.4855 3.31539 14.4855 5.89488C14.4855 8.47437 12.444 10.5729 9.9345 10.5729C7.42501 10.5729 5.38346 8.47429 5.38346 5.89488C5.38346 3.31547 7.42501 1.21689 9.9345 1.21689Z" fill="#FEFFFF" />
                                </svg>
                            </span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default RegisterForm;
