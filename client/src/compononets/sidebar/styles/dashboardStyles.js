import styled from "styled-components/macro"

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    
    @media(max-width: 962px) {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 8px 0 0 -8px;
    padding: 8px;
    transition: all 0.25s;
    border-radius: 8px;
    svg {
        width: 24px;
        height: 24px;
        transition: all 0.2s;
    }
    a, span {
        margin-left: 6px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        transition: all 0.3s;
    }
    &:hover {
        cursor: pointer;
        background: rgba(220, 221, 225, 0.3);
        svg {
            stroke: rgba(0, 0, 0, 1);
        }
        a {
            color: rgba(0, 0, 0, 1);
        }
    }

    @media(max-width: 962px) {
        padding: 8px 20px;
        margin: 0 4px;
        background: rgba(244, 244, 246, 0.8);
        span {
            display: none;
        }
    }
    @media(max-width: 392px) {
        padding: 4px 12px;
        
    }
    @media(max-width: 364px) {
        padding: 4px 10px;
        margin-right: 5px;
        &:first-of-type {
            margin-left: 0;
        }
    }
`;