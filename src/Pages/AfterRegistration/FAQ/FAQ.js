import React from 'react';
import MainHeading from '../../Shared/MainHeading/MainHeading';
import './FAQ.css'

const FAQ = () => {
    const heading_style = {
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#fff',
        fontSize: '46px',
        lineHeight: '53px'
    }


    return (
        <section className='faq-section-os faq_section'>
            <div className='container-os'>
                <div className='faq-all-data-os'>
                    <MainHeading heading_line='' heading_line_1='' heading_style={heading_style} mainHeadingText='Frequently Asked Questions' />
                    <div className="faq_accordion faq-data-os">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item accordion-item-1">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item accordion-item-1">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item accordion-item-1">
                                <h2 className="accordion-header" id="heading_4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                        <div className="accordion" id="accordionExample1">
                            <div className="accordion-item accordion-item-2">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item accordion-item-2">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item accordion-item-2">
                                <h2 className="accordion-header" id="heading_7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </button>
                                </h2>
                                <div id="collapse_7" className="accordion-collapse collapse" aria-labelledby="heading_7" data-bs-parent="#accordionExample1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
