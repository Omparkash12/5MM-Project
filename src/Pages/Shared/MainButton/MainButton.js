import React from 'react';
import './MainButton.css';
import {Link} from 'react-router-dom'

const MainButton = (props) => {
    return (
        <div className="main-button-os">
            <Link to={props.linkAddress} className='' style={props.ButtonStyle}>
                <div className='main-button-image-os'>
                    <img src={props.leftIcon} alt='' />
                </div>
                {props.buttonTitle}
            </Link>
        </div>
    )
}

export default MainButton;
