import React from 'react';
import MainHeading from '../../Shared/MainHeading/MainHeading';
import './PowerInNumbers.css';

const PowerInNumbers = () => {
    const heading_style = {
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#FCFEFF',
        fontSize: '41px',
        lineHight: '47px'
    }


    return (
        <section className="powerInNumber-section-os">
            <div className="container-os">
                <div className="powerInNumber-data-os">
                    <MainHeading heading_line='' heading_line_1='' heading_style={heading_style} mainHeadingText='Power in numbers' />
                    <p>
                        <span>William Benter</span>, man who made 1 billion betting on horses, found when he combined his model with the public odds his model became even more accurate & profitable.
                    </p>
                    <h4>The purpose of the site is to combine the power of multiple winning models to create an even more reliable/powerful/profitable one. </h4>
                </div>
            </div>
        </section>
    )
}

export default PowerInNumbers
