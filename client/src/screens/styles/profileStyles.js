import styled from "styled-components/macro";

export const Wrapper = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
`
export const Inner = styled.div`
    position: relative;
    z-index: 110;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(253, 250, 246, 1);
    border-radius: 24px;
    .cross {
        position: absolute;
        background: transparent;
        border: none;
        outline: none;
        right: 28px;
        top: 0px;
        opacity: 0.8;
        svg {
            width: 56px;
        }
        &:hover {
            transform: scale(1.1);
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 0.94);
            cursor: pointer;
            opacity: 1;
        }
    }
`

export const DetailsWrapper = styled.div`

`;