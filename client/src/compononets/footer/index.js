import React from 'react';
import styled from "styled-components/macro";
// logo
import { MyLogo } from '../../helpers/avatar';

const Wrapper = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    svg {
        width: 24px;
        height: 24px;
    }
    h3 {
        margin-left: 4px;
        font-size: 16px;
    }
`;

export default function Footer() {
    return (
        <Wrapper>
            <MyLogo />
            <span>
                © {new Date().getFullYear()}, Built by
            </span>
            <h3>firedev99</h3>
        </Wrapper>
    )
}
