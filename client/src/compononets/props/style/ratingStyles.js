import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
`;
export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 16px;
        height: 16px;
        offset: 50%;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const ReviewMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 16px;
        height: 16px;
        opacity: 0.6;
        &:hover {
            opacity: 0.9;
            cursor: pointer;
        }
    }
    span {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        cursor: pointer;
        opacity: 0.7;
    }
`;
