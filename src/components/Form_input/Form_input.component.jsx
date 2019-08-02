import React from 'react';
import PropTypes from 'prop-types';
// @styles
import './Form_input.styles.scss';

const FormInput = ({ handleChange, label, ...rest }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...rest} />
        {
            label
                ? <label className={`${rest.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                : null
        }
    </div>
);

FormInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string,
}

export default FormInput;