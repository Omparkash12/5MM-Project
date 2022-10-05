import React from 'react';
import './SuggestionForm.css'
import BecomeModeler from '../../ApplicationForm/BecomeModeler/BecomeModeler'
import Form2 from '../Form2/Form2';

const SuggestionForm = () => {
    const subHeadingStyle = {
        fontFamily: 'Arimo',
        fontWeight: '400',
        paddingBottom: '0.5rem'
    }

    const paragrapStyle = {
        fontFamily: 'Roboto',
        fontWeight: '600',
        color: '#1E2959',
    }


    return (
        <div>
            <BecomeModeler heading='SUGGESTION FORM' sub_heading='How can we Imporve the Platform' paragraph='(The person that gives the best suggestion(s) each month will win $50.)' subHeadingStyle={subHeadingStyle} paragrapStyle={paragrapStyle} />
            <Form2 />
        </div>
    )
}

export default SuggestionForm;
