import React from 'react';
import './Banner.css';
import MainHeading from '../../Shared/MainHeading/MainHeading';
import MainButton from '../../Shared/MainButton/MainButton';

const Banner = () => {
    const heading_style = {
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#1E2959',
        fontSize: '46px',
        lineHeight: '50px',
    }

    const buttonStyle = {
        maxWidth: '185px',
        width: '100%',
        height: '46px',
        display: 'flex',
        alignItems: 'center',
        // gap: '12px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#1E2959',
        background: '#E5FBFF',
        // boxShadow: '0px 1px 9px rgb(31 42 91 / 41%)',
        borderRadius: '5px',
        textDecoration: 'none',
        justifyContent: 'center',
        margin: '0 auto',
    }


    return (
        <section className='afterRegistration-banner-os'>
            <div className='container-os'>
                <div className='afterRegistration-data-os'>
                    {/* <h1>Over 2 million creators ready to work with you!</h1> */}
                    <div className='afterRegistration-data-heading-os'>
                        <MainHeading heading_line='' heading_style={heading_style} mainHeadingText='Over 2 million creators ready to work with you!' heading_line_1='' />
                    </div>
                    <div className='afterRegistration-data-button-os'>
                        <MainButton linkAddress='#/' ButtonStyle={buttonStyle} leftIcon='' buttonImageStyle='' buttonTitle='Get Started' />
                    </div>

                    <div className='afterRegistration-bannerGraph-os'>
                        <div className='afterRegistration-bannerGraph-data-os-1'>
                            <h3>1,320+</h3>
                            <p>No.of modelers</p>
                        </div>
                        <div className='afterRegistration-bannerGraph-data-os-1'>
                            <h3>$100,00+</h3>
                            <p>No.of Bettors</p>
                        </div>
                        <div className='afterRegistration-bannerGraph-data-os-1'>
                            <h3>3,00+</h3>
                            <p>Unique visitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
