import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-section-os">
            <div className="container-os">
                <div className="footer-data-os">
                    <div className="footer-data-os-1">
                        <ul className="quick-links-os">
                            <li>Quick Links</li>
                            <li>
                                <a href="#/">About</a>
                            </li>
                            <li>
                                <a href="#/">Leaderboard</a>
                            </li>
                            <li>
                                <a href="#/">FAQ</a>
                            </li>
                            <li>
                                <a href="#/">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-data-os-2">
                        <h2>5MM</h2>
                        <p>Lorem Ipsum and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum and scrambled it to make a </p>
                    </div>

                    <div className="footer-data-os-1 footer-data-os-3">
                        <ul className="quick-links-os">
                            <li>Quick Links</li>
                            <li>
                                <a href="#/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#/">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#/">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright-os">
                <div className="container-os">
                    <div className="copyright-data">
                        Copyright © 2022, 5MM. all rights reserved.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
