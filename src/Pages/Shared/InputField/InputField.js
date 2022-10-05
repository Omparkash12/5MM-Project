import React from 'react';
import './InputField.css';

const InputField = (props) => {
    return (
        <div className='form-input-field-os'>
            <div className='input-field-label-os'>{props.inputTitle}<sup>{props.inputRequired}</sup></div>
            <input type={props.inputType} placeholder={props.placeholder} required />
        </div>
    )
}

export default InputField;
