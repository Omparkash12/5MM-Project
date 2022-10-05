import React from 'react';
import './YourOwnBetting.css';
// Images
import YourOwnBettingImage from '../../../Images/YourOwnBetting-image.png';

const YourOwnBetting = () => {

    // get started button popup js starts   
    function showpopup() {

        const toggleRegisterButton3 = document.getElementsByClassName('registration-popup-section-os');
        for (const element of toggleRegisterButton3) {
            element.classList.add('user-register-os-registerForm-show');
        }
        const toggleRegisterButton4 = document.getElementsByClassName('registration-popup-section-os');
        for (const element of toggleRegisterButton4) {
            element.classList.remove('user-register-os-registerForm-hide');
        }
    }
    // get started button popup js ends
    
    return (
        <section className='YourOwnBetting-section-os'>
            <div className='container-os'>
                <div className='YourOwnBetting-data-os'>
                    <div className='YourOwnBetting-data-os-1'>
                        <h2>Create Your Own Betting Model in <span>5 Minutes!</span></h2>
                        <p>
                            No fluff or touts telling you all the reasons they think a team will win while they are using stats for their reasoning that don’t even result in wins. We got extremely tired of seeing this so five minute model is for the sports bettor who wants to make smart educated bets & hopefully come out ahead in the long term.
                        </p>
                        <a onClick={showpopup} href='#/' className="get-started-os">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                    <path d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807612 15.9792 0.807612 15.3934 1.3934C14.8076 1.97918 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z" fill="#5AE1F9" />
                                </svg>
                            </span>
                            GET STARTED
                        </a>
                    </div>
                    <div className='YourOwnBetting-data-os-2'>
                        <img src={YourOwnBettingImage} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourOwnBetting;
