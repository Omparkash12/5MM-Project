import React from 'react';
import './BecomeModeler.css';

const BecomeModeler = (props) => {



    return (
        <section className='become-modeler-section-os'>
            <div className='become-modeler-heading-os'>
                <div className='container-os'>
                    <h2>{props.heading}</h2>
                </div>
            </div>
            <div className='container-os'>
                <div className='become-modeler-data-os'>
                    <h3 style={props.subHeadingStyle}>{props.sub_heading}</h3>
                    <p style={props.paragrapStyle}>
                        {props.paragraph}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BecomeModeler;
