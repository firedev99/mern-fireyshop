import styled from "styled-components/macro";

export const Wrapper = styled.form`
    /* padding: 24px; */
`;

export const CheckboxInput = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

export const TextAreaInput = styled.div`
    textarea {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        text-indent: 4px;
    }
`;

export const VariableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    input {
        transition: 100ms ease-in;
    }
    label {
        transition: 200ms ease-in; 
    }
`;
export const ErrorWrapper = styled.div`
    span {
        font-size: 14px;
        margin-left: 8px;
    }
`;