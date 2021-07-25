import styled from "styled-components/macro";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 16px;
        h3 {
            margin-top: -7px;
            font-size: 22px;
        }
`;

export const PostWrapper = styled.div`
    max-width: 480px;
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
    input {
        text-indent: 4px;
        font-size: 16px;
        height: 34px;
        border-radius: 4px;
        border: 1px solid black;
        outline: none;
    }
`;


export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    input {
        margin:  2px 6px 0 0;
    }
    span {
        margin: 0.5px 8px 0 0;
        font-weight: 500;
    }
`;
export const ImageWrapper = styled.div`
`;