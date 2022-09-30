import React from 'react';
import './Benefits.css';
import BenefitsArray from './BenefitsArray';
import MainHeading from '../../Shared/MainHeading/MainHeading';


// Images
import heading_line from '../../../Images/heading-line.svg';



const Benefits = () => {
    const heading_style = {
        color: '#1E2959',
        fontSize: '46px',
        lineHeight: '53px'
    }



    return (
        <section className='Benefits-section-os'>
            <div className='container-os'>
                <MainHeading heading_line={heading_line} heading_line_1={heading_line} heading_style={heading_style} mainHeadingText='Benefits' />
                <div className='benefits-data-os'>

                    {
                        BenefitsArray.map((values) => {
                            return (
                                <div className='benefits-data-os-1' key={values.id}>
                                    <div className='modular-heading-os'>
                                        <div className='heading-image-os'>
                                            <img src={values.headerImage} alt='' />
                                        </div>
                                        <div className='moduler-heading-os'>{values.headerTitle}</div>
                                    </div>
                                    <div className='moduler-content-os'>
                                        <div className='moduler-tick-image-os'>
                                            <img src={values.tickIcon_1} alt="" />                                            
                                        </div>
                                        <div className='moduler-tickWith-text-os'>
                                            {values.paragraph_2}
                                        </div>
                                    </div>

                                    <div className='moduler-content-os'>
                                        <div className='moduler-tick-image-os'>
                                            <img src={values.tickIcon_2} alt="" />                                            
                                        </div>
                                        <div className='moduler-tickWith-text-os'>
                                            {values.paragraph_2}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }





                    {/* <div className='benefits-data-os-1'>
                        <div className='modular-heading-os'>
                            <div className='heading-image-os'>
                                <img src={benifits_image_1} alt='' />
                            </div>
                            <div className='moduler-heading-os'>Benefits of Modelers</div>
                        </div>
                        <div className='moduler-content-os'>
                            <div className='moduler-tick-image-os'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="7" fill="#5AE1F9" />
                                    <path d="M11 20.5L19 26.5L29 13" stroke="#1E2959" strokeWidth="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='moduler-tickWith-text-os'>
                                Modelers are the backbone of the site that allow bettors with no experience modeling to easily come up with their own line in a few clicks. We understand how much work goes into creating a profitable model so to reward those for their hard work the Top 10 modelers each month make 50% of gross sales from the site + a $2 commission per month for each person that signs up using their model.
                            </div>
                        </div>

                        <div className='moduler-content-os'>
                            <div className='moduler-tick-image-os'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="7" fill="#5AE1F9" />
                                    <path d="M11 20.5L19 26.5L29 13" stroke="#1E2959" strokeWidth="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='moduler-tickWith-text-os'>
                                Modelers are the backbone of the site that allow bettors with no experience modeling to easily come up with their own line in a few clicks. We understand how much work goes into creating a profitable model so to reward those for their hard work the Top 10 modelers each month make 50% of gross sales from the site + a $2 commission per month for each person that signs up using their model.
                            </div>
                        </div>
                    </div>

                    <div className='benefits-data-os-1'>
                        <div className='modular-heading-os'>
                            <div className='heading-image-os'>
                                <img src={benifits_image_2} alt='' />
                            </div>
                            <div className='moduler-heading-os'>Benefits of Modelers</div>
                        </div>
                        <div className='moduler-content-os'>
                            <div className='moduler-tick-image-os'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="7" fill="#5AE1F9" />
                                    <path d="M11 20.5L19 26.5L29 13" stroke="#1E2959" strokeWidth="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='moduler-tickWith-text-os'>
                                Save hundreds of hours learning how to build a betting model & benefit from using the work of proven winning modelers to create create your own lines!
                            </div>
                        </div>

                        <div className='moduler-content-os'>
                            <div className='moduler-tick-image-os'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="7" fill="#5AE1F9" />
                                    <path d="M11 20.5L19 26.5L29 13" stroke="#1E2959" strokeWidth="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='moduler-tickWith-text-os'>
                                Save hundreds of hours learning how to build a betting model & benefit from using the work of proven winning modelers to create create your own lines!
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
