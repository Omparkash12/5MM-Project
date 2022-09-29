import React from 'react';
import './MainHeading.css';

const MainHeading = (props) => {
    return (
        <div className='main-heading-os'>
            <div>
                <img src={props.heading_line} alt="" />
            </div>
            <h1 style={props.heading_style}>{props.mainHeadingText}</h1>
            <div>
                <img src={props.heading_line_1} alt="" />
            </div>
        </div>


    )
}

export default MainHeading;