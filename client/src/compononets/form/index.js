import React from 'react'
import PropTypes from "prop-types"
// styled-components
import { VariableWrapper, Wrapper, ErrorWrapper, CheckboxInput, TextAreaInput } from './styles/formStyles'

export default function Form({ children, onSubmit, buttonTag, isSubmitting }) {
    return (
        <Wrapper onSubmit={onSubmit}>
            {children}
            <button className="submit_button" type="submit" disabled={isSubmitting}>{buttonTag}</button>
        </Wrapper>
    )
}

Form.Variable = function FromVariable({ type, name, value, onChange, onBlur, label, isRequired = false }) {
    return (
        <VariableWrapper>
            {type === 'text' ? <input type="text" id={name} name={name} required={isRequired} autoComplete="off" spellCheck="false" value={value} onChange={onChange} onBlur={onBlur} /> : <input type="password" id={name} name={name} required={isRequired} value={value} onChange={onChange} onBlur={onBlur} autoComplete="true" />}
            <label htmlFor={name}>{label ? label : name}</label>
        </VariableWrapper>
    )
};

Form.CheckBox = function FormCheckBox({ name, label, value, checked, onChange }) {
    return (
        <CheckboxInput>
            <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange} />
            <label htmlFor={name}>{label ? label : name}</label>
        </CheckboxInput>
    )
};

Form.TextArea = function FormText({ name, value, placeholder, rows, cols, onChange }) {
    return (
        <TextAreaInput>
            <textarea id={name} placeholder={placeholder} name={name} value={value} rows={rows} cols={cols} onChange={onChange} />
        </TextAreaInput>
    )
};


Form.SelectInput = function FormSelectInput({ label, children, value, onChange }) {
    return (
        <VariableWrapper>
            <label>{label}</label>
            <select value={value} onChange={onChange}>
                {children}
            </select>
        </VariableWrapper>
    )
};


Form.Error = function FormError({ errorStatus }) {
    return (
        <ErrorWrapper>
            {errorStatus && <span>{errorStatus}</span>}
        </ErrorWrapper>
    )
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    buttonTag: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    errorStatus: PropTypes.string,
}
