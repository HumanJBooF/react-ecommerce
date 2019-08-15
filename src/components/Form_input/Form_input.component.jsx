import React from 'react';
// @styles
import { GroupContainer, FormInputContainer, FormInputLabel } from './Form_input.styles'

const FormInput = ({ handleChange, label, ...rest }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...rest} />
        {
            label
                ? (
                    <FormInputLabel className={rest.value.length ? 'shrink' : ''}>
                        {label}
                    </FormInputLabel>
                )
                : null
        }
    </GroupContainer>
);

export default FormInput;