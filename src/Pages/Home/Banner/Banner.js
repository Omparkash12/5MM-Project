import React from 'react';
import './Banner.css';

// Images
import bannerGif from '../../../Images/banner-gif.gif'

const Banner = () => {
    return (
        <section className='Banner-section-os'>
            <div className="banner-data-os">
                <img src={bannerGif} alt='' />
            </div>
        </section>
    )
}

export default Banner;
