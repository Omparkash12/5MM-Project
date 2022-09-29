import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {

    function myFunction() {
        const mobileToogle = document.getElementById("mobile-nav-os");
        mobileToogle.classList.toggle("mobile-nav-os-active");
        console.log("working1")
    }
    window.onload = function () {
        let element = document.getElementById("user-register-os");
        element.classList.add("user-register-os-active");
    }

    useEffect(() => {
        
    }, [])




    return (
        <>
            <section className='header-section-os'>
                <div className="container-os">
                    <div className="nav-data-os">
                        <div className="nav-brand-os">
                            <a href="/#"> <span>5</span>MM</a>
                        </div>

                        <div className="nav-links-os">
                            <a href="#/">FAQ</a>
                            <a href="#/">Leaderboard</a>
                            <div id='user-login-buttons-os' className="user-login-buttons-os">
                                <a id='user-login-os' className='user-login-os' href="#/">Login</a>
                                <a id='user-register-os' className='user-register-os' href="#/">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='header-section-mobile-os'>
                <div className="mobile-header-data-os">
                    <div className="nav-data-mobile-os">
                        <div onClick={myFunction} className="Toggle-mobile-button">
                            <div className='mobile-toggle-line-os-1'></div>
                            <div className='mobile-toggle-line-os-2'></div>
                            <div className='mobile-toggle-line-os-3'></div>
                        </div>
                        <ul id='mobile-nav-os' className="mobile-nav-os">
                            <li>
                                <div className="nav-brand-os">
                                    <a href="/#"> <span>5</span>MM</a>
                                </div>
                            </li>
                            <li><a href="#/">FAQ</a></li>
                            <li><a href="#/">Leaderboard</a></li>
                            <li><a href="#/">Login</a></li>
                            <li><a href="#/">Register</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
