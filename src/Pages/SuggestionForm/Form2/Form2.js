import React from 'react'
import InputField from '../../Shared/InputField/InputField';
import './Form2.css';


const Form2 = () => {
    return (
        <section className='suggestion-section-os'>
            <div className='container-os'>
                <form className='suggestion-data-os'>
                    <div>
                        <InputField inputTitle='Name' inputRequired='*' inputType='text' placeholder='' />
                    </div>
                    <div>
                        <InputField inputTitle='Email' inputRequired='*' inputType='email' placeholder='' />
                    </div>
                    <div>
                        <InputField inputTitle='Mobile Number' inputRequired='*' inputType='number' placeholder='' />
                    </div>
                    <div>
                        <InputField inputTitle='What Features would you like added/modified?:' inputRequired='' inputType='text' placeholder='' />
                    </div>

                    <div className='suggestion-button-os'>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form2;
