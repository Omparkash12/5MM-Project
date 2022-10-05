import React from 'react';
import './LeaderBoard.css';
import MainHeading from '../../Shared/MainHeading/MainHeading';
import LeaderCardArray from './LeaderCardArray';
import LeaderCard from './LeaderCard';

// Images
import heading_line from '../../../Images/heading-line.svg';

const LeaderBoard = () => {
    // get started button popup js starts   
    function showpopup1() {

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



    const heading_style = {
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#222D5F',
        fontSize: '41px',
        lineHight: '47px'
    }



    return (
        <section className="leader-board-section-os">
            <div className="container-os">
                <MainHeading heading_line={heading_line} heading_line_1={heading_line} heading_style={heading_style} mainHeadingText='Leaderboard This Month Table' />
                <div className="leader-board-data-os">



                    {
                        LeaderCardArray.map((value) => {
                            return (
                                <LeaderCard key={value.id}
                                    card_image={value.card_image}
                                    card_heading={value.card_heading}
                                    card_data_1={value.card_data_1}
                                    card_data_2={value.card_data_2}
                                    card_data_3={value.card_data_3}
                                    card_data_4={value.card_data_4}
                                    card_data_5={value.card_data_5}
                                    card_data_6={value.card_data_6}
                                    card_data_7={value.card_data_7}
                                    card_data_8={value.card_data_8}
                                    card_data_9={value.card_data_9}
                                    card_data_10={value.card_data_10}
                                    card_data_11={value.card_data_11}
                                />
                            )
                        })
                    }
                </div>
                <div className="get-started-today-btn-os">
                    <a onClick={showpopup1} href="#/">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                <path d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807612 15.9792 0.807612 15.3934 1.3934C14.8076 1.97918 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z" fill="#5AE1F9" />
                            </svg>
                        </span>
                        GET STARTED TODAY!
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LeaderBoard;
